let url = `https://api.openweathermap.org/data/2.5/weather?q=Bordeaux&appid=${APIKEY}&units=metric&lang=fr` ;

fetch(url).then((response) => 
    response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML =  "<i class='fas fa-building'></i>" + data.name ;
        document.querySelector('#temps').innerHTML = "<i class='fas fa-sun'></i>" + data.main.temp + '°' ;
        document.querySelector('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
    }) 
    )
    .catch((err) => console.log('Erreur : ' + err));