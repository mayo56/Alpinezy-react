import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../../App";

const ProfileCard = () => {
  const [user, setUser] = useState({ id: 0, username: "", bio: "", banner: "", discriminator: "", avatarurl:"" });
  const userID = useParams().id;

  const imgLinkBadge = "https://bot.to/wp-content/uploads/2020/09/badges_5f6fc9e27fb25.png"

  const getUser = useCallback(() => {
    axios({
      method: "get",
      url: `${API_URL}/api/user/get/${userID}`,
    }).then(res => {
      setUser(res.data.user[0]);
      console.log(res.data.user[0]);
    });
  }, [userID])
  
  useEffect(() => {
    getUser();
  }, [getUser])

  return (
    <div className="absolute w-[20%] ml-[75%] top-[300px]">
      <div className="z-20 bg-[#325D79] w-[100%] h-auto rounded-lg">

        {/* Photo de profile et badge */}
        <div className="grid grid-cols-2 grid-rows-1 m-auto w-[90%]">

          {/* Badges */}
          <div className="grid grid-rows-1 mt-[20px]">
            <img src={imgLinkBadge} alt="Badge1" className="w-[40%] m-auto rounded-full" />
          </div>

          {/* Photo de profile */}
          <div className="grid grid-rows-1 mt-[20px]">
            <img src={`${API_URL}/api/user/avatar/${user.avatarurl}`} alt="PP" className="w-[80%] m-auto rounded-full" />
          </div>

        </div>

        {/* Pseudo, discriminator et bio */}
        <div>
          <div className="mt-[20px]">
            <h1 className="text-center text-black text-[200%] w-[100%]">{user.username}</h1>
            <h2 className="text-center text-black mt-[-5px]">#{user.discriminator}</h2>
          </div>
          <br />
          <div>
            <p className="text-center text-black text-[100%] w-[100%]">{user.bio}</p>
          </div>
        </div>

        {/* Bouton abonnement */}
        <div className="mt-[20px] flex justify-center">
          <button className="bg-[#40CB34] text-black text-center text-xl w-[50%] h-[40px] rounded-lg">Suivre</button>
        </div>
        <br />
      </div>

      <div>
        {/* bouton signaler */}
        <div className="flex justify-end mt-[20px]">
          <button className="bg-[#cb3434] text-black text-center text-xl w-[50%] h-[40px] rounded-lg">Signaler</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
