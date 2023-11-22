const TronWeb = require('tronweb');

export const globalPrivateKey = process.env.TRON_PRIVATE_KEY;
const apiKey = process.env.TRON_API_KEY;
const testUrl = process.env.TRON_TEST_URL || 'https://api.shasta.trongrid.io';
const liveUrl = process.env.TRON_LIVE_URL || 'https://api.trongrid.io';
const isLive = process.env.TRON_LIVE || false;
const apiUrl = isLive ? liveUrl : testUrl;

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider(apiUrl);
const solidityNode = new HttpProvider(apiUrl);
const eventServer = new HttpProvider(apiUrl);

export const USDT_CONTRACT = 'TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj'; // For NILE
export const USDT_CONTRACT_LIVE = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'; // For LIVE

export function defaultUSDTContract() {
    return isLive ? USDT_CONTRACT_LIVE : USDT_CONTRACT;
}


// console.log('Using api: ' + apiUrl + ' with contract: ' + defaultUSDTContract())


export default function createTron({privateKey} = {}) {
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey ?? globalPrivateKey);
    tronWeb.setHeader({"TRON-PRO-API-KEY": apiKey});

    return tronWeb;
}

export function setupContract(tronWeb, ownerAddress, contract = undefined) {
    tronWeb.setAddress(ownerAddress);
    return tronWeb.contract().at(contract ?? defaultUSDTContract());
}

