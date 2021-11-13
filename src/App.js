import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front end Javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite Javascript library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];
console.log(items);

const App = () => {
  return (
    <div>
      <Accordion />
    </div>
  );
};
export default App;
