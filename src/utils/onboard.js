import {
    init
} from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import mewModule from '@web3-onboard/mew'
import fortmaticModule from '@web3-onboard/fortmatic'
import trezorModule from '@web3-onboard/trezor'
import config from "../config/config";

const { RPC_URL, FORTMATIC_KEY, ETHERSCAN_URL, POLYGON_EXPLORER_URL } = config;

const injected = injectedModule()
const walletConnect = walletConnectModule()
const mew = mewModule()
const fortmatic = fortmaticModule({ apiKey: FORTMATIC_KEY })
const trezor = trezorModule({
    appUrl: "https://galaxis.xyz/",
    email: "info@galaxis.xyz",
})

const web3Onboard = init({
    accountCenter: {
        desktop: {
            position: 'topRight',
            enabled: false,
            // minimal: true,
        }
    },
    wallets: [injected, walletConnect, mew, fortmatic, trezor],
    chains: config.CHAINS,
    appMetadata: {
        name: "Galaxis",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><style>.cls-1{fill:#201602}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="layer_1-2" data-name="layer 1"><path class="cls-1" d="M9 45H1a1 1 0 0 1-1-1V30a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-7-2h6V31H2z"/><path class="cls-1" d="M27 48h-.22l-18-4 .44-2 17.65 4L46 36.38v-1.14L33.21 38l-.42-2 14-3A1 1 0 0 1 48 34v3a1 1 0 0 1-.55.89l-20 10A1 1 0 0 1 27 48z"/><path class="cls-1" d="M24 41a.8.8 0 0 1-.27 0l-7-2 .54-2 6.81 2 7.92-.9V36h-7a1 1 0 0 1-.45-.11L16.76 32H9v-2h8a1 1 0 0 1 .45.11L25.24 34H33a1 1 0 0 1 1 1v4a1 1 0 0 1-.89 1l-9 1zM4 39h2v2H4zM29 26a4 4 0 0 1-4-4h2a2 2 0 1 0 2-2 4 4 0 1 1 4-4h-2a2 2 0 1 0-2 2 4 4 0 0 1 0 8z"/><path class="cls-1" d="M28 25h2v3h-2zM28 10h2v3h-2z"/><path class="cls-1" d="M29 31a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10 10 0 0 0 29 9z"/><path class="cls-1" d="M40 18h7v2h-7zM11 18h7v2h-7zM28 30h2v4h-2zM28 1h2v7h-2z"/><path class="cls-1" transform="rotate(-45 39.254 8.75)" d="M35.75 7.75h7v2h-7z"/><path class="cls-1" transform="rotate(-45 19.105 28.886)" d="M16.13 27.89h5.97v2h-5.97z"/><path class="cls-1" d="M41.73 32.73a1 1 0 0 1-.71-.29l-5-4.95 1.42-1.42 4.22 4.22a17 17 0 1 0-26.85-1.84l-1.61 1.11a19 19 0 1 1 29.24 2.88 1.05 1.05 0 0 1-.71.29z"/><path class="cls-1" transform="rotate(-45 18.751 8.743)" d="M17.75 5.25h2v7h-2z"/></g></g></svg>',
        logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-2{fill:#0e9347}</style></defs><g id="standing_money" data-name="standing money"><path d="M59 59H5a1 1 0 0 1 0-2h54a1 1 0 0 1 0 2z" style="fill:#b0c4d9"/><rect class="cls-2" x="8.67" y="17.86" width="46.67" height="28.28" rx="3" ry="3" transform="rotate(-45 32.002 31.994)"/><path class="cls-2" d="M14 35.67 35.67 14a4 4 0 0 0 5.66 0L50 22.67a4 4 0 0 0 0 5.66L28.33 50a4 4 0 0 0-5.66 0L14 41.33a4 4 0 0 0 0-5.66z"/><rect class="cls-2" x="8.67" y="17.86" width="46.67" height="28.28" rx="3" ry="3" transform="rotate(-45 32.002 31.994)"/><path d="M14 35.67 35.67 14a4 4 0 0 0 5.66 0L50 22.67a4 4 0 0 0 0 5.66L28.33 50a4 4 0 0 0-5.66 0L14 41.33a4 4 0 0 0 0-5.66z" style="fill:#3bb54a"/><ellipse cx="32" cy="32" rx="4.5" ry="5.66" transform="rotate(-45 32.002 31.994)" style="fill:#89c763"/></g></svg>',
        description: "Galaxis",
        recommendedInjectedWallets: [
            { name: "Coinbase", url: "https://wallet.coinbase.com/" },
            { name: "MetaMask", url: "https://metamask.io" },
        ],
    },
});

export default web3Onboard;