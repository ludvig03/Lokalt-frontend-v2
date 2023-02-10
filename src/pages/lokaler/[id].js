import React, { useEffect } from 'react'
import Image from 'next/legacy/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { TrashIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { LocationMarkerIcon } from '@heroicons/react/outline'
import Map, {Marker, NavigationControl} from 'react-map-gl';
import Head from 'next/head'
import {UserGroupIcon, HomeIcon, ClockIcon, CalendarIcon} from '@heroicons/react/outline'
import {PencilAltIcon} from '@heroicons/react/outline'
import NavBar from '../../components/NavBar'
import Router, { useRouter } from 'next/router'
import Footer from '../../components/Footer'


export const getStaticPaths = async () => {
  const res = await fetch('https://venue-backend-v2.herokuapp.com/api/lokaler')
  const data = await res.json()
  const paths = data.map(lokale => {
    return {
      params: { id: lokale._id.toString() }
    }
  })
  return {
    paths,
    fallback: false,
  }
}



export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://venue-backend-v2.herokuapp.com/api/lokaler/' + id)
  const data = await res.json()

  return {
    props: { lokale: data }
  }
}








function Lokale({lokale}) {

  const [lagAnnmeldelse, setLagAnnmeldelse] = useState(false)

    console.log(lokale)


  return (
    <div>
        <Head>
          <title>{lokale.title}</title>
          <link rel="icon" href="/favicon.ico" />
          {lagAnnmeldelse? (
            <div></div>
          ) : (
            <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />

          )}
    
        </Head>
        <NavBar />
        <div className='mb-10'>
            <div>
              <div className='mt-5 relative w-72 h-72 mx-auto rounded-md'>
                <Image src={lokale.bilder[0]} layout="fill" objectFit="cover" className='mx-auto rounded-md'></Image>
              </div>
            </div>
            <div className='grid grid-cols-3 '>
                <div className='ml-6 col-span-2'>
                  <h1 className=' mt-8 mb-4 font-medium text-2xl'>{lokale.navn}</h1>
                </div>
                <div className='mr-6 mt-2 ml-auto'>
                  <div className='my-auto flex'>
                    <p className='text-gray-500 mt-8 mr-2'>{lokale.star}</p>
                    <StarIcon className='h-6 w-6 text-[#08B2E3] mt-8' />
                  </div>
                </div>


                <div className='col-span-3'>
                  <div className='flex mx-6'>
                    <button className='bg-[#08B2E3] rounded-md py-1 flex-grow font-semibold text-white mr-4 hover:cursor-pointer'>Kontakt</button>
                    <button className='border-2 rounded-md border-gray-400 p-1'>
                      <HeartIcon className='h-6 w-6 text-gray-400 ' />
                    </button>
                  </div>
                </div>

                <div className='col-span-3'>
                  <div className='grid grid-cols-2'>

                  <div className='ml-6'>
                    <h1 className=' mt-8 font-medium text-2xl'>Pris per dag</h1>
                    <p className='text-xl'>{lokale.pris} Kr</p>
                  </div>

                    <div className='text-right flex right-0 '>
                      <div className='flex mt-10 ml-auto mr-6'>
                        <p className='text-gray-500 my-auto'>{lokale.geoLokasjon.addresse}</p>
                        <LocationMarkerIcon className='w-6 my-auto ml-2 text-[#08B2E3]'/>
                      </div>
                    </div>

                  </div>
                </div>

                <div className='mx-6 col-span-3'>
                    <h1 className='mt-8 font-medium text-xl'>Beskrivelse</h1>
                    <p className='mt-2 text-gray-500'>{lokale.beskrivelse}</p>
                </div>

                <div className='mx-6 col-span-3 mt-4'>
                <h1 className='mt-8 font-medium text-xl'>Passende arrangementer</h1>
                  <div className='inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6'>
                    {lokale.lokaleTyper.map((type) => (
                      <div key={type} className='block w-30 md:mx-auto'>
                        <p className='mt-2 mr-4 p-1 text-gray-500 '>{type}</p>
                      </div>
                    ))
                    }
                  </div>
                </div>

                <div className='mx-6 col-span-3 mt-4'>
                <h1 className='mt-8 font-medium text-xl'>Muligheter</h1>
                  <div className='inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6'>
                    {lokale.muligheter.map((type) => (
                      <div key={type} className='block w-30 md:mx-auto'>
                        <p className='mt-2 mr-4 p-1 text-gray-500 '>{type}</p>
                      </div>
                    ))
                    }
                  </div>
                </div>

                <div className='mx-6 col-span-3 mt-4'>
                  <h1 className='mt-8 font-medium text-xl mb-3'>Mer info</h1>
                  <div className='grid grid-cols-2 w-full border-2 rounded-lg'>

                    <div className='mx-auto w-full flex h-12 border-r-2'>
                      <UserGroupIcon className='h-6 w-6 text-[#08B2E3] my-auto mx-3' />
                      <p className='my-auto'>{lokale.antallPersoner} Personer</p>
                    </div>
                    <div className='mx-auto w-full flex h-12'>
                      <HomeIcon className='h-6 w-6 text-[#08B2E3] my-auto mx-3' />
                      <p className='my-auto'>{lokale.kvadratMeter} m2</p>
                    </div>

                    <div className='mx-auto w-full flex h-12 border-t-2 border-r-2'>
                      <ClockIcon className='h-6 w-6 text-[#08B2E3] my-auto mx-3' />
                      <p className='my-auto'>18:00 - 03:00</p>
                    </div>
                    <div className='mx-auto w-full flex h-12 border-t-2'>
                      <CalendarIcon className='h-6 w-6 text-[#08B2E3] my-auto mx-3' />
                      <p className='my-auto'>Alle dager i uka</p>
                    </div>

                  </div>
                </div>

                <div className='mx-6 col-span-3 mt-0'>
                  <h1 className='mt-5 font-medium text-xl mb-3'>Utleier</h1>

                    <div className='mx-auto w-full flex h-16 border-2 rounded-lg'>
                      <img src={lokale.eier.profilBilde} className='h-10 w-10 text-[#08B2E3] my-auto mx-2 border-2 rounded-full' />
                      <h1 className='my-auto font-semibold ml-2'>{lokale.eier.navn}</h1>
                    </div>

                </div>

                  

                <div className='col-span-3 mt-12 mb-2 flex ml-4'>
                  <LocationMarkerIcon className='w-6 my-auto mr-2 text-[#08B2E3]'/>
                  <p className=''>{lokale.location}</p>
                </div>
                <div className='mx-3 col-span-3'>
                  <div className='mx-auto w-[340px] h-[300px] overflow-hidden rounded-xl'>
                  <Map
                    initialViewState={{
                      longitude: lokale.long,
                      latitude: lokale.lat,
                      zoom: 11
                    }}
                    style={{width: '100%', height: '100%'}}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken="pk.eyJ1IjoidG9hc3RlZGJyZWFkNDgiLCJhIjoiY2w4Mzh2aXE3MDNqODN3cDZ0b2NvN2FtZiJ9.ECoocvTOOyxsaOV-BSBYUg"
                    className="map-container "
                    >
                      <NavigationControl position='top-left' className="z-50" />
                      <Marker longitude={lokale.geoLokasjon.koordinater.lng} latitude={lokale.geoLokasjon.koordinater.lat}>
                      </Marker>
                    </Map>
                  </div>
                </div>
                <div className='col-span-3 flex'>
                  <h2 className="text-3xl font-semibold ml-6 mt-6 text-[#333333]">
                      Annmeldelser
                  </h2>
                  <button
                  onClick={() => {setLagAnnmeldelse(true)}} 
                  className='ml-auto mt-auto mr-6 rounded-lg shadow-lg bg-[#08B2E3] text-white font-semibold p-1 col-start-3 flex'>
                    <p className='my-auto mx-2'>Legg til</p>
                    <PencilAltIcon className='w-6 mt-auto mr-2 text-white'/>
                  </button>
                </div>
                <div className='mx-6 col-span-3 mt-4 fle'>
                  <div className='flex space-x-3 overflow-scroll scrollbar-hide py-3'>
{/*                     {lokale.annmeldelser.map((annmeldelse) => (
                      <Annmeldelser img={annmeldelse.img} title={annmeldelse.tittel} tekst={annmeldelse.tekst} key={Math.random()}/>
                    ))

                    } */}
                  </div>
                </div>


            </div>
        </div>
        <Footer />
          {lagAnnmeldelse? (
            <LagAnnmeldelse setLagAnnmeldelse={setLagAnnmeldelse} _id={lokale._id}/>
          ) : (
            <div></div>
          )}
    
    </div>
  )
}

export default Lokale