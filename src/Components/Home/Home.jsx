import React from 'react'
import '../../Components/Home/Home.css'
import { useSelector } from "react-redux";
import Navbar from '../Navbar/Navbar';

const Home = () => {
    const currentUserData = useSelector((state) => state.counter.userData);

  return (
    <>
      <div className='home-page px-40 py-40 duration-300 bg-[#3DC2EC] h-screen'>
            <div className="main-items relative ">

                <div className="center flex flex-col items-center justify-center ">
                    {/* profile picture  */}
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-gray-500 rounded-full overflow-hidden">
                        <img
                            className="object-cover object-center h-32"
                            src={currentUserData?.photoURL}
                            alt="Image"
                        />
                    </div>

                    {/* text  */}
                    <div className="text-center mt-[30px]">
                        <h2 className="font-semibold text-[25px]">{currentUserData?.displayName}</h2>
                        <p className="text-gray-500 text-[20px] mt-[10px]">{currentUserData?.email}</p>
                    </div>
                </div>
               
            </div>
        </div>
    </>
  )
}

export default Home
