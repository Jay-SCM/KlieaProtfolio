//was once 30 lines of broken code !!

// Weather.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from '../styles/Weather.module.css';
//
// const Weather = () => {
//     // State variables for city input and weather data
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//
//     // Function to fetch weather data from the OpenWeatherMap API
//     const getWeatherData = async () => {
//         try {
//             // API key for OpenWeatherMap
//             const apiKey = 'a16b4275e7f9c699970970348e3b1f9c';
//             // API URL for fetching weather data based on the entered city
//             const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//             // Making an API call using axios
//             const response = await axios.get(apiUrl);
//             // Updating state with the fetched weather data
//             setWeatherData(response.data);
//         } catch (error) {
//             // Handling errors if there's an issue fetching data
//             console.error('Error fetching weather data:', error);
//         }
//     };
//
//     return (
//         // Main container with modern card styles
//         <div className={styles.cardContainer}>
//             {/* Heading for the weather app */}
//             <h1 className={styles.heading}>Kliea-Weather-App</h1>
//             {/* Container for the city input and "Get Weather" button */}
//             <div className={styles.inputContainer}>
//                 {/* Input field for entering the city */}
//                 <input
//                     type="text"
//                     placeholder="Enter city"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     className={styles.searchInput}
//                 />
//                 {/* Button to trigger fetching weather data */}
//                 <button onClick={getWeatherData} className={styles.searchButton}>
//                     Get Weather
//                 </button>
//             </div>
//             {/* Displaying weather data if available */}
//             {weatherData && (
//                 // Container for displaying weather information
//                 <div className={styles.weatherCard}>
//                     {/* Displaying city and country */}
//                     <h2 className={styles.weatherTitle}>{weatherData.name}, {weatherData.sys.country}</h2>
//                     {/* Displaying temperature */}
//                     <p className={styles.weatherText}>Temperature: {weatherData.main.temp}°C</p>
//                     {/* Displaying weather description */}
//                     <p className={styles.weatherText}>Weather: {weatherData.weather[0].description}</p>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Weather;

// Weather.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from '../styles/Weather.module.css';
//
// const Weather = () => {
//     // State variables for city input and weather data
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//
//     // Function to fetch weather data from the OpenWeatherMap API
//     const getWeatherData = async () => {
//         try {
//             // API key for OpenWeatherMap
//             const apiKey = 'a16b4275e7f9c699970970348e3b1f9c';
//             // API URL for fetching weather data based on the entered city
//             const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//             // Making an API call using axios
//             const response = await axios.get(apiUrl);
//             // Updating state with the fetched weather data
//             setWeatherData(response.data);
//         } catch (error) {
//             // Handling errors if there's an issue fetching data
//             console.error('Error fetching weather data:', error);
//         }
//     };
//
//     // Video source URL (replace with your video URL)
//     const videoSource = 'weathervideo.mp4.txt';
//
//     return (
//         // Main container with modern card styles and video background
//         <div className={styles.cardContainer} style={{ backgroundImage: `url(${videoSource})` }}>
//             {/* Video element for the background */}
//             <video autoPlay loop muted className={styles.videoBackground}>
//                 <source src={videoSource} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             {/* Heading for the weather app */}
//             <h1 className={styles.heading}>Kliea-Weather-App</h1>
//             {/* Container for the city input and "Get Weather" button */}
//             <div className={styles.inputContainer}>
//                 {/* Input field for entering the city */}
//                 <input
//                     type="text"
//                     placeholder="Enter city"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     className={styles.searchInput}
//                 />
//                 {/* Button to trigger fetching weather data */}
//                 <button onClick={getWeatherData} className={styles.searchButton}>
//                     Get Weather
//                 </button>
//             </div>
//             {/* Displaying weather data if available */}
//             {weatherData && (
//                 // Container for displaying weather information
//                 <div className={styles.weatherCard}>
//                     {/* Displaying city and country */}
//                     <h2 className={styles.weatherTitle}>{weatherData.name}, {weatherData.sys.country}</h2>
//                     {/* Displaying temperature */}
//                     <p className={styles.weatherText}>Temperature: {weatherData.main.temp}°C</p>
//                     {/* Displaying weather description */}
//                     <p className={styles.weatherText}>Weather: {weatherData.weather[0].description}</p>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Weather;

// Weather.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from '../styles/Weather.module.css';
//
// const Weather = () => {
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//
//     const getWeatherData = async () => {
//         try {
//             const apiKey = 'a16b4275e7f9c699970970348e3b1f9c';
//             const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//             const response = await axios.get(apiUrl);
//             setWeatherData(response.data);
//         } catch (error) {
//             console.error('Error fetching weather data:', error);
//         }
//     };
//
//     const videoSource = '/weathervideo.mp4';
//
//     return (
//         <div className={styles.pageContainer}>
//             {/* Video element for the background */}
//             <video autoPlay loop muted className={styles.videoBackground}>
//                 <source src={videoSource} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             {/* Centered card for content */}
//             <div className={styles.cardContainer}>
//                 <h1 className={styles.heading}>Kliea-Weather-App</h1>
//                 <div className={styles.inputContainer}>
//                     <input
//                         type="text"
//                         placeholder="Enter city"
//                         value={city}
//                         onChange={(e) => setCity(e.target.value)}
//                         className={styles.searchInput}
//                     />
//                     <button onClick={getWeatherData} className={styles.searchButton}>
//                         Get Weather
//                     </button>
//                 </div>
//                 {weatherData && (
//                     <div className={styles.weatherCard}>
//                         <h2 className={styles.weatherTitle}>
//                             {weatherData.name}, {weatherData.sys.country}
//                         </h2>
//                         <p className={styles.weatherText}>Temperature: {weatherData.main.temp}°C</p>
//                         <p className={styles.weatherText}>
//                             Weather: {weatherData.weather[0].description}
//                         </p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default Weather;

