const page = () => {
  //left to make it mobile responsive
  return (
    <>
      <div>
        <h2 className="text-center p-2 text-orange-400 font-semibold text-3xl">
          RULES
        </h2>
      </div>
      <br />
      <div className="float-right mr-20">
        <h1 className="text-2xl text-orange-400">HOW TO PLAY</h1>
        <br></br>
        <h2 className="text-2xl">
          <strong>Game Components:</strong>
        </h2>
        <ul>
          <li>- 4 Tigers and 20 Goats.</li>
          <li>
            - Tigers can jump over goats if there's an empty place following the
            goat <br />
            in a straight line.
          </li>
        </ul>
        <br></br>

        <h2 className="text-2xl">
          <strong>Objective:</strong>
        </h2>
        <ul>
          <li>- Tigers win by eating at least 9 goats via jumping.</li>
          <li>- Goats win by trapping all four Tigers.</li>
        </ul>
        <br></br>

        <h2 className="text-2xl">
          <strong>Gameplay Phases:</strong>
        </h2>
        <ul>
          <li>
            - First Phase: Goats are placed on the board, and Tigers are moved.
          </li>
          <li>- Second Phase: Both Goats and Tigers are moved.</li>
        </ul>
        <br></br>

        <h2 className="text-2xl">
          <strong>Winning Conditions:</strong>
        </h2>
        <ul>
          <li>- Tigers: Capture at least 9 goats.</li>
          <li>- Goats: Trap all four Tigers.</li>
        </ul>
        <br></br>
      </div>

      <div className="ml-40">
        <h1 className="text-2xl text-orange-400">ABOUT</h1>
        <br></br>
        <h2 className="text-2xl">
          <strong>Game Overview:</strong>
        </h2>

        <ul>
          <li>- Also known as Tiger and Goat game.</li>
          <li>- Originated in Nepal, created by Mandhodari, wife of Ravan.</li>
          <li>- Played on a five by five point grid.</li>
        </ul>
        <br></br>

        <h2 className="text-2xl">
          <strong>Historical Connection:</strong>
        </h2>
        <ul>
          <li>
            - Mandhodari, highly intelligent and wife of Ravan, is credited with
            creating the game.
          </li>
          <li>- Mandhodari played the game alone in her palace in Lanka.</li>
        </ul>
        <br></br>

        <h2 className="text-2xl">
          <strong>Similarities to Other Games:</strong>
        </h2>
        <ul>
          <li>
            - Similar to the Indian game Aadu puli attam (goat-tiger game) with
            different boards but same rules.
          </li>
          <li>
            - Game played on a grid like alquerque, an ancestor of draughts or
            checkers.
          </li>
        </ul>
        <br></br>
      </div>
    </>
  );
};

export default page;
