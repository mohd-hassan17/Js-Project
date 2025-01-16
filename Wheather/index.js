const API_KEY = `14a1db21cf80d96a22b53465a998a26b`

const form = document.querySelector("form")
// form ka default nature hota hai submit hote hii relosd hona
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

// const wet = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`

// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response  = await fetch(api);
    const data = await response.json()
    console.log(data)
     showWeather(data)
}

const showWeather = (data) => {

    if(data.cod == "404" || data.cod == "401"){
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
     weather.innerHTML = `
     
         <div>
             <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
             <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>

     `
    

}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();
    }
)

// const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const form = document.querySelector("form")
// const search = document.querySelector("#search")
// const weather = document.querySelector("#weather")
//     // const API = `https://api.openweathermap.org/data/2.5/weather?
//     // q=${city}&appid=${API_KEY}&units=metric`
//     // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
// const getWeather = async(city) => {
//     weather.innerHTML = `<h2> Loading... <h2>`
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//     const response = await fetch(url);
//     const data = await response.json()
//     return showWeather(data)
// }

// const showWeather = (data) => {
//     if (data.cod == "404") {
//         weather.innerHTML = `<h2> City Not Found <h2>`
//         return;
//     }
//     weather.innerHTML = `
//         <div>
//             <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
//         </div>
//         <div>
//             <h2>${data.main.temp} ℃</h2>
//             <h4> ${data.weather[0].main} </h4>
//         </div>
//     `
// }

// form.addEventListener(
//     "submit",
//     function(event) {
//         getWeather(search.value)
//         event.preventDefault();
//     }
// )