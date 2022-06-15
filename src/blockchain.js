const SHA256=require('crypto-js/sha256');// imported SHA256 package for hash function
const AWS = require('aws-sdk');
const ID='';
const SECRET='';
const BUCKET_NAME='digital-supply-chain';
const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const fs = require('fs');


class Block{
    constructor(id, timestamp, data, previoushash=''){ //initialize values to the block
        this.id=id;
        this.timestamp=timestamp;
        this.data=data;
        this.previoushash=previoushash;
        this.hash=this.calculateHash();
    }

    calculateHash(){ //gives the hash for current block
        return SHA256(this.id + this.previoushash + this.timestamp + JSON.stringify(this.data)).toString(); 
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()]; //genesis block created when object created
    }

    createGenesisBlock(){
        return new Block(0,"date","Product","0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock){
        newBlock.previoushash=this.getLatestBlock().hash;
        newBlock.hash=newBlock.calculateHash();
        this.chain.push(newBlock); //adding the data to the array
    }

    ischainValid(){ //will check whether blockchain is valid or not
        for(let i=1;this.chain.length;i++){
            const currentBlock=this.chain[i];
            const previosuBlock=this.chain[i-1];
            if(currentBlock.hash !== currentBlock.calculateHash()){ 
                return false;
            }

            if(currentBlock.previoushash !== previosuBlock.hash){
                return false;
            }

            return true;
        }

    }
}

let supplyChain=new Blockchain();
supplyChain.addBlock(new Block(1,"15/03/2022","amount: 4")); //adding data for testing
supplyChain.addBlock(new Block(2,"16/03/2022","amount: 5"));supplyChain.addBlock(new Block(3,"16/04/2022","amount: 500"));

//supplyChain.chain[1].data={ amount: 100};
console.log('Is blockchain valid??\n' + supplyChain.ischainValid());
//console.log(JSON.stringify(supplyChain,null,4));

fs.writeFile("blockchain.json",JSON.stringify(supplyChain,null,4),function(err){
    if (err) throw err;
    console.log('complete');
}
);

//cloud work from here

const uploadFile = (fileName) => {
    const fileContent = fs.readFileSync(fileName);
    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName,
        Body: fileContent
    };
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

uploadFile("blockchain.json");

var getParams = {
    Bucket: 'digital-supply-chain',
    Key: 'blockchain.json',
}

s3.getObject(getParams, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.Body.toString());
    }

})
