import dotenv from "dotenv-flow";
import {ethers} from "ethers";

import {abi as ZOO_ABI} from "../artifacts/DODOZoo.json";

dotenv.config({silent: true});

const RPC = process.env.BSC_TESTNET_RPC;
const KEY = process.env.KEY_0;

const ZOO = "0xC48D024453CA8e6E3Aab7B5206040A808dFA3711";
const DODO = "0x7647c458d6fb2358495793bcf2680a2c542bb9d6";

async function main(): Promise<void> {
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  const wallet = new ethers.Wallet(KEY).connect(provider);
  const zoo = new ethers.Contract(ZOO, ZOO_ABI, wallet);

  try {
    const tx = await zoo.removeDODO(DODO);
    console.log("removeDODOTx", tx.hash);
    await tx.wait();
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
