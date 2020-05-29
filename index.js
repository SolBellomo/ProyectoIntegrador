function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//CHART

let proxy = 'https://cors-anywhere.herokuapp.com/'
let endpoint = 'https://api.deezer.com/chart/0'

fetch (proxy+endpoint) 
.then(function(dataJson){
  return dataJson.json()
})
.then(function(resultado){
  let charts = document.querySelector('.audiios');

  for(let i=0; i<8; i++){  
    charts.img.innerHTML += '<img src="' + data[i].picture + '">'
    charts.innerHTML += '<audio class="audiios" src="' + charts.tracks.link[i].preview + '" controls>' + '</audio>'
    return console.log(resultado);
  }
})
.catch(function(error){
  return console.log(error);
})
