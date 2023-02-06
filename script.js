const API_Key = `3265874a2c77ae4a04bb96236a642d2f`
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
// const IMG_Url = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const form = document.querySelector("form")
const weather = document.querySelector("#weather")
const search = document.querySelector("#search")

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading...</h2>`

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
    const response = await fetch(url)
    // console.log(response);
    const data = await response.json()

    return showWeatherData(data);
}

const showWeatherData = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2>Wrong City Name</h2>`
        return
    }

    // console.log(data);
    weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon here" />
    </div>
    <div>
        <h2>
            ${data.main.temp}℃
        </h2>
        <h2>
            ${data.weather[0].main}
        </h2>
        
    </div>
    `

}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value);
        event.preventDefault()
    }
)

document.body.style.background = 'url(https://source.unsplash.com/1720x1600/?weather)';