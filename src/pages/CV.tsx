import React, { useState, useEffect } from "react";
import { PhotoAndDescribe } from "../components/PhotoAndDescribe/PhotoAndDescribe";
import { AllInformation } from "../components/AllInformation/AllInformation";
import { useDispatch } from "react-redux";
import { hideWelcomePage } from "../app/slices/welcomeSlice";
import { HighBlock } from "../components/ParallaxComponents/HighBlock";
import { Parallax } from "react-scroll-parallax";

export function CV () {

  const [isVisibleAllInformation, setIsVisibleAllInformation] = useState(false);

  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(hideWelcomePage(false));
  }, []);

  return (
    <div style={{minHeight: "100vh"}}>
      <HighBlock/>
      <PhotoAndDescribe/>
      <Parallax onEnter={() => setIsVisibleAllInformation(true)} style={{margin: "1rem", minWidth: "1rem", minHeight: "1rem"}}>
        { isVisibleAllInformation && (
          <AllInformation/>
        )}
      </Parallax>
    </div>
  );
};