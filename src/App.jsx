import './App.css'
import Hero from './Functions/Components/Body/Hero';
import Header from './Functions/Components/Header/Header';
import Footer from './Functions/Components/Footer/Footer'
import { useState } from 'react';
import Containts from './Functions/Components/Body/Containts';

function App() {

  const [currentBal, setCurrentBal] = useState(0);

  const updateBal = bal => {
    const newBal = currentBal + bal;
    setCurrentBal(newBal);
  }

  return (
    <>
      <Header currentBal={currentBal}></Header>
      <Hero updateBal={updateBal}></Hero>
      <Containts></Containts>
      <Footer></Footer>
    </>
  )
}

export default App;
