import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileCard = () => {
  const [user, setUser] = useState({ id: 0, username: "", bio: "", banner: "", discriminator: "" });
  const userID = useParams().id;

  const imgLinkBadge = "https://bot.to/wp-content/uploads/2020/09/badges_5f6fc9e27fb25.png"
  const ppLink = "https://i2.wp.com/velina.info/wp-content/uploads/2020/10/azura_lane_121539142_391019138741109_70959758741075226_n.jpg?resize=840%2C840&ssl=1"

  const getUser = useCallback(() => {
    axios({
      method: "get",
      url: `http://192.168.1.38:9999/api/user/get/${userID}`,
    }).then(res => {
      setUser(res.data.user[0]);
      console.log(user);
    });
  }, [])

  useEffect(() => {
    getUser();
  }, [])

  return (
    <div className="w-[40%] mr-[40px] ml-auto">
      <div className="z-20 bg-[#325D79] -translate-y-[30%] w-[100%] h-auto rounded-lg">

        {/* Photo de profile et badge */}
        <div className="grid grid-cols-2 grid-rows-1 m-auto w-[90%]">

          {/* Badges */}
          <div className="grid grid-rows-3 mt-[20px]">
            <img src={imgLinkBadge} alt="Badge1" className="w-[40%] m-auto rounded-full" />
            <img src={imgLinkBadge} alt="Badge2" className="w-[40%] m-auto rounded-full" />
            <img src={imgLinkBadge} alt="Badge3" className="w-[40%] m-auto rounded-full" />
          </div>

          {/* Photo de profile */}
          <div className="grid grid-rows-1 mt-[20px]">
            <img src={ppLink} alt="PP" className="w-[80%] m-auto rounded-full" />
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
            <p className="text-center text-black text-[100%] w-[100%]">voici ma bio blblblb</p>
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
        <div className="-translate-y-[100px] flex justify-end">
          <button className="bg-[#cb3434] text-black text-center text-xl w-[50%] h-[40px] rounded-lg">Signaler</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
