import "./CurrentWeather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">San Francisco</p>
          <p className="weather-description">Rain</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src="weather-icons/09d.png"
        />
      </div>
      <div className="bottom">
        <p className="temperature">13°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">12°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">70%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">1020 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
