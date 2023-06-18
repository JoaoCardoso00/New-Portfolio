"use client";

import { useCursorState } from "@/hooks/useCursorState";

export function Link({ children }: { children: React.ReactNode }) {
  const { setIsHoveringClickableArea } = useCursorState();

  return (
    <h2
      className="text-black text-6xl"
      onMouseEnter={() => setIsHoveringClickableArea(true)}
      onMouseLeave={() => setIsHoveringClickableArea(false)}
    >
      {children}
    </h2>
  );
}
