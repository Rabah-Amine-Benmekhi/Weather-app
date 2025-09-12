

const apikey = "3b7ac3ac3c7000d4aa306e1e7cb95a03";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.getElementById('city_name');
const input = document.querySelector('.city');
const btn = document.querySelector('.btn');
const weatherscreen = document.querySelector('.btn');
const temperatue = document.getElementById('temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const Img = document.querySelector(".nature");
const weatherinfo = document.querySelector('.weather-infos');
const savebtn = document.querySelector('.savebtn');
const resetbtn = document.querySelector('.resetbtn');
const error = document.querySelector('.error');

async function weather () {

    const response = await fetch(apiurl + input.value +`&appid=${apikey}`);
    var data = await response.json();
   
      if (input.value === ''){
        error.innerHTML = 'Enter you city name'
      } else if(response.status === 404) {
        error.innerHTML = 'Enter a valid city name'
    } else {  
        error.innerHTML = '';
          city.innerHTML = data.name;
    temperatue.innerHTML = Math.trunc(data.main.temp) + '°C';
    humidity.innerHTML = data.main.humidity + ' %';
    wind.innerHTML = data.wind.speed + ' km/h';
    switch (data.weather[0].main) {
        case "Clear":
        Img.src = "images/clear.png";
        break;
        case "Clouds":
        Img.src = "images/clouds.png";
        break;
        case "Drizzle":
        Img.src = "images/drizzle.png";
        break;
        case "Mist":
        Img.src = "images/mist.png";
        break;
        case "Rain":
        Img.src = "images/rain.png";
        break;
        case "Snow":
        Img.src = "images/snow.png";
        break;
}

input.value = '';
 weatherinfo.style.display = "block";


}

}

// add the city name in the screen
btn.addEventListener('click',weather);


// set in local storage :

function setdata () {
   localStorage.setItem("cityname",city.innerHTML);
   localStorage.setItem("temperature",temperatue.innerHTML);
   localStorage.setItem("humidity",humidity.innerHTML);
   localStorage.setItem("wind",wind.innerHTML);
   localStorage.setItem("Image",Img.src);
   
}

function getdata () {
   city.innerHTML =  localStorage.getItem("cityname");
   temperatue.innerHTML = localStorage.getItem("temperature");
   humidity.innerHTML = localStorage.getItem("humidity");
   wind.innerHTML = localStorage.getItem("wind");
   Img.src = localStorage.getItem("Image");
}

//  use the Enter button to show data on the screen :
input.addEventListener('keydown',function(e){
    if(e.key === 'Enter') {
        weather();
    }
})

// save data when i click on save button  :

savebtn.addEventListener('click',() =>{
    setdata();
})

resetbtn.addEventListener('click',() => {
    localStorage.clear();
    weather.style.display = 'none';
})
  
// get from local storage : 

    if (localStorage.length !== 0){
        weatherinfo.style.display = "block";
        getdata();
    }
