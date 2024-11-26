let result=document.getElementById("result")
let searchBtn=document.getElementById("search-btn")
let cityRef=document.getElementById("city");
//function to fetch weather
let getWeather=()=>{
    let cityValue=cityRef.value
    //If inputfield is not empty
    if(cityValue.length==0){
        result.innerHTML=`<h3 class="msg">Please Enter a city name</h3>`
    }
    //If input field is not empty
    else{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=8cc40ef171de2ff8d3f28d817dc81380`;

    cityRef.value="";
    fetch(url).then((resp)=>resp.json())
    .then((data)=>{
        console.log(data)
        console.log(data.weather[0].icon)
        console.log(data.weather[0].main)
        console.log(data.weather[0].description)
        console.log(data.name)
        console.log(data.main)
        console.log(data.main.temp_min)
        console.log(data.main.temp_max)
        result.innerHTML=`<h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="weather">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp}&#176</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}</h4>

            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}</h4>
                
            </div>
        </div>`
        
    })
    .catch(()=>{
      result.innerHTML=`<h3 class="msg"> City Not Found</h3>`
    })
    }
}
searchBtn.addEventListener("click",getWeather)
window.addEventListener("load",getWeather)