import Visibility from "./components/visibility";
import Precipitation from "./components/precipitation";
import Humidity from "./components/humidity";
import UV from "./components/uv";
import Wind from "./components/wind";
import Leftsection from "./components/leftsection";

function Dashboard(){
    // var lat=null;
    // var lon=null;
    // const[WeatherData, setWeatherData]=useState(null);
    // navigator.geolocation.getCurrentPosition(function(position){
    // lat=position.coords.latitude;
    // lon=position.coords.longitude;})

// useEffect(()=>{
//   fetch(`http://api.weatherapi.com/v1/current.json?key=78319dd73d0a4876b44184929220703&q=${lat},${lon}&aqi=no`)
//   .then(res => res.json())
//   .then(data => setWeatherData(data))
//   .catch(err=>console.log(err));
// },[lat,lon]);
  
    return(
        <div className="">
        <Leftsection />
        {/* <Precipitation />
        <Humidity />
        <UV />
        <Visibility />
        <Wind /> */}
        </div>
    );
}

export default Dashboard;