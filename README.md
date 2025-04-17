# Ethereum Transfer Script

A simple Node.js script that demonstrates how to generate a new Ethereum wallet and send ETH using the Ethers.js library on the **Sepolia testnet**.

## ⚙️ What This Script Does

- Connects to the Ethereum Sepolia testnet via a public RPC.
- Generates a brand new wallet with a random private key.
- Loads a sender wallet using a given private key.
- Sends **0.001 ETH** from the sender wallet to the newly generated wallet.
- Waits for the transaction confirmation and logs the status.

## 🧾 Prerequisites

- **Node.js** installed on your machine.
- Basic understanding of Ethereum, wallets, and transactions.
- ETH in your Sepolia sender wallet (get testnet ETH from [Sepolia Faucet](https://sepoliafaucet.com/)).

## 📂 Project Structure

ethereum-transfer-script/ │ ├── sendEth.js # Main script that handles ETH transfers ├── README.md # Project documentation

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username-or-org>/ethereum-transfer-script.git
cd ethereum-transfer-script
2. Install Dependencies
bash
Copy
Edit
npm install ethers
3. Run the Script
bash
Copy
Edit
node sendEth.js
💡 This will generate a new Ethereum wallet and send 0.001 ETH to it using your predefined sender wallet.

⚠️ Security Warning
This script includes a hardcoded private key for demonstration purposes. Never expose real private keys in production code. Use environment variables or secure key management practices instead.

🧠 Key Concepts Used
ethers.Wallet.createRandom() — generates a new Ethereum wallet.

ethers.Wallet(privateKey, provider) — connects a wallet to the blockchain.

wallet.sendTransaction(tx) — sends ETH to a target address.

transaction.wait() — waits for the transaction to be confirmed.

🛠️ Customization
You can adjust the following for your use case:

Replace the Sepolia RPC URL with another provider or mainnet URL.

Adjust the ETH amount in value: ethers.parseEther("0.001").

Replace hardcoded private keys with .env file for security.

📖 License
MIT ©
