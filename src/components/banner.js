import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image src="https://media.cntraveler.com/photos/56d8a25d7243f8953e34482c/master/w_2048,h_1536,c_limit/modern-honolulu-wedding-cr-courtesy.jpg" 
        layout="fill" objectFit="cover" alt="Bilde av lokalet" className='brightness-75 bg-black'/>
        <div className="absolute top-24 md:top-36 lg:top-56 xl:top-64 w-full text-center">
          <p className='text-md sm:text-lg text-white font-semibold shadow-2xl'>Finne et nytt lokalet?</p>
          <button className="text-[#08B2E3] bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 
          hover:shadow-2xl active:scale-90 transition duration-150" >Utforsk</button>
        </div>
    </div>
  )
}

export default Banner