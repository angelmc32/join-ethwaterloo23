import React from "react";
import { useQuery } from "@airstack/airstack-react";
import { ETHTokyoQuery } from "~~/queries";

export const Airstack = () => {
  const { data, loading, error } = useQuery(ETHTokyoQuery, {});
  console.log(ETHTokyoQuery, data, loading, error);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}
    </div>
  );
};
