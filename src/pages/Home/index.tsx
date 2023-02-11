import { ArrowRight, ListBullets, Timer } from "phosphor-react";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import QuizApp from "../../app/QuizApp";
import { HomeContainer } from "./styles";

import ReactLogoIMG from "../../assets/react-js.svg";
import { Footer } from "../../components/Footer";
import { LanguageContext } from "../../context/context";

export default function Home() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { texts } = useContext(LanguageContext);
  const [startQuiz, setStartQuiz] = useState(false);

  if (startQuiz) {
    return <QuizApp />;
  }

  return (
    <>
      <Helmet>
        <title>
          Teste os seus conhecimentos sobre react e typescript | Quizz
        </title>
        <meta name="description" content="Quiz sobre React e Typescript" />
        <meta property="og:title" content="Quiz sobre React e Typescript" />
        <meta
          property="og:description"
          content="Quiz sobre React e Typescript"
        />
        <meta property="og:image" content="/image.png" />
        <meta
          property="og:url"
          content="https://quizz-react-typescript.vercel.app/"
        />

        <meta
          property="twitter:title"
          content="Quiz sobre React e Typescript"
        />
        <meta
          property="twitter:description"
          content="Quiz sobre React e Typescript"
        />
        <meta property="twitter:image" content="/image.png" />
        <meta property="twitter:card" content="summary_large_image" />

        <link
          rel="canonical"
          href="https://quizz-react-typescript.vercel.app/"
        />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Aleksander Palamar" />
        <meta name="keywords" content="react, typescript" />
      </Helmet>
      <HomeContainer>
        <img src={ReactLogoIMG} alt="" />
        <h1>{texts.header}</h1>
        <div>
          <span>
            <Timer />
            10 - 40min
          </span>{" "}
          |
          <span>
            <ListBullets />
            38 {texts.question}
          </span>
          <div className="footer">            
            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("pt")}>PT</button>
          </div>
        </div>
        <p>
          {texts.description}
        </p>
        <button onClick={() => setStartQuiz(true)}>
          {texts.textButton}
          <ArrowRight />
        </button>
        <Footer />
      </HomeContainer>
    </>
  );
}
