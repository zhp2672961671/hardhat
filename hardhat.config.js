/*
 * @Author: zhp2672961671 2672961671@qq.com
 * @Date: 2023-07-16 13:40:10
 * @LastEditors: zhp2672961671 2672961671@qq.com
 * @LastEditTime: 2023-07-16 15:23:36
 * @FilePath: /hardhat/hardhat.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.19",
// };

// 填入自己的私钥或助记词，
const PRIVATE_KEY1 = "7b11b8c2dafc48a049d0865fb13d037f31277ec3ad33c74e380a32d9d65567fd";
// const PRIVATE_KEY2 = "0x....  YOUR PRIVATE KEY1";
const Mnemonic = "YOUR Mnemonic";


module.exports = {
  solidity: "0.8.19", // solidity的编译版本
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/YUkQdURvQwc3GfHkUvEe3g7oacvyUFiO",//alchemy生成
      accounts: [PRIVATE_KEY1],
      chainId: 11155111,
    },
    
    //  mumbai: {
    //   url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
    //   accounts: {
    //     mnemonic: Mnemonic,
    //   },
    //   chainId: 80001,
    // },
  }
};
