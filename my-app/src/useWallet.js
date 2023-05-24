import { useState } from 'react';
import { newKitFromWeb3 } from '@celo/contractkit';
import { useDappVersion } from '@celo-tools/use-contractkit';

export function useWallet() {
  const [accounts, setAccounts] = useState([]);
  const { network } = useDappVersion();
 
  async function connectWallet() {
	if (window.celo) {
  	try {
    	await window.celo.enable();
    	const web3 = window.celo;
    	let kit = newKitFromWeb3(web3);
    	let accounts = await kit.web3.eth.getAccounts();
    	setAccounts(accounts);
  	} catch (error) {
    	console.log("Error connecting wallet: ", error);
  	}
	} else {
  	console.log('Celo extension not found');
	}
  }

  return { connectWallet, accounts, network };
}