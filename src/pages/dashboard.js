import Visibility from "./components/visibility";
import Precipitation from "./components/precipitation";
import Humidity from "./components/humidity";
import UV from "./components/uv";
import Wind from "./components/wind";
import Leftsection from "./components/leftsection";
import { useEffect, useState } from "react";

function Dashboard() {
  const [WeatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=78319dd73d0a4876b44184929220703&q=${position.coords.latitude},${position.coords.longitude}&aqi=no`
      )
        .then((res) => res.json())
        .then((data) => {setWeatherData(data); console.log(data);})
        .catch((err) => console.log(err));
    });
  }, []);

  return (
    <div className="">
      <Leftsection data={WeatherData}/>
      {/* <Precipitation />
        <Humidity />
        <UV />
        <Visibility />
        <Wind /> */}
    </div>
  );
}

export default Dashboard;
