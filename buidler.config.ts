import dotenv from "dotenv-flow";

import {usePlugin} from "@nomiclabs/buidler/config";

usePlugin("@nomiclabs/buidler-waffle");

dotenv.config({silent: true});

const BSC_TESTNET_RPC = process.env.BSC_TESTNET_RPC;
const BSC_TESTNET_PRIVATE_KEY = process.env.KEY_0;

const config: any = {
  solc: {
    version: "0.6.9",
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  paths: {
    sources: "./contracts",
  },
  networks: {
    bsc_testnet: {
      url: BSC_TESTNET_RPC,
      accounts: [BSC_TESTNET_PRIVATE_KEY],
    },
  },
};

export default config;
