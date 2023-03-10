import React from 'react'
import Image from 'next/legacy/image'
import { useRouter } from 'next/router'


function SmallCard( {navn, bilde, by, id} ) {

  const router = useRouter()



  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100
    hover:scale-105 transition transform duration-200 ease-out shadow-sm" onClick={() => {
      router.push({
        pathname: `lokaler/${id}`,
      })
    }}> 

      <div className="relative h-16 w-16">
        <Image src={bilde} layout="fill" className="rounded-lg object-cover" />
      </div>

      <div>
          <h2>{navn}</h2>
          <h3 className="text-gray-500">{by}</h3>
      </div>
    </div>
  )
}

export default SmallCard