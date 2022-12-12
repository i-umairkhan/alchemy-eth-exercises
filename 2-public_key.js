//  get the ethereum address from the public key!

const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    return keccak256( publicKey.slice(1)).slice(-20);
}
