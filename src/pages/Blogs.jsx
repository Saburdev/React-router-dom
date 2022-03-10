import React from 'react'
import { Link } from 'react-router-dom'

export const Blogs = ( {blogs} ) => {
  return (
    <div className='w-full'>
        <h1 className='flex justify-center items-center pt-96 text-sky-600 text-6xl hover:text-violet-500 transition-all hover:scale-110'>Blogs</h1>
        {
          blogs.map((blog,index) => {
            return(
              <div key={index}>
                <h1>{blog.title.substring(0,15).toUpperCase()}</h1>
                <p>{blog.body.substring(0,20)}...</p>
                <Link to={`${index + 1}`}>See More</Link>
                <hr />  
              </div>
            )
          })
        }
    </div>
  )
}
