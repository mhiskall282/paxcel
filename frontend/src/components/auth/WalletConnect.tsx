import { createThirdwebClient } from "thirdweb";
import { darkTheme } from "thirdweb/react";
import { ConnectWallet, } from "@thirdweb-dev/react";
import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";
import { ethereum } from "thirdweb/chains";

// const client = createThirdwebClient({
//   clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
// });

const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "email", "passkey", "phone"],
    },
  }),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

export default function WalletConnect() {
  return (
    // <ConnectWallet
    //   client={client}
    //   wallets={wallets}
    //   connectButton={{ label: "Sign In" }}
    //   connectModal={{
    //     size: "wide",
    //     title: "Sign In",
    //   }}
    //   accountAbstraction={{
    //     chain: ethereum, // replace with the chain you want
    //     sponsorGas: true,
    //   }}
      // auth={{
      //   async doLogin(params) {
      //     // call your backend to verify the signed payload passed in params
      //   },
      //   async doLogout() {
      //     // call your backend to logout the user if needed
      //   },
      //   async getLoginPayload(params) {
      //     // call your backend and return the payload
      //     const response = await fetch('/api/auth/login-payload', {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify({
      //         address: params.address,
      //         chainId: params.chainId,
      //       }),
      //     });

      //     if (!response.ok) {
      //       throw new Error('Failed to fetch login payload');
      //     }

      //     return await response.json(); // Ensure this returns the correct LoginPayload structure
      //   },
      //   async isLoggedIn() {
      //     // call your backend to check if the user is logged in
      //   },
      // }}
    // />
    <></>
  );
}
