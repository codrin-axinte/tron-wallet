import createTron from "@/lib/tronweb";

export default async function handler(req, res) {

    const {address} = req.query;

    const tronWeb = createTron();

    const result = await tronWeb.trx.getBalance(address);
    const trxAmount = tronWeb.fromSun(result);
    // DO USD Exchange

    res.status(200).json({
        'sun': result,
        'trx': trxAmount,
        'usd': '',
    });
}
