"use client";

import { MouseEvent, useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { CursorStateProvider } from "@/hooks/useCursorState";
import useMeasure from "react-use-measure";
import { useWindowScroll } from "react-use";

export function CustomCursor({ children }: { children: React.ReactNode }) {
  const [ref, { left, top }] = useMeasure();
  const [previousMousePosition, setPreviousMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const { y } = useWindowScroll();
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
    setPreviousMousePosition({
      x: e.clientX,
      y: e.clientY,
    });

    api.start({
      x: e.clientX - 75 - left,
      y: e.clientY - 75 - top + y,
    });
  };

  const { rive, RiveComponent } = useRive({
    src: "/custom_cursor.riv",
    stateMachines: "hover",
    autoplay: true,
  });

  const stateMachineInput = useStateMachineInput(
    rive,
    "hover",
    "IsHoveringClickableArea"
  );

  function setCursorState(state: boolean) {
    if (stateMachineInput) {
      stateMachineInput.value = state;
    }
  }

  const CursorState = {
    isHoveringClickableArea: !!stateMachineInput?.value,
    setIsHoveringClickableArea: setCursorState,
  };

  useEffect(() => {
    api.start({
      x: previousMousePosition.x - 75 - left,
      y: previousMousePosition.y - 75 - top + y,
    });
  }, [y]);

  return (
    <div
      className="h-fit w-full min-h-full absolute bg-red-50 overflow-hidden"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      <animated.div
        style={springs}
        className="h-60 w-60 absolute z-50 pointer-events-none"
      >
        <RiveComponent className="-translate-x-10 -translate-y-8 h-60" />
      </animated.div>
      <CursorStateProvider cursorState={CursorState}>
        {children}
      </CursorStateProvider>
    </div>
  );
}
