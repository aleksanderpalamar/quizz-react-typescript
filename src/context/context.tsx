import { createContext, FC, ReactNode, Reducer, useReducer, useState } from "react";
import { questions } from "../Data/questions";
import { questionsEN } from "../Data/questionsEN";

interface Questions {
  question: string;
  options: string[];  
}

interface Texts {  
  header: string;
  description: string;
  question: string;
  timeLeft?: string;
  body: {
    question: Questions[];
    answers: {
      options: {};
    };
  };
  footer: string;
  textButton?: string;
}

interface LanguageContextValues {
  language: string;
  changeLanguage: (selectedLanguage: string) => void;
  texts: Texts;
}

export const LanguageContext = createContext<LanguageContextValues>({
  language: "en",
  changeLanguage: () => {},
  texts: {
    header: "",
    description: "",
    question: "",
    timeLeft: "",
    body: {
      question: [],
      answers: {
        options: [],
      },
    },
    footer: "",
    textButton: "",
  },
});

const enTexts = {
  header: "Quiz: React & Typescript",
  question: "Questions",
  timeLeft: "Time left",
  body: {
    question: questionsEN,
    answers: {
      options: [],
    },
  },
  description:
    "How much do you know about React and Typescript? Test your programming knowledge, and find out your level of knowledge in these technologies with this free quiz.",
  footer: "Made with ❤️ by Aleksander Palamar",
  textButton: "Start Quiz",
};

const ptTexts = {
  header: "Quiz: React & Typescript",
  description:
    "Quanto você sabe sobre React e Typescript? Teste os seus conhecimentos de programação, e descubra qual o seu nível de conhecimento nessas tecnologias com esse quiz gratuito.",
  question: "Perguntas",
  timeLeft: "Tempo restante",
  body: {
    question: questions,
    answers: {
      options: [],
    },
  },
  footer: "Feito com ❤️ por Aleksander Palamar",
  textButton: "Iniciar Quiz",
};

interface LanguageProviderProps {
  children: ReactNode;
}

function languageReducer(
  state: Texts,
  action: { type: string; payload: string | Texts }
): Texts {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return action.payload as Texts;
    default:
      return state;
  }
}

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<
    Reducer<Texts, { type: string; payload: Texts }>
  >(languageReducer, enTexts);

  const [language, setLanguage] = useState<string>("en");

  const changeLanguage = (selectedLanguage?: string) => {
    setLanguage(selectedLanguage || "en");
    if (selectedLanguage === "en") {
      dispatch({ type: "CHANGE_LANGUAGE", payload: enTexts });
    } else {
      dispatch({ type: "CHANGE_LANGUAGE", payload: ptTexts });
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        texts: state,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
