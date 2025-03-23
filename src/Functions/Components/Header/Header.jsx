import PropTypes from 'prop-types';
import Coin from '../../../assets/coin.png';
import Logo from '../../../../src/assets/logo.png';

const Header = ({currentBal}) => {
    return (
        <div className='backdrop-blur-lg py-6 sticky top-0'>

            <div className='cont flex justify-between container mx-auto px-2 md:px-3'>

                {/* Logo */}
                <div>
                    <img src={Logo} className='w-16 md:w-18'/>
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
                            <h4 className='font-semibold text-sm lg:text-base'>{currentBal} Coin</h4>
                            <img src={Coin} className='w-7 h-auto'/>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

Header.PropTypes = {
    currentBal: PropTypes.number.isRequired
}

export default Header;