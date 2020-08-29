import dotenv from "dotenv-flow";

import * as env from "@nomiclabs/buidler";

dotenv.config({silent: true});

const WBNB = "0x48f7D56c057F20668cdbaD0a9Cd6092B3dc83684";

async function main(): Promise<void> {
  const {ethers} = env;

  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log("Deploying the contracts with the account:", deployerAddress);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const dodoFactory = await ethers.getContractFactory("dodo");
  const dodo = await dodoFactory.deploy();
  await dodo.deployed();

  console.log("dodo address:", dodo.address);
  // const dodo = {address: "0xfE9E7a60bD24f9da5d3F9cE9997e824A95f91a5C"};

  // const cloneFactoryFactory = await ethers.getContractFactory("CloneFactory");
  // const cloneFactory = await cloneFactoryFactory.deploy();
  // await cloneFactory.deployed();

  // console.log("CloneFactory address:", cloneFactory.address);
  const cloneFactory = {address: "0x4CAEc460bC17e078415a10f804111B752100765F"};

  const dodoZooFactory = await ethers.getContractFactory("DODOZoo");
  const dodoZoo = await dodoZooFactory.deploy(
    dodo.address,
    cloneFactory.address,
    deployerAddress
  );
  await dodoZoo.deployed();

  console.log("DODOZoo address:", dodoZoo.address);
  // const DODOZoo = {address: "0xC48D024453CA8e6E3Aab7B5206040A808dFA3711"};

  const dodoEthProxyFactory = await ethers.getContractFactory("DODOEthProxy");
  const dodoEthProxy = await dodoEthProxyFactory.deploy(dodoZoo.address, WBNB);
  await dodoEthProxy.deployed();
  console.log("DODOEthProxy address:", dodoEthProxy.address);
  //const DODOEthProxy = {address: "0x0cd33716B43e1Cb6EdF812c12D33033F1268a495"};

  // const minimumOracleFactory = await ethers.getContractFactory("MinimumOracle");
  // const minimumOracle = await minimumOracleFactory.deploy();
  // await minimumOracle.deployed();
  // console.log("MinimumOracle address:", minimumOracle.address);
  // MinimumOracle address: 0xc852cc2fd8843D83f3E34Ad2cDc4cF7919489E69
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
