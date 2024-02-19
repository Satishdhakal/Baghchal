"use client";
import { Roboto_Condensed } from "next/font/google";
import { useRef, useEffect, useState } from "react";
const roboto = Roboto_Condensed({ subsets: ["latin"] });
import { Game } from "./baghchal/game";
import Canvas from "@/components/game";
import { GameProvider } from "./context/gameContex";
import Intro from "@/components/Intro";


export default function Home() {
  const [toggleGame, setToggleGame] = useState(false);
  const getdata =(data:any)=>{
    setToggleGame(data);
  }
  return (
    <>
      { !toggleGame &&
        <Intro onsubmit={getdata}/>
      }

      { toggleGame &&
      <main className="flex h-screen flex-col items-center justify-between p-24 bg-slate-950">
        <div className={roboto.className}>
          <GameProvider>
            <Canvas />
          </GameProvider>
        </div>
      </main>
      }
    </>
  );
}
