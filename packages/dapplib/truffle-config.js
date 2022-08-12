require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind around good knock flame share'; 
let testAccounts = [
"0x1fb9478ee0f06ab6b06d5bd951b25daf4176d5ba3c21d63a9a4d0ddd044a993b",
"0x05950a86d01a77c2c808132063becf9397d2bf17f210323652a28eed104196fd",
"0x110711eccac09abd572b1b41edb57f10ae0310f2519a441a226752be74f36e54",
"0xd808e9eeb9bbac3de1235b0807bffea089fa5949d0b93af8e6eaad94ebed6c0e",
"0xf110735a8d94d8e99fb05d966b6d39de5bdadf985f89793f8a962d39f9a7fd3f",
"0x0062beb36ca154a0e6d3f2266f32a668e61ac41d17e0d7acc4182dae2890b2c6",
"0xb1527a0d59f6ca8d716c1ae6bdc7d9c8d19201b55a15b038a4b53fa3dc5139fb",
"0x6ee6914dc4204248855cb019ed28d5df2287db5761e2c1c49cd476d0fc4bdbbf",
"0x70d5191e890388aead5b658dc18d11d0e64ba63be77dd41ce8ef73737d1dfd37",
"0xa3a4f58e9e3d97c371f1e2a92ce964948511d422d7cc6bb393677b0eb529e141"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

