import createTron from "@/lib/tronweb";

export default async function handler(req, res) {

    const tronWeb = createTron();
    const result = tronWeb.isConnected();

    res.status(200).json(result)
}