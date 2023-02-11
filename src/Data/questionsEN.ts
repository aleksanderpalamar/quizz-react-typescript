import { useContext } from "react";

interface QuestionEN {
  id: number;
  question: string;
  code?: string;
  options: string[];
  answer: string;
}

export const questionsEN = [
  {
    id: 1,
    question: "What syntax do we use to iterate over arrays in React?",
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
    question: "What is the key property and what is it used for?",
    options: [
      "A property used to uniquely identify each item in a list of components",
      "A property used to pass data from a parent component to a child component",
      "A property used to set the style of the component",
      "A property used to control the state of the component",
    ],
    answer:
      "A property used to uniquely identify each item in a list of components",
  },
  {
    id: 3,
    question:
      "What is the best syntax to add a new property to an existing object in React?",
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
    question: "How does React handle updating the state of the application?",
    options: [
      "Updates the entire state of the application with each change",
      "Updates only the state that was modified",
      "Does not allow updating the state",
      "None of the above",
    ],
    answer: "Updates only the state that was modified",
  },
  {
    id: 5,
    question:
      "What is the CSS-in-JS strategy and what problems does it aim to solve?",
    options: [
      "It's the technique of putting CSS inside JavaScript files to improve application performance",
      "It's the technique of putting JavaScript inside CSS files to keep the application's style consistent",
      "It's the technique of writing CSS inside JavaScript, to improve maintainability and modularity of the application and to allow the use of variables and functions",
      "It's the technique of writing JavaScript inside CSS to keep the application's style dynamic",
    ],
    answer:
      "It's the technique of writing CSS inside JavaScript, to improve maintainability and modularity of the application and to allow the use of variables and functions",
  },
  {
    id: 6,
    question: "What is JSX in ReactJS?",
    options: [
      "A markup syntax that allows writing HTML within JavaScript",
      "A library for DOM manipulation",
      "An abstraction for creating HTML elements within JavaScript",
      "None of the above",
    ],
    answer: "A markup syntax that allows writing HTML within JavaScript",
  },
  {
    id: 7,
    question: "How do components communicate in React?",
    options: [
      "By passing props from parent component to child component",
      "Using events",
      "Direct communication between components",
      "All of the above",
    ],
    answer: "By passing props from parent component to child component",
  },
  {
    id: 8,
    question: "What is a Hook?",
    options: [
      "A function that allows components to work as class components",
      "A function that allows managing the state of a component without the need for a class",
      "A function that allows creating side effects in components",
      "All of the above",
    ],
    answer:
      "A function that allows managing the state of a component without the need for a class",
  },
  {
    id: 9,
    question: "What is React Router?",
    options: [
      "A library that allows managing routes in ReactJS applications",
      "A library that allows managing states in ReactJS applications",
      "A library that allows managing components in ReactJS applications",
      "None of the above",
    ],
    answer: "A library that allows managing routes in ReactJS applications",
  },
  {
    id: 10,
    question: "What is Redux in React?",
    options: [
      "A library that allows managing the state of the application in a centralized manner",
      "A library that allows managing routes in ReactJS applications",
      "A library that allows managing components in ReactJS applications",
      "None of the above options",
    ],
    answer:
      "A library that allows managing the state of the application in a centralized manner",
  },
  {
    id: 11,
    question: "What is Virtual DOM and how does it work within React?",
    options: [
      "Virtual DOM is a data model that represents the structure of the React component tree, it is used to compare the old rendering with the new one to determine what needs to be updated",
      "It's a direct rendering technique for the component on the page",
      "It's a way of storing states and props of components",
      "It's a way of directly manipulating DOM elements",
    ],
    answer:
      "Virtual DOM is a data model that represents the structure of the React component tree, it is used to compare the old rendering with the new one to determine what needs to be updated",
  },
  {
    id: 12,
    question: "What is the function of memo and what is it used for?",
    options: [
      "To return a string",
      "To improve the performance of frequently rendered components by avoiding unnecessary re-renderings",
      "To perform a mathematical calculation",
      "To control the global state of the application",
    ],
    answer:
      "To improve the performance of frequently rendered components by avoiding unnecessary re-renderings",
  },
  {
    id: 13,
    question: "What is the Flux architecture in React?",
    options: [
      "An application architecture based on unidirectional data flow",
      "A library for route management",
      "An abstraction for creating HTML elements within JavaScript",
      "None of the above",
    ],
    answer: "An application architecture based on unidirectional data flow",
  },
  {
    id: 14,
    question: "What are Higher-Order Components (HOCs) in React?",
    options: [
      "Components that are created from other components",
      "Functions that return other components with new functionality",
      "Components that are used to manage the global state of the application",
      "None of the above",
    ],
    answer: "Functions that return other components with new functionality",
  },
  {
    id: 15,
    question: "What are the Context API in React?",
    options: [
      "Resources that allow you to pass information to child components without having to manually pass it through props",
      "Functions that allow you to use state and other effects within functional components",
      "Components that are created from other components",
      "None of the above",
    ],
    answer:
      "Resources that allow you to pass information to child components without having to manually pass it through props",
  },
  {
    id: 16,
    question: "What is a closure in React?",
    options: [
      "A function that retains the state of its internal variables even when the outer function returns",
      "A technique for passing data between components without using props",
      "A way to create components with immutable state",
      "A component that maintains the state of the parent component when updated",
    ],
    answer:
      "A function that retains the state of its internal variables even when the outer function returns",
  },
  {
    id: 17,
    question:
      "What is the difference between Controller components and UnController components?",
    options: [
      "Controller components are components whose state is managed by React itself, while UnController components are components whose state is managed by the developer",
      "Controlled components are components whose state is managed by the developer, while uncontrolled components are components whose state is managed by ReactJS",
      "There is no difference between controlled components and uncontrolled components",
      "None of the above options",
    ],
    answer:
      "Controller components are components whose state is managed by React itself, while UnController components are components whose state is managed by the developer",
  },
  {
    id: 18,
    question: "Why is it important to keep the state immutable in React?",
    options: [
      "It helps to easily identify changes in the application's state",
      "It improves performance by avoiding unnecessary renderings",
      "It helps ensure data consistency by avoiding side effects",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    id: 19,
    question:
      "Select the correct way to call a parameterized function on button click:",
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
    question: "What is TypeScript?",
    options: [
      "A dynamic programming language",
      "A statically typed programming language",
      "A JavaScript library",
      "None of the above",
    ],
    answer: "A statically typed programming language",
  },
  {
    id: 21,
    question:
      "What is the main advantage of using TypeScript compared to JavaScript?",
    options: [
      "Static typing of data",
      "Support for classes and interfaces",
      "Compatibility with other programming languages",
      "All of the above",
    ],
    answer: "Static typing of data",
  },
  {
    id: 22,
    question: "How can I declare a string type variable in TypeScript?",
    options: [
      "var nomeDaVariavel: string",
      "let nomeDaVariavel: string",
      "const nomeDaVariavel: string",
      "All of the above",
    ],
    answer: "let nomeDaVariavel: string",
  },
  {
    id: 23,
    question: "What is an interface in TypeScript?",
    options: [
      "A way to define custom types",
      "A way to create classes",
      "A way to define functions",
      "None of the above",
    ],
    answer: "A way to define custom types",
  },
  {
    id: 24,
    question: "What is a decorator in TypeScript?",
    options: [
      "A way to extend or modify the behavior of a class, property, method, or parameter",
      "A way to define custom types",
      "A way to create classes",
      "None of the above",
    ],
    answer:
      "A way to extend or modify the behavior of a class, property, method, or parameter",
  },
  {
    id: 25,
    question: "What is the extension of a TypeScript file?",
    options: [".ts", ".js", ".tsx", ".typescript"],
    answer: ".ts",
  },
  {
    id: 26,
    question: "What is the purpose of the React portal feature?",
    options: [
      "To render components outside of the application's component hierarchy",
      "To share state between components without using props",
      "To manage transitions between pages in the application",
      "To create modal components",
    ],
    answer:
      "To render components outside of the application's component hierarchy",
  },
  {
    id: 27,
    question:
      "What is the best way to update a state containing an array immutably?",
    options: [
      "setState((state) => state.push(data))",
      "setState((state) => […state, data])",
      "setState((state) => state.concat([data]))",
      "setState((state) => state + [data])",
    ],
    answer: "setState((state) => […state, data])",
  },
  {
    id: 28,
    question:
      "Regarding the useEffect hook, which of the following is CORRECT?",
    options: [
      "The useEffect hook is only executed once during the lifecycle of the component",
      "The useEffect hook can be used to replace the need for class components",
      "The useEffect hook is not possible to use within functional components",
      "The useEffect hook is used to manage side effects in React components.",
    ],
    answer:
      "The useEffect hook is used to manage side effects in React components.",
  },
  {
    id: 29,
    question: "Choose the INCORRECT form to create a conditional in React:",
    options: [
      "{condicao && }",
      "{condicao ?  : null}",
      "<>{if (condicao) { return  }}</>",
      "if (condicao) { return  }",
    ],
    answer: "<>{if (condicao) { return  }}</>",
  },
  {
    id: 30,
    question: "What are refs used for in React?",
    options: [
      "To access the value of an input in real time",
      "To access states and props of components",
      "To maintain a reference of an element in the DOM and thus access its properties and values",
      "To store component information",
    ],
    answer:
      "To maintain a reference of an element in the DOM and thus access its properties and values",
  },
  {
    id: 31,
    question: "What is prop drilling and how can we avoid/fix this issue?",
    options: [
      "It is the technique of passing props between components, which can be avoided using context API",
      "It is the technique of passing props between components, which can be fixed using state hoisting",
      "It is the performance issue that occurs when we have many nested components, which can be avoided using memoization",
      "It is the performance issue that occurs when we have many nested components, which can be fixed using context API",
    ],
    answer:
      "It is the technique of passing props between components, which can be avoided using context API",
  },
  {
    id: 32,
    question: "How is the concept of referential equality connected to React?",
    options: [
      "React uses the concept of referential equality to determine if a component needs to be re-rendered",
      "React is not connected to the concept of referential equality",
      "The concept of referential equality is important for React performance, as React compares objects based on their reference in memory",
      "The concept of referential equality is used to avoid unnecessary re-renders in React",
    ],
    answer:
      "React uses the concept of referential equality to determine if a component needs to be re-rendered",
  },
  {
    id: 33,
    question:
      "What effect is generated when calling the updateSomeStates function within this React component?",
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
      "The 'count' state will be updated with the correct value, but the 'updated' state will never be updated",
      "The 'count' state will never be updated, but the 'updated' state will be updated correctly",
      "Both the 'count' and 'updated' states will be updated correctly",
      "The value of count will remain at 1 due to the workings of closures in React, but the component will only render once since React will batch the state updates;",
    ],
    answer:
      "The value of count will remain at 1 due to the workings of closures in React, but the component will only render once since React will batch the state updates;",
  },
  {
    id: 34,
    question: "What are Template Literal Types in TypeScript?",
    code: ``,
    options: [
      "A special kind of string used to create dynamic types",
      "A new way of writing strings in TypeScript",
      "A TypeScript feature to add dynamicist to data types",
      "A type checking tool for JavaScript",
    ],
    answer: "A special kind of string used to create dynamic types",
  },
  {
    id: 35,
    question:
      "How can you optimize the performance of components that use constantly flowing data in React?",
    options: [
      "Use shouldComponentUpdate on all components",
      "Manipulate state with useState only when necessary",
      "Use useMemo only on critical dependencies",
      "All options are correct",
    ],
    answer: "All options are correct",
  },
  {
    id: 36,
    question:
      "What are the possible causes of an error when using ReturnType with the function name 'f' in the following code snippet?",
    code: `
    function f() {
      return { x: 10, y: 3 };
    }
    type P = ReturnType<f>;
    `,
    options: [
      "The function 'f' is not declared",
      "The function 'f' does not return any value",
      "The function 'f' is not defined as a function expression",
      "ReturnType can only be used with a function expression, not with the name of a function",
    ],
    answer:
      "ReturnType can only be used with a function expression, not with the name of a function",
  },
  {
    id: 37,
    question: "What does the typeof operator do in TypeScript?",
    options: [
      "Returns the type of the variable passed as an argument",
      "Returns the type of the variable declared",
      "Returns the type of the function passed as an argument",
      "None of the above",
    ],
    answer: "Returns the type of the variable passed as an argument",
  },
  {
    id: 38,
    question:
      "How is immutability applied in functional programming using Typescript?",
    options: [
      "We create a new version of the variable each time it is changed",
      "We modify the original variable each time it is changed",
      "We do not apply immutability principle in functional programming with Typescript",
      "We use the Immer library to apply the immutability principle",
    ],
    answer: "We create a new version of the variable each time it is changed",
  },
] as QuestionEN[];
