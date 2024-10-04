import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useEffect, useState } from "react";

const Friends = () => {
    // state 
    const [friends, setFriends] = useState([]);

    // firebase 
  const db = getDatabase();

    // firebase functions
    useEffect(() => {
        const starCountRef = ref(db, 'friends/');
        onValue(starCountRef, (snapshot) => {
          let arr = [];
          snapshot.forEach((item) => {
            arr.push({ ...item.val(), key: item.key });
          });
          setFriends(arr);
        });
      }, [db]);
    
      // remove button 
      const handleremove = (data) => {
        // remove from database friends
        remove(ref(db, 'friends/' + data.key));
      };

  return (
    <>
    <div className="friend mt-[55px] flex flex-col items-center gap-4 ml-[350px] w-[400px] h-[500px] bg-[#004225] rounded-lg shadow-2xl ">
      <p className="font-semibold text-white text-[20px] mt-4">Friends</p>
      {/* mapping  */}
      {
        friends.map((item)=>(
          <div key={item.key} className="friend-req bg-[#ffffff] rounded-lg w-[360px] h-[80px]  flex items-center relative shadow-2xl">
          <img
                    className="w-[50px] h-[50px] rounded-full border-2 border-gray-500 absolute left-4"
                    src={item.friendPhoto}
                    alt="image"
                  />
    
          <p className="font-semibold text-[#001030] text-[15px] absolute left-[80px]">{item.friendName}</p>

          <div className="button flex gap-3 items-center absolute right-3">
            <button  onClick={() => handleremove(item)} className="font-semibold text-white rounded-[15px]  text-[12px] py-1 px-2 bg-red-600 hover:bg-[#077eff]">Remove</button>
          </div>

          </div>
        ))
      }
    </div>
    </>
  )
}

export default Friends
