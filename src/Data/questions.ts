interface Question {
  id: number;
  question: string;
  code?: string;
  options: string[];
  answer: string;
}

export const questions = [
  {
    id: 1,
    question: "Qual sintaxe utilizamos para iterar em arrays no React?",
    options: [
      "{array.forEach((item) => <Item ... />)}",
      "{array.forEach(item => <Item ... />)}",
      "{array.map((item) => <Item ... />)}",
      "{array.map(item => <Item ... />)}",
    ],
    answer: "{array.map((item) => <Item ... />)}",
  },
  {
    id: 2,
    question: "O que é a propriedade key e para o que é utilizada?",
    options: [
      "Uma propriedade usada para identificar única e exclusivamente cada item de uma lista de componentes",
      "Uma propriedade usada para passar dados de um componente pai para o componente filho",
      "Uma propriedade usada para definir o estilo do componente",
      "Uma propriedade usada para controlar o estado do componente",
    ],
    answer:
      "Uma propriedade usada para identificar única e exclusivamente cada item de uma lista de componentes",
  },
  {
    id: 3,
    question:
      "Qual a melhor sintaxe para adicionarmos uma nova propriedade em um objeto já existente no React?",
    options: [
      "setUser({ ...state, name: 'John Doe' })",
      "setUser({ state, name: 'John Doe' })",
      "setUser(state => ({ state, name: 'John Doe' }))",
      "setUser(state => ({ ...state, name: 'John Doe' }))",
    ],
    answer: "setUser(state => ({ ...state, name: 'John Doe' }))",
  },
  {
    id: 4,
    question: "Como o React manipula a atualização do estado da aplicação?",
    options: [
      "Atualiza o estado completo da aplicação a cada mudança",
      "Atualiza apenas o estado que foi modificado",
      "Não permite a atualização do estado",
      "Nenhuma das opções anteriores",
    ],
    answer: "Atualiza apenas o estado que foi modificado",
  },
  {
    id: 5,
    question:
      "O que é a estratégia de CSS-in-JS e quais problemas visa resolver?",
    options: [
      "É a técnica de colocar CSS dentro de arquivos de JavaScript para melhorar a performance da aplicação",
      "É a técnica de colocar JavaScript dentro de arquivos de CSS para manter o estilo da aplicação consistente",
      "É a técnica de escrever CSS dentro do JavaScript, para melhorar a manutenibilidade e modularidade da aplicação, além de permitir o uso de variáveis e funções",
      "É a técnica de escrever JavaScript dentro do CSS, para manter o estilo da aplicação dinâmico",
    ],
    answer:
      "É a técnica de escrever CSS dentro do JavaScript, para melhorar a manutenibilidade e modularidade da aplicação, além de permitir o uso de variáveis e funções",
  },
  {
    id: 6,
    question: "O que é JSX em ReactJS?",
    options: [
      "Uma sintaxe de marcação que permite escrever HTML dentro do JavaScript",
      "Uma biblioteca para manipulação do DOM",
      "Uma abstração para a criação de elementos HTML dentro do JavaScript",
      "Nenhuma das opções anteriores",
    ],
    answer:
      "Uma sintaxe de marcação que permite escrever HTML dentro do JavaScript",
  },
  {
    id: 7,
    question: "Como se faz a comunicação entre componentes no React?",
    options: [
      "Passando props de componente pai para componente filho",
      "Usando eventos",
      "Comunicação direta entre componentes",
      "Todas as opções anteriores",
    ],
    answer: "Passando props de componente pai para componente filho",
  },
  {
    id: 8,
    question: "O que é um Hook?",
    options: [
      "Uma função que permite que componentes funcionem como componentes de classe",
      "Uma função que permite gerenciar o estado de um componente sem a necessidade de classe",
      "Uma função que permite criar efeitos colaterais em componentes",
      "Todas as opções anteriores",
    ],
    answer:
      "Uma função que permite gerenciar o estado de um componente sem a necessidade de classe",
  },
  {
    id: 9,
    question: "O que é o React Router?",
    options: [
      "Uma biblioteca que permite gerenciar rotas em aplicações ReactJS",
      "Uma biblioteca que permite gerenciar estados em aplicações ReactJS",
      "Uma biblioteca que permite gerenciar componentes em aplicações ReactJS",
      "Nenhuma das opções anteriores",
    ],
    answer: "Uma biblioteca que permite gerenciar rotas em aplicações ReactJS",
  },
  {
    id: 10,
    question: "O que é o Redux no React?",
    options: [
      "Uma biblioteca que permite gerenciar o estado da aplicação de forma centralizada",
      "Uma biblioteca que permite gerenciar rotas em aplicações ReactJS",
      "Uma biblioteca que permite gerenciar componentes em aplicações ReactJS",
      "Nenhuma das opções anteriores",
    ],
    answer:
      "Uma biblioteca que permite gerenciar o estado da aplicação de forma centralizada",
  },
  {
    id: 11,
    question: "O que é Virtual DOM e como ele funciona dentro do React?",
    options: [
      "Virtual DOM é um modelo de dados que representa a estrutura da árvore de componentes do React, ela é utilizada para comparar a renderização antiga com a nova para determinar o que precisa ser atualizado",
      "É uma técnica de renderização direta do componente na página",
      "É uma forma de armazenar estados e props de componentes",
      "É uma forma de manipulação direta de elementos do DOM",
    ],
    answer:
      "Virtual DOM é um modelo de dados que representa a estrutura da árvore de componentes do React, ela é utilizada para comparar a renderização antiga com a nova para determinar o que precisa ser atualizado",
  },
  {
    id: 12,
    question: "O que é a função memo e para o que é utilizada?",
    options: [
      "Para retornar uma string",
      "Para melhorar o desempenho de componentes renderizados frequentemente, evitando re-renderizações desnecessárias",
      "Para realizar um cálculo matemático",
      "Para controlar o estado global da aplicação",
    ],
    answer:
      "Para melhorar o desempenho de componentes renderizados frequentemente, evitando re-renderizações desnecessárias",
  },
  {
    id: 13,
    question: "O que é a arquitetura Flux no React?",
    options: [
      "Uma arquitetura de aplicações baseada em fluxo de dados unidirecional",
      "Uma biblioteca para gerenciamento de rotas",
      "Uma abstração para a criação de elementos HTML dentro do JavaScript",
      "Nenhuma das opções anteriores",
    ],
    answer:
      "Uma arquitetura de aplicações baseada em fluxo de dados unidirecional",
  },
  {
    id: 14,
    question: "O que são Higher-Order Components (HOCs) no React?",
    options: [
      "Componentes que são criados a partir de outros componentes",
      "Funções que retornam outros componentes com novas funcionalidades",
      "Componentes que são usados para gerenciar o estado global da aplicação",
      "Nenhuma das opções anteriores",
    ],
    answer: "Funções que retornam outros componentes com novas funcionalidades",
  },
  {
    id: 15,
    question: "O que são Context API no React?",
    options: [
      "Recursos que permitem passar informações para componentes filhos sem precisar passá-las por props manualmente",
      "Funções que permitem usar recursos de estado e outros efeitos dentro de componentes funcionais",
      "Componentes que são criados a partir de outros componentes",
      "Nenhuma das opções anteriores",
    ],
    answer:
      "Recursos que permitem passar informações para componentes filhos sem precisar passá-las por props manualmente",
  },
  {
    id: 16,
    question: "O que é um closure no React?",
    options: [
      "Uma função que guarda o estado de suas variáveis internas mesmo quando a função externa retorna",
      "Uma técnica para passar dados entre componentes sem usar props",
      "Uma forma de criar componentes com estado imutável",
      "Um componente que mantém o estado do componente pai quando é atualizado",
    ],
    answer:
      "Uma função que guarda o estado de suas variáveis internas mesmo quando a função externa retorna",
  },
  {
    id: 17,
    question:
      "Qual é a diferença entre componentes Controller e componentes UnController?",
    options: [
      "Componentes Controller são componentes cujo estado é gerenciado pelo próprio React, enquanto componentes UnController são componentes cujo estado é gerenciado pelo desenvolvedor",
      "Componentes controlados são componentes cujo estado é gerenciado pelo desenvolvedor, enquanto componentes não controlados são componentes cujo estado é gerenciado pelo próprio ReactJS",
      "Não existe diferença entre componentes controlados e componentes não controlados",
      "Nenhuma das opções anteriores",
    ],
    answer:
      "Componentes Controller são componentes cujo estado é gerenciado pelo próprio React, enquanto componentes UnController são componentes cujo estado é gerenciado pelo desenvolvedor",
  },
  {
    id: 18,
    question: "Por que é importante manter o estado imutável no React?",
    options: [
      "Ajuda a identificar mudanças mais facilmente no estado da aplicação",
      "Melhora a performance ao evitar renderizações desnecessárias",
      "Ajuda a garantir a consistência dos dados ao evitar efeitos colaterais",
      "Todas as opções acima",
    ],
    answer: "Todas as opções acima",
  },
  {
    id: 19,
    question:
      "Selecione abaixo a forma CORRETA de chamar uma função parametrizada ao clique do botão:",
    options: [
      "onClick={doSomething(...)}",
      "onClick={doSomething}",
      "onClick={() => doSomething}",
      "onClick={() => doSomething(...)}",
    ],
    answer: "onClick={() => doSomething(...)}",
  },
  {
    id: 20,
    question: "O que é o TypeScript?",
    options: [
      "Uma linguagem de programação dinâmica",
      "Uma linguagem de programação estática com tipagem de dados",
      "Uma biblioteca JavaScript",
      "Nenhuma das opções anteriores",
    ],
    answer: "Uma linguagem de programação estática com tipagem de dados",
  },
  {
    id: 21,
    question:
      "Qual é a principal vantagem do uso do TypeScript na comparação com o JavaScript?",
    options: [
      "A tipagem estática de dados",
      "O suporte a classes e interfaces",
      "A compatibilidade com outras linguagens de programação",
      "Todas as opções anteriores",
    ],
    answer: "A tipagem estática de dados",
  },
  {
    id: 22,
    question: "Como posso declarar uma variável do tipo string no TypeScript?",
    options: [
      "var nomeDaVariavel: string",
      "let nomeDaVariavel: string",
      "const nomeDaVariavel: string",
      "Todas as opções anteriores",
    ],
    answer: "let nomeDaVariavel: string",
  },
  {
    id: 23,
    question: "O que é uma interface no TypeScript?",
    options: [
      "Uma forma de definir tipos customizados",
      "Uma forma de criar classes",
      "Uma forma de definir funções",
      "Nenhuma das opções anteriores",
    ],
    answer: "Uma forma de definir tipos customizados",
  },
  {
    id: 24,
    question: "O que é um decorator no TypeScript?",
    options: [
      "Uma forma de estender ou modificar o comportamento de uma classe, propriedade, método ou parâmetro",
      "Uma forma de definir tipos customizados",
      "Uma forma de criar classes",
      "Nenhuma das opções anteriores",
    ],
    answer:
      "Uma forma de estender ou modificar o comportamento de uma classe, propriedade, método ou parâmetro",
  },
  {
    id: 25,
    question: "Qual é a extensão de um arquivo TypeScript?",
    options: [".ts", ".js", ".tsx", ".typescript"],
    answer: ".ts",
  },
  {
    id: 26,
    question: "Para que serve a funcionalidade de portal do React?",
    options: [
      "Para renderizar componentes fora da hierarquia de componentes da aplicação",
      "Para compartilhar estado entre componentes sem usar props",
      "Para gerenciar transições entre páginas na aplicação",
      "Para criar componentes modais",
    ],
    answer:
      "Para renderizar componentes fora da hierarquia de componentes da aplicação",
  },
  {
    id: 27,
    question:
      "Qual a melhor maneira de atualizar um estado contendo um array de forma imutável?",
    options: [
      "setState((state) => state.push(data))",
      "setState((state) => [...state, data])",
      "setState((state) => state.concat([data]))",
      "setState((state) => state + [data])",
    ],
    answer: "setState((state) => [...state, data])",
  },
  {
    id: 28,
    question: "Sobre o hook useEffect, assinale a alternativa CORRETA:",
    options: [
      "O hook useEffect é executado apenas uma vez durante o ciclo de vida do componente",
      "O hook useEffect pode ser usado para substituir a necessidade de componentes de classe",
      "O hook useEffect não é possível ser usado dentro de componentes funcionais",
      "O hook useEffect é usado para gerenciar efeitos colaterais em componentes do React.",
    ],
    answer:
      "O hook useEffect é usado para gerenciar efeitos colaterais em componentes do React.",
  },
  {
    id: 29,
    question: "Selecione a forma INCORRETA de criar um condicional no React:",
    options: [
      "{condicao && <Componente />}",
      "{condicao ? <Componente /> : null}",
      "<>{if (condicao) { return <Componente /> }}</>",
      "if (condicao) { return <Componente /> }",
    ],
    answer: "<>{if (condicao) { return <Componente /> }}</>",
  },
  {
    id: 30,
    question: "Para o que são utilizadas as refs no React?",
    options: [
      "Para acessar o valor de um input em tempo real",
      "Para acessar estados e props de componentes",
      "Para manter a referência de um elemento na DOM e assim ter acesso a suas propriedades e valores",
      "Para armazenar informações do componente",
    ],
    answer:
      "Para manter a referência de um elemento na DOM e assim ter acesso a suas propriedades e valores",
  },
  {
    id: 31,
    question:
      "O que é prop drilling e como podemos evitar/corrigir esse problema?",
    options: [
      "É a técnica de passar props entre componentes, que pode ser evitada usando context API",
      "É a técnica de passar props entre componentes, que pode ser corrigida usando o hoisting de estados",
      "É o problema de performance que ocorre quando temos muitos componentes aninhados, que pode ser evitado usando memoization",
      "É o problema de performance que ocorre quando temos muitos componentes aninhados, que pode ser corrigido usando context API",
    ],
    answer:
      "É a técnica de passar props entre componentes, que pode ser evitada usando context API",
  },
  {
    id: 32,
    question:
      "Como o conceito de igualdade referencial está conectado ao React?",
    options: [
      "O React utiliza o conceito de igualdade referencial para determinar se um componente precisa ser re-renderizado",
      "O React não está conectado ao conceito de igualdade referencial",
      "O conceito de igualdade referencial é importante para a performance do React, já que o React compara objetos com base na sua referência na memória",
      "O conceito de igualdade referencial é utilizado para evitar re-renderizações desnecessárias no React",
    ],
    answer:
      "O React utiliza o conceito de igualdade referencial para determinar se um componente precisa ser re-renderizado",
  },
  {
    id: 33,
    question:
      "Qual o efeito gerado ao chamarmos a função updateSomeStates dentro desse componente no React?",
    code: `
    const [count, setCount] = useState(0)
    const [updated, setUpdated] = useState(false)
    
    function updateSomeStates() {
      setCount(count + 1)
      setCount(count + 1)
      setUpdated(true)
    }
    `,
    options: [
      "O estado 'count' será atualizado com o valor correto, mas o estado 'updated' nunca será atualizado",
      "O estado 'count' nunca será atualizado, mas o estado 'updated' será atualizado corretamente",
      "Ambos os estados 'count' e 'updated' serão atualizados corretamente",
      "O valor de count vai permanecer em 1 devido ao funcionamento de closures no React, mas o componente irá renderizar apenas uma vez já que o React agrupará os updates de estado;",
    ],
    answer:
      "O valor de count vai permanecer em 1 devido ao funcionamento de closures no React, mas o componente irá renderizar apenas uma vez já que o React agrupará os updates de estado;",
  },
  {
    id: 34,
    question: "O que é Template Literal Types no TypeScript?",
    code: ``,
    options: [
      "Um tipo de string especial utilizado para criar tipos dinâmicos",
      "Uma nova forma de escrever strings no TypeScript",
      "Um recurso do TypeScript para adicionar dinamicidade aos tipos de dados",
      "Uma ferramenta de verificação de tipos para o JavaScript",
    ],
    answer: "Um tipo de string especial utilizado para criar tipos dinâmicos",
  },
  {
    id: 35,
    question:
      "Como otimizar o desempenho de componentes que utilizam dados em fluxo constante no React?",
    options: [
      "Usar o shouldComponentUpdate em todos os componentes",
      "Manipular o estado com useState somente quando necessário",
      "Utilizar o useMemo somente nas dependências críticas",
      "Todas as opções são corretas",
    ],
    answer: "Todas as opções são corretas",
  },
  {
    id: 36,
    question:
      "Quais são as possíveis causas do erro ao utilizar o ReturnType com o nome de função 'f' no trecho de código abaixo?",
    code: `
    function f() {
      return { x: 10, y: 3 };
    }
    type P = ReturnType<f>;
    `,
    options: [
      "A função 'f' não está declarada",
      "A função 'f' não retorna nenhum valor",
      "A função 'f' não está definida como uma expressão de função",
      "Não é possível utilizar o ReturnType com o nome de uma função, apenas com uma expressão de função",
    ],
    answer:
      "Não é possível utilizar o ReturnType com o nome de uma função, apenas com uma expressão de função",
  },
  {
    id: 37,
    question: "O que faz o operador typeof no TypeScript?",
    options: [
      "Retorna o tipo da variável que é passada como argumento",
      "Retorna o tipo da variável que é declarada",
      "Retorna o tipo da função que é passada como argumento",
      "Nenhuma das alternativas anteriores",
    ],
    answer: "Retorna o tipo da variável que é passada como argumento",
  },
  {
    id: 38,
    question:
      "Como o princípio de imutabilidade é aplicado na programação funcional utilizando o Typescript?",    
    options: [
      "Criamos uma nova versão da variável a cada alteração",
      "Modificamos a variável original a cada alteração",
      "Não aplicamos o princípio de imutabilidade na programação funcional com o Typescript",
      "Usamos a biblioteca Immer para aplicar o princípio de imutabilidade",
    ],
    answer: "Criamos uma nova versão da variável a cada alteração",
  },
] as Question[];
