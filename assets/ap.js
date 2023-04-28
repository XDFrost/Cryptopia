


var btc = document.getElementById('bitcoin');
var eth = document.getElementById('ethereum');
var tet = document.getElementById('tether');
var bNb = document.getElementById('bnb');


var liveprice = 
{
  "async": true,
  "scroosDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbnb&vs_currencies=usd",

  "method": "GET",
  "headers": {}
}

// JSON.stringify(liveprice);
// JSON.stringify(btc);
// JSON.stringify(eth);
// JSON.stringify(tet);
// JSON.stringify(bNb);

$.ajax(liveprice).done(function(response){
    // console.log(response);
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    tet.innerHTML = response.tether.usd;
    bNb.innerHTML = response.bnb.usd;
});


