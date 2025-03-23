import PropTypes from "prop-types";

const Player = ({singleData, choosenPlayer}) => {
    return (
        <div>

            <div className="p-6 border-2 border-main-10 rounded-2xl">
                <div>
                    <img src={singleData.image} className="rounded-2xl"/>
                </div>

                <div className="mt-6">
                    
                    <div className="flex items-center gap-4">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.002 14.5397C18.002 14.5397 21.2718 11.2699 21.2718 7.26985C21.2718 3.26983 18.002 0 14.002 0C10.0019 0 6.73218 3.26983 6.73218 7.26985C6.73218 11.2699 10.002 14.5397 14.002 14.5397Z" fill="#131313" fillOpacity="0.8"/>
                            <path d="M26.4781 20.3493C26.2876 19.8731 26.0337 19.4286 25.7479 19.0159C24.2876 16.8572 22.0337 15.4286 19.494 15.0794C19.1766 15.0477 18.8274 15.1111 18.5734 15.3016C17.24 16.2858 15.6528 16.7937 14.0019 16.7937C12.3511 16.7937 10.7638 16.2858 9.43047 15.3016C9.17648 15.1111 8.82727 15.0159 8.50984 15.0794C5.97015 15.4286 3.68446 16.8572 2.2559 19.0159C1.97019 19.4286 1.7162 19.9049 1.52576 20.3493C1.43054 20.5398 1.46226 20.762 1.55748 20.9525C1.81147 21.3969 2.1289 21.8414 2.41462 22.2223C2.85904 22.8255 3.33525 23.3652 3.87495 23.8731C4.31938 24.3175 4.82731 24.7302 5.33529 25.1429C7.8432 27.016 10.8591 28.0001 13.9702 28.0001C17.0813 28.0001 20.0972 27.0159 22.6051 25.1429C23.113 24.762 23.621 24.3175 24.0655 23.8731C24.5734 23.3652 25.0813 22.8255 25.5258 22.2223C25.8432 21.8096 26.129 21.3969 26.3829 20.9525C26.5416 20.762 26.5733 20.5397 26.4781 20.3493Z" fill="#131313" fillOpacity="0.8"/>
                        </svg>

                        <h2 className="font-semibold text-base lg:text-xl">
                            {singleData.name}
                        </h2>

                    </div>

                    <div className="mt-3 px-1 flex justify-between items-center">

                        <div className="flex items-center gap-2.5">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                <path d="M10.2907 1.24914C7.70781 -0.226719 4.99328 -0.364766 2.38281 0.813516V0H1.21094V20H2.38281V12.7057C4.78785 11.4443 7.31352 11.4835 9.70934 12.8524C11.1461 13.6736 12.6236 14.0838 14.1016 14.0838C15.579 14.0838 17.057 13.6735 18.4938 12.8524L18.7891 12.6836V0.747891L17.9125 1.24914C15.4199 2.67391 12.7843 2.67391 10.2907 1.24914Z" fill="#131313"/>
                                </g>
                            </svg>

                            <p className="text-main-100 font-normal text-base">
                                {singleData.country}
                            </p>

                        </div>

                        <div className="py-2 px-4 bg-main-10 rounded-lg font-normal text-sm">
                            {singleData.role}
                        </div>

                    </div>

                    <hr  className="my-4 opacity-30 h-1"/>

                    {/* Rating */}
                    <div className="font-bold text-sm md:text-base text-main-100">
                        <div className="flex mb-2">
                            <h4>Rating</h4>
                        </div>

                        <div className="flex justify-between mb-2">
                            <h4>Batting Type</h4>
                            <h4 className="text-main-70 font-normal">{singleData.battingType}</h4>
                        </div>

                        <div className="flex justify-between mb-2">
                            <h4>Bowling Type</h4>
                            <h4 className="text-main-70 font-normal">{singleData.bowlingType}</h4>
                        </div>

                        <div className="flex justify-between mb-1 items-center">
                            <div>
                                <h4>Price: ${singleData.biddingPrice}</h4>
                            </div>

                            <div>
                                <button 
                                className="text-sm py-2 px-3 border-2 border-main-10 rounded-xl font-normal"
                                onClick={()=>choosenPlayer(singleData)}
                                >Choose Player</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


Player.PropTypes = {

    key: PropTypes.number.isRequired,
    singleData: PropTypes.object.isRequired,
    choosenPlayer: PropTypes.func.isRequired

}


export default Player;