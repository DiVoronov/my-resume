import React, { useRef, useEffect } from "react";
import { PhotoAndDescribe } from "../components/PhotoAndDescribe/PhotoAndDescribe";
import { AllInformation } from "../components/AllInformation/AllInformation";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { changeAllInformation } from "../app/slices/appearSlice";
import { useAppearForElement } from "../app/hooks";
import { hideWelcomePage } from "../app/slices/welcomeSlice";

export function CV () {
  
  const refELement = useRef(null);

  const isVisibleFromSlice: boolean = useSelector( (state: RootState) => state.appear.allInformation);

  useAppearForElement(refELement, changeAllInformation, isVisibleFromSlice);

  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(hideWelcomePage(false));
  }, []);

  return (
    <div style={{minHeight: "100vh"}}>
      <PhotoAndDescribe/>
      <div ref={refELement}></div>
      { isVisibleFromSlice && (<AllInformation/>) }
    </div>
  );
};