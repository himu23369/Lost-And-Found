// Navbar.jsx
import React, { useState,useRef } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
// import { SlLogin } from 'react-icons/sl';
import { CgHome } from 'react-icons/cg';
import { VscAccount } from 'react-icons/vsc';
import { TbListSearch } from 'react-icons/tb';
import { CgSearchFound } from 'react-icons/cg';
import { VscReport } from 'react-icons/vsc';
// import { VscSettingsGear } from 'react-icons/vsc';
import { TfiHelpAlt } from 'react-icons/tfi';
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom'; // Import the Link component
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const toggleButtonRef = useRef(null);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleButtonClick = (e) => {
    e.stopPropagation();
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown);
  };


  return (
    <div className={`max-w-[1640px] mx-auto flex justify-between items-center p-4 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className={`cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}>
          <AiOutlineMenu size={30} />
        </div>
        <div className="flex items-center ml-4">
          {/* Logo */}
          <Link to="/">
            <img src={require(`./logo${darkMode ? '3' : ''}.png`)} alt="Logo" className={`h-8 sm:h-10 lg:h-12`} /> 
          </Link>
        </div>
      </div>

      {/* Search Input */}
      <div className={`bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ${darkMode ? 'text-black' : 'text-white'}`}>
        <AiOutlineSearch size={25} />
        <input
          className={`bg-transparent p-2 w-full focus:outline-none ${darkMode ? 'text-black' : 'text-gray-500'}`}
          type='text'
          placeholder='Search items'
        />
      </div>

      {/* DarkMode button (to the very right of the login button) */}
      <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* LogOut button */}
      <Link to="/">
              <button className={`hidden md:flex items-center py-2 px-4 rounded-full hover:bg-blue-700 ml-4 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                LogOut 
              </button>
            </Link>
          <span className="md:hidden" onClick={toggleButtonClick} ref={toggleButtonRef} >
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

      {/* Side drawer menu */}
      <div className={nav ? `fixed top-0 left-0 w-[300px] h-screen z-10 duration-300 ${darkMode ? 'bg-black' : 'bg-white'}` : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className={`absolute right-4 top-4 cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}
        />
        {/* Logo for the side drawer */}
        {/* <img src={require(`./logo${darkMode ? '3' : ''}.png`)} alt="Logo" className={`h-8 sm:h-10 lg:h-12`} /> */}
        <h2 className={`text-xl p-3 flex items-center ${darkMode ? 'text-white' : 'text-black'}`}>
          <img src={require(`./logo2${darkMode ? '3' : ''}.png`)} alt="Logo" className="h-8 sm:h-10 lg:h-12 mr-2" />
          <span className='font-bold'>LostNFound</span> Store
        </h2>

        {/* Navigation links in the side drawer */}
        <nav>
          <ul className={`flex flex-col p-4 ${darkMode ? 'text-white' : 'text-black'}`}>
            <Link to="/homepage"><li className='text-xl py-4 flex'><CgHome size={25} className='mr-4' /> Home</li></Link>
            <Link to="account"><li className='text-xl py-4 flex'><VscAccount size={25} className='mr-4' /> Account</li></Link>
            <Link to="/lost-items"><li className='text-xl py-4 flex'><TbListSearch size={25} className='mr-4' /> Lost Item Section</li></Link>
            <Link to="/found-items"><li className='text-xl py-4 flex'><CgSearchFound size={25} className='mr-4' /> Found Item Section</li></Link>
            <Link to="/reportitem"><li className='text-xl py-4 flex'><VscReport size={25} className='mr-4' /> Report Item</li></Link>
            {/* <Link to="/settings"><li className='text-xl py-4 flex'><VscSettingsGear size={25} className='mr-4' /> Settings</li></Link> */}
            <Link to="/help"><li className='text-xl py-4 flex'><TfiHelpAlt size={25} className='mr-4' /> Help</li></Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

