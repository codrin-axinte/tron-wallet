import createTron from "@/lib/tronweb";

export default async function handler(req, res) {

    const {id} = req.query;

    const tronWeb = createTron();

    const result = await tronWeb.trx.getTransaction(id);

    res.status(200).json(result)
}