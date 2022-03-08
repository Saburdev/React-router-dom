import React from 'react'
import { Link, Outlet } from 'react-router-dom' 

export const Settings = () => {
  return (
    <div>
        <h1 className='flex justify-center items-center  text-sky-600 text-6xl hover:text-violet-500 transition-all hover:scale-110'>Settings&#8595;</h1>
        <ul className='flex gap-4 pl-96 pt-8 text-sky-600 font-bold text-xl'>
            <li className='hover:scale-110 transition-all'><Link to=''>Users</Link></li>
            <li className='hover:scale-110 transition-all'><Link to='profile'>Profile</Link></li>
        </ul>
        <div id='outlet'>
            <Outlet/>
        </div>
    </div>
  )
}
