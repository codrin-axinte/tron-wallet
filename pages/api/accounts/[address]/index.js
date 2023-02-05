import createTron from "@/lib/tronweb";

export default async function handler(req, res) {

    const {address} = req.query;

    const tronWeb = createTron();

    const result = await tronWeb.trx.getAccount(address);

    res.status(200).json(result)
}