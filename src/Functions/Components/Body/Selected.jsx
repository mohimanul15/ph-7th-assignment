import PropTypes from "prop-types";
import SelectedSingle from "./SelectedSingle";

const Selected = ({myTeam, playerDelete,changeToPlayer}) => {

    return (
        <div className="mx-3 flex flex-col gap-4">
            {
                myTeam.map((single, uid) =>{
                    return <SelectedSingle 
                                key={uid} 
                                single = {single}
                                playerDelete={playerDelete}>
                            </SelectedSingle>
                })
            }

            <div className="border-2 rounded-2xl border-amber-100 w-fit mt-4">
                <button 
                    className="bg-btn rounded-xl py-3 px-5 m-2 font-bold text-base md:text-xl"
                    onClick={()=>changeToPlayer(true)}>
                    Add More Player
                </button>
            </div>
        </div>
    );
};

Selected.PropTypes= {
    myTeam: PropTypes.array.isRequired,
    playerDelete: PropTypes.func.isRequired,
    changeToPlayer: PropTypes.func.isRequired
}

export default Selected;