import { useCallback, useEffect } from "react";
import { getCsrfToken, signIn, useSession } from "next-auth/react";
import { SiweMessage } from "siwe";
import { useAccount, useConnect, useNetwork, useSignMessage } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

function Siwe() {
  const { signMessageAsync } = useSignMessage();
  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { data: session } = useSession();

  const handleLogin = useCallback(async () => {
    try {
      const callbackUrl = "/protected";
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId: chain?.id,
        nonce: await getCsrfToken(),
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });
      signIn("credentials", {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl,
      });
    } catch (error) {
      window.alert(error);
    }
  }, [address, chain?.id, signMessageAsync]);

  useEffect(() => {
    console.log(isConnected);
    if (isConnected && !session) {
      handleLogin();
    }
  }, [handleLogin, isConnected, session]);

  return (
    <div className="min-h-screen bg-indigo-800">
      <button
        onClick={e => {
          e.preventDefault();
          if (!isConnected) {
            connect();
          } else {
            handleLogin();
          }
        }}
      >
        Sign-in
      </button>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
export default Siwe;
