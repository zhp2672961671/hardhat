/*
 * @Author: zhp2672961671 2672961671@qq.com
 * @Date: 2023-07-16 13:40:10
 * @LastEditors: zhp2672961671 2672961671@qq.com
 * @LastEditTime: 2023-07-16 18:37:59
 * @FilePath: /hardhat/scripts/deploy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = hre.ethers.parseEther("0.001");

  let [deployer] = await ethers.getSigners();
  // const testERC20 = await hre.ethers.deployContract("testERC20", ['nameToken','Name'], {
  //   // value: lockedAmount,
  // });
  // await testERC20.waitForDeployment();
  const testERC20 = await ethers.getContractFactory("testERC20");
  const erc20 = await testERC20.deploy('nameToken','Name');

  console.log("Greeter deployed to:", erc20.target);
  // console.log("address=====",erc20.address)

  await erc20.setExector(deployer.address,true);
  console.log("setExector=====",deployer.address)


  // await testERC20.waitForDeployment();

  // console.log(
  //   `Lock with ${ethers.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${testERC20.target}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
