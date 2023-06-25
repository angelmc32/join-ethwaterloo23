import React from "react";
import { useQuery } from "@airstack/airstack-react";
import { ETHTokyoQuery, ETHTokyoFinalistQuery, ETHLisbonQuery, ETHLisbonFinalistQuery, ScalingEthereumQuery, ScalingEthereumFinalistQuery} from "~~/queries";

export const AirstackTokyo = () => {
  const { data, loading, error } = useQuery(ETHTokyoQuery, {});
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}
    </div>
  );
};

export const AirstackTokyoFinalist = () => {
  const { data, loading, error } = useQuery(ETHTokyoFinalistQuery, {});
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}
    </div>
  );
};

export const AirstackLisbon = () => {
  const { data, loading, error } = useQuery(ETHLisbonQuery, {});
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}
    </div>
  );
};

export const AirstackLisbonFinalist = () => {
  const { data, loading, error } = useQuery(ETHLisbonFinalistQuery, {});
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}
    </div>
  );
};

export const AirstackScalingEthereum = () => {
  const { data, loading, error } = useQuery(ScalingEthereumQuery, {});
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}
    </div>
  );
};

export const AirstackScalingEthereumFinalist = () => {
  const { data, loading, error } = useQuery(ScalingEthereumFinalistQuery, {});
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}
    </div>
  );
};
