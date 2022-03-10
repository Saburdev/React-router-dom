import { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Blogs } from "./pages/Blogs";
import { Home } from "./pages/Home";
import {Blog} from "./pages/Blog"
import { Authors } from "./pages/Authors";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { Users } from "./pages/Users";

function App() {

  const [blogs , setBlogs] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setBlogs(json))
  },[])


  return (
      <div className="App">
          <nav className="w-full p-8 justify-between flex bg-sky-600 text-white">
            <ul className="flex gap-4 font-bold text-xl  ">
              <li className='hover:scale-110 transition-all'>
                <NavLink to='/' >Home</NavLink>
              </li>
              <li  className='hover:scale-110 transition-all'>
                <NavLink to='/blogs'>Blogs</NavLink>
              </li>
              <li>
                <NavLink to='/authors'> Authors</NavLink>
              </li>
            </ul>
          </nav>
        <div>
          <Routes>
            
            <Route index element={<Home/>}/>
            <Route path="/blogs" element={<Blogs blogs={blogs}/>}/>
            <Route path="/blogs/:id" element={<Blog blogs={blogs}/>}/>
            <Route path="/authors" element={<Authors/>}/>
          </Routes>
        </div>

      </div>
  );
}

export default App;
