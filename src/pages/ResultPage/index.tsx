import { TwitterLogo } from "phosphor-react";
import { levels } from "../../Data/levels";
import { Container } from "./styles";

import ReactLogoIMG from "../../assets/react-js.svg";

interface ResultPageProps {
  score: number;
}

const getLevel = (score: number) => {
  return levels.find(
    (level) => score >= level.scoreRange[0] && score <= level.scoreRange[1]
  );
};

export function ResultPage({ score }: ResultPageProps) {
  const level = getLevel(score);

  function shareTwitter() {
    const url = encodeURIComponent(
      `https://quizz-react-typescript.vercel.app/results/${level}/${score}}`
    );
    window.open(`https://twitter.com/share?url=${url}`);
  }

  return (
    <>      
      <Container>
        <header id="resultPage">
          <img src={ReactLogoIMG} alt="" />
          <h2>Seu nível é: {level?.level}</h2>
          <span>Você marcou {score} pontos!</span>
          <p>{level?.description}</p>
        </header>
        <footer>
          <button onClick={shareTwitter}>
            <TwitterLogo />
          </button>
        </footer>
      </Container>
    </>
  );
}
