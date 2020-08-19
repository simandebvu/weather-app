import './display';

const searchForm = () => {
  const startSearch = (searchText) => {
    console.log(`Searching for ${searchText}`);
  };

  const initListener = () => {
    const form = document.querySelector('.form-inline');
    form.onsubmit = (e) => {
      e.preventDefault();
      const { search } = e.target.elements;
      startSearch(search.value);
    };
  };

  return { initListener };
};

export default searchForm;