import React, { Suspense, useState } from "react";
import Navbar from "./Componend/NavBar/Navbar";
import CounterBox from "./Componend/CounterBox/CounterBox";
import Footer from "./Componend/Footer/Footer";
import CounterButton from "./Componend/CounterButton/CounterButton";
import CardSections from "./Componend/CardSections/CardSections";
import Spinner from "./Componend/Spinner/Spinner";

const assigmentData = async () => {
  const fats = await fetch("/data.json");
  const res = await fats.json();
  return res;
};

const assignment = assigmentData();

const App = () => {
  const [togle, setTogle] = useState("All");
  return (
    <div>
      <Navbar></Navbar>
      <CounterBox></CounterBox>
      <CounterButton togle={togle} setTogle={setTogle}></CounterButton>
      <Suspense fallback={<Spinner></Spinner>}>
        <CardSections assignment={assignment}></CardSections>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default App;
