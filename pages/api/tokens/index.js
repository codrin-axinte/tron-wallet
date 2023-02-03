import createTron from "@/lib/tronweb";

export default async function handler(req, res) {

    const query = req.query;

    const tronWeb = createTron();

    const result = await tronWeb.trx.getTokenListByName(query.search);

    res.status(200).json(result);
}