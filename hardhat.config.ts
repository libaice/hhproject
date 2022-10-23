import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "mochi";




const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: ``,
      accounts: [],
    },
  },
};

export default config;
