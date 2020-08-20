import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import appDisplay from './modules/display';
import search from './modules/search';
// IIFE
// eslint-disable-next-line no-unused-vars
const runApp = (() => {
  const display = appDisplay();
  display.insertNavigationBar();
  const searchListener = search();
  searchListener.initListener();
  display.insertWelcomeBanner();
})();