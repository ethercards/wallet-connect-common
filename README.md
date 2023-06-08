After installing the package:

import { WalletConnectContextProvider } from 'connectwallet-component' - where u want the context provider for the wallet connection
<WalletConnectContextProvider><div></div></WalletConnectContextProvider>

after this, u can use the context like this
import { WalletConnectContext } from 'connectwallet-component';
const { address, handleConnect, handleDisconnect } = WalletConnectContext();
