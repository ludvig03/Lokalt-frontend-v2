import React from 'react'
import Image from 'next/legacy/image'

function SliderCard({img, title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transistion duration-300 ease-out'>
        <div className="relative h-60 w-60 md:h-[279px] md:w-[279px]">
            <Image src={img} layout="fill" objectFit="cover" className='rounded-xl'/>
        </div>
        <h3 className="text-2xl mt-30">{title}</h3>
    </div>
  )
}

export default SliderCard