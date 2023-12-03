import createTron from "@/lib/tronweb";

export default async function handler(req, res) {

    try {
        const tronWeb = createTron();
        const result = tronWeb.isConnected();
        res.status(result ? 200 : 503).json({'result': result})
    } catch (e) {
        res.status(503).json({'message': e.message})
    }
}