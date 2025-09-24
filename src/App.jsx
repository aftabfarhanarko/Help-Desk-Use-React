import React, { Suspense } from "react";
import Navbar from "./Componend/NavBar/Navbar";
import Footer from "./Componend/Footer/Footer";
import CardSections from "./Componend/CardSections/CardSections";
import Spinner from "./Componend/Spinner/Spinner";

const assigmentData = async () => {
  const fats = await fetch("/data.json");
  const res = await fats.json();
  return res;
};
const assignment = assigmentData();

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Suspense fallback={<Spinner></Spinner>}>
        <CardSections
          assignment={assignment}
        ></CardSections>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default App;
