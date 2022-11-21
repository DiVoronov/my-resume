import React from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { closeMenu, openMenu } from "./slices/menuCloseSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppearObject = {
  allInformation: boolean;
  hardSkills: boolean;
  softSkills: boolean;
  about: boolean;
};

export const useAppearForElement = (refELement: React.MutableRefObject<null | HTMLDivElement>, changeFunctionFromSlice: ActionCreatorWithPayload<AppearObject, string>, isVisibleFromSlice: boolean) => {
  const dispatch = useDispatch();
  const changeVisible = (entries: any) => {
    const [ entry ] = entries;
    entry.isIntersecting && dispatch(changeFunctionFromSlice(entry.isIntersecting));
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  };
  

  React.useEffect( () => {
    const observer = new IntersectionObserver(changeVisible, options);
    if (refELement.current) observer.observe(refELement.current);

    return () => {
      if (refELement.current) observer.observe(refELement.current);
    }
  }, [isVisibleFromSlice, refELement]);
};

export const useToggleMenu = (action: boolean) => {
  const dispatch = useDispatch();
  action === false ? dispatch(closeMenu(false)) : dispatch(openMenu(true));
};
