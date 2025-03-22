import Bmain from '../../../../src/assets/banner-main.png'
import Bground from '../../../../src/assets/bg-shadow.png';

const Hero = () => {

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
                        <img src={Bmain} alt="" srcset="" className='w-40 lg:w-auto'/>
                    </div>
                    
                    
                    <div className='mt-6'>
                        <h2 className='font-bold text-white text-2xl md:text-4xl'>
                        Assemble Your Ultimate Dream 11 Cricket Team
                        </h2>

                        <p className='mt-4 text-white opacity-70'>
                        Beyond Boundaries Beyond Limits
                        </p>

                        <button className='btn'>Claim Free Credit</button>
                    </div>

                </div>

            </div>            
        </main>
    );
};

export default Hero;