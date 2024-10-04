import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const currentUserData = useSelector((state) => state.counter.userData);
  return (
    <>
      <div className="w-[300px] h-screen bg-[#001030] left-0 absolute flex flex-col justify-between z-50 ">
        <nav className="flex flex-col pt-10 text-[20px] text-white">

            <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive 
                ? "pl-8 py-4 transition-all duration-200 ease-linear"
                : "pl-8 py-4 hover:bg-[#077eff] transition-all duration-200 ease-linear"
            }
          >
            Profile
          </NavLink>

          <NavLink 
            to="/chat" 
            className={({ isActive }) =>
              isActive 
                ? "pl-8 py-4 transition-all duration-200 ease-linear"
                : "pl-8 py-4 hover:bg-[#077eff] transition-all duration-200 ease-linear"
            }
          >
            Chat
          </NavLink>

          <NavLink 
            to="/users" 
            className={({ isActive }) =>
              isActive 
                ? "pl-8 py-4 transition-all duration-200 ease-linear"
                : "pl-8 py-4 hover:bg-[#077eff] transition-all duration-200 ease-linear"
            }
          >
            Users
          </NavLink>

          <NavLink 
            to="/friendRequest" 
            className={({ isActive }) =>
              isActive 
                ? "pl-8 py-4 transition-all duration-200 ease-linear"
                : "pl-8 py-4 hover:bg-[#077eff] transition-all duration-200 ease-linear"
            }
          >
            Friend Request
          </NavLink>

          <NavLink 
            to="/friends" 
            className={({ isActive }) =>
              isActive 
                ? "pl-8 py-4 transition-all duration-200 ease-linear"
                : "pl-8 py-4 hover:bg-[#077eff] transition-all duration-200 ease-linear"
            }
          >
            Friends
          </NavLink>

          <NavLink 
            to="/People" 
            className={({ isActive }) =>
              isActive 
                ? "pl-8 py-4 transition-all duration-200 ease-linear"
                : "pl-8 py-4 hover:bg-[#077eff] transition-all duration-200 ease-linear"
            }
          >
            People
          </NavLink>

          <NavLink 
            to="/notifications" 
            className={({ isActive }) =>
              isActive 
                ? "pl-8 py-4 transition-all duration-200 ease-linear"
                : "pl-8 py-4 hover:bg-[#077eff] transition-all duration-200 ease-linear"
            }
          >
            Notifications
          </NavLink>

          <NavLink 
            to="/Messege" 
            className={({ isActive }) =>
              isActive 
                ? "pl-8 py-4 transition-all duration-200 ease-linear"
                : "pl-8 py-4 hover:bg-[#077eff] transition-all duration-200 ease-linear"
            }
          >
            Messege
          </NavLink>
          <NavLink 
            to="/Blocked" 
            className={({ isActive }) =>
              isActive 
                ? "pl-8 py-4 transition-all duration-200 ease-linear"
                : "pl-8 py-4 hover:bg-[#077eff] transition-all duration-200 ease-linear"
            }
          >
            Blocked
          </NavLink>

          <NavLink 
            to="/Settings" 
            className={({ isActive }) =>
              isActive 
                ? "pl-8 py-4 transition-all duration-200 ease-linear"
                : "pl-8 py-4 hover:bg-[#077eff] transition-all duration-200 ease-linear"
            }
          >
            Setting
          </NavLink>

        </nav>

        {/* bottom profile  */}
          <div className="mt-11 flex flex-col mb-10 items-center">
              <img
                className="w-[50px] h-[50px] rounded-full border-2 border-white"
                src={currentUserData?.photoURL}
                alt="image"
              />
            <div className="text-center mt-[10px]">
                <h2 className="font-semibold text-white text-[10px]">{currentUserData?.email}</h2>
                <p className="text-gray-500 text-[15px]">Logout</p>
            </div>
          </div>
      </div>
      
    </>
  )
}

export default Navbar