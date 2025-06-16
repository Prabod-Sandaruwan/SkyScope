  function slideUp() {
    const landing = document.querySelector(".landpage");
    landing.classList.add("slide-up");
}
const openWeatherMap_key = "336c9bb7a6170fa1f517c50cb420617f";
const weatheAPI_key = "9caa04d30c7a4e869aa42048250906";

async function getWeather() {
  const inputCity = document.getElementById("city").value;
  const url_weatherMap = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${openWeatherMap_key}&units=metric`;
  const weatherMap_Response = await fetch(url_weatherMap);
  const weatherMap_Data = await weatherMap_Response.json();
  console.log(weatherMap_Data);

  const url_weatherAPI = `https://api.weatherapi.com/v1/current.json?key=${weatheAPI_key}&q=${inputCity}&aqi=yes`;
  const weatherAPI_Response = await fetch(url_weatherAPI);
  const weatherAPI_Data = await weatherAPI_Response.json();
  console.log(weatherAPI_Data);

  const temp = weatherAPI_Data.current.temp_c;
  const CITY = weatherAPI_Data.location.name;
  const region = weatherAPI_Data.location.country;
  const local_time = weatherAPI_Data.location.localtime;
  const feels_like = weatherMap_Data.main.feels_like;
  const wind = weatherAPI_Data.current.wind_kph;
  const humidity = weatherMap_Data.main.humidity;
  const UV = weatherAPI_Data.current.uv;
  const co = weatherAPI_Data.current.air_quality.co;
  const no2 = weatherAPI_Data.current.air_quality.no2;
  const o3 = weatherAPI_Data.current.air_quality.o3;
  const so2 = weatherAPI_Data.current.air_quality.so2;

  document.getElementById("city_name").innerText = CITY;
  document.getElementById("state").innerText = region;
  document.getElementById("time").innerText = local_time;
  document.querySelector(".temp").textContent = temp;
  document.querySelector("#wind_data").textContent = wind;
  document.querySelector("#humiduty_data").textContent = humidity;
  document.querySelector("#uv_data").textContent = UV;
  document.querySelector("#temp_data").textContent = feels_like;
  document.getElementById("co").innerText = co;
  document.getElementById("no2").innerText = no2;
  document.getElementById("o3").innerText = o3;
  document.getElementById("so2").innerText = so2;

  const is_day = weatherAPI_Data.current.is_day;
  const condition = weatherAPI_Data.current.condition.text;
  const weatherImg = document.getElementById("img1");
  const text = document.getElementById("desc");

  if (condition === "Sunny") {
    weatherImg.src = "icon images/sunny-day.png"; 
    text.textContent = "🌞 The sun is shining bright across the sky! It’s the perfect time to head outside, enjoy the warmth, go for a walk, or just soak in some vitamin D. Don’t forget your sunglasses 🕶️ and stay hydrated 💧!";}
  else if (condition === "Clear") {
    weatherImg.src = "icon images/clear-night.png";
    text.textContent = "🌌 It’s a clear and quiet night. Stars are likely to be visible 🌟, and the fresh breeze may bring a soothing atmosphere 🌬️. A wonderful night to unwind or reflect in peace.";}
  else if (condition === "Partly Cloudy" && is_day == 1) {
    weatherImg.src = "icon images/partly cloud-day.png";
    text.textContent = "🌥️ Sunshine peeks through scattered clouds, creating a gentle balance of warmth and shade. It’s a lovely day to be outside without the harshness of full sun 😌";}
  else if (condition === "Partly Cloudy" && is_day == 0) {
    weatherImg.src = "icon images/cloudy-night.png";
    text.textContent = "🌙 A cloudy blanket covers the night sky, dimming the moonlight 🌘. It’s a quiet and calm atmosphere — perfect for a restful night in 💤.";}
  else if (condition === "Overcast" && is_day == 1) {
    weatherImg.src = "icon images/overcast-day.png";
  text.textContent = "Heavy clouds are stretching across the entire sky, giving a grey and muted feel. While it’s not raining yet, it could feel chilly 🥶 or a bit dull — ideal for slow, relaxed activities 🧘.";}
  else if (condition === "Overcast" && is_day == 0) {
    weatherImg.src = "icon images/overcast-night.png";
  text.textContent = "🌑 The overcast sky has turned the night into a quiet, shadowy scene. It may feel extra still outside — a great opportunity to relax and recharge 🛌.";}
  else if (condition === "Cloudy" && is_day == 1) {
    weatherImg.src = "icon images/cloudy-day.png";
  text.textContent = "☁️ The sky is filled with thick clouds, blocking most of the sunlight 🌫️. It might feel a bit gloomy, but it’s a great time to stay cozy 🛋️, read a book 📚, or enjoy indoor activities 🎨.";}
  else if (condition === "Cloudy" && is_day == 0) {
    weatherImg.src = "icon images/cloudy-night.png";
    text.textContent = "🌙 A cloudy blanket covers the night sky, dimming the moonlight 🌘. It’s a quiet and calm atmosphere — perfect for a restful night in 💤.";}
  else if (condition === "Patchy light rain with thunder" && is_day == 1) {
    weatherImg.src = "icon images/light rain-day.png";
    text.textContent = "🌦️ There are rain showers in nearby areas. You might experience a mix of dry and wet spells 🌤️🌧️. It's a good idea to keep an umbrella handy ☂️ and check for updates 🔄.";}
  else if (condition === "Patchy light rain with thunder" && is_day == 0) {
    weatherImg.src = "icon images/light rain-night.png";
    text.textContent = "🌧️ Some nearby areas are receiving light rain 🌙. It may or may not reach your location, but the night feels humid and quiet 🌫️. Stay prepared and comfortable inside 🏠.";}
  else if (condition === "Patchy rain nearby" && is_day == 1) {
    weatherImg.src = "icon images/light rain-day.png";
    text.textContent = "🌦️ Light rain is gently falling — the kind that makes everything feel fresh and calm 🌱. Don’t forget an umbrella ☂️ or a raincoat if you’re heading out. It’s a perfect moment for a warm drink indoors ☕.";}
  else if (condition === "Patchy rain nearby" && is_day == 0) {
    weatherImg.src = "icon images/light rain-night.png";
    text.textContent = "🌧️ A soft drizzle is painting the night quietly 🌌. The sound of rain might help you sleep better 💤, bringing peace and a cozy mood to your evening.";}
  else if (condition === "Light rain shower" && is_day == 1) {
    weatherImg.src = "icon images/light rain-day.png";
    text.textContent = "🌦️ Light rain is gently falling — the kind that makes everything feel fresh and calm 🌱. Don’t forget an umbrella ☂️ or a raincoat if you’re heading out. It’s a perfect moment for a warm drink indoors ☕.";}
  else if (condition === "Light rain shower" && is_day == 0) {
    weatherImg.src = "icon images/light rain-night.png";
    text.textContent = "🌧️ A soft drizzle is painting the night quietly 🌌. The sound of rain might help you sleep better 💤, bringing peace and a cozy mood to your evening.";}
  else if (condition === "Moderate rain" && is_day == 1) {
    weatherImg.src = "icon images/light rain-day.png";
    text.textContent = "🌧️ Heavy rain is pouring down, making the roads wet and visibility low 🚧. It's best to stay indoors and safe 🏠. If you're going out, wear waterproof gear 🧥 and be extra careful ⚠️.";}
  else if (condition === "Moderate rain" && is_day == 0) {
    weatherImg.src = "icon images/partly rain-night.png";
    text.textContent = "🌧️ It’s a stormy and rainy night, with heavy rainfall outside 🌩️. Stay indoors, stay dry, and let the sound of rain bring you a restful and relaxing sleep 🛌.";}
  else if (condition === "Light rain" && is_day == 1) {
    weatherImg.src = "icon images/light rain-day.png";
    text.textContent = "🌦️ Light rain is gently falling — the kind that makes everything feel fresh and calm 🌱. Don’t forget an umbrella ☂️ or a raincoat if you’re heading out. It’s a perfect moment for a warm drink indoors ☕.";}
  else if (condition === "Light rain" && is_day == 0) {
    weatherImg.src = "icon images/light rain-night.png";
    text.textContent = "🌧️ A soft drizzle is painting the night quietly 🌌. The sound of rain might help you sleep better 💤, bringing peace and a cozy mood to your evening.";}
  else if (condition === "Fog" && is_day == 1) {
    weatherImg.src = "icon images/mist-day.png";
    text.textContent = "🌫️ A fine mist surrounds the area, making everything look dreamy and soft 🌸. Visibility might be low, so take care when traveling 🚗. A calm and mysterious vibe fills the day.";}
  else if (condition === "Fog" && is_day == 0) {
    weatherImg.src = "icon images/mist-night.png";
    text.textContent = "🌁 Misty layers float across the night, wrapping everything in a peaceful silence 🤫. It’s a magical and serene time, but stay cautious on the roads ⚠️.";}
  else if (condition === "Moderate rain at times" && is_day == 1) {
    weatherImg.src = "icon images/light rain-day.png";
    text.textContent = "🌦️ Light rain is gently falling — the kind that makes everything feel fresh and calm 🌱. Don’t forget an umbrella ☂️ or a raincoat if you’re heading out. It’s a perfect moment for a warm drink indoors ☕.";}
  else if (condition === "Moderate rain at times" && is_day == 0) {
    weatherImg.src = "icon images/light rain-night.png";
    text.textContent = "🌧️ A soft drizzle is painting the night quietly 🌌. The sound of rain might help you sleep better 💤, bringing peace and a cozy mood to your evening.";}

}