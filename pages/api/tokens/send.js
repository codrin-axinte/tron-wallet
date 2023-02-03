import createTron, {privateKey} from "@/lib/tronweb";

export default async function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    const {to, from, amount, tokenId} = req.body;

    const tronWeb = createTron();

    const tradeobj = await tronWeb.transactionBuilder.sendToken(to, amount, tokenId, from);
    const signedtxn = await tronWeb.trx.sign(tradeobj, privateKey);

    res.status(200).json(signedtxn);
}