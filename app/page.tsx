"use client";
import { Roboto_Condensed } from "next/font/google";
import { useRef, useEffect } from "react";
const roboto = Roboto_Condensed({ subsets: ["latin"] });
import { Game } from "./baghchal/game";
import Canvas from "@/components/game";
import { GameProvider } from "./gameContex";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-950">
        <div className={roboto.className}>
          <GameProvider>
            <Canvas />
          </GameProvider>
        </div>
      </main>
    </>
  );
}
