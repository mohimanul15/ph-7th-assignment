import { Flip, toast } from "react-toastify"

const playerAddedToast = ()=>{
    return toast.success('Player has been successfully added to your team', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
    });
}

const notEnoughCoin = ()=>{
    return toast.warn('Not Enough Coin to Add the Player', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
    });
}

const alreadySixPlayer = () =>{
    return toast.error('Team has been full with 6 Players.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
    });
}

const alreadyInTeam = () =>{
    return toast.info('Can not add. Already in your team', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
    });
}

export {playerAddedToast , notEnoughCoin ,alreadySixPlayer,alreadyInTeam}