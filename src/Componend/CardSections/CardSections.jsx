import React, { use, useState } from "react";
import Display from "./Display";
import CounterBox from "./CounterBox";
import CounterButton from "./CounterButton";
import MtBox from "./MtBox";

const CardSections = ({ assignment }) => {
  const [togle, setTogle] = useState("All");
  const assigmentUse = use(assignment);
  const [data, setData] = useState(assigmentUse);

  const filterDisplay =
    togle == "All" ? data : data.filter((element) => element.status == togle);
  console.log(togle, filterDisplay);
  return (
    <>
      <CounterBox data={data}></CounterBox>

      <CounterButton togle={togle} setTogle={setTogle}></CounterButton>
      {filterDisplay.length == 0 ? (
        <MtBox></MtBox>
      ) : (
        <div className="max-w-[1350px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-5 ">
          {filterDisplay.map((person) => (
            <Display person={person} data={data} setData={setData}></Display>
          ))}
        </div>
      )}
    </>
  );
};

export default CardSections;
