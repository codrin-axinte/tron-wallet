import createTron from "@/lib/tronweb";


export default function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).send({message: 'Only POST requests allowed'})
        return
    }

    const tronWeb = createTron();

    const result = tronWeb.createRandom();

    res.status(200).json(result);
}
