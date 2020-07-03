
  
  let now = new Date();
  now.getDate();
  

  let months = [ 
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
  ];
  let month = months[now.getMonth()];
  
  let date = now.getDate();
  
  let year = now.getFullYear();
  
  let currentDateTime = `${month} ${date}, ${year}`;
  
  let today = document.querySelector("#monthDateYear");
  // console.log(today);
  today.innerHTML = `${currentDateTime}`;

  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = now.getMinutes();
  if (minutes< 10) {
    minutes = `0${minutes}`;
  }

  let currentTime = `${hours}:${minutes}`;
  

  document.querySelector("#time").innerHTML = `${currentTime}`;



let searchBox = document.querySelector("#searchBox");
searchBox.addEventListener("submit", enterCity);

function enterCity(event) {
  event.preventDefault();
  let userInputCity = document.querySelector("#userInput").value;
  updateCityAndTemp(userInputCity);
}

function convertCToF(event) {
  event.preventDefault();
  let celsius = document.querySelector("#currentWeather").innerHTML;
  let fahrenheit = Math.round((celsius * 9) / 5 + 32);
  console.log(fahrenheit);
  document.querySelector("#currentWeather").innerHTML = fahrenheit;
  // preventDefault();
}

function convertFToC(event){
  event.preventDefault();
  // let apiKey = "b855a19b8fb3b4c4426ec0e293bf081b";
  // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  let fahrenheit = document.querySelector("#currentWeather").innerHTML; 
  let celsius = Math.round((fahrenheit - 32) * 5 / 9);
  document.querySelector("#currentWeather").innerHTML = celsius;
  // preventDefault();
}


let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertFToC);

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertCToF);
  




function showCityAndTemp(response){
  let displayedCity = document.querySelector("#city");
  displayedCity.innerHTML = response.data.name;
  // console.log(response);
  let currentWeather = document.querySelector("#currentWeather");
  currentWeather.innerHTML = Math.round(response.data.main.temp);
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind ${Math.round(response.data.wind.speed)} mph`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;

}

function updateCityAndTemp (city) {
  let apiKey = "b855a19b8fb3b4c4426ec0e293bf081b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  axios.get(apiUrl).then(showCityAndTemp);
}
function showCurrentLocation(position){
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "b855a19b8fb3b4c4426ec0e293bf081b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(showCityAndTemp);


}

function currentPositionRequest (){
  navigator.geolocation.getCurrentPosition(showCurrentLocation);
}


let currentLocationButton = document.querySelector("#currentLocation");
currentLocationButton.addEventListener("click", currentPositionRequest);









 
 