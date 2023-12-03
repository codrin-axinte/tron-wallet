import createTron, {privateKey} from "@/lib/tronweb";

export default async function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).send({message: 'Only POST requests allowed'})
        return
    }

    const {to, privateKey, amount} = req.body;
    console.log('DEBUG TRX TRANSFER: ', req.body)
    try {
        const tronWeb = createTron();

        const transaction = await tronWeb.trx.sendTransaction(to, amount, privateKey)

        res.status(200).json(transaction);
    } catch (error) {
        console.error("TRX Transfer Error: ", error);
        res.status(400).json(error);
    }
}