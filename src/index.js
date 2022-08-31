import './style.css';
import Refresh from './refresh.js';

window.addEventListener('DOMContentLoaded', () => {
  const Ref = Refresh;
  const refObj = new Ref();
  refObj.refresh();
});