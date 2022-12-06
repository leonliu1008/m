import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Home(){
    return (
      <div className="flex flex-col items-center">
          <Header/>
          <div className='text-center text-3xl mt-12 mb-8'></div>
          <div className='w-2/5 h-10 rounded-md'>
              <input type="text" value={'關鍵字'} onChange={()=>console.log("Hello")}className="absolute w-2/5 h-10 rounded-md pl-10 focus:outline-0 focus:bg-yellow-700/5"></input>
              <MagnifyingGlassIcon className="absolute h-6 w-6 my-2 ml-2" />
          </div>
          <Footer/>
      </div>
    );
}