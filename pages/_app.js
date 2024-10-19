import "@/styles/globals.css";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { AmazonContextProvider } from "./context/AmazonContext";
import { useContext } from "react";

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        coinbaseWallet(),
        walletConnect(),
      ]}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <AmazonContextProvider>
        <Component {...pageProps} />
      </AmazonContextProvider>
    </ThirdwebProvider>
  );
}