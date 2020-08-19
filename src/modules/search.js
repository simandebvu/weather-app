import appDisplay from './display';
import appConfig from './config';

const searchForm = () => {
  const initSearch = (searchText, units = 'metric') => {
    const config = appConfig();
    const display = appDisplay();
    const weatherAPIKey = config.getAPIKey();
    const weatherAPISite = config.getWeatherURL();
    const weatherRequestURL = `${weatherAPISite}q=${searchText}&APPID=${weatherAPIKey}&units=${units}`;

    const initTemperatureListener = () => {
      const toggle = document.querySelector('.btn-temp');
      toggle.onclick = () => {
        display.toggleTemperature();
      };
    };
    const startSearch = async () => {
      try {
        const response = await fetch(weatherRequestURL, { mode: 'cors' });

        const results = await response.json();

        const cityName = `${results.name}, ${results.sys.country}`;
        const pictureAPIKey = config.getGiphyAPIKey();
        const pictureAPISite = config.getGiphyURL();
        const cityConditions = results.weather[0].main;
        const pictureRequestURL = `${pictureAPISite}q=${cityConditions}&api_key=${pictureAPIKey}&limit=1`;
        const picture = await fetch(pictureRequestURL, { mode: 'cors' });
        const pictureResults = await picture.json();
        const cityTemp = results.main.temp;
        const cityPicture = pictureResults.data[0].images.original.url;
        const tempSymbol = '°C';
        display.insertSearchResults(cityName, cityConditions, cityTemp, tempSymbol, cityPicture);
        initTemperatureListener(cityTemp);
      } catch (error) {
        display.insertError('Location not found!', 'https://simandebvu.github.io/');
        throw new Error(error.message);
      }
    };
    return { startSearch };
  };

  const initListener = () => {
    const form = document.querySelector('.form-inline');
    form.onsubmit = (e) => {
      e.preventDefault();
      const { search } = e.target.elements;
      const processInput = initSearch(search.value);
      processInput.startSearch();
      e.target.reset();
    };
  };

  return { initListener };
};

export default searchForm;