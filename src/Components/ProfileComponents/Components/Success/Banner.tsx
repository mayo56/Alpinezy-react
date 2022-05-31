import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Banner = () => {
  const userID = useParams().id;
  const [banneURL, setBannerURL] = useState("");

  const banner = useCallback(async () => {
    await axios({
      method: "get",
      url: `http://192.168.1.38:9999/api/user/banner/${userID}`,
    })
      .then((res) => {
        setBannerURL(res.data.BannerURL);
      })
      .catch((err) => {
        console.log(err);
        setBannerURL(
          "https://leerob.io/static/images/turborepo-design-system-monorepo/banner.png"
        );
      });
  }, [userID]);
  useEffect(() => {
    banner();
  }, [banner]);
  return (
    <div className="z-0 ">
      <img src={banneURL} alt="UserBanner" className="w-full" />
    </div>
  );
};

export default Banner;
