import PropTypes from "prop-types";
import Player from "./Player";

const Players = ({playersData, choosenPlayer}) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-2">
            {
                playersData.map((singleData,uid) => <Player
                 key={uid} 
                 singleData = {singleData}
                 choosenPlayer = {choosenPlayer}></Player>)
            }          
        </div>
    );
};

Players.PropTypes = {
    playersData: PropTypes.array.isRequired,
    choosenPlayer: PropTypes.func.isRequired
}

export default Players;