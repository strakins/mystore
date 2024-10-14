import { useEffect, useState } from "react";

// const devUrl = "https://jsonplaceholder.typicode.com/users";
const devUrl = "https://api.api-ninjas.com/v1/weather";

const WeatherPage = () => {

    const [devDetails, setDevDetails] = useState([]);

    
    
      // const handleClick = (data) => {
        
      // }
    
      useEffect(() => {
        const getDevDetails = async () => {
            const response = await fetch(devUrl);
            const devDetails = await response.json();
            setDevDetails(devDetails);
            console.log(devDetails);
          };

        getDevDetails();
      }, []);
    


  return (
    <div className="h-screen grid grid-cols-4 gap-3 bg-green-400">
            {/* <div className="bg-white p-8 rounded shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-4">
                    Weather App
                </h2>
                <input
                    type="text"
                    placeholder="Enter city name"
                    className="border p-2 w-full mb-4"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} />
                <button
                    className="bg-green-400 text-white p-2 rounded"
                    onClick={fetchWeatherData()}>
                    Get Weather
                </button>
            </div> */}
            {/* Display weather information if data is available */}
            
            {
                devDetails.map((devs) => {
                    return (
                        <div key={devs.id} className="border-2 border-blue-500 ">
                            <h1>{devs.name}</h1>
                            <h3>{devs.phone}</h3>
                        </div>
                    )
                })
            }
        </div>

  )
}

export default WeatherPage
