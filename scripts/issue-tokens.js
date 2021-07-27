const TokenFarm = artifacts.require("../src/contracts/TokenFarm.sol")

module.exports = async function(callback) {
    let tokenFarm = await TokenFarm.deployed()
    await tokenFarm.issueTokens()
    //code goes here..
    console.log("tokens issued")
    callback()
};