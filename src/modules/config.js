const appConfig = () => {
  const getAPIKey = () => '65ae24246c1f9d44901df470b6f262de';
  const getWeatherURL = () => 'https://api.openweathermap.org/data/2.5/weather?';
  const getGiphyURL = () => 'https://api.giphy.com/v1/gifs/search?';
  const getGiphyAPIKey = () => 'dN2DhkuIl9Cqh9h2bLBxh1T2takgbHw6';
  return {
    getAPIKey, getWeatherURL, getGiphyAPIKey, getGiphyURL,
  };
};
export default appConfig;