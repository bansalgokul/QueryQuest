import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import ProblemCard from "./problems/ProblemCard";
import EditorCard from "./EditorCard";

const Problem = () => {
  const params = useParams();
  const questionID = params.questionID as string;

  return (
    <div>
      <Header />
      <div className="h-[95%] w-full grid grid-cols-2 gap-4 p-4">
        <ProblemCard questionID={questionID} />
        <div className="grid grid-rows-2 gap-4 overflow-auto">
          <EditorCard questionID={questionID} />
          <EditorCard questionID={questionID} />
        </div>
      </div>
    </div>
  );
};

export default Problem;
