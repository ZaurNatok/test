var retrievedClient = localStorage.getItem('client');
let finalClient = JSON.parse(retrievedClient);

let url = 'https://api.sheety.co/fab97654fa94675e6ddbd722da66e294/gang/clients';
let body = {
        "client": {
            "name": finalClient.name,
            "phone": finalClient.phone,
            "email": finalClient.email,
            "address": finalClient.address,
            "price":  finalClient.price,
            "date": finalClient.date
        }
  }
 
  fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(body)
  })
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    console.log(json.client);
  });

  