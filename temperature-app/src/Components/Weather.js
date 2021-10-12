import React, { useEffect, useState } from 'react'

function Weather() {
    const [State, setState] = useState("");
    const [StateData, setStateData] = useState(null);

    useEffect(() => {
        const fetchingData = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${State}&units=metric&appid=830356ea394924aa53ccf16ae1757505`
            const response = await fetch(url);
            const respJson = await response.json();
            setStateData(respJson.main);
        }
        fetchingData();
    }, [State]);

    return (
        <div className="box">
            <div className="inputData">
                <input className="inputField" type="search" placeholder="Name of city" onChange={(event) => { setState(event.target.value) }}></input>
            </div>
            {State !== "" ?
                ((!StateData) ? <div className="info">
                    <h2 className="errorMsg"> No data found </h2>
                </div> :
                    <div className="info">
                        <h2 className="location">{State}</h2>
                        <h2 className="temp"> {StateData.temp}°C </h2>
                        <div className="tempmin_max">
                            <h2> Min:{StateData.temp_min}°C | {StateData.temp_max}°C</h2>
                        </div>
                    </div>
                ) : <div className="info"><h4>Enter the Name of the city</h4></div>}
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
        </div>
    )
}

export default Weather
