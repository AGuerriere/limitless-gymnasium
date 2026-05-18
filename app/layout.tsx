import type { Metadata } from "next";
import { Manrope, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import RevealInit from "@/components/RevealInit";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Limitless Gymnasium — Ballycastle",
  description:
    "Independent, locally owned gym in Ballycastle, Co. Antrim. Serious equipment, qualified staff, and no distractions — just work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${archivo.variable} ${jetbrains.variable}`}>
      <body>
        <RevealInit />
        {children}
      </body>
    </html>
  );
}
