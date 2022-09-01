import './style.css';
import GET from './getData.js';
import POST from './postData.js';

window.addEventListener('DOMContentLoaded', () => {
  const GetData = GET;
  const PostData = POST;

  const getObj = new GetData();
  const postObj = new PostData();

  getObj.refresh();
  postObj.submit();
});