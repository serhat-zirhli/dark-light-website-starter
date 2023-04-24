import React, {useState, useEffect} from 'react';

import LogoDark from "../assets/img/logo-dark.svg"
import LogoWhite from "../assets/img/logo-white.svg"
import {BsFillSunFill, BsMoonFill, BsCheck} from "react-icons/bs"

import GirlImg from "../assets/img/girl.png"


const Hero = () => {
  const [theme, setTheme] = useState("light");
  const handleThemeSwitch = () =>{
    if(theme === "light"){
      setTheme("dark")
    }
  }
  return (
    <section className='min-h-[740px] w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark'>
      
      <button className='p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center'>
        {theme === "light" ? <BsMoonFill /> : <BsFillSunFill />}
      </button>
    </section>
    );
};

export default Hero;
