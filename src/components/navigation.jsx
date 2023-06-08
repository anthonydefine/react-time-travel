import React from "react";
import mainLogo from "../assets/mainlogo.png";
import viteLogo from "../../public/vite.svg";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwindLogo.png";
import '../app.css';

function Navigation() {
  return (
    <>
      <div className="flex justify-between items-center sticky top-0 px-4 py-6 lg:px-8 bg-slate-700 text-white shadow-md">
        <div>
          <img className="hiddenShake" src={mainLogo} />
          {/* <a href="https://www.flaticon.com/free-icons/time-machine" title="time machine icons">Time machine icons created by Freepik - Flaticon</a> */ }
        </div>
        <div>
          <h1 className="uppercase text-xl md:text-2xl font-bold under">Welcome back to 2010!</h1>
        </div>
        <div className="md:flex flex-col hidden">
          <h3 className="text-center mb-3">Built with:</h3>
          <div className="flex">
            <img src={viteLogo} />
            <img className="px-2" src={reactLogo} />
            <img src={tailwindLogo} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation;