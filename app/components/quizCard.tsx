"use client";
import { useState } from "react";
import Qbtn from "./buttons/quizbtn";

type quizCardType = {
  Question: string;
  CorrectAns: number;
  Answers: string[];
};

export default function QuizCard({
  Question,
  Answers,
  CorrectAns,
}: quizCardType) {
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [answerChecked, setAnswerChecked] = useState(false);
  return (
    <div className="container mx-auto bg-white  rounded-2xl p-6 py-20   transition-transform transform ">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        {Question}
      </h3>
      <div className="grid gap-8">
        {Answers.map((answer: string, key: number) => (
          <Qbtn
            key={key}
            option={answer}
            correctAnswer={CorrectAns}
            index={key}
            selectedAnswer={selectedAnswer}
            answerChecked={answerChecked}
            setSelectedAnswer={setAnswerChecked}
          />
        ))}
      </div>
    </div>
  );
}
