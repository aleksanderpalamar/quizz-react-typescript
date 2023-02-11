import { Key, useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/context";
import { questions } from "../../Data/questions";

import { ResultPage } from "../../pages/ResultPage";
import { Container, Progress, ProgressBar, QuizContainer } from "./styles";

export default function QuizApp() {
  const { texts } = useContext(LanguageContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);

  function formatTime(timeInSeconds: number) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  let intervalId: NodeJS.Timeout | undefined;

  useEffect(() => {
    if (currentQuestion < questions.length) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 0) {
            clearInterval(intervalId!);
            setCurrentQuestion(currentQuestion + 5);
            return 300;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [currentQuestion]);

  function handleOptionClick(option: string) {
    const options = questions[currentQuestion].options as string[];

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setTimeLeft(300);
  }

  return (
    <>
      {currentQuestion < questions.length ? (
        <Container>
          <ProgressBar>
            <Progress value={currentQuestion + 1} max={questions.length} />
            <div>
              <p>
                {texts.question} {currentQuestion + 1} de {questions.length}
              </p>
              <p>
                {texts.timeLeft} <span>{formatTime(timeLeft)}</span>
              </p>
            </div>
          </ProgressBar>
          <QuizContainer>
            <p>{texts.body.question[currentQuestion].question}</p>
            {questions[currentQuestion].code && (
              <pre>
                <code>{questions[currentQuestion].code}</code>
              </pre>
            )}
            <div>
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleOptionClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </QuizContainer>
        </Container>
      ) : (
        <ResultPage score={score} />
      )}
    </>
  );
}
