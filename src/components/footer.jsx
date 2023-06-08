import React from "react";

function Footer() {
  return (
    <>
      <div className="flex justify-between items-center fixed inset-x-0 bottom-0 bg-slate-700 text-white text-xs md:text-sm px-4 py-6 lg:px-8">
        <p>Data provided by: <a className="underline" href="https://archive.org/web/" target="_blank">WayBackMachine</a></p>
        <div className="text-center">
          <p>Created by: Anthony Define</p>
          <p className="text-xs">Visit my portfolio page <a className="underline" href="https://anthonydefine.github.io/My-Portfolio/" target="_blank">here</a>.</p>
        </div>
      </div>
    </>
  )
}

export default Footer;