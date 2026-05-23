"use client";

import { useEffect } from "react";

export default function CoachFlipInit() {
  useEffect(() => {
    const coaches = Array.from(document.querySelectorAll<HTMLElement>(".coach"));
    const pairs = coaches.map(coach => {
      const onStart = (e: TouchEvent) => { e.preventDefault(); coach.classList.add("flipped"); };
      const onEnd = () => coach.classList.remove("flipped");
      coach.addEventListener("touchstart", onStart, { passive: false });
      coach.addEventListener("touchend", onEnd);
      coach.addEventListener("touchcancel", onEnd);
      return { coach, onStart, onEnd };
    });

    return () => {
      pairs.forEach(({ coach, onStart, onEnd }) => {
        coach.removeEventListener("touchstart", onStart);
        coach.removeEventListener("touchend", onEnd);
        coach.removeEventListener("touchcancel", onEnd);
      });
    };
  }, []);

  return null;
}
