function fetchWeather(city) {
  let api = "9d74092694e370aece0b666f6209c330";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      api
  )
    .then((response) => {
      if (!response.ok) {
        document.getElementById("err").textContent = "Unfortunately! No weather was found by your search";
      } else {
        document.getElementById("err").textContent = "";
      }
      console.log(response)
      return response.json();
      
    })
    .then((data) => {
      displayWeather(data);
      console.log(data)
    });
}

function displayWeather(data) {
  const city = data.name;
  const country = data.sys.country;
  const currentCel = data.main.temp;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const desc = data.weather[0].description;
  const icon = data.weather[0].icon;

   document.getElementById("tmpC").addEventListener("click", function(){
    var cTemp = currentCel;
    var cToFahr = (cTemp * 9) / 5 + 32;
    var message = Math.round(cToFahr) + " \xB0F";
    document.getElementById("degC").textContent = message;
  });
  
  document.getElementById("tmpF").addEventListener("click", function(){
    document.getElementById("degC").textContent = Math.round(currentCel) + " °C";
    });
  

  document.getElementById("currentLocation").textContent =
    "Current Weather in " + city + ", " + country;
  document.getElementById("degC").textContent = Math.round(currentCel) + "°C";
  document.getElementById("icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
  document.getElementById("description").textContent = desc;
  document.getElementById("humidity").textContent =
    "Humidity: " + humidity + "%";
  document.getElementById("wind").textContent =
    "Wind Speed: " + windSpeed + "Km/H";
  document.querySelector(".zuzu").classList.remove("son-1");

if (desc == "smoke") {
  document.body.style.background = 'url("smoke.jpg") center / cover';
}
 else if (desc == "mist") {
  document.body.style.background = 'url("mist.jpg") center / cover';
}

else if (desc == "clear sky") {
  document.body.style.background = 'url("clear-sky.jpg") center / cover';
}

else if (desc == "overcast clouds") {
  document.body.style.background = 'url("overcast-clouds.jpg") center / cover';
}

else if (desc == "few clouds") {
  document.body.style.background = 'url("few-clouds.jpg") center / cover';
}

else if (desc == "broken clouds") {
  document.body.style.background = 'url("few-clouds.jpg") center / cover';
}

else if (desc == "light rain") {
  document.body.style.background = 'url("rain.jpg") center / cover';
}

else if (desc == "moderate rain") {
  document.body.style.background = 'url("rain.jpg") center / cover';
}

else if (desc == "scattered clouds") {
  document.body.style.background = 'url("few-clouds.jpg") center / cover';
}

else if (desc == "heavy intensity rain") {
  document.body.style.background = 'url("rain.jpg") center / cover';
}

else if (desc == "light intensity shower rain") {
  document.body.style.background = 'url("rain.jpg") center / cover';
}

else if (desc == "thunderstorm") {
  document.body.style.background = 'url("thunder.jpg") center / cover';
}

else if (desc == "drizzle") {
  document.body.style.background = 'url("rain.jpg") center / cover';
} 
else if (desc == "haze") {
  document.body.style.background = 'url("haze.jpg") center / cover';
} 
else {
  document.body.style.background = "red";
}

}

document.getElementById("search_bar").addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      let searchBar = document.getElementById("search_bar").value;
      fetchWeather(searchBar);
    }
  });

document.addEventListener("keydown", function (e) {
  if (e.key == "/") {
    document.getElementById("search_bar").focus();
  }
});

let searchBar = document.getElementById("search_bar");

searchBar.addEventListener("keypress", function(e){
  if (e.key === "Enter" && searchBar.value === "") {
    document.getElementById("err").style.display = 'none';
    document.getElementById("error").textContent = 'Please Search City Name in the field above';

  } else {
    document.getElementById("err").style.display = "block";
    document.getElementById("error").textContent = '';
  }

});

fetchWeather("Lahore");

