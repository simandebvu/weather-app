const appConfig = () => {
  const getAPIKey = () => '65ae24246c1f9d44901df470b6f262de';
  const getWeatherURL = () => 'http://api.openweathermap.org/data/2.5/weather?';
  return { getAPIKey, getWeatherURL };
};
export default appConfig;