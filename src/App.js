import { NavLink, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { Users } from "./pages/Users";

function App() {
  return (
      <div className="App">
          <nav className="w-full p-8 justify-between flex bg-sky-600 text-white">
            <ul className="flex gap-4 font-bold text-xl  ">
              <li className='hover:scale-110 transition-all'>
                <NavLink to='/' >Home</NavLink>
              </li>
              <li  className='hover:scale-110 transition-all'>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li className='hover:scale-110 transition-all'>
                <NavLink to='/settings'>Setings</NavLink>
              </li>
            </ul>
          </nav>
        <div>
          <Routes>
            
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>

            <Route path="/settings" element={<Settings/>}>
              <Route index element={<Users/>}/>
              <Route path="profile" element={<Profile/>}/>
            </Route>

          </Routes>
        </div>

      </div>
  );
}

export default App;
