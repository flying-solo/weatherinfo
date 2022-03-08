import Location from "./location";

function Leftsection(props){
    let day = new Date();

    return(
        <div className="p-4 flex flex-col h-4/6">
            <img src={props.data.current.condition.icon} width={150} alt={`${props.data.current.condition.text}`} />
            <div className="flex"><span className="text-4xl font-semibold">{props.data.current.temp_c}</span><span className="mt-1 text-lg">&#8451;</span></div>
            <div>{`${day.toLocaleDateString('en-US', { weekday: 'long' })},${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`}</div>
            <div className="">{props.data.current.condition.text}</div>
            <Location location={props.data.location} />
            </div>
    );
}

export default Leftsection;