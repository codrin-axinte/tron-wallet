import createTron from "@/lib/tronweb";


export default async function handler(req, res) {

    const {transaction} = req.query;

    try {
        const tronWeb = createTron();
        //const transaction = await tronWeb.trx.getTransaction(txId);
        const transactionInfo = await tronWeb.trx.getTransactionInfo(transaction);

        res.status(200).json(transactionInfo);
    } catch (error) {
        console.error('Error retrieving transaction data:', error);
        res.status(400).json(error)
    }

}
