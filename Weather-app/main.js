console.log("sachin yadav aa rhe hai ");

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
        document.getElementById('temperture').innerHTML = `${data.list[0].main.temp}`;
        document.getElementById('Pollution').innerHTML = `${data.city.population}`
        console.log(data.list)
        
       
        })
      
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please check the city name or try again later.");
      });
  }

  
