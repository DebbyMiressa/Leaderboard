export default class POST {
  constructor() {
    this.index = 0;
  }

  submit = () => {
    document.querySelector('.submit').addEventListener('click', (clicked) => {
      if (clicked.target.classList.contains('submit')) {
        this.send();
      }
    });
  }

  send = async () => {
    const user = document.querySelector('.user');
    const score = document.querySelector('.score');
    const payload = { user: user.value, score: Number(score.value) };
    const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sj3CaiiOl4GBjioetz1v/scores';
    fetch(
      requestURL,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(payload),
      },
    );
  }
}
