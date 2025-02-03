require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-abi-exporter");

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  abiExporter: {
    path: "./frontend/src/abis",
    runOnCompile: true,
    clear: true,
  },
};