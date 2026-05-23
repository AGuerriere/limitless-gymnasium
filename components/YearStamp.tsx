"use client";

export default function YearStamp() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
