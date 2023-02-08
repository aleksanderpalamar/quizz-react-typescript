import { ReactNode } from "react";

interface LevelProps {
  level: string;
  scoreRange: number[];
  description?: string;
  chart?: ReactNode;
}

export const levels = [
  {
    level: "Junior",
    scoreRange: [0, 20],
    description:
      "Você está começando a compreender o básico de React, mas não se preocupe, continue estudando e logo estará pronto para o próximo nível.",
    chart: "🌟",
  },
  {
    level: "Pleno",
    scoreRange: [21, 30],
    description:
      "Você já tem uma boa base solida de React e consegue criar aplicações simples, mas ainda tem dificuldade em criar aplicações complexas, mas não se preocupe, continue estudando e logo estará pronto para o próximo nível.",
    chart: "🌟🌟🌟",
  },
  {
    level: "Senior",
    scoreRange: [31, 40],
    description:
      "Parabéns você é um(a) React Developer Senior, você já possui uma experiência sólida com React e consegue criar aplicações complexas.",
    chart: "🌟🌟🌟🌟🌟",
  },
] as LevelProps[];
