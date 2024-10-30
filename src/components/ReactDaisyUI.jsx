import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Button } from "react-daisyui";

const ReactDaisyUI = () => {
  return (
    <div className="m-4 border-purple-500 border-solid border-4 rounded-2xl p-7 ">
      <h1 className="text-4xl animate-bounce font-bold text-secondary mt-3">
        React DaisyUI
      </h1>

      <Button size="lg" color="accent">
        <FontAwesomeIcon icon={faHeart} />
        React DaisyUI Button
      </Button>

      <div className="flex justify-center gap-2 flex-wrap my-4 max-w-72 mx-auto">

        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="info">Info</Button>
        <Button color="success">Success</Button>
        <Button color="accent">Accent</Button>
        <Button color="neutral">Neutral</Button>

        

      </div>
    </div>
  );
};

export default ReactDaisyUI;
