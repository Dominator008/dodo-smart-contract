import dotenv from 'dotenv-flow';
import { ethers } from 'ethers';

import { abi as DODO_ABI } from '../artifacts/DODO.json';

dotenv.config({silent: true});

const RPC = process.env.BSC_TESTNET_RPC;
const KEY = process.env.KEY_0;

const DODO = "0x4dbA198389969d0c9896f4Bf9DF48CD685Ce809D";

async function main(): Promise<void> {
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  const wallet = new ethers.Wallet(KEY).connect(provider);
  const dodo = new ethers.Contract(DODO, DODO_ABI, wallet);

  try {
    const withdrawAllBaseTx = await dodo.withdrawAllBase();
    console.log("withdrawAllBaseTx", withdrawAllBaseTx.hash);
    await withdrawAllBaseTx.wait();

    const withdrawAllQuoteTx = await dodo.withdrawAllQuote();
    console.log("withdrawAllQuoteTx", withdrawAllQuoteTx.hash);
    await withdrawAllQuoteTx.wait();
  } catch (e) {
    console.log("Error", e);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
