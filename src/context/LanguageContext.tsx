import { createContext, FC, ReactNode, useState } from "react";

interface Texts {
  header: string;
  description: string;
  question: string;
  body: {
    question: string;
    answers: string[];
  },
  footer: string;
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
    body: {
      question: "",
      answers: [],
    },
    footer: "",
  },
});

const enTexts = {
 header: "Quiz: React & Typescript",
 question: "Questions",
 body: {
    question: "",
    answers: [],
 },
 description: "How much do you know about React and Typescript? Test your programming knowledge, and find out your level of knowledge in these technologies with this free quiz.",
 footer: "Made with ❤️ by Aleksander Palamar",
}

const ptTexts = {
  header: "Quiz: React & Typescript",
  description: "Quanto você sabe sobre React e Typescript? Teste os seus conhecimentos de programação, e descubra qual o seu nível de conhecimento nessas tecnologias com esse quiz gratuito.",
  question: "Perguntas",  
  body: {
    question: "",
    answers: [],
  },
  footer: "Feito com ❤️ por Aleksander Palamar",
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [texts, setTexts] = useState<Texts>({
    header: "Quiz: React & Typescript",
    question: "",
    body: {
      question: "",
      answers: [],
    },
    description: "Quanto você sabe sobre React e Typescript? Teste os seus conhecimentos de programação, e descubra qual o seu nível de conhecimento nessas tecnologias com esse quiz gratuito.",
    footer: "",
  });

  const changeLanguage = (selectedLanguage: string) => {
    if (selectedLanguage === 'en') {
      setTexts({
        header: enTexts.header,
        description: enTexts.description,
        question: enTexts.question,
        body: {
          question: enTexts.body.question,
          answers: enTexts.body.answers,
        },
        footer: enTexts.footer,
      })
    } else {
      setTexts({
        header: ptTexts.header,
        description: ptTexts.description,
        question: ptTexts.question,
        body: {
          question: ptTexts.body.question,
          answers: ptTexts.body.answers,
        },
        footer: ptTexts.footer,
      })
    }
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  )
};

export default LanguageProvider;