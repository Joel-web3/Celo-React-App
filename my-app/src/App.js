import React from 'react';
import { useWallet } from './useWallet';

function App() {
  const { connectWallet, accounts, network } = useWallet();

  return (
	<div className="App">
  	<button onClick={connectWallet}>Connect to a Celo Wallet</button>
  	{accounts.length > 0 &&
    	<div>
      	<h2>Connected Accounts</h2>
      	{accounts.map((account, index) => (
        	<p key={index}>{account}</p>
      	))}
      	<h2>Connected Network</h2>
      	<p>{network.name}</p>
    	</div>
  	}
	</div>
  );
}

export default App;