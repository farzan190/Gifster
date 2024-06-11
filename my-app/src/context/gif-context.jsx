/* eslint-disable react/prop-types */
import {createContext, useContext, useEffect, useState} from "react";
import {GiphyFetch} from "@giphy/js-fetch-api";

const GifContext = createContext();

const GifProvider = ({children}) => {
    const gf = new GiphyFetch(import.meta.env.GIPHY_KEY);
  return (
    <GifContext.Provider>
      {children}
    </GifContext.Provider>
  );
};


export default GifProvider;