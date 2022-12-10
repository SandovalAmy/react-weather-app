import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Forecast.css";
import { useState } from "react";

const Forecast = ({ data }) => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <button className="button" onClick={handleClick}>
        Click to Show/Hide Forecast
      </button>
      {isShown && (
        <div className="forecast-container">
          <h1 className="title">
            Weather forecast is for the next 5 days with data every 3 hours{" "}
          </h1>
          <p className="subtitle"> Click each item for additional details</p>
          <Accordion allowZeroExpanded>
            {data.list.slice(0, 39).map((item, index) => (
              <AccordionItem key={index}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="daily-item">
                      <img
                        alt="weather"
                        className="icon-small"
                        src={`weather-icons/${item.weather[0].icon}.png`}
                      />
                      <label className="date">{item.dt_txt}</label>
                      <label className="description">
                        {item.weather[0].description}
                      </label>
                      <label className="forecast-temperature">
                        {Math.round(item.main.temp)}°C
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                      <label>Feels like</label>
                      <label>{Math.round(item.main.feels_like)}°C</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Wind</label>
                      <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Humidity</label>
                      <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Pressure</label>
                      <label>{item.main.pressure} hPa</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </>
  );
};

export default Forecast;
