class TXO {
    constructor(owner, amount) {
        this.owner = owner;
        this.amount = amount;
        this.spent = false;
    }
    spend() {
        this.spent = true;
    }
}

class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
        this.fee = 0;
    }
    execute() {
        const spent = this.inputUTXOs.some((s) => s.spent);
        if(spent){
            throw new Error("Cannot include a spent UTXO");  
        }
        let val1=0,val2=0;
        this.inputUTXOs.forEach(i => val1+=i.amount);
        this.outputUTXOs.forEach(j => val2+=j.amount);
        if(val1 < val2){
        throw new Error("Not enough here");
        }
        this.inputUTXOs.forEach(i => i.spend());
        this.fee = val1 - val2
    }
}
