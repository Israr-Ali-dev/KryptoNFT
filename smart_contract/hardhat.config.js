require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/6t5snG9KA76Okd6SgJniXlKsKzNLJUMK',
      accounts: [
        '8f108ab1fec4a558b64d65cd833e8b8c7fd5ee6163af2b33064f4ba486026c22',
      ],
    },
  },
};
