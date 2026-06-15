import { useEffect, useState } from "react";

export function TypingText({ words, className = "" }: { words: string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    if (!deleting && sub === current) {
      const t = setTimeout(() => setDeleting(true), 1500);
      return () => clearTimeout(t);
    }
    if (deleting && sub === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setSub((s) => deleting ? current.substring(0, s.length - 1) : current.substring(0, s.length + 1));
    }, deleting ? 40 : 90);
    return () => clearTimeout(t);
  }, [sub, deleting, index, words]);

  return (
    <span className={className}>
      <span className="bg-pink-soft text-pink px-3 py-1 rounded-lg inline-block">
        {sub}
        <span className="inline-block w-0.5 h-[0.9em] bg-pink ml-0.5 align-middle animate-pulse" />
      </span>
    </span>
  );
}
