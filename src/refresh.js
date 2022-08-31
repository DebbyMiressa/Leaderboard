export default class Refresh {
  constructor() {
    this.index = 0;
  }

  refresh = () => {
    document.querySelector('button').addEventListener('click', (clicked) => {
      if (clicked.target.classList.contains('refresh')) {
        this.populate();
      }
    });
  }

  populate = async () => {
    const scoreList = document.querySelector('.score_list');
    const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sj3CaiiOl4GBjioetz1v/scores';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const responseObj = await response.json();
    const resultObj = responseObj.result;
    scoreList.innerHTML = '';
    resultObj.forEach((obj) => {
      scoreList.innerHTML += `
        <li>
          ${obj.user}:${obj.score}
        </li>
      `;
    });
  }
}
