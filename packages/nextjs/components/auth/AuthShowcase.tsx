import React, { useEffect, useState } from "react";
import { getCsrfToken, signIn, signOut, useSession } from "next-auth/react";
// SIWE Integration
import { SiweMessage } from "siwe";
import { useAccount, useConnect, useDisconnect, useNetwork, useSignMessage } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const AuthShowcase: React.FC = () => {
  // Hooks
  const { data: sessionData } = useSession();
  // State
  const [showConnection, setShowConnection] = useState(false);

  // Wagmi Hooks
  const { signMessageAsync } = useSignMessage();
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();

  // Functions
  /**
   * Attempts SIWE and establish session
   */
  const onClickSignIn = async () => {
    try {
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId: chain?.id,
        // nonce is used from CSRF token
        nonce: await getCsrfToken(),
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });
      signIn("credentials", {
        message: JSON.stringify(message),
        redirect: false,
        signature,
      });
    } catch (error) {
      window.alert(error);
    }
  };

  /**
   * Sign user out
   */
  const onClickSignOut = async () => {
    await signOut();
  };

  // Hooks
  /**
   * Handles hydration issue
   * only show after the window has finished loading
   */
  useEffect(() => {
    setShowConnection(true);
  }, []);

  // Render
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {sessionData ? (
        <div className="mb-4 text-center">
          {sessionData ? (
            <div className="mb-4">
              <label className="block text-white/80 mb-2">Logged in as</label>
              <code className="block p-4 text-white bg-black/20 rounded">{JSON.stringify(sessionData)}</code>
            </div>
          ) : null}

          <button
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            onClick={onClickSignOut as () => void}
          >
            Sign Out
          </button>
        </div>
      ) : showConnection ? (
        <div className="mb-4">
          {isConnected ? (
            <button
              className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
              onClick={onClickSignIn as () => void}
            >
              Sign In
            </button>
          ) : null}
        </div>
      ) : null}
      {showConnection ? (
        <div className="text-center">
          {address ? (
            <p className="mb-4">
              <code className="block p-4 text-white bg-black/20 rounded">{address}</code>
            </p>
          ) : null}
          <button
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            onClick={() => (!isConnected ? connect() : disconnect())}
          >
            {!isConnected ? "Connect Wallet" : "Disconnect"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default AuthShowcase;
