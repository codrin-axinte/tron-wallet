import createTron, {setupContract} from "@/lib/tronweb";



export default async function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).send({message: 'Only POST requests allowed'})
        return
    }

    const {from, to, amount, privateKey} = req.body;

    let result = null
    const tronWeb = createTron({privateKey});
    try {
        let contract = await setupContract(tronWeb, from);
        result = await contract.transfer(to, amount).send();

        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }

}
