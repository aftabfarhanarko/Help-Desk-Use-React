import React, { use } from "react";
import Display from "./Display";

const CardSections = ({ assignment }) => {
  const assigmentUse = use(assignment);
  console.log(assigmentUse);

  return (
    <div className="max-w-[1350px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-5 ">
      {assigmentUse.map((person) => (
        <Display person={person}></Display>
      ))}
    </div>
  );
};

export default CardSections;
