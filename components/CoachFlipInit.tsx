"use client";

import { useEffect } from "react";

export default function CoachFlipInit() {
  useEffect(() => {
    const coaches = Array.from(document.querySelectorAll<HTMLElement>(".coach"));
    const pairs = coaches.map(coach => {
      let startY = 0;
      let scrolling = false;

      const onStart = (e: TouchEvent) => {
        startY = e.touches[0].clientY;
        scrolling = false;
        coach.classList.add("flipped");
      };
      const onMove = (e: TouchEvent) => {
        if (!scrolling && Math.abs(e.touches[0].clientY - startY) > 8) {
          scrolling = true;
          coach.classList.remove("flipped");
        }
      };
      const onEnd = () => coach.classList.remove("flipped");

      coach.addEventListener("touchstart", onStart, { passive: true });
      coach.addEventListener("touchmove", onMove, { passive: true });
      coach.addEventListener("touchend", onEnd);
      coach.addEventListener("touchcancel", onEnd);
      return { coach, onStart, onMove, onEnd };
    });

    return () => {
      pairs.forEach(({ coach, onStart, onMove, onEnd }) => {
        coach.removeEventListener("touchstart", onStart);
        coach.removeEventListener("touchmove", onMove);
        coach.removeEventListener("touchend", onEnd);
        coach.removeEventListener("touchcancel", onEnd);
      });
    };
  }, []);

  return null;
}
