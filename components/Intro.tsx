import React, { useState } from 'react';
import Image from "next/image"

const Intro = (props:any) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handlePlayerClick = (buttonName:any) => {
    setSelectedPlayer(buttonName); //to change the background color of button when clicked
  };

  const handleAnimalClick = (buttonName:any) => {
    setSelectedAnimal(buttonName); //to change the background color of button when clicked
  };

  return (
    <div className="bg-slate-800 w-1/3 m-auto rounded-xl text-slate-200">
      <h1 className="text-center mt-20 text-2xl pt-5">CHOOSE YOUR OPTIONS</h1>
      <br />
      <div className="">
        <button
          className={`border border-slate-500 h-32 w-1/2 hover:bg-slate-200 hover:text-slate-800 duration-100 ${
            selectedPlayer === 'singleplayer' ? 'bg-slate-200 text-slate-800' : ''
          }`}
          onClick={() => handlePlayerClick('singleplayer')}
        >
          <Image
          src="/single.png"
          width={60}
          height={60}
          alt="singleplayer"
          className="m-auto"
        />
        </button>
        <button
          className={`border border-slate-500 float-right h-32 w-1/2 hover:bg-slate-200 hover:text-slate-800 duration-100 ${
            selectedPlayer === 'multiplayer' ? 'bg-slate-200 text-slate-800' : ''
          }`}
          onClick={() => handlePlayerClick('multiplayer')}
        >
          <Image
          src="/multiplayer.png"
          width={60}
          height={60}
          alt="Multiplayer"
          className="m-auto"
        />
        </button>
      </div>
      <div className="">
        <button
          className={`border border-slate-500 h-32 w-1/2 hover:bg-slate-200 hover:text-slate-800 duration-100 ${
            selectedAnimal === 'tiger' ? 'bg-slate-200 text-slate-800' : ''
          }`}
          onClick={() => handleAnimalClick('tiger')}
        >
          <Image
          src="/tiger-logo.png"
          width={60}
          height={60}
          alt="tiger"
          className="m-auto"
        />
        </button>
        <button
          className={`border border-slate-500 float-right h-32 w-1/2 hover:bg-slate-200 hover:text-slate-800 duration-100 ${
            selectedAnimal === 'goat' ? 'bg-slate-200 text-slate-800' : ''
          }`}
          onClick={() => handleAnimalClick('goat')}
        >
          <Image
          src="/goat.png"
          width={60}
          height={60}
          alt="goat"
          className="m-auto"
        />
        </button>
      </div>
      <button className="border border-slate-500 h-20 w-full bg-orange-400 text-slate-800 hover:bg-orange-300 duration-100" onClick={()=>props.onsubmit(true)}>Submit</button>
    </div>
  );
};

export default Intro;
