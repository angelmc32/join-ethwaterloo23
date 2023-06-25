import { useState } from "react";
import { ETHTokyoQuery, ETHLisbonQuery, ScalingEthereumQuery } from "~~/queries";
import React, { useEffect } from 'react';
import { useQuery, fetchQuery } from "@airstack/airstack-react";

fetchQuery(ETHTokyoQuery, {}).then(console.log);
export const Airstack = () => {
    
  
 // console.log(ETHTokyoQuery, useQuery);
    //const { data, loading, error } = useQuery(ETHTokyoQuery, {});
    //const [fetch, { data, loading, error }] = useLazyQuery(ETHTokyoQuery);
    
  return(
    <div>
      
      
   
    </div>
    );
}