
import createTron, {setupContract} from "@/lib/tronweb";

const tronWeb = createTron();

export default async function handler(req, res) {

    const {address} = req.query;

// TODO: Research https://stackoverflow.com/questions/70647606/im-trying-to-fetch-all-transactions-of-a-certain-tron-address

    res.status(200).json(balance);
}
