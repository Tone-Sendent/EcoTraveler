const solanaWeb3 = require('@solana/web3.js');

// Connection to the devnet. Update the cluster as required (e.g., mainnet-beta, testnet).
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'));

// Generate a new Solana keypair
function generateKeypair() {
    return solanaWeb3.Keypair.generate();
}

// Fetch the SOL balance of an address
async function getSolBalance(address) {
    const balance = await connection.getBalance(address);
    return solanaWeb3.LAMPORTS_PER_SOL * balance; // Convert lamports to SOL
}

// Send SOL from one address to another
async function sendSol(senderKeypair, receiverAddress, amountInSol) {
    const transaction = new solanaWeb3.Transaction().add(
        solanaWeb3.SystemProgram.transfer({
            fromPubkey: senderKeypair.publicKey,
            toPubkey: receiverAddress,
            lamports: solanaWeb3.LAMPORTS_PER_SOL * amountInSol, // Convert SOL to lamports
        })
    );

    const { txid } = await solanaWeb3.sendAndConfirmTransaction(
        connection,
        transaction,
        [senderKeypair]
    );

    return txid; // Return transaction ID
}

// Additional methods for creating, interacting with tokens, smart contracts (programs), 
// and other Solana-specific functionalities can be added here.

module.exports = {
    generateKeypair,
    getSolBalance,
    sendSol
};
