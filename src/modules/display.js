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
    body.appendChild(headerContainer);
  };
  return { insertNavigationBar };
};

export default appDisplay;