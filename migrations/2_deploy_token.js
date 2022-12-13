// const Manager = artifacts.require("Manager");

// module.exports = function (deployer) {
//   deployer.deploy(Manager);
// };

const KuBirdNFT = artifacts.require("KuBirdNFT");

module.exports = function (deployer) {
  deployer.deploy(KuBirdNFT, "KUBIRDNFT", "KUBIRD", "0x044d8314f7244346a7D9d2bbF20622Ac5793228b");
};

// const LandNFT = artifacts.require("LandNFT");

// module.exports = function (deployer) {
//   deployer.deploy(LandNFT, "ISLANDNFT", "LAND", "0x044d8314f7244346a7D9d2bbF20622Ac5793228b");
// };

// const BuyPackageNFT = artifacts.require("BuyPackageNFT");

// module.exports = function (deployer) {
//   deployer.deploy(BuyPackageNFT, "0xCf0b1F976b026C8e68cfDfc970aF319DA033cc4d");
// };


// const KuBirdMarketPlace = artifacts.require("KuBirdMarketPlace");

// module.exports = function (deployer) {
//   deployer.deploy(KuBirdMarketPlace, "0xCf0b1F976b026C8e68cfDfc970aF319DA033cc4d");
// };

const LandNFTMarketPlace = artifacts.require("LandNFTMarketPlace");

module.exports = function (deployer) {
  deployer.deploy(LandNFTMarketPlace, "0xCf0b1F976b026C8e68cfDfc970aF319DA033cc4d");
};

// const KuBirdFarm = artifacts.require("KuBirdFarm");

// module.exports = function (deployer) {
//   deployer.deploy(KuBirdFarm, "0xCf0b1F976b026C8e68cfDfc970aF319DA033cc4d");
// };
