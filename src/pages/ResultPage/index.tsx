import { LinkedinLogo, TwitterLogo } from "phosphor-react";
import { levels } from "../../Data/levels";
import { Container } from "./styles";

import ReactLogoIMG from "../../assets/react-js.svg";
import { Separator } from "../../components/Separator";

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
    const url = `https://twitter.com/share?url=https://quizz-react-typescript.vercel.app/&text=Eu fiz o quiz do React e meu nível é ${level?.level} com ${score} pontos! E você, qual é o seu nível? &hashtags=react,reactjs,typescript`;
    window.open(url, "_blank");
  }

  function shareLinkedin() {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=https://quizz-react-typescript.vercel.app/&title=Eu fiz o quiz do React e meu nível é ${level?.level} com ${score} pontos! E você, qual é o seu nível?`;
    window.open(url, "_blank");
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
        <Separator />              
        <footer>
          <button onClick={shareTwitter}>
            <TwitterLogo />
          </button>
          <button onClick={shareLinkedin}>
            <LinkedinLogo />
          </button>
        </footer>
      </Container>
    </>
  );
}
