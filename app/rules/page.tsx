const page = () => {
  return (
    <>
      {/* subtract navbar height (80px) to prevent overflow  */}
      <div className="flex items-center justify-center h-[calc(100vh-80px)] w-screen">
        <div className="bg-gray-800 w-9/12 text-center">
          <h2 className="text-center p-2 text-orange-400 font-semibold text-3xl">Rules</h2>
          <div>
            <ol className="p-2 list-decimal list-inside">
              <li className="pt-0 p-2">
                They can move to an adjacent free position along the lines.
              </li>
              <li className="p-2">
                They can capture goats during any move, and do not need to wait
                until all goats are placed.
              </li>
              <li className="p-2">They can capture only one goat at a time.</li>
              <li className="p-2">
                They can jump over a goat in any direction, as long as there is
                an open space for the tiger to complete its turn.
              </li>
              <li className="p-2">A tiger cannot jump over another tiger.</li>
              <li className="p-2"></li>

              <li className="p-2">
                Goats cannot move until all goats have been positioned on the
                board.{" "}
              </li>
              <li className="p-2">They must leave the board when captured.</li>
              <li className="p-2">
                They cannot jump over tigers or other goats.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
