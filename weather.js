// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const APIKEY = '9dec74cfb2f077cd97d3da533d852a7b' ;

let apiCall = function (city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr` ;

fetch(url)
.then((response) => 
    response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML =  "<i class='fas fa-building'></i>" + data.name ;
        document.querySelector('#temps').innerHTML = "<i class='fas fa-sun'></i>" + data.main.temp + '°' ;
        document.querySelector('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
    }) 
    )
    .catch((err) => console.log('Erreur : ' + err));
   
    

   
    


};

// barre de recherche 
  
document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault(); 

      let ville = document.querySelector('#inputCity').value;

      apiCall(ville);
      

      
      // lance un gif avec la valeur entré dans l'input GIF (même sans recherche)
      sendApiRequest('UserInput');
    });

    // La ville affiché de base 

    apiCall('Bordeaux');


    // Si la Temperature est en dessous de 10 degres = froid 
    // valeur  assigné 
    // 


