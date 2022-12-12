// Your Goal: Proof of Work
// Now it's time to actually mine the block. This is where we get the work part of proof of work!

const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    const transactions = [];
    while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0){
        transactions.push(mempool.pop());
    }
    const block = {
        id:blocks.length,
        transactions,
        nonce:0
    };
    let hash;
      while (true) {
         hash = SHA256(JSON.stringify(block)).toString();
        if (BigInt(`0x${hash}`) < TARGET_DIFFICULTY) {
            break;
        }
        block.nonce++;
    }
    block['hash']=hash;
    blocks.push(block);
}
