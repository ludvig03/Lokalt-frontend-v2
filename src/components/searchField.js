import React, { useState } from 'react'
import { UsersIcon} from '@heroicons/react/solid'
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file



function SearchField({placeholder}) {


  const [searchInput, setSearchinput] = useState("")
  const [date, setDate] = useState(new Date())
  const [numGuest, setNumGuest] = useState(1)

  const selectionRange = {
    startDate: date,
    endDate: date,
    key: 'selection',
  }

  const handleSelect = (ranges) => {
    setDate(ranges.selection)
  }

  const resetInput = () => {
    setSearchinput("")
  }

  const search = () => {
    console.log("Søk")
  }



  return (
    <header className="top-0 z-50 grid grid-cols-3 bg-white border-b-2 shadow-sm p-5 md:px-10 ">

      <div className="flex items-center rounded-full pt-2 md:py-2 ">
        <input value={searchInput} onChange={(e) => setSearchinput(e.target.value)}
        type="text" placeholder={placeholder || "Søk her"} className=" flex-grow pl-5 bg-transparent
         outline-none text-gray-600 placeholder-gray-400 w-full md:text-lg md:pl-10"></input>

      </div>
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <Calendar
            date={selection.date}
            onChange={(date) => setDate(date)}
          />

          <div className='flex items-center border-b mb-4 pb-1'>
            <h2 className='text-xl flex-grow font-semibold mb-2'>Antall gjester</h2>
            <UsersIcon className='h-5 pr-2 mb-2'/>
            <input 
            pattern="[0-9]*"
            step={10}
            value={numGuest} 
            type="number" 
            min={0}
            onChange={e => setNumGuest(e.target.value)}
            className="w-16 pr-2 text-lg outline-none text-[#08B2E3] mb-2"/>
          </div>
          <div className='flex'>
            <button className='flex-grow text-gray-500 cursor-pointer' onClick={resetInput}>Avbryt</button>
            <button onClick={search} className='flex-grow text-[#08B2E3] cursor-pointer'>Søk</button>
          </div>
        </div>
      )}



    </header>
  )
}



export default SearchField