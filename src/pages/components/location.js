function Location(props){
    return(
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 max-w-fit p-8 rounded-xl text-white text-xl">
        {props.location.name}, {props.location.region}
        </div>
    );
}

export default Location;