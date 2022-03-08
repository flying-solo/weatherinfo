import { useState } from "react";
import Sun from "../../Graphics/sun.png";
import Location from "./location";

function Leftsection(){
    const [search, setSearch]=useState('');
    let day = new Date();

    return(
        <div className="">
            <form>
                <input 
                type="text"
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}} />
            </form>
            <img src={Sun} width={200} alt="Sun" />
            <div className="temp"><span className="temprature">12</span><span className="celsius">&#8451;</span></div>
            <div>{`${day.toLocaleDateString('en-US', { weekday: 'long' })},${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`}</div>
            <div className="">Clear</div>
            <Location />
            </div>
    );
}

export default Leftsection;