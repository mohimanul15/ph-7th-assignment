import './App.css'
import Hero from './Functions/Components/Body/Hero';
import Header from './Functions/Components/Header/Header';
import Footer from './Functions/Components/Footer/Footer'
import { useEffect, useState } from 'react';
import Containts from './Functions/Components/Body/Containts';
import { Flip, ToastContainer} from 'react-toastify';
import {alreadyInTeam, alreadySixPlayer, notEnoughCoin, playerAddedToast} from './Functions/Utilities/utilities';

function App() {

  const [currentBal, setCurrentBal] = useState(0);
  const [myTeam, setMyTeam] = useState([]);
  const [teamMember, setTeamMember] = useState(0);


  useEffect(()=>{
    setTeamMember(myTeam.length);
  },[myTeam])

  const playerDelete = idk =>{
    let newTeam = myTeam.filter(member=>{
      if(member.playerId !== idk){
        return member;
      }
    })

    setMyTeam(newTeam);
    console.log(newTeam);
  }

  function choosenPlayer(playerInfo){

    if(myTeam.length === 6){
      alreadySixPlayer();
      return
    }

    for(const singleMem of myTeam){
      if(singleMem.playerId === playerInfo.playerId){
        alreadyInTeam();
        return 
      }
    }

    if(playerInfo.biddingPrice <= currentBal){
        setMyTeam([...myTeam,playerInfo]);
        setCurrentBal(currentBal - playerInfo.biddingPrice);
        playerAddedToast();
    }else{
      notEnoughCoin();
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

      <Containts 
                choosenPlayer = {choosenPlayer}
                teamMember = {teamMember} 
                myTeam = {myTeam}
                playerDelete={playerDelete}>
      </Containts>
      
      <Footer></Footer>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </>
  )
}

export default App;
