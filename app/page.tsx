"use client";
import { Roboto_Condensed } from "next/font/google";
import { useRef, useEffect } from "react";
const roboto = Roboto_Condensed({ subsets: ["latin"] });
import { Game } from "./baghchal/game";
import Canvas from "@/components/game";
import { GameProvider } from "./gameContex";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={roboto.className}>
        <h1 className="text-center text-3xl">BAGHCHAL</h1>
        <GameProvider>
            <Canvas />
        </GameProvider>
      </div>
    </main>
  );
}
