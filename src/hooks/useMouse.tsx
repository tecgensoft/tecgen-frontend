/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

export function useMouse() {
  const reference = useRef<any>(null);
  const [open, setOpen] = useState<boolean | number | null>(false);
  const handleClickOutSide = (event: MouseEvent) => {
    if (
      reference.current &&
      !reference.current.contains(event.target as Node) &&
      !(event.target instanceof HTMLButtonElement)
    ) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [reference]);
  return { open, setOpen, reference };
}
