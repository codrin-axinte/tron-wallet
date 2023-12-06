import createTron from "@/lib/tronweb";


export default async function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).send({message: 'Only POST requests allowed'})
        return;
    }

    const {transaction} = req.body;

    if (!transaction) {
        res.status(422).send({'message': 'Transaction ID is required.'});
        return;
    }

    try {
        const tronWeb = createTron();
        const transactionInfo = await tronWeb.trx.getTransactionInfo(transaction);

        res.status(200).json(transactionInfo);
    } catch (error) {
        console.error('Error retrieving transaction data:', error);
        res.status(400).json(error)
    }

}
