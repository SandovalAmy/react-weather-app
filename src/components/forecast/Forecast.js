import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Forecast.css";

const Forecast = ({ data }) => {
  return (
    <>
      <label className="title">
        Weather forecast for 5 days with data every 3 hours
      </label>
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
    </>
  );
};

export default Forecast;
