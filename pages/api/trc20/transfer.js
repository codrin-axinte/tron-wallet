import createTron, {setupContract} from "@/lib/tronweb";


// TODO: Research TRC20 transfer https://gist.github.com/andelf/bdd18734d40774a721d0c4cbcec67037

export default async function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).send({message: 'Only POST requests allowed'})
        return
    }

    const {from, to, amount, privateKey, contract: contractAddress} = req.body;
<<<<<<< Updated upstream

    console.log('Transfering ' + amount + ' from ' + from + ' to ' + to + ' with contract ' + contractAddress + ' and private key ' + privateKey)

    let result = null
    const tronWeb = createTron({privateKey});
=======
    console.log('DEBUG USDT TRANSFER: ', req.body)
>>>>>>> Stashed changes
    try {
        const tronWeb = createTron({privateKey: privateKey});
        let contract = await setupContract(tronWeb, from);
        const result = await contract.transfer(to, amount).send({from});

        res.status(200).json(result);
    } catch (error) {
        console.error("USDT Transfer Error: ", error);
        res.status(400).json({
            message: error.message || 'Unknown error occurred',
            error
        });
    }
}
