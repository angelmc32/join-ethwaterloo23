import { useState } from "react";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";

import { useDarkMode } from "usehooks-ts";

import "~~/styles/globals.css";
import { init } from "@airstack/airstack-react";
import { Airstack } from "~~/components/Airstack";

init("2255696ed1c340cbbba13a9271334403");

const ScaffoldEthApp = () => {
  return (
    <div>
    <Airstack/>
    </div>
  );
};

export default ScaffoldEthApp;
