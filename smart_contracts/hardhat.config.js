// https://eth-goerli.g.alchemy.com/v2/YND8P7p2yqFFNQmhvspzG4jwf8OQEoST
require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/P5Ys_5UwxYEhQ-eE2uY4TzZj5dYJVaU6",
      accounts: ["d456b9847bc91463adc837ddeba2e95e7679c3a4e84313842f0a9e10fc6bd11a"]
    }
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

};
