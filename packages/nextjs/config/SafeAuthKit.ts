import { SafeAuthKit, Web3AuthModalPack } from "@safe-global/auth-kit";
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";
import { Web3AuthOptions } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";

// https://dashboard.web3auth.io/
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const WEB3_AUTH_CLIENT_ID = process.env.REACT_APP_WEB3_AUTH_CLIENT_ID!;
// BCUFlNa4NpbBbubd1pQXJbVRg4eYODkHo_QYWEaaJFb_FOA8sxbQhrHkR_FKRFsV2A32ngDeyOL4R71ECOicsbg

console.log(process.env.REACT_APP_WEB3_AUTH_CLIENT_ID);
console.log(WEB3_AUTH_CLIENT_ID);

// https://web3auth.io/docs/sdk/web/modal/initialize#arguments
const options: Web3AuthOptions = {
  clientId: "BCUFlNa4NpbBbubd1pQXJbVRg4eYODkHo_QYWEaaJFb_FOA8sxbQhrHkR_FKRFsV2A32ngDeyOL4R71ECOicsbg",
  web3AuthNetwork: "development",
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x5",
    // https://chainlist.org/
    rpcTarget: `https://rpc.ankr.com/eth_goerli`,
  },
  uiConfig: {
    theme: "dark",
    loginMethodsOrder: ["google", "facebook"],
  },
};

// https://web3auth.io/docs/sdk/web/modal/initialize#configuring-adapters
const modalConfig = {
  [WALLET_ADAPTERS.TORUS_EVM]: {
    label: "torus",
    showOnModal: false,
  },
  [WALLET_ADAPTERS.METAMASK]: {
    label: "metamask",
    showOnDesktop: true,
    showOnMobile: false,
  },
};

// https://web3auth.io/docs/sdk/web/modal/whitelabel#whitelabeling-while-modal-initialization
const openloginAdapter = new OpenloginAdapter({
  loginSettings: {
    mfaLevel: "mandatory",
  },
  adapterSettings: {
    uxMode: "popup",
    whiteLabel: {
      name: "Safe",
    },
  },
});

const pack = new Web3AuthModalPack(options, [openloginAdapter], modalConfig);

export const initSafeAuthKit = async () => {
  console.log(pack);
  const safeAuthKit = await SafeAuthKit.init(pack, {
    txServiceUrl: "https://safe-transaction-goerli.safe.global",
  });
  return safeAuthKit;
};

// export const safeAuthKit = await SafeAuthKit.init(pack, {
//   txServiceUrl: "https://safe-transaction-goerli.safe.global",
// });
