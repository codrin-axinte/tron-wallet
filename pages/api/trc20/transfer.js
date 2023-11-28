import createTron, {setupContract} from "@/lib/tronweb";


// TODO: Research TRC20 transfer https://gist.github.com/andelf/bdd18734d40774a721d0c4cbcec67037

export default async function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).send({message: 'Only POST requests allowed'})
        return
    }

    const {from, to, amount, privateKey, contract: contractAddress} = req.body;

    console.log('Transfering ' + amount + ' from ' + from + ' to ' + to + ' with contract ' + contractAddress + ' and private key ' + privateKey)

    let result = null
    const tronWeb = createTron({privateKey});
    try {
        let contract = await setupContract(tronWeb, from, contractAddress);
        result = await contract.transfer(to, amount).send();

        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }

}
