const { WebcashWallet} =require('./webcash.js')

async function loadWallet() {
 wallet = new WebcashWallet()
 wallet.master_secret='' // hard coded now... need to add UI prompt for first launch to store in localStorage 
 wallet.setLegalAgreementsToTrue() //also prompt for T&Cs
 await wallet.recover(20)
 
 localStorage.setItem("balance",wallet.getBalance())
 tmp_webcash= await wallet.pay(1) //need to parse amount from webpage
 localStorage.setItem("previouscash",tmp_webcash)
}

loadWallet()
