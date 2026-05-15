export function Eyebrow({ children, tone = "ink" }: { children: React.ReactNode; tone?: "ink" | "canvas" | "prompt" }) {
  const colors = {
    ink: "text-ink/60",
    canvas: "text-canvas/70",
    prompt: "text-prompt",
  } as const;
  return (
    <div className={`flex items-center gap-3 font-display text-xs tracking-[0.25em] ${colors[tone]}`}>
      <span className="inline-block h-px w-8 bg-current" />
      {children}
    </div>
  );
}
