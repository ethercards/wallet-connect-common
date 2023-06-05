import { ethers } from 'ethers';

import { useEffect, useState, useMemo, useContext } from 'react';
import { SpinnerCircular } from 'spinners-react';
import { toast } from 'react-toast';
import { useConnectWallet, useSetChain, useWallets } from '@web3-onboard/react';
import web3Onboard from '../utils/onboard';
import Web3Ctx from '../context/Web3Ctx';
import config from '../config/config';
import React from 'react';

const { DEPLOYED_CHAIN_ID, RPC_URL } = config;

const sx = {
  root: {
    display: 'flex',
    minHeight: '100vh',
    height: '100%',
    weight: '100%',
    background: '#fff',
  },
  container: {
    textAlign: 'center',
    margin: 'auto',
  },
};

const Web3Manager = ({ children, props }) => {
  const [onboard, setOnboard] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const [ethersProvider, setEthersProvider] = useState(null);
  const [defaultProvider, setDefaultProvider] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [communityChainId, setCommunityChainId] = useState(null);
  const [contractAddresses, setContractAddresses] = useState(null);

  // const { onConnect } = props;

  // const [networkName, setNetworkName] = useState(DEPLOYED_NTW_NAME);
  // const location = useLocation();

  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();

  const connectedWallets = useWallets();

  // console.log("onboard", onboard?.state)
  // console.log("wallet", wallet)
  // console.log("connecting", connecting);
  // console.log("connect", connect)
  // console.log("disconnect", disconnect)
  // console.log("chains", chains);
  // console.log("connectedChain", connectedChain)
  // console.log("settingChain", settingChain)
  // console.log("setChain", setChain);
  // console.log("connectedWallets", connectedWallets);

  // Init all supported chain providers
  const providers = useMemo(() => {
    return chains.reduce((accumulator, chain) => {
      accumulator[parseInt(chain.id)] = new ethers.providers.JsonRpcProvider(
        chain.rpcUrl
      );
      return accumulator;
    }, {});
  }, [chains]);

  useEffect(() => {
    if (connectedChain && connectedChain.id) {
      console.log('***Set connectec chain id');
      setChainId(parseInt(connectedChain.id));
    }
  }, [connectedChain]);

  useEffect(() => {
    setOnboard(web3Onboard);
    setDefaultProvider(new ethers.providers.JsonRpcProvider(RPC_URL));
  }, []);

  useEffect(() => {
    if (!wallet?.provider) {
      console.log('wallet not found, setting default provider', chainId);
      let provider = null;
      if (chainId === config.DEPLOYED_CHAIN_ID) {
        provider = new ethers.providers.JsonRpcProvider(RPC_URL);
      } else {
        provider = getProvider(chainId);
      }

      setEthersProvider(provider);
    } else {
      const provider = new ethers.providers.Web3Provider(
        wallet.provider,
        'any'
      );
      setEthersProvider(provider);
    }
  }, [wallet]);

  useEffect(() => {
    if (!connectedWallets.length) return;
    const connectedWalletsLabelArray = connectedWallets.map(
      ({ label }) => label
    );
    window.sessionStorage.setItem(
      'connectedWallets',
      JSON.stringify(connectedWalletsLabelArray)
    );
  }, [connectedWallets, wallet]);

  useEffect(() => {
    (async () => {
      if (connect) {
        const previouslyConnectedWallets = JSON.parse(
          window.sessionStorage.getItem('connectedWallets')
        );
        if (previouslyConnectedWallets?.length) {
          await connect({
            autoSelect: {
              label: previouslyConnectedWallets[0],
              disableModals: true,
            },
          });
        }
        setInitialized(true);
      }
    })();
  }, [web3Onboard, connect]);

  // const isWalletConnected = () => {
  //     console.log("check wallet state");
  //     if (onboard) {
  //         const state = onboard.getState();
  //         return state.wallet.name != null;
  //     } else return null;
  // };

  const handleConnect = async (e) => {
    if (onboard) {
      connect();
    }
  };

  const handleDisconnect = () => {
    if (onboard) {
      disconnect(wallet);
      setChainId(null);
      window.sessionStorage.removeItem('connectedWallets');
    }
  };

  const getProvider = (contractChainId) => {
    if (contractChainId != null) {
      if (
        /* contractChainId == DEPLOYED_CHAIN_ID ||  */ contractChainId ==
        chainId
      ) {
        return ethersProvider;
      } else {
        if (providers[contractChainId]) {
          return providers[contractChainId];
        } else {
          let chain = chains.find(
            (chain) => parseInt(chain.id) == contractChainId
          );
          if (chain != null) {
            return new ethers.providers.JsonRpcProvider(chain.rpcUrl);
          } else {
            toast.error(`Chain Id:${contractChainId} not supported!`);
          }
        }
      }
    } else if (isCorrectNetwork) {
      return ethersProvider;
    } else return defaultProvider;
  };

  const isCorrectNetwork = parseInt(connectedChain?.id) === DEPLOYED_CHAIN_ID;

  if (!onboard || !initialized || connecting) {
    return (
      <div style={sx.root}>
        <div style={sx.container}>
          <SpinnerCircular size="48px" color="#F64C04" />
        </div>
      </div>
    );
  }

  return (
    <Web3Ctx.Provider
      value={{
        onboard,
        wallet,
        address: wallet?.accounts[0]?.address,
        //address: "0x9f90915ccf49b2b83680a720c71a7f83c36ccbff",
        ethersProvider,
        defaultProvider,
        chainId: chainId,
        defaultChainId: config.DEPLOYED_CHAIN_ID,
        connecting,
        handleConnect,
        handleDisconnect,
        isCorrectNetwork,
        getProvider,
        setChain: (chainId) =>
          setChain({
            chainId: ethers.utils.hexValue(chainId),
          }),
      }}
    >
      {children}
    </Web3Ctx.Provider>
  );
};
const UseMyContext = () => {
  const context = useContext(Web3Ctx);
  return context;
};
export { Web3Manager, UseMyContext };
