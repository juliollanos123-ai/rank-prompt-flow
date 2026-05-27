import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function update() {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setWidth(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 z-50 h-0.5 bg-prompt transition-[width] duration-75 ease-linear"
      style={{ width: `${width}%` }}
    />
  );
}
