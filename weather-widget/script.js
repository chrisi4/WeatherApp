let weather = {
    apiKey: "5ebd6c3d3f9533660f96a227bfe42b81",
    fetchWeather: function (city) {
      fetch(
        "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=" + this.apiKey
      // "https://api.openweathermap.org/data/2.5/onecall?
//lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutel
//y&appid=11b0499bd13ab56063de7565a440eb97&units=metric"
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
  
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity, temp_max, temp_min, feels_like, pressure } = data.main;  
      const { speed, deg } = data.wind;
      const { clouds } = data.clouds;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp +"°C";
      document.querySelector(".temp_min").innerText = "Min Temperatrue: " + temp_min + "°C";
      document.querySelector(".temp_max").innerText = "Max Temperature: "  + temp_max + "°C";
      document.querySelector(".feels_like").innerText =" Feels like: "+ feels_like + "°C" ;
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".pressure").innerText = "Pressure: " + pressure;
      document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
      document.querySelector(".wind").innerText = "Wind deg: " + deg + " km/h";
    
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Thessaloniki");