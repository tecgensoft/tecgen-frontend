/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useRef, useState } from "react";

function useMouse(ref: React.RefObject<HTMLElement | null>) {
  const [mouse, setMouse] = useState<{
    x: number;
    y: number;
    isActive: boolean;
  }>({ x: 0, y: 0, isActive: false });
  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = currentRef?.getBoundingClientRect();
        if (rect) {
          setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            isActive: true,
          });
        }
      };
      const handleMouseOut = () => {
        setMouse((prevMouse) => ({
          ...prevMouse,
          x: 0,
          y: 0,
          isActive: false,
        }));
      };

      currentRef?.addEventListener("mousemove", handleMouseMove);
      currentRef?.addEventListener("mouseout", handleMouseOut);
      return () => {
        currentRef?.removeEventListener("mousemove", handleMouseMove);
        currentRef?.removeEventListener("mouseout", handleMouseOut);
      };
    }
    return () => {};
  });
  return mouse;
}

export function useMouseOverZoom(
  source: React.RefObject<HTMLImageElement>,
  target: React.RefObject<HTMLCanvasElement>,
  cursor: React.RefObject<HTMLElement>,
  radius = 25
) {
  const { x, y, isActive } = useMouse(source);
  // Compute the part of the image to zoom based on mouse position
  const zoomBounds = useMemo(() => {
    return {
      left: x - radius,
      top: y - radius,
      width: radius * 10,
      height: radius * 10,
    };
  }, [radius, x, y]);
  // move the cursor to the mouse position
  useEffect(() => {
    if (cursor.current) {
      const { left, top, width, height } = zoomBounds;
      const updatedCursor = { ...cursor.current.style };
      updatedCursor.left = `${left}px`;
      updatedCursor.top = `${top}px`;
      updatedCursor.width = `${width}px`;
      updatedCursor.height = `${height}px`;
      // updatedCursor.display = isActive ? "block" : "none";
    }
  }, [cursor, zoomBounds, isActive]);
  // draw the zoomed image on the canvas
  useEffect(() => {
    if (source.current && target.current) {
      const ctx = target.current.getContext("2d");
      if (ctx) {
        if (isActive) {
          const { left, top, width, height } = zoomBounds;
          const imageRatio = source.current.naturalWidth / source.current.width;
          ctx.drawImage(
            source.current,
            left * imageRatio,
            top * imageRatio,
            width * imageRatio,
            height * imageRatio,
            0,
            0,
            target.current.width,
            target.current.height
          );
        } else {
          // clear canvas
          ctx.clearRect(0, 0, target.current.width, target.current.height);
        }
      }
    }
  }, [zoomBounds, isActive, source, target]);
  return null;
}

export function useMouseClick() {
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
