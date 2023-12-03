import createTron from "@/lib/tronweb";

export default async function handler(req, res) {

    const query = req.query;

    try {
        const tronWeb = createTron();
        const result = await tronWeb.trx.getBalance(query.address);

        res.status(200).json(result);
    } catch (e) {
        res.status(400).json({message: e.message});
    }

}