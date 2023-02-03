import createTron from "@/lib/tronweb";


export default async function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).send({message: 'Only POST requests allowed'})
        return
    }

    const {address} = req.body;

    const tronWeb = createTron();

    const builder = await tronWeb.transactionBuilder;

    const transaction = address ? builder.createAccount(address) : builder.createRandom();

    const signedTransaction = await tronWeb.trx.sign(transaction);

    const result = await tronWeb.trx.sendRawTransaction(signedTransaction);

    res.status(200).json(result);
}
