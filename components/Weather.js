import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometer, faCloud, faWind, faTint } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Weather.module.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const getWeatherData = async () => {
        try {
            const apiKey = 'a16b4275e7f9c699970970348e3b1f9c';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            const response = await axios.get(apiUrl);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const videoSource = 'weathervideo.mp4';

    return (
        <div>
            <video autoPlay loop muted className={styles.videoBackground}>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.innerCard}>
                <h1 className={styles.heading}>Kliea-Weather-App</h1>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className={styles.searchInput}
                    />
                    <button onClick={getWeatherData} className={styles.searchButton}>
                        Get Weather
                    </button>
                </div>
                {weatherData && (
                    <div className={styles.weatherCard}>
                        <h2 className={styles.weatherTitle}>
                            {weatherData.name}, {weatherData.sys.country}
                        </h2>
                        <div className={styles.weatherDetails}>
                            <p className={styles.weatherText}>
                                <FontAwesomeIcon icon={faThermometer} /> Temperature: {weatherData.main.temp}°C
                            </p>
                            <p className={styles.weatherText}>
                                <FontAwesomeIcon icon={faTint} /> Humidity: {weatherData.main.humidity}%
                            </p>
                            <p className={styles.weatherText}>
                                <FontAwesomeIcon icon={faWind} /> Wind Speed: {weatherData.wind.speed} m/s
                            </p>
                            <p className={styles.weatherText}>
                                <FontAwesomeIcon icon={faCloud} /> Weather: {weatherData.weather[0].description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
