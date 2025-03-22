import Coin from '../../../assets/coin.png';
import Logo from '../../../../src/assets/logo.png';

const Header = () => {
    return (
        <div className='backdrop-blur-lg py-6 sticky top-0'>

            <div className='flex justify-between container mx-auto'>

                {/* Logo */}
                <div>
                    <img src={Logo} alt="" srcset="" className='w-16 md:w-18'/>
                </div>

                {/* Menu and Button */}
                <div className='flex items-center gap-8'>
                    
                    {/* Menu */}
                    <div className='hidden lg:flex'>
                        <ul type="none" className='flex gap-5 font-normal text-base
                        text-main-70'>
                            <li>Home</li>
                            <li>Fixture</li>
                            <li>Teams</li>
                            <li>Schedules</li>
                        </ul>
                    </div>

                    {/* Button */}
                    <div>
                        <button className='flex gap-1.5 items-center lg:py-4 lg:px-5
                        py-2 px-3 border-2 border-main-10 rounded-xl text-main-100'>
                            <h4 className='font-semibold text-sm lg:text-base'>54000</h4>
                            <h4 className='font-semibold text-sm lg:text-base'>Coin</h4>
                            <img src={Coin} alt="" srcset="" className='w-7 h-auto'/>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Header;