// Weather.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from '../styles/Weather.module.css';
//
// const Weather = () => {
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//
//     const getWeatherData = async () => {
//         try {
//             const apiKey = 'a16b4275e7f9c699970970348e3b1f9c';
//             const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//             const response = await axios.get(apiUrl);
//             setWeatherData(response.data);
//         } catch (error) {
//             console.error('Error fetching weather data:', error);
//         }
//     };
//
//     const videoSource = 'weathervideo.mp4';
//
//     return (
//         <div className={styles.pageContainer}>
//             <video autoPlay loop muted className={styles.videoBackground}>
//                 <source src={videoSource} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             <div className={styles.outerCard}>
//                 <div className={styles.innerCard}>
//                     <h1 className={styles.heading}>Kliea-Weather-App</h1>
//                     <div className={styles.inputContainer}>
//                         <input
//                             type="text"
//                             placeholder="Enter city"
//                             value={city}
//                             onChange={(e) => setCity(e.target.value)}
//                             className={styles.searchInput}
//                         />
//                         <button onClick={getWeatherData} className={styles.searchButton}>
//                             Get Weather
//                         </button>
//                     </div>
//                     {weatherData && (
//                         <div className={styles.weatherCard}>
//                             <h2 className={styles.weatherTitle}>
//                                 {weatherData.name}, {weatherData.sys.country}
//                             </h2>
//                             <p className={styles.weatherText}>
//                                 Temperature: {weatherData.main.temp}°C
//                             </p>
//                             <p className={styles.weatherText}>
//                                 Weather: {weatherData.weather[0].description}
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Weather;

// import font Awesome added weather icons.


// Importing React library along with useState hook
import React, { useState } from 'react';
// Importing axios library for making HTTP requests
import axios from 'axios';
// Importing FontAwesomeIcon component from the '@fortawesome/react-fontawesome' library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importing specific icons from '@fortawesome/free-solid-svg-icons' library
import { faThermometer, faCloud } from '@fortawesome/free-solid-svg-icons';
// Importing styles module for Weather component
import styles from '../styles/Weather.module.css';

// Declaring Weather component
const Weather = () => {
    // Initializing state variables for city and weather data
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    // Function to fetch weather data from the OpenWeatherMap API
    const getWeatherData = async () => {
        try {
            // API key for accessing OpenWeatherMap API
            const apiKey = 'a16b4275e7f9c699970970348e3b1f9c';
            // Constructing the API URL with the provided city and API key
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            // Sending GET request to the API endpoint
            const response = await axios.get(apiUrl);
            // Updating the weather data state with the received data
            setWeatherData(response.data);
        } catch (error) {
            // Handling errors occurred during API request
            console.error('Error fetching weather data:', error);
        }
    };

    // Source URL for the background video
    const videoSource = 'weathervideo.mp4';

    // Rendering JSX for the Weather component
    return (
        <div className={styles.pageContainer}>
            {/* Background video element */}
            <video autoPlay loop muted className={styles.videoBackground}>
                {/* Source for the video */}
                <source src={videoSource} type="video/mp4" />
                {/* Fallback text if video is not supported */}
                Your browser does not support the video tag.
            </video>
            <div className={styles.innerCard}>
                {/* Title of the weather app */}
                <h1 className={styles.heading}>Kliea-Weather-App</h1>
                {/* Input container for entering the city */}
                <div className={styles.inputContainer}>
                    {/* Input field for entering the city */}
                    <input
                        type="text"
                        placeholder="Enter city"
                        value={city}
                        // Handling onChange event to update the city state
                        onChange={(e) => setCity(e.target.value)}
                        className={styles.searchInput}
                    />
                    {/* Button to trigger fetching weather data */}
                    <button onClick={getWeatherData} className={styles.searchButton}>
                        Get Weather
                    </button>
                </div>
                {/* Displaying weather information if available */}
                {weatherData && (
                    <div className={styles.weatherCard}>
                        {/* City name and country */}
                        <h2 className={styles.weatherTitle}>
                            {weatherData.name}, {weatherData.sys.country}
                        </h2>
                        {/* Temperature */}
                        <p className={styles.weatherText}>
                            {/* Thermometer icon */}
                            <FontAwesomeIcon icon={faThermometer} /> Temperature: {weatherData.main.temp}°C
                        </p>
                        {/* Weather description */}
                        <p className={styles.weatherText}>
                            {/* Cloud icon */}
                            <FontAwesomeIcon icon={faCloud} /> Weather: {weatherData.weather[0].description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Weather;


