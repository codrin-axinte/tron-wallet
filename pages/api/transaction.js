import createTron, {setupContract} from "@/lib/tronweb";


export default async function handler(req, res) {

    const {address} = req.query;

// TODO: Research https://stackoverflow.com/questions/70647606/im-trying-to-fetch-all-transactions-of-a-certain-tron-address
    try {
        const tronWeb = createTron();
        //const transaction = await tronWeb.trx.getTransaction(txId);
        const transactionInfo = await tronWeb.trx.getTransactionInfo(txId);

        res.status(200).json(transactionInfo);
    } catch (error) {
        console.error('Error retrieving transaction data:', error);
        res.status(400).json(error)
    }

}
