const apikey = "4ecd950be354f96499693ef5dda6e97f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button")



async function checkWeather(city) {
    const response = await fetch(apiUrl +city+ `&appid=${apikey}`);
    let data = await response.json();

  
    
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML =Math.round(data.main.temp)  + "°c"
    const humidity=document.querySelector('.humidity').innerHTML = data.main.humidity +"%"
    const speed= document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"
    
}



searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value)
})

