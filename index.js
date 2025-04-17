//importing ethers object from the ethers library
const { ethers } = require("ethers");
//connecting to the Eth-Sepolia blockchain
const provider = new ethers.JsonRpcProvider("https://eth-sepolia.public.blastapi.io");
//generating a new ETH wallet with a random private key
const wallet = ethers.Wallet.createRandom();


console.log("Generated Wallet Address:", wallet.address);

console.log("Private Key:", wallet.privateKey);

const senderPrivateKey = "b6071bc0115a8837cf2d7f3dd44d8ae790decdea0a82a29adec48b01ed696935";

//loading up the wallet using private key ,
//connect to the sepolia blockchain 

const senderWallet = new ethers.Wallet(senderPrivateKey, provider);
console.log("Sender Wallet Address:", senderWallet.address);

async function sendEth() {

    //creating a tx object
    const tx = {
        to: wallet.address,
        value: ethers.parseEther("0.001")
    };

    console.log(`Sending 0.001 ETH to ${wallet.address}...`);

    const transaction = await senderWallet.sendTransaction(tx);
    console.log("Transaction sent! Hash:", transaction.hash);

    //later add 6 confirmations before printing confirmed.
    await transaction.wait();
    console.log("Transaction confirmed!");
}

sendEth().catch((error) => {
    console.error("X Error sending Eth", error);
});
