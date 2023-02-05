import createTron, {privateKey} from "@/lib/tronweb";

export default async function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    const body = req.body;

    const tronWeb = createTron();

    const tradeobj = await tronWeb.transactionBuilder.sendTrx(body.to, body.amount, body.from);
    const signedtxn = await tronWeb.trx.sign(tradeobj, privateKey);
    const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);

    res.status(200).json(receipt);
}

// TODO: Research TRC20 transfer https://gist.github.com/andelf/bdd18734d40774a721d0c4cbcec67037
