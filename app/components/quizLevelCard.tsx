import React from "react";
import Pbtn from "./buttons/primarybtn";

type QuizLevelCardTypes = {
  levelName: string;
  levelLink: string;
  levelNumber: number;
  currentLevel: number;
};

function QuizLevelCard({
  levelName,
  levelLink,
  levelNumber,
  currentLevel,
}: QuizLevelCardTypes) {
  return (
    <div
      className={`levelContainer rounded-lg p-6 border-b-4 border-2   w-1/2 duration-300  even:ml-auto
                  first:bg-[#191A23] first:card-bounce ease-linear  first:text-white  first:border-[#17171a] first:border-b-[#17171a] `}
    >
      <div className="flex gap-4">
        <div className="flex items-center justify-center bg-blue-400 border-blue-400 text-[#191A23] w-8 h-8 rounded-full border-2 mb-4">
          <p className="font-bold">{levelNumber}</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">{levelName}</h3>
          <p className="text mb-4">Number of Questions: 10</p>
        </div>
      </div>

      <div className="pt-4 place-items-end">
        <Pbtn
          toDestination={levelLink}
          theme={levelNumber == currentLevel ? "light" : "dark"}
          message="Start Quiz"
        />
      </div>
    </div>
  );
}

export default QuizLevelCard;
