import React from 'react';
import { WEBSITES } from '../src/websites';
import Navigation from './components/navigation';
import WebsiteButton from './components/website-button';
import Footer from './components/footer';
import './app.css'

function App() {

  return (
    <>
      <div className='h-screen bg-slate-600'>
        <Navigation />
          <div>
            <h1 className='text-white text-4xl text-center py-4'>Time travel on popular websites</h1>
            <h4 className='text-white md:text-xl text-center py-4'>Click on a button to go...</h4>
            <ul className='grid grid-cols-2 gap-12 px-4 lg:px-8 py-8'>
              {WEBSITES.map((website) => {
                return (
                  <li key={website.id}>
                    <WebsiteButton props={website} />
                  </li>
                )
              })}
            </ul>
          </div>
        <Footer />
      </div>
    </>
  )
}

export default App;
