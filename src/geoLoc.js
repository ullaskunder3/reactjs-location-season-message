const getSeason = (lat, month)=>{
    if(month > 2 && month <9){
        return lat > 0?'Summer':'Winter';
    }
    return lat > 0?"Winter":"Summer";
}

const GeoLocation =(props)=>{
    const season = getSeason(props.lat, new Date().getMonth());
    const icon = season === "Winter"?"🥶":"🥵";
    const color = season === "Winter"?"#bec5ca":"#c92900"
    
    return (
        <div className="season__container">
            <h3 style={{color: color}}>
            {season === 'Winter'? 'It\'s chilly, isn\'t it?':'Damn, it\'s hot in here'}
            </h3>
            <span>{icon}</span>
        </div>
    )
}

export default GeoLocation;