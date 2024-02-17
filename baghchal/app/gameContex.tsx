import { ReactNode, createContext, useState } from "react";

type Props = {
  highlightElems: Array<any>;
  handleClick: () => void;
};

const defaultProps = { 
    highlightElems: [],
    handleClick: () => {}
} as Props

export const GameContext = createContext(defaultProps);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [highlightElems, setHighlightElems] = useState([[], [], []]);

  function handleClick() {
    console.log("HOLD ON 🤚");
  }

  return (
    <GameContext.Provider
      value={{
        highlightElems,
        handleClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
