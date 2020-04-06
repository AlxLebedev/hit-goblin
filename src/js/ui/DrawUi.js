export default class drawUi {
  constructor() {
    this.gameField = document.querySelector('.game-field');
    this.gameFieldSize = 16;
  }

  draw() {
    this.drawPage();
    this.drawGameField();
  }

  drawPage() {
    const title = document.createElement('h1');
    title.classList.add('game-title');
    title.innerHTML = 'Try to catch him :-)';
    document.body.prepend(title);

    const scoreField = document.createElement('div');
    scoreField.classList.add('score-field');
    this.gameField.after(scoreField);

    const userScore = document.createElement('span');
    userScore.classList.add('score-cell');
    userScore.id = 'userScore';
    userScore.innerHTML = 0;
    scoreField.prepend(userScore);

    const goblinScore = document.createElement('span');
    goblinScore.classList.add('score-cell');
    goblinScore.id = 'goblinScore';
    goblinScore.innerHTML = 0;
    scoreField.append(goblinScore);
  }

  drawGameField() {
    for (let i = 0; i < this.gameFieldSize; i += 1) {
      const newCell = `<div class='cell' id=cell${i}></div>`;
      this.gameField.insertAdjacentHTML('beforeend', newCell);
    }
  }
}
