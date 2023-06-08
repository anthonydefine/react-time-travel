import React, { useState } from "react";
import '../app.css'

function WebsiteButton({props}) {

  const [siteModal, setSiteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear() - 13;

  const api = {
    url: "http://archive.org/wayback/available?",
    timestamp: `${year}${month}${day}`
  }

  const [search, setSearch] = useState({});

  const searchPressed = (siteTarget) => {
    setSiteModal(true);
    setIsLoading(true);
    fetch(`${api.url}url=${siteTarget}&timestamp=${api.timestamp}`)
    .then((res) => res.json())
    .then((results) => {
      console.log(results);
      setSearch(results.archived_snapshots.closest.url);
      setIsLoading(false);
    })
  }

  return (
    <>
      <button 
      value={props.url}
      onClick={(e) => searchPressed(e.target.value)}
      style={{ backgroundColor: `${props.style.background}`, color: `${props.style.text}`}}
      className="font-bold py-4 w-full text-sm md:text-3xl lg:text-4xl hover:underline uppercase tracking-wider rounded-full">
        {props.name}
      </button>
      <div className={siteModal ? "activeBackdrop" : "hiddenModal"}>
        <div className={siteModal ? "activeModal" : "hiddenModal"}>
          <div className="flex pb-2">
            <p className="bg-slate-800 text-white px-3 py-1 rounded-lg font-light tracking-wider grow">
              http://www.{props.url}
            </p>
            <button className="bg-purple-400 hover:bg-purple-600 text-white px-3 rounded-full cursor-pointer flex-none ml-3" onClick={() => setSiteModal(false)}>
              Close
            </button>
          </div>
          {isLoading ? (
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-white text-4xl">Loading...</p>
            </div>
            ) : (
            <div className="w-full h-full">
              <iframe className="w-full h-full border border-black bg-white rounded-md" src={search} />
            </div>
          )}
        </div>
      </div>
      
    </>
  )
}

export default WebsiteButton;