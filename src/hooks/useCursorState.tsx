"use client";

import { createContext, useContext } from "react";

type CursorState = {
  isHoveringClickableArea: boolean;
  setIsHoveringClickableArea: (isHoveringClickableArea: boolean) => void;
};

type CursorStateProviderProps = {
  children: React.ReactNode;
  cursorState: CursorState;
};

export const CursorStateContext = createContext<CursorState>({} as CursorState);

export function CursorStateProvider({
  children,
  cursorState,
}: CursorStateProviderProps) {
  return (
    <CursorStateContext.Provider value={cursorState}>
      {children}
    </CursorStateContext.Provider>
  );
}

export function useCursorState() {
  const context = useContext(CursorStateContext);
  if (context === undefined) {
    throw new Error("useCursorState must be used within a CursorStateProvider");
  }
  return context;
}
