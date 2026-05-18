"use client";

export default function YearStamp() {
  return <span>{new Date().getFullYear()}</span>;
}
