function App() {
  return (
    <div className="container">
      {/* Search section */}
      <div className="search-section">
        <form action="#" className="search-form">
          <span className="material-symbols-rounded">search</span>
          <input
            type="search"
            placeholder="Enter a city name"
            className="search-input"
            required
          />
        </form>
        <button className="location-button">
          <span className="material-symbols-rounded">my_location</span>
        </button>
      </div>

      <div className="weather-section">
        <div className="current-weather">
          <img src="./assets/icons/clouds.svg" className="weather-icon" />
          <h2 className="temperature">
            20 <span>°C</span>
          </h2>
          <p className="description">Partly cloudy</p>
        </div>
        {/* Hourly weather forecast list */}
        <div className="hourly-forecast">
          <ul className="weather-list">
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="./assets/icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="./assets/icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="./assets/icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="./assets/icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="./assets/icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="./assets/icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
