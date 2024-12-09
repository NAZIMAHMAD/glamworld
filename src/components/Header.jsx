import logo from '../assets/logo.jpg';
import { CiMenuFries } from 'react-icons/ci';
import { HiXMark } from 'react-icons/hi2';
import { useState } from 'react';

const Header = () => {
  const [navbar, setNavbar] = useState(false); // Menu is hidden initially

  const toggle = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <div className='bg-red-200 text-[16px] py-2'>
        <h1 className='w-[85%] mx-auto text-right'>Book the appointment: 9113499324</h1>
      </div>

      {/* Header Section */}
      <header className='bg-white w-full border-3 border-4 border-red-600 grid place-items-center'>

        <div className='border-5 w-[90%] flex justify-between items-center  border-red-400 h-auto '>

        <div className='w-auto h-auto border-4'>
          <img src={logo} alt='logo' className='w-[5rem] h-16 rounded-full' />

          {/* Toggle Icon */}
          <CiMenuFries
            className={`text-[30px]  ${navbar ? 'hidden' : 'block'}`}
            onClick={toggle}
          />

        </div>
 
          {/* Navigation Menu */}
          <nav
            className={` bg-red-700 p-4  border-2   w-[50%]  transition-transform duration-300 ${navbar ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <ul className=' border-2 border-red-600 flex justify-between items-center  w-full font-thin capitalize text-black '>

              <li>  {/* Close Icon */}
          <HiXMark
            className={`text-2xl  ${navbar ? 'block' : 'hidden'}`}
            onClick={toggle}
          /></li>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#services'>Services</a>
              </li>
              <li>
                <a href='#product'>Product</a>
              </li>
              <li>
                <a href='#contact'>Contact Us</a>
              </li>
            </ul>
          </nav>

          {/* Book Appointment */}
          <div className='hidden sm:block w-auto border-2'>
            Book Appointment
          </div>


        </div>

       
      </header>
    </>
  );
};

export default Header;
