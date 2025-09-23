import React from 'react';
import Navbar from './Componend/NavBar/Navbar';
import CounterBox from './Componend/CounterBox/CounterBox';
import Footer from './Componend/Footer/Footer';


const App = () => {
  return (
    <div>
   <Navbar></Navbar>
   <CounterBox></CounterBox>
   <Footer></Footer>
   </div>
  );
};

export default App;