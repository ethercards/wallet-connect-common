After installing the package:

import { WalletConnectContextProvider } from 'connectwallet-component' - where u want the context provider for the wallet connection
"< WalletConnectContextProvider config={config}>< div ></ div ></ WalletConnectContextProvider >"
-- u must add a config file for property, which contains DEPLOYED_CHAIN_ID and RPC_URL, optionally a FORTMATIC_KEY, if u use fortmatic wallet

after this, u can use the context like this:
import { WalletConnectContext } from 'connectwallet-component';
const { address, handleConnect, handleDisconnect } = WalletConnectContext();
