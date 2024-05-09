/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Functionbar from "../FunctionBar/functionbar";
import Study from "./components/study";
import Quiz from "./components/quiz"

export default function ProblemScreen() {
  const [component, setComponent] = useState("");

  const renderComponent = () => {
    switch (component) {
      case "Study":
        return <Study />;
      case "Quiz":
        return <Quiz />;

      // Add cases for other components if needed
      default:
        return <Study/>;
    }
  };

  return (
    <div className=" flex flex-col">
      <Functionbar setComponent={setComponent} />
      {renderComponent()}
    </div>
  );
}
