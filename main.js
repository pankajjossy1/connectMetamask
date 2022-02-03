let accounts;
window.onload= () => {
  if(window.ethereum)
     document.getElementById("display").innerText = "Wallet Installed";
  else 
     document.getElementById("display").innerText = "Wallet Installed First";
}

const enablEth = async() => {
   accounts = await window.ethereum.request({method : 'eth_requestAccounts'}).catch((err) => {
   })
   document.getElementById("display").innerText = "Account Address :" + accounts[0];
}

const ethBalance = async () =>{
  let balance = await window.ethereum.request({method: 'eth_getBalance',
    params:[
      accounts[0]
    ]
  }).catch((err) =>{
    console.error(err);
  });
  balance = parseInt(balance)/Math.pow(10,18);//convert to eth
  console.log(balance);
  document.getElementById("display").innerText = "Account Balance :" +balance;
}

