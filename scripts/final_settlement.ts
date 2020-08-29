import dotenv from "dotenv-flow";
import {ethers} from "ethers";

import {abi as DODO_ABI} from "../artifacts/DODO.json";

dotenv.config({silent: true});

const RPC = process.env.BSC_TESTNET_RPC;
const KEY = process.env.KEY_0;

const DODO = "0x7647c458d6fb2358495793bcf2680a2c542bb9d6";

async function main(): Promise<void> {
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  const wallet = new ethers.Wallet(KEY).connect(provider);
  const dodo = new ethers.Contract(DODO, DODO_ABI, wallet);

  try {
    const finalSettlementTx = await dodo.finalSettlement();
    console.log("finalSettlementTx", finalSettlementTx.hash);
    await finalSettlementTx.wait();

    const claimAssetsTx = await dodo.claimAssets();
    console.log("claimAssetsTx", claimAssetsTx.hash);
    await claimAssetsTx.wait();
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
