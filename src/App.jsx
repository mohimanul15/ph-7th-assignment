import './App.css'
import Hero from './Functions/Components/Body/Hero';
import Header from './Functions/Components/Header/Header';
import Footer from './Functions/Components/Footer/Footer'
import { useEffect, useState } from 'react';
import Containts from './Functions/Components/Body/Containts';

function App() {

  const [currentBal, setCurrentBal] = useState(0);
  const [myTeam, setMyTeam] = useState([]);
  const [teamMember, setTeamMember] = useState(0);


  useEffect(()=>{
    setTeamMember(myTeam.length);
  },[myTeam])

  const choosenPlayer =async (playerInfo) => {

    if(playerInfo.biddingPrice <= currentBal){
        const newTeam = [...myTeam,playerInfo];
        setMyTeam(newTeam);
        setCurrentBal(currentBal - playerInfo.biddingPrice);
    }

  }

  const updateBal = bal => {
    const newBal = currentBal + bal;
    setCurrentBal(newBal);
  }

  return (
    <>
      <Header currentBal={currentBal}></Header>
      <Hero updateBal={updateBal}></Hero>
      <Containts choosenPlayer = {choosenPlayer} teamMember = {teamMember}></Containts>
      <Footer></Footer>
    </>
  )
}

export default App;
