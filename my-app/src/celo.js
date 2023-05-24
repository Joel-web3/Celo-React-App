import { newKit } from '@celo/contractkit';

let kit;

export const getKit = () => {
	if (!kit) {
    	kit = newKit('https://alfajores-forno.celo-testnet.org');
	}
	return kit;
};