import { init } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import mewModule from '@web3-onboard/mew';
import fortmaticModule from '@web3-onboard/fortmatic';
import trezorModule from '@web3-onboard/trezor';
import ledgerModule from '@web3-onboard/ledger';
import torusModule from '@web3-onboard/torus';
import coinbaseModule from '@web3-onboard/coinbase';
import galaxisIcon from '../assets/icons/galaxis.svg';

class Web3Onboard {
  constructor(props) {
    console.log(props, ' propppp');
    console.log('web4onboaaaard');
    const injected = injectedModule();
    const walletConnect = walletConnectModule({
      version: 2, // **New Param** Defaults to version: 1 - this behavior will be deprecated after the WalletConnect v1 sunset
      handleUri: (uri) => console.log(uri),
      projectId: props.config.WALLETCONNECT_PROJECT_ID, // ***New Param* Project ID associated with [WalletConnect account](https://cloud.walletconnect.com)
      requiredChains: [1, 137, 5, 11155111], // chains required to be supported by WC wallet
    });
    const mew = mewModule();
    const ledger = ledgerModule();
    const torus = torusModule();
    const coinbase = coinbaseModule();
    const fortmatic = fortmaticModule({ apiKey: props.config.FORTMATIC_KEY });
    const trezor = trezorModule({
      appUrl: 'https://galaxis.xyz/',
      email: 'info@galaxis.xyz',
    });

    this.web3Onboard = init({
      accountCenter: {
        desktop: {
          position: 'topRight',
          enabled: false,
          // minimal: true,
        },
      },
      wallets: [
        injected,
        walletConnect,
        torus,
        mew,
        fortmatic,
        trezor,
        ledger,
        coinbase,
      ],
      chains: props.config.CHAINS,
      appMetadata: {
        name: 'Galaxis',
        icon: galaxisIcon,
        logo: galaxisIcon,
        description: 'Galaxis',
        recommendedInjectedWallets: [
          { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
          { name: 'MetaMask', url: 'https://metamask.io' },
        ],
      },
    });
  }

  getWeb3OnboardInstance() {
    return this.web3Onboard;
  }
}

export default Web3Onboard;
