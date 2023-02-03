const TronWeb = require('tronweb');

export const globalPrivateKey = process.env.TRON_PRIVATE_KEY;
const apiKey = process.env.TRON_API_KEY;
const testUrl = process.env.TRON_TEST_URL || 'https://api.shasta.trongrid.io';
const liveUrl = process.env.TRON_LIVE_URL || 'https://api.trongrid.io';
const isLive = process.env.TRON_LIVE || false;
const apiUrl = isLive ? liveUrl : testUrl;

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider(testUrl);
const solidityNode = new HttpProvider(testUrl);
const eventServer = new HttpProvider(testUrl);


export default function createTron({privateKey} = {}) {
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey ?? globalPrivateKey);
    tronWeb.setHeader({"TRON-PRO-API-KEY": apiKey});

    return tronWeb;
}