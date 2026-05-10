"use client";

import { useEffect } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, summary, [role="button"], [data-cursor="interactive"]';

export function CustomCursor() {
  useEffect(() => {
    const supportsCursor =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsCursor) {
      return;
    }

    const dot = document.createElement("div");
    const ring = document.createElement("div");

    dot.className = "custom-cursor-dot";
    ring.className = "custom-cursor-ring";

    document.body.append(dot, ring);
    document.body.classList.add("has-custom-cursor");

    let dotX = window.innerWidth / 2;
    let dotY = window.innerHeight / 2;
    let ringX = dotX;
    let ringY = dotY;
    let pointerVisible = false;
    let interactive = false;
    let frameId = 0;

    const render = () => {
      ringX += (dotX - ringX) * 0.16;
      ringY += (dotY - ringY) * 0.16;

      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      frameId = window.requestAnimationFrame(render);
    };

    const show = () => {
      if (pointerVisible) {
        return;
      }

      pointerVisible = true;
      dot.dataset.visible = "true";
      ring.dataset.visible = "true";
    };

    const hide = () => {
      pointerVisible = false;
      dot.dataset.visible = "false";
      ring.dataset.visible = "false";
    };

    const handlePointerMove = (event: PointerEvent) => {
      dotX = event.clientX;
      dotY = event.clientY;
      show();
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof HTMLElement)) {
        interactive = false;
        return;
      }

      interactive = Boolean(target.closest(INTERACTIVE_SELECTOR));
      dot.dataset.interactive = String(interactive);
      ring.dataset.interactive = String(interactive);
    };

    const handlePointerLeave = () => {
      interactive = false;
      hide();
    };

    frameId = window.requestAnimationFrame(render);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
      document.body.classList.remove("has-custom-cursor");
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
