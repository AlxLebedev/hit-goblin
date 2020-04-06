export default class GameLogic {
  constructor(board) {
    this.board = board;
    this.gameFieldSize = board.gameFieldSize;
    this.currentCellIndex = 0;
    this.nextCellIndex = 0;
    this.userScoreNumber = 0;
    this.goblinScoreNumber = 0;
    this.interval = 0;
  }

  init() {
    this.showGoblinFirstTime();
    this.board.gameField.addEventListener('click', (event) => { this.clickOnGoblin(event); });
    this.interval = setInterval(() => { this.moveGoblin(); }, 1000);
  }

  showGoblinFirstTime() {
    this.setRandomIndex();
    const randomCell = document.getElementById(`cell${this.nextCellIndex}`);
    randomCell.appendChild(this.generateNewImage());
  }

  clearShowGoblinFirstTime() {
    document.getElementById(`cell${this.nextCellIndex}`).innerHTML = '';
  }

  clickOnGoblin(event) {
    if (event.target.classList.contains('cell-image')) {
      this.userScoreNumber += 1;
      this.goblinScoreNumber -= 1;
      document.getElementById('userScore').innerText = this.userScoreNumber;
      this.resetCell(event.target);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  resetCell(cell) {
    const cellForReset = cell;
    cellForReset.parentNode.innerHTML = '';
  }

  moveGoblin() {
    this.clearShowGoblinFirstTime();
    this.setRandomIndex();

    const currentCell = document.getElementById(`cell${this.currentCellIndex}`);
    const nextCell = document.getElementById(`cell${this.nextCellIndex}`);

    currentCell.innerHTML = '';
    nextCell.appendChild(this.generateNewImage());
    this.goblinScoreNumber += 1;
    document.getElementById('goblinScore').innerText = this.goblinScoreNumber;
    this.isSomebodyWin();
    this.currentCellIndex = this.nextCellIndex;
  }

  setRandomIndex() {
    do {
      this.nextCellIndex = Math.floor(Math.random() * this.gameFieldSize);
    } while (this.currentCellIndex === this.nextCellIndex);
  }

  // eslint-disable-next-line class-methods-use-this
  generateNewImage() {
    const image = new Image();
    image.src = './img/goblin.png';
    image.classList.add('cell-image');
    return image;
  }

  isSomebodyWin() {
    if (this.goblinScoreNumber === 5) {
      clearInterval(this.interval);
      alert('Game over...');
    } else if (this.userScoreNumber === 5) {
      clearInterval(this.interval);
      alert('User won!!!');
    }
  }
}
