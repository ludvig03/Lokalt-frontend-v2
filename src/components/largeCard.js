import React from 'react'
import Image from 'next/image'

function LargeCard({img, title, description, buttonText}) {
  return (
    <div className='relative py-16 cursor-pointer'>
        <div className='relative h-96 min-w-[300px]'>
            <Image src={img} layout="fill" objectFit="cover" className='rounded-2xl brightness-50'/>
        </div>
        <div className='absolute top-32 left-12'>
            <h3 className='text-4xl mb-3 w-64 font-semibold text-white'>{title}</h3>
            <p className='text-white'>{description}</p>
            <button className='text-sm text-white bg-[#08B2E3] px-4 py-2
            rounded-lg mt-5 font-semibold'>{buttonText}</button>
        </div>
    </div>
  )
}

export default LargeCard