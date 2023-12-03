import createTron, {setupContract} from "@/lib/tronweb";


export default async function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).send({message: 'Only POST requests allowed'})
        return
    }

    const {address, private_key} = req.body;

    try {
        const tronWeb = createTron({privateKey: private_key});
        const contract = await setupContract(tronWeb, address);
        const result = await contract.balanceOf(address).call();
        // USDT has 6 decimal places
        const decimal = tronWeb.toDecimal(result)
        const balance = tronWeb.toBigNumber(decimal).div(1e6).toString();

        res.status(200).json(balance);
    } catch (error) {
        console.error("Error: ", error);
        console.error('DEBUG:', {address, private_key})
        res.status(400).json({
            error,
            address,
            private_key
        });
    }
}
