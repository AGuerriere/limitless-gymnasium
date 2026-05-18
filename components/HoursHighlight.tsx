"use client";

import { useEffect } from "react";

export default function HoursHighlight() {
  useEffect(() => {
    const today = new Date().getDay();
    const row = document.querySelector<HTMLElement>(
      `.hours-list .row[data-day="${today}"]`
    );
    if (row) row.classList.add("today");
  }, []);

  return null;
}
