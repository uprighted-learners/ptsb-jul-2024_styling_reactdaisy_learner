import { useState } from "react";

import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug, faCode, faCoffee, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import Tailwind from "./components/Tailwind";
import ReactDaisyUI from "./components/ReactDaisyUI";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-primary h-world ">
        Hello world!
      </h1>

      <div className="flex gap-4 justify-center item-center py-4">
        <FontAwesomeIcon icon={faCoffee} size="sm"  />
        <FontAwesomeIcon icon={faCode} size="sm" className="text-primary" />
        <FontAwesomeIcon icon={faThumbsUp} size="2x"  className="text-secondary" />
        <FontAwesomeIcon icon={faBug} color="green" size="4x" />
      </div>

      <p>Check out more icons</p> <a target="_blank" href="https://fontawesome.com/icons">here</a>

      <Tailwind/>
      <ReactDaisyUI/>

    </>
  );
}

export default App;
