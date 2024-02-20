import React, { useContext } from "react";
import { GameContext } from "@/app/context/gameContex";
import { paths } from "@/lib/path";

// Main game element
const Canvas = () => {
  const { handleNewGame, handleClick, statusArr, highlightElems, isPlaying } =
    useContext(GameContext);

  // Destructure highlightElems
  let [highlightPaths, highlightNodes, endangeredNodes] = highlightElems;

  // Define types for nodes and paths
  let nodes: number[] = Array.from(Array(25).keys());

  // Extract focusableNodes from statusArr
  let focusableNodes: number[] = [];
  if (Array.isArray(statusArr[0]) && "pos" in statusArr[0]) {
    focusableNodes = statusArr[0]["pos"];
  } else if (Array.isArray(statusArr[1]) && "pos" in statusArr[1]) {
    focusableNodes = statusArr[1]["pos"];
  }

  return (
    <>
      <main className="flex flex-row flex-wrap gap-8 items-center">
        <div className="game-container">
          <div className="game-container-inner">
            {nodes.map((node) => {
              let className = `Node Node-${String(node)}`;

              if (highlightNodes.includes(node)) {
                className = `Node Node-${String(
                  node
                )} highlight-safe pointer-cursor`;
              }

              if (focusableNodes.includes(node)) {
                className = `Node Node-${String(
                  node
                )} highlight-safe pointer-cursor`;
              }

              if (endangeredNodes.includes(node)) {
                className = `Node Node-${String(node)} highlight-danger`;
              }

              return (
                <div
                  className={className}
                  key={node}
                  onClick={() => {
                    handleClick(node);
                  }}
                ></div>
              );
            })}

            {paths.map((path: any) => {
              let className = `Path Path-${String(path)}`;

              if (highlightPaths.includes(path)) {
                className = `${className} highlight-safe`;
              }

              return <div className={className} key={path}></div>;
            })}
          </div>
        </div>

        <div className="menu">
          <button
            className="middle none center mb-4 rounded-lg bg-orange-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-slate transition-all hover:bg-orange-300  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            onClick={() => handleNewGame()}
          >
            { isPlaying? "Retry" : "New Game!"}
          </button>
          {
            isPlaying &&
            <div>
              <div className="text-center">
                <h3 className="text-5xl">Turn</h3>
                {/* Determine the turn based on statusArr */}
                {statusArr[2] ? <p>GOAT</p> : <p>TIGER</p>}
              </div>
            </div>
          }
        </div>
      </main>
    </>
  );
};

export default Canvas;
