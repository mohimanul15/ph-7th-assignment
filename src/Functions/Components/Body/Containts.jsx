import { useEffect, useState } from "react";
import Selected from "./Selected";
import Players from './Players';
import PropTypes from "prop-types";

const Containts = ( {choosenPlayer, teamMember, myTeam, playerDelete} ) => {

    const [playersData,setPlayersData] = useState([]);

    const [isAvailable, setIsAvailable] = useState(true);

    const btnClickManager = isVal =>{
        setIsAvailable(isVal);
    }

    const changeToPlayer = pageVal =>{
        setIsAvailable(pageVal);
    }

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayersData(data))
    },[])

    return (
        <section className="cont">
            <div className="mt-10 mb-6 px-4 flex items-center max-sm:flex-col justify-between">
                <div>
                    <h3 
                        className="text-xl lg:text-3xl font-bold">
                        {isAvailable?'Available Players':`Selected Players (${myTeam.length}/6)`}
                    </h3>
                </div>

                <div className="flex flex-wrap gap-4 sm:gap-0 max-sm:flex-col">
                    <button className={"py-4 px-8 "+ (isAvailable? "font-bold bg-btn text-main-100": "font-normal bg-transparent text-main-70") +" text-base border-2 border-main-10 max-md:rounded-2xl sm:rounded-l-2xl"} onClick={()=>btnClickManager(true)}>
                        Available
                    </button>
                    
                    <button className={"py-4 px-8 "+ (!isAvailable? "font-bold bg-btn text-main-100": "font-normal bg-transparent text-main-70") +" text-base border-2 border-main-10 max-md:rounded-2xl sm:rounded-r-2xl"} onClick={()=>btnClickManager(false)}>
                        Selected ( {teamMember} )
                    </button>
                </div>
            </div>

            {/* selected options views */}
            
            <div className="py-4">
                {isAvailable?
                    <Players playersData = {playersData} choosenPlayer = {choosenPlayer}></Players>:
                    <Selected 
                        myTeam={myTeam} 
                        playerDelete={playerDelete}
                        changeToPlayer={changeToPlayer}>
                    </Selected>}
            </div>    
        </section>
    );
};

Containts.PropTypes = {
    choosenPlayer: PropTypes.func.isRequired,
    teamMember: PropTypes.number.isRequired,
    myTeam: PropTypes.array.isRequired,
    playerDelete: PropTypes.func.isRequired
}

export default Containts;