import { useEffect, useState } from "react";
import Selected from "./Selected";
import Players from './Players';
import PropTypes from "prop-types";

const Containts = ( {choosenPlayer, teamMember} ) => {

    const [playersData,setPlayersData] = useState([]);

    const [isAvailable, setIsAvailable] = useState(true);

    const btnClickManager = isVal =>{
        setIsAvailable(isVal);
    }

    useEffect(()=>{
        fetch('public/players.json')
        .then(res => res.json())
        .then(data => setPlayersData(data))
    },[])

    return (
        <section>
            <div className="mt-10 mb-6 px-4 flex items-center justify-between">
                <div>
                    <h3 className="text-xl lg:text-3xl font-bold">Available Players</h3>
                </div>

                <div>
                    <button className={"py-4 px-8 "+ (isAvailable? "font-bold bg-btn text-main-100": "font-normal bg-transparent text-main-70") +" text-base border-2 border-main-10 rounded-l-2xl"} onClick={()=>btnClickManager(true)}>
                        Available
                    </button>
                    
                    <button className={"py-4 px-8 "+ (!isAvailable? "font-bold bg-btn text-main-100": "font-normal bg-transparent text-main-70") +" text-base border-2 border-main-10 rounded-r-2xl"} onClick={()=>btnClickManager(false)}>
                        Selected ( {teamMember} )
                    </button>
                </div>
            </div>

            {/* selected options views */}
            
            <div className="py-4">
                {isAvailable?
                    <Players playersData = {playersData} choosenPlayer = {choosenPlayer}></Players>:
                    <Selected></Selected>}
            </div>    
        </section>
    );
};

Containts.PropTypes = {
    choosenPlayer: PropTypes.func.isRequired,
    teamMember: PropTypes.number.isRequired
}

export default Containts;