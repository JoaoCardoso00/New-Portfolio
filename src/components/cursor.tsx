"use client";

import { MouseEvent } from "react";
import { animated, useSpring } from "@react-spring/web";
import useMeasure from "react-use-measure";
import Rive from "@rive-app/react-canvas";

export function CustomCursor({ children }: { children: React.ReactNode }) {
  const [ref, { left, top }] = useMeasure();
  const [springs, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: {
      mass: 1,
      tension: 500,
      friction: 50,
    },
  }));

  const handleMouseMove = (e: MouseEvent) => {
    api.start({
      x: e.clientX - 75 - left,
      y: e.clientY - 75 - top,
    });
  };

  return (
    <div
      className="h-full w-full absolute bg-transparent overflow-hidden cursor-none"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      <animated.div
        style={springs}
        className="h-60 w-60 absolute z-50 pointer-events-none"
      >
        <Rive
          src="/custom_cursor.riv"
          className="-translate-x-10 -translate-y-8"
        />
      </animated.div>
      {children}
    </div>
  );
}
