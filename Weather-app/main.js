
function getWeatherData() {
  
    let city = document.getElementById("input").value;
    if (!city || city === "") {
      alert("Please enter a city name");
      return;  // Stop the function if no city is provided
    }
    
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b242e0efc7611ec16249352f3d5f5e68`
      )
      .then((res) => {
        const data = res.data;
        // console.log(data);
        document.getElementById('city-name').innerHTML = `${data.city.name}`;
        const kelvinData = data.list[0].main.temp;
        const temp  = Math.round( kelvinData - 273.15)
        document.getElementById('temperture').innerHTML = `${temp}°C`;
        
        // console.log(data.list)
        const dataList = data.list.slice(0,6);
        // console.log(dataList)
        const getDataForSun = (conditionSun) => {
          if (conditionSun > 30){
            return "images/sun.png"; // Image for hot weather
          } else if (conditionSun >= 20 && conditionSun <= 30) {
            return "images/warm.png"; // Image for warm weather
          } else if (conditionSun >= 10 && conditionSun <= 20) {
            return "images/cold.png"; // Image for cold weather
          } else {
            return "images/cold.png"; // Default image for very cold weather
          }      
        }
        const applyStyleForSun = (conditionSun, imageElement) => {
       
        
          if (conditionSun > 30) {
            imageElement.style.borderRadius = '155px';// Scale up for hot weather
            // Increase brightness
          } else if (conditionSun >= 20 && conditionSun <= 30) {
            imageElement.style.borderRadius = '155px'; // Slightly scale up for warm weather
            // Slight brightness increase
          } else if (conditionSun >= 10 && conditionSun <= 20) {
            imageElement.style.borderRadius = '155px'; // Normal size for cool weather
           
          } else {
            imageElement.style.borderRadius = '155px'; // Scale down for very cold weather
           
          }
        }
        const conditionSun = temp; // This would be the temperature from your API
        const sunImageData = getDataForSun(conditionSun);
        const sunImageElement = document.getElementById('sunImage');
        
        // Set the image source
        sunImageElement.src = sunImageData;
        
        // Apply dynamic styling to the image based on temperature
        applyStyleForSun(conditionSun, sunImageElement);
        const todayForeCastImage = temp;

        

        const weatherDivs = document.querySelectorAll('.today-forecast-child');
        Array.from(weatherDivs).map((div, index) => {
          const times = data.list[index].dt_txt;
          const timeShort = times.slice(12, 16);
          div.querySelector('p').innerHTML = `${timeShort} pm`;
        
          const description = data.list[index].weather[0].description;
          div.querySelector('h6').innerHTML = `${description}`;
        
          // Function to return image path based on weather description
          const oneImage = (description) => {
            if (description === "clear sky") {
              return "images/clear-sky.png"; // Path to sun image
            } else if (description === "few clouds") {
              return "images/weather.png"; // Path to cloud image
            } else if (description === "rain") {
              return "images/rain.png"; // Path to rain image
            } else {
              return "images/snow.png"; // Default image for other weather conditions
            }
          };
        
          // Get the image based on the description
          const imageSrc = oneImage(description);
        
          // Create an image element and set its src attribute
          const imgElement = document.createElement('img');
          imgElement.src = imageSrc;
          imgElement.alt = description; // Set alt text for accessibility
          imgElement.style.borderRadius = '150px';
          // Set border-radius for rounded corners
        
          // Append the image to the div (or replace an existing image)
          const existingImg = div.querySelector('img');
          if (existingImg) {
            existingImg.src = imageSrc; // If image exists, just change src
            existingImg.style.borderRadius = '150px'; // Ensure border-radius is applied to existing image
          } else {
            div.appendChild(imgElement); // If no image, append a new one
          }
        });
          
      
      document.querySelector('.air-child-1 h5').innerHTML = `${dataList[0].main.feels_like}`;
      document.querySelector('.air-child-2 h5').innerHTML = `${dataList[0].wind.speed}km/h`;      
      document.querySelector('.air-child-1 h6').innerHTML = `${dataList[0].wind.deg}`;
      document.querySelector('.air-child-2 h6').innerHTML = `${data.city.population}`      
      
      const sevenDays = document.querySelectorAll(".foreCast-child");
      Array.from(sevenDays).map((div, index) => {
        // Get humidity and clouds data
        const humidity = data.list[index].main.humidity;
        const clouds = data.list[index].weather[0].main; // 'clouds' represents the main weather description
      
        // Display humidity and clouds description
        div.querySelector('h5').innerHTML = `${humidity}%`;
        div.querySelector('h6').innerHTML = `${clouds}`;
      
        // Function to return image path based on clouds (weather description)
        const getImageBasedOnClouds = (clouds) => {
          if (clouds === "Clear") {
            return "images/clear.png"; // Image for clear sky
          } else if (clouds === "Clouds") {
            return "images/weather.png"; // Image for cloudy weather
          } else if (clouds === "Rain") {
            return "images/rain.png"; // Image for rain
          } else if (clouds === "Snow") {
            return "images/snow.png"; // Image for snow
          } else if (clouds === "Thunderstorm") {
            return "images/thunderstorm.png"; // Image for thunderstorm
          } else {
            return "images/clear.png"; // Default image for other conditions
          }
        };
      
        // Get the image source based on the clouds description
        const imageSrc = getImageBasedOnClouds(clouds);
      
        // Create or update an image element with the appropriate source
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = clouds; // Set alt text based on the clouds description
        imgElement.style.borderRadius = '150px'; // Give the image rounded corners
      
        // Append the image to the div or replace an existing image
        const existingImg = div.querySelector('img');
        if (existingImg) {
          existingImg.src = imageSrc; // Update existing image
          existingImg.style.borderRadius = '150px'; // Ensure the border-radius is applied
        } else {
          div.appendChild(imgElement); // Append the image if it doesn't exist
        }
      });
      
      // Error handling for failed fetch request
      // .catch((error) => {
      //   console.error("Error fetching weather data:", error);
      //   alert("Failed to fetch weather data. Please check the city name or try again later.");
      // });
})}
  
  


  
