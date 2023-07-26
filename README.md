# cashca
A webcash enabled CAPTCHA 

Cashca is a proof of concept browser extension to implement a paywall or bot control on an endpoint using webcash tokens for their "proof of work".
It's designed to provide low friction UI for receiving a webcash token.

A resource wishing to implement cashca needs to do the following:
1. Decide on the webcash amount desired and generate a webcash token with a random 32-byte secret, i.e. (`e100:secret:001122334455...`)
2. Embed the token in the HTML page with the tag id="cashca", i.e. `<p id="cashca">webcash_token</p>`

Clicking on the cashca browser extension will parse the active tab and look for a "cashca" tag and if found will prompt the user to approve the transfer.

Once approved by the user, cashca will pay to the server generated token via a "replace" function. The server should have a "proceed" button which checks to see if the transfer has occured via a "verify" function and secure the token into its own wallet before serving the requested content.

Cashca holds webcash tokens by entering a `master_secret` in the browser's `localStorage`.

In summary, the UI is as follows when a user navigates to a website that implements cashca:

1. Enter URL and load page
2. Review the webcash amount
3. Click on the browser extension to "pop-up" and click "pay" and then submit.
4. Site takes care of the rest
<br><br>

*The source code provided is for mozilla based browsers.*

## Snapshot of cashca browser extension

<img src="assets/cascha UI.png">
