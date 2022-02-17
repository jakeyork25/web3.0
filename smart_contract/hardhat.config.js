// 

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/luFG23tjAhwXsdEbPS6IXJEAmEXGM9OA',
      accounts: [ 'b8359adcc04e387f9dffedfe31a4ed757bcfed02dd3cfd1dedad2e6ef0ba091f' ]
    }
  }
}