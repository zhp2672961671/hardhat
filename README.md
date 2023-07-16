<!--
 * @Author: zhp2672961671 2672961671@qq.com
 * @Date: 2023-07-16 13:25:29
 * @LastEditors: zhp2672961671 2672961671@qq.com
 * @LastEditTime: 2023-07-16 17:13:27
 * @FilePath: /hardhat/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# hardhat
# 官方网址
 https://hardhat.org/hardhat-runner/docs/getting-started

# 安装

 Hardhat for Visual Studio Code（vscode插件）
 npm install --save-dev hardhat

# 快速开始

 npx hardhat（创建实例项目）

    contracts目录： 存储合约源文件

    scripts目录：     存储测试文件

    test目录：         存储自动化脚本文件

    hardhat.config.js文件：配置文件

# 编译
 npx hardhat compile

# 测试
 npx hardhat test
# 部署
配置 hardhat.config networks
npx hardhat run scripts/deploy.js --network sepolia

# 安装 openzeppelin 库
npm install @openzeppelin/contracts 
npm install --save-dev @openzeppelin/hardhat-upgrades
npm install --save-dev @nomicfoundation/hardhat-ethers


