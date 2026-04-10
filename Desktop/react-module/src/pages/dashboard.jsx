import React, { useEffect, useState } from 'react';
import { Search, MapPin, Wind, Droplets, Sun, CloudRain } from 'lucide-react';

const WeatherDashboard = () => {
  const [query, setQuery] = useState('');
  const [isMetric, setIsMetric] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async (lat = -1.2921, lon = 36.8219, cityName = "Nairobi") => {
    setLoading(true);
    try {
      // 1. Fetching from Open-Meteo (Current + 5 Day Forecast)
      const url = `https://open-meteo.com{lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;
      const response = await fetch(url);
      const data = await response.json();
      
      setWeatherData({
        city: cityName,
        temp: Math.round(data.current_weather.temperature),
        condition: data.current_weather.weathercode, 
        wind: data.current_weather.windspeed,
        forecast: data.daily.time.slice(0, 5).map((date, i) => ({
          day: new Date(date).toLocaleDateString('en-US', { weekday: 'short' }),
          high: Math.round(data.daily.temperature_2m_max[i]),
          low: Math.round(data.daily.temperature_2m_min[i]),
          code: data.daily.weathercode[i]
        }))
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(); 
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600 p-6 font-sans">
      {/* Main Glassmorphic Container */}
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 overflow-hidden text-white">
        
        {/* Top Navigation & Search */}
        <div className="p-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <h2 className="text-xl font-medium tracking-wide">Nairobi, Kenya</h2>
          </div>
          
          <div className="relative w-full md:w-72">
            <input 
              type="text"
              placeholder="Search city..."
              className="w-full bg-white/10 border border-white/20 rounded-full py-2 px-10 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/60"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-white/60" size={18} />
          </div>

          <button 
            onClick={() => setIsMetric(!isMetric)}
            className="bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-full text-sm font-medium"
          >
            {isMetric ? 'Metric (°C)' : 'Imperial (°F)'}
          </button>
        </div>

        {/* Hero Section (Current Conditions) */}
        <div className="px-8 pb-8 text-center flex flex-col items-center">
          <Sun size={120} className="mb-4 drop-shadow-lg text-yellow-300" />
          <h1 className="text-8xl font-bold mb-2">{weather.temp}°</h1>
          <p className="text-2xl font-light tracking-widest uppercase">{weather.condition}</p>
          
          {/* Detailed Stats Row */}
          <div className="grid grid-cols-2 gap-8 mt-12 w-full max-w-md">
            <div className="bg-white/10 p-4 rounded-2xl flex items-center justify-center gap-4">
              <Droplets className="text-blue-200" />
              <div className="text-left">
                <p className="text-xs text-white/60 uppercase">Humidity</p>
                <p className="text-lg font-semibold">{weather.humidity}%</p>
              </div>
            </div>
            <div className="bg-white/10 p-4 rounded-2xl flex items-center justify-center gap-4">
              <Wind className="text-blue-200" />
              <div className="text-left">
                <p className="text-xs text-white/60 uppercase">Wind Speed</p>
                <p className="text-lg font-semibold">{weather.wind} km/h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Day Forecast Rail */}
        <div className="bg-black/10 px-8 py-6 flex justify-between overflow-x-auto gap-4">
          {weather.forecast.map((day, index) => (
            <div key={index} className="flex flex-col items-center min-w-[80px] bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition cursor-default">
              <span className="text-sm font-medium mb-3">{day.day}</span>
              {day.type === 'sunny' ? <Sun size={24} /> : <CloudRain size={24} />}
              <div className="mt-3 text-sm">
                <span className="font-bold">{day.high}°</span>
                <span className="text-white/40 ml-2">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
