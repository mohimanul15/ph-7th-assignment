const Containts = () => {
    return (
        <section>
            <div className="mt-8 mb-6 px-4 flex items-center justify-between">
                <div>
                    <h3 className="text-xl lg:text-3xl font-bold">Available Players</h3>
                </div>

                <div>
                    <button className="py-4 px-8 font-bold text-base text-main-100 border-2 border-main-10 rounded-l-2xl">
                        Available
                    </button>
                    
                    <button className="py-4 px-8 font-bold text-base text-main-100 border-2 border-main-10 rounded-r-2xl">
                        Selected
                    </button>
                </div>
            </div>
            <div></div>    
        </section>
    );
};

export default Containts;