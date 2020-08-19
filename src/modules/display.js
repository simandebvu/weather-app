import bender from '../assets/images/neat.jpg';

const appDisplay = () => {
  const insertNavigationBar = () => {
    const body = document.querySelector('body');
    const headerContainer = document.createElement('header');
    const navContainer = document.createElement('nav');
    navContainer.classList.add('navbar', 'navbar-expand-md', 'navbar-dark', 'fixed-top', 'bg-dark');

    const navBrand = document.createElement('a');
    navBrand.classList.add('navbar-brand');
    navBrand.setAttribute('href', 'https://simandebvu.github.io');
    navBrand.textContent = "Woogle! Weather's Own Google";
    navContainer.appendChild(navBrand);

    const toggleButton = document.createElement('button');
    toggleButton.classList.add('navbar-toggler');
    toggleButton.setAttribute('type', 'button');
    toggleButton.setAttribute('data-toggle', 'collapse');
    toggleButton.setAttribute('data-target', '#navbarCollapse');
    toggleButton.setAttribute('aria-controls', 'navbarCollapse');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Toggle navigation');
    const toggleSpan = document.createElement('span');
    toggleSpan.classList.add('navbar-toggler-icon');
    toggleButton.appendChild(toggleSpan);
    navContainer.appendChild(toggleButton);

    const navFormContainer = document.createElement('div');
    navFormContainer.classList.add('collapse', 'navbar-collapse');
    navFormContainer.setAttribute('id', 'navBarCollapse');

    const formElement = document.createElement('form');
    formElement.classList.add('form-inline', 'mt-2', 'mt-md-0', 'ml-auto');
    const searchBar = document.createElement('input');
    searchBar.classList.add('form-control', 'mr-sm-2');
    searchBar.setAttribute('type', 'text');
    searchBar.setAttribute('name', 'search');
    searchBar.required = true;
    searchBar.setAttribute('minlength', '5');
    searchBar.setAttribute('maxlength', '30');
    searchBar.setAttribute('placeholder', 'Enter a city name');
    searchBar.setAttribute('aria-label', 'Search');
    const searchButton = document.createElement('button');
    searchButton.classList.add('btn', 'btn-outline-success', 'my-2', 'my-sm-0');
    searchButton.setAttribute('type', 'submit');
    searchButton.textContent = 'Woogle!';
    formElement.appendChild(searchBar);
    formElement.appendChild(searchButton);
    navFormContainer.appendChild(formElement);
    navContainer.appendChild(navFormContainer);


    headerContainer.appendChild(navContainer);

    const mainElement = document.createElement('main');
    mainElement.setAttribute('role', 'main');
    mainElement.classList.add('pt-5', 'mt-5');
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    mainElement.appendChild(containerDiv);
    body.appendChild(headerContainer);
    body.appendChild(mainElement);
  };

  const insertWelcomeBanner = () => {
    const containerDiv = document.querySelector('.container');
    containerDiv.innerHTML = null;
    const containerJumbo = document.createElement('div');
    containerJumbo.classList.add('jumbotron', 'jumbotron-fluid');
    const divJumbo = document.createElement('div');
    divJumbo.classList.add('container');
    const headerJumbo = document.createElement('header');
    headerJumbo.classList.add('display-4');
    const pJumbo = document.createElement('p');
    pJumbo.classList.add('lead');
    pJumbo.textContent = 'Welcome to woogle! Weather\'s own google! The Weather App tests the knowledge about asynchronous communication with promises or async/await and when to use them. Feel free to search above!';
    divJumbo.appendChild(headerJumbo);
    divJumbo.appendChild(pJumbo);
    containerJumbo.appendChild(divJumbo);
    containerDiv.appendChild(containerJumbo);
  };

  const insertSearchResults = (cityName, cityConditions, cityTemp, tempSymbol, cityPicture) => {
    const containerDiv = document.querySelector('.container');
    const mainElement = document.querySelector('main');
    containerDiv.innerHTML = null;
    const element = document.createElement('div');
    element.classList.add('result-item');
    const welcomeHeader = document.createElement('h2');
    welcomeHeader.classList.add('display-4', 'font-bold');
    welcomeHeader.innerHTML = `${cityName} : ${cityConditions}.`;
    element.appendChild(welcomeHeader);

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card', 'flex-md-row', 'box-shadow', 'h-md-250');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'align-items-start');
    const cardBanner = document.createElement('h2');
    cardBanner.classList.add('d-inline-block', 'mb-2', 'text-primary', 'temp-banner', 'is-metric');
    cardBanner.innerHTML = cityTemp;
    const tempSpan = document.createElement('span');
    tempSpan.classList.add('temp-symbol');
    tempSpan.innerHTML = tempSymbol;
    cardBanner.appendChild(tempSpan);

    const toggleTemperature = document.createElement('button');
    toggleTemperature.classList.add('btn', 'btn-success', 'btn-temp');
    toggleTemperature.innerText = 'Convert to F (Imperial)';
    const date = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const repositoryDate = document.createElement('div');
    repositoryDate.classList.add('mb-1', 'text-muted');
    repositoryDate.innerHTML = `Happy ${date}!`;
    const repositoryDescription = document.createElement('p');
    repositoryDescription.classList.add('card-text', 'mb-auto');
    repositoryDescription.innerHTML = 'Feel free to visit my repo!';
    cardBody.appendChild(cardBanner);


    cardBody.appendChild(toggleTemperature);


    cardBody.appendChild(repositoryDate);
    cardBody.appendChild(repositoryDescription);
    const cardImage = document.createElement('img');
    cardImage.classList.add('card-img-right', 'flex-auto', 'd-none', 'd-md-block');
    cardImage.setAttribute('style', 'width: 250px; height: 250px;');
    cardImage.setAttribute('src', cityPicture);
    cardImage.setAttribute('alt', 'My Awesome Image!');
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardBody);
    element.appendChild(cardContainer);
    containerDiv.appendChild(element);
    mainElement.appendChild(containerDiv);
  };

  const insertError = (value, portfolioURL) => {
    const body = document.querySelector('body');
    const mainElement = document.querySelector('main');
    const containerDiv = document.querySelector('.container');
    containerDiv.innerHTML = null;
    const headerText = document.createElement('h1');
    headerText.textContent = value;
    const linkText = document.createElement('a');
    linkText.setAttribute('href', portfolioURL);
    linkText.textContent = 'But you can find me on GITHUB by clicking here.';
    const benderImage = document.createElement('img');
    benderImage.classList.add('mt-3', 'card-img-right', 'flex-auto', 'd-none', 'd-md-block');
    benderImage.setAttribute('src', bender);
    benderImage.setAttribute('alt', 'Bender is supposed to be here!');

    containerDiv.appendChild(headerText);
    containerDiv.appendChild(linkText);
    containerDiv.appendChild(benderImage);
    mainElement.appendChild(containerDiv);
    body.appendChild(mainElement);
  };

  const changeTempAttributes = (bannerRemove, bannerAdd, btnRemove, btnAdd, btnText) => {
    const cardBanner = document.querySelector('.temp-banner');
    const toggle = document.querySelector('.btn-temp');
    cardBanner.classList.remove(bannerRemove);
    cardBanner.classList.add(bannerAdd);
    toggle.classList.remove(btnRemove);
    toggle.classList.add(btnAdd);
    toggle.innerHTML = btnText;
  };

  const toggleTemperature = () => {
    const cardBanner = document.querySelector('.temp-banner');
    const currentTempReading = parseFloat(cardBanner.innerHTML).toFixed(2);
    let newTemp = 0;
    if (cardBanner.classList.contains('is-metric')) {
      changeTempAttributes('is-metric', 'is-imperial', 'btn-success', 'btn-info', 'Convert to C (Metric)');
      newTemp = `${((currentTempReading * 1.8) + 32).toFixed(2)} F`;
    } else {
      changeTempAttributes('is-imperial', 'is-metric', 'btn-info', 'btn-success', 'Convert to F (Imperial)', 'F');
      newTemp = `${((currentTempReading - 32) / 1.8).toFixed(2)}°C`;
    }
    cardBanner.innerHTML = newTemp;
  };

  return {
    insertNavigationBar, insertSearchResults, insertError, toggleTemperature, insertWelcomeBanner,
  };
};

export default appDisplay;