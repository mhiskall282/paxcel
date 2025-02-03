const { expect } = require("chai");
//const { ethers } = require("hardhat");
const ethers = require("ethers");

describe("ShippingContract", function () {
  let contract;
  let owner, buyer, courier;
  let transactionAmount = (0.1),

  beforeEach(async () => {
    [owner, buyer, courier] = await ethers.getSigners();
    const ShippingContract = await ethers.getContractFactory("ShippingContract");
    contract = await ShippingContract.deploy();
  });

  it("Should create a shipment", async () => {
    await contract.connect(owner).createShipment(
      buyer.address,
      courier.address,
      ethers.utils.parseEther(transactionAmount),
      { value: ethers.utils.parseEther(transactionAmount) }
    );
    
    const shipment = await contract.getShipment(1);
    expect(shipment.buyer).to.equal(buyer.address);
  });
});