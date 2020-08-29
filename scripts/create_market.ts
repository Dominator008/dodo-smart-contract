import dotenv from "dotenv-flow";
import {ethers} from "ethers";

import {abi as ZOO_ABI} from "../artifacts/DODOZoo.json";

dotenv.config({silent: true});

const RPC = process.env.BSC_TESTNET_RPC;
const MAINTAINER = process.env.ADDRESS_0;
const KEY = process.env.KEY_0;

// dodo address: 0xfE9E7a60bD24f9da5d3F9cE9997e824A95f91a5C
// DODOZoo address: 0xC48D024453CA8e6E3Aab7B5206040A808dFA3711
// DODOEthProxy address: 0x0cd33716B43e1Cb6EdF812c12D33033F1268a495

const ZOO = "0xC48D024453CA8e6E3Aab7B5206040A808dFA3711";
const WBNB = "0x48f7D56c057F20668cdbaD0a9Cd6092B3dc83684";
// const BUSD = "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee";
const KOGE = "0x2B7BFE79eC36653b84A43E86AfF704B91E9f072f";
const ORACLE_KOGE_BNB = "0xc852cc2fd8843D83f3E34Ad2cDc4cF7919489E69";
// const ORACLE_BNB_USD = "0x859AAa51961284C94d970B47E82b8771942F1980";
const LP_FEE_RATE = ethers.utils.parseEther("0.000");
const MT_FEE_RATE = ethers.utils.parseEther("0.000");
const K = ethers.utils.parseEther("0.33");
const GAS_PRICE_LIMIT = ethers.utils.parseEther("10000");

async function main(): Promise<void> {
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  const wallet = new ethers.Wallet(KEY).connect(provider);
  const zoo = new ethers.Contract(ZOO, ZOO_ABI, wallet);

  // address maintainer,
  // address baseToken,
  // address quoteToken,
  // address oracle,
  // uint256 lpFeeRate,
  // uint256 mtFeeRate,
  // uint256 k,
  // uint256 gasPriceLimit
  try {
    const tx = await zoo.breedDODO(
      MAINTAINER,
      KOGE,
      WBNB,
      ORACLE_KOGE_BNB,
      LP_FEE_RATE,
      MT_FEE_RATE,
      K,
      GAS_PRICE_LIMIT
    );
    console.log("breedDODOTx", tx.hash);
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
