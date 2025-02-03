const hre = require("hardhat");

async function main() {
  const ShippingContract = await hre.ethers.getContractFactory("ShippingContract");
  const contract = await ShippingContract.deploy();

  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});