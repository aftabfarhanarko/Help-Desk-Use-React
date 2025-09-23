import React from 'react';
import Navbar from './Componend/NavBar/Navbar';
import CounterBox from './Componend/CounterBox/CounterBox';
import Footer from './Componend/Footer/Footer';
import CounterButton from './Componend/CounterButton/CounterButton';


const App = () => {
  return (
    <div>
   <Navbar></Navbar>
   <CounterBox></CounterBox>
   <CounterButton></CounterButton>
   <Footer></Footer>
   </div>
  );
};

export default App;