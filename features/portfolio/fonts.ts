import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-serif" });
export const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const fontVars = `${inter.variable} ${serif.variable} ${mono.variable}`;
