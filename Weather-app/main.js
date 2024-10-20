
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
        //  console.log(data);
        document.getElementById('city-name').innerHTML = `${data.city.name}`;
        const kelvinData = data.list[0].main.temp;
        const temp  = Math.round( kelvinData - 273.15)
        document.getElementById('temperture').innerHTML = `${temp}°C`;
        // console.log(data.list)
        const dataList = data.list.slice(0,6);
        // console.log(dataList)
        const weatherDivs = document.querySelectorAll('.today-forecast-child');

        Array.from(weatherDivs).map((div,index) => {
          const times = data.list[index].dt_txt;
          const timeShort = times.slice(12,16);
          div.querySelector('p').innerHTML = `${timeShort} pm`
          const description = data.list[index].weather[0].description;
          div.querySelector('h6').innerHTML = `${description}`;
      }); 
    
      document.querySelector('.air-child-1 h5').innerHTML = `${dataList[0].main.feels_like}`;
      document.querySelector('.air-child-2 h5').innerHTML = `${dataList[0].wind.speed}km/h`;      
      document.querySelector('.air-child-1 h6').innerHTML = `${dataList[0].wind.deg}`;      
      
      const sevenDays = document.querySelectorAll(".foreCast-child");
      Array.from(sevenDays).map((div,index)=>{
        const humidity  = data.list[index].main.humidity;
        
        div.querySelector('h5').innerHTML = `${humidity}%`;
        const clouds = data.list[index].weather[0].main;
        div.querySelector('h6').innerHTML = `${clouds}`
      })
        })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please check the city name or try again later.");
      });
  }
  
  


  
