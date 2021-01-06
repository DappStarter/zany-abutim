require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food bike deny spider color coral light army ghost'; 
let testAccounts = [
"0x6bea3a5e915f30ece0431e6cad07e3536b0050fd3ec9e9bd43eaf2cb0310f8a5",
"0x7a4f0f568afc113d9fb1854f3523fa71df46a340b89df1cba67d5fef3257ddc4",
"0xdf0cdc0c6036cac41457fcbec3eb7971e415add9b3eabdb765b7139776d3c685",
"0x6361e01011dc6a4582843c931c7433eda442bcde49787170eb374e842516bd1d",
"0xbf337fb086417a9e1e4fbec2cd6de8645c4e54b6c61610dadc9f6b0bb304a334",
"0x6bc141147655fa3d9780579edd8c9b17fc014e25c26e4cd98a767ce071982880",
"0xc0c09ce4ecacc3a2d9e6d13d7b0459ef06f34d7427347aa8c8c680f2c159f5d5",
"0x4d2a4e214ec54c6b4768d27dc98d0ec4c4da3d9075994638893ca832d4460ae1",
"0xa6c400cd34b4d44ecffd630c68924761eaee5040b2654c7dda8a206f07601152",
"0x1caaff0f137b07ba5b7cd2036dbef5f3ec15d02dba01e61b6f4a14d40eef34ac"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
