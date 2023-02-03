import createTron from "@/lib/tronweb";

export default async function handler(req, res) {

    const query = req.query;

    const tronWeb = createTron();

    const result = await tronWeb.trx.getTokensIssuedByAddress('TGQVLckg1gDZS5wUwPTrPgRG4U8MKC4jcP');

    res.status(200).json(result);
}