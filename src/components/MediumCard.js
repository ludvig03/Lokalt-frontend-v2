import React from 'react'
import Image from 'next/image'

function MediumCard({bilde, navn}) {
  return (
    <div>
        <div className='border-2 flex'>
            <div className=''>
                <Image src={bilde} width={250} height={250} className='rounded-2xl'/>
            </div>
            <div>
                <p>{navn}</p>
            </div>
        </div>
        <div className='border-2 flex'>
            <div className=''>
              
            </div>
            <div>
                <p>{navn}</p>
            </div>
        </div>
    </div>
  )
}

export default MediumCard