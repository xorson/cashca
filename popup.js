const noCashca = "The webpage does not contain a Cascha"


document.addEventListener('DOMContentLoaded', function () {

  var button = document.getElementById('pay');
  button.addEventListener('click', function() {

    previous_webcash=localStorage.getItem('previouscash') // need to pass cashca to wallet and trigger
    next_webcash=localStorage.getItem('nextcash')

    const form = document.createElement("form");
    form.style.display = "none"; // Hide the form

    // Set the form attributes
    form.method = "POST";
    form.action = "https://webcash.org/web";

    // Construct the POST replace request
    const Input1 = document.createElement("input");
    Input1.type = "hidden";
    Input1.name = "terms";
    Input1.value = "agreed";
    form.appendChild(Input1);

    const Input2 = document.createElement("input");
    Input2.type = "hidden";
    Input2.name = "action";
    Input2.value = "replace";
    form.appendChild(Input2);


    const Input3 = document.createElement("input");
    Input3.type = "hidden";
    Input3.name = "previous_webcash";
    Input3.value = previous_webcash;
    form.appendChild(Input3);

    const Input4 = document.createElement("input");
    Input4.type = "hidden";
    Input4.name = "next_webcash";
    Input4.value = next_webcash;
    form.appendChild(Input4);

    // Nice floating text on status
    const responseFrame = document.createElement("iframe");
    responseFrame.style.display = "none";

    console.log(form)
    // Append the form and iframe to the document body
    document.body.appendChild(form);
    document.body.appendChild(responseFrame);

    // Listen for the iframe load event
    responseFrame.addEventListener("load", function() {
      const responseBody = responseFrame.contentDocument.body.innerText;
      console.log("Response Body:", responseBody);
    });

    // Submit the form
    form.target = responseFrame.name;
    form.submit();
    document.getElementById('payment_status').innerText = "Success"
  })
    
    browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
  

      document.getElementById('balance').innerText = localStorage.getItem(balance) //not implemented correctly yet

      browser.tabs.executeScript(activeTab.id, { code: 'document.getElementById("cashca").innerText'}, function (results) {
        if (results == null) {
            document.getElementById('result').innerText=noCashca
        } else {
            webcash = results[0]
            localStorage.setItem('nextcash',webcash) // serialise cashca and get the host desired secret
            const parts = webcash.split(":")
            amount = parts[0].substr(1)
            document.getElementById('result').innerText = "This webpage wants " + amount +" webcash. Press Pay to proceed"
            document.getElementById('pay').style.display = 'block';
        }
      })

    })
})
