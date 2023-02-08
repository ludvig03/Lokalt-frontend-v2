import React, { useState } from 'react'
import {UserCircleIcon, ChatAlt2Icon, PlusCircleIcon, HomeIcon, } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

function NavBar() {

  const router = useRouter()

  const submit = () => {
    router.push({
      pathname: '/submit',
    })
  }

  const home = () => {
    router.push({
      pathname: '/',
    })
  }

  const profile = () => {
    router.push({
      pathname: '/profile',
    })
  }

  const login = () => {
    router.push({
      pathname: '/api/auth/login',
    })
  }

  const contacts = () => {
    router.push({
      pathname: '/contacts',
    })
  }



    return (
      <header className="sticky w-full top-0 z-50 grid grid-cols-4 bg-white py-5 px-4 md:px-10 shadow-md">
      {/* venste */}

      <div className='mx-auto' onClick={home}>    
      <h1 className='font-bold text-3xl md:text-4xl  text-[#08B2E3]'>Venue</h1>
      </div>

      <div className="mx-auto pl-2 my-auto pt-1" onClick={home}>
        <HomeIcon className='w-7 text-gray-500'/>
      </div>
      {/* midt */}
      <div className="mx-auto my-auto pt-1" onClick={login}>
      <ChatAlt2Icon className='w-7 text-gray-500' />


      </div>
      {/* hÃ¸yre */}
      <div className="mx-auto my-auto pt-1" onClick={login}>
      <UserCircleIcon className='w-7 text-gray-500' />
      </div>



    </header>
    )
  
}


export default NavBar