import dotenv from "dotenv-flow";
import {ethers} from "ethers";

import {abi as DODO_ABI} from "../artifacts/DODO.json";
import {abi as ERC20_ABI} from "../artifacts/IERC20.json";
// import { abi as MINIMUM_ORACLE_ABI } from '../artifacts/MinimumOracle.json';

dotenv.config({silent: true});

const RPC = process.env.BSC_TESTNET_RPC;
const KEY = process.env.KEY_0;

// Base capital token: 0x96fd02e9f042a5268d8915752f9d6211927c8a59
// Quote capital token: 0xe3b8b4ed84b6e1b5f49fee9ac837acd437b91399
// KogeWbnbDODO: 0x30012c67353edfce189aca1a501e18cec580889c
const KOGE = "0x2B7BFE79eC36653b84A43E86AfF704B91E9f072f";
const DODO = "0x30012c67353edfce189aca1a501e18cec580889c";
// const ORACLE_KOGE_BNB = "0xc852cc2fd8843D83f3E34Ad2cDc4cF7919489E69";
// const INITIAL_PRICE = ethers.utils.parseEther("0.03");
const BASE_AMOUNT = ethers.utils.parseEther("2250000");
const QUOTE_BALANCE_LIMIT = ethers.utils.parseEther("75000");

async function main(): Promise<void> {
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  const wallet = new ethers.Wallet(KEY).connect(provider);
  const dodo = new ethers.Contract(DODO, DODO_ABI, wallet);
  const koge = new ethers.Contract(KOGE, ERC20_ABI, wallet);
  // const oracle = new ethers.Contract(
  //   ORACLE_KOGE_BNB,
  //   MINIMUM_ORACLE_ABI,
  //   wallet
  // );

  try {
    // const setPriceTx = await oracle.setPrice(INITIAL_PRICE);
    // console.log("setPriceTx", setPriceTx.hash);
    // await setPriceTx.wait();

    // const setKTx = await dodo.setK(ethers.utils.parseEther("0.33"));
    // console.log("setKTx", setKTx.hash);
    // await setKTx.wait();

    const approveTx = await koge.approve(DODO, BASE_AMOUNT);
    console.log("approveTx", approveTx.hash);
    await approveTx.wait();

    const enableBaseDepositTx = await dodo.enableBaseDeposit();
    console.log("enableBaseDepositTx", enableBaseDepositTx.hash);
    await enableBaseDepositTx.wait();

    const depositBaseTx = await dodo.depositBaseTo(wallet.address, BASE_AMOUNT);
    console.log("depositBaseTx", depositBaseTx.hash);
    await depositBaseTx.wait();

    const disableBaseDepositTx = await dodo.disableBaseDeposit();
    console.log("disableBaseDepositTx", disableBaseDepositTx.hash);
    await disableBaseDepositTx.wait();

    const setQuoteBalanceLimitTx = await dodo.setQuoteBalanceLimit(
      QUOTE_BALANCE_LIMIT
    );
    console.log("setQuoteBalanceLimitTx", setQuoteBalanceLimitTx.hash);
    await setQuoteBalanceLimitTx.wait();

    const disableSellingTx = await dodo.disableSelling();
    console.log("disableSellingTx", disableSellingTx.hash);
    await disableSellingTx.wait();

    const enableTradingTx = await dodo.enableTrading();
    console.log("enableTradingTx", enableTradingTx.hash);
    await enableTradingTx.wait();

    // const lpBaseBalance: BigNumber = await dodo.getLpBaseBalance(
    //   "0x15e9E738676561624aFcEd456dC54B5bdce03bE9"
    // );
    // console.log("lpBaseBalance", lpBaseBalance.toString());
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
