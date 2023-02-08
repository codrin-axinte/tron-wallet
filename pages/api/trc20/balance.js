import createTron, {setupContract} from "@/lib/tronweb";

const tronWeb = createTron();

export default async function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).send({message: 'Only POST requests allowed'})
        return
    }

    const {address} = req.body;

    let balance = null;

    try {
        let contract = await setupContract(tronWeb, address);
        const result = await contract.balanceOf(address).call();
        balance = result / 1000000;
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }

    res.status(200).json(balance);
}
