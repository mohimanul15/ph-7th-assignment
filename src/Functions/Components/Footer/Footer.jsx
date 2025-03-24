import Bmain from '../../../../src/assets/banner-main.png';
import Bground from '../../../../src/assets/bg-shadow.png';
import Logo from '../../../assets/logo.png';

const Footer = () => {

    const customCss = {
            backgroundImage: `url(${Bground})`,
            backgroundSize: 'cover'
        }

    return (
        <div className='w-full relative mt-60'>
            <div className='absolute border-2 border-stone-400 mt-10 max-w-fit xl:min-w-4xl rounded-3xl p-3 z-10 left-0 right-0 mx-auto top-[-200px]'>

                <div
                    style={customCss} 
                    className='mx-auto py-20 px-2.5 flex flex-col justify-center rounded-3xl bg-white'>

                    <div className='mt-6'>
                        <h2 className='font-bold text-main-100 text-xl md:text-3xl'>
                        Subscribe to our Newsletter
                        </h2>

                        <p className='mt-4 text-main-70 font-inter text-base lg:text-xl font-medium'>
                        Get the latest updates and news right in your inbox!
                        </p>

                        <div className='mt-6 flex items-center flex-col md:flex-row justify-center gap-3'>

                            <input 
                                type="text" 
                                className='border-2 border-main-70 rounded-md text-base font-medium py-3 px-7'
                                placeholder='Enter your email'/>

                            <button className='bg-linear-to-r from-amber-400 to-btn px-7 py-4 rounded-xl text-base font-bold text-main-100'>Subscribe</button>
                        </div>
                    </div>

                </div>

            </div>

            <footer className='bg-[#121f5e] w-full pt-70 absolute'>
                <div className='cont flex justify-center'>
                    <img src={Logo} alt="" className='w-40 h-auto'/>
                </div>

                <div className='flex justify-between max-w-6xl mx-auto py-7 flex-wrap px-3 gap-4'>
                    <div className='text-start'>
                        <h4 className='font-semibold text-base md:text-lg text-white'>About Us</h4>
                        <p className='mt-4 max-w-3xs font-normal text-sm md:text-base text-sky-100'>
                        We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </div>

                    <div className='text-start'>
                        <h4 className='font-semibold text-base md:text-lg text-white'>Quick Links</h4>

                        <ul className='mt-4 font-normal text-sm md:text-base text-sky-100' type='disc'>
                            <li>Home</li>
                            <li>Service</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className='text-start'>
                        <h4 className='font-semibold text-base md:text-lg text-white'>Subscribe</h4>
                        <p className='font-normal text-sm md:text-base text-sky-100 mt-4'>
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <div className='mt-4'>
                        <input 
                                type="text" 
                                className='rounded-l-md text-base font-medium py-3 px-7 bg-[#ffffffAA]
                                focus:outline-0 text-stone-700'
                                placeholder='Enter your email'/>

                            <button className='bg-linear-to-r from-amber-400 to-btn px-7 py-3 rounded-r-md text-base font-bold text-main-100'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <hr className='h-1 text-blue-100 w-full'/>

                <div className='my-3'>
                    <p className='text-center font-normal text-base text-sky-100'>@2024 Your Company All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;