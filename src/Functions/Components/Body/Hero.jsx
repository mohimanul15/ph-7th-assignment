import PropTypes from 'prop-types';
import Bmain from '../../../../src/assets/banner-main.png'
import Bground from '../../../../src/assets/bg-shadow.png';

const Hero = ({updateBal}) => {

    const customCss = {
        backgroundImage: `url(${Bground})`,
        backgroundSize: 'cover'
    }

    return (
        <main className='mx-3'>
            <div
                style={customCss}
                className='py-16 px-2.5 rounded-3xl bg-[#1e1e1e] w-full'
            >

                <div className='mx-auto max-w-4xl flex flex-col justify-center'>

                    <div className='mx-auto'>
                        <img src={Bmain} className='w-40 lg:w-auto'/>
                    </div>
                    
                    
                    <div className='mt-6'>
                        <h2 className='font-bold text-white text-2xl md:text-4xl'>
                        Assemble Your Ultimate Dream 11 Cricket Team
                        </h2>

                        <p className='mt-4 text-white opacity-70 font-inter text-lg lg:text-2xl font-medium'>
                        Beyond Boundaries Beyond Limits
                        </p>

                        <div className='border-2 border-btn hover:border-amber-500 p-1 md:p-2 w-fit mx-auto mt-6 rounded-2xl'>
                            <button className='bg-btn hover:bg-amber-500 text-black py-1 px-2 lg:py-3 lg:px-5 text-sm md:text-base font-bold rounded-xl inset-shadow-2xs cursor-pointer' onClick={()=>updateBal(750000)}>Claim Free Credit</button>
                        </div>
                    </div>

                </div>

            </div>            
        </main>
    );
};


Hero.propTypes = {
    updateBal: PropTypes.func.isRequired
}

export default Hero;