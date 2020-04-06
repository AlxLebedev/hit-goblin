import Ui from './ui/DrawUi';
import GameLogic from './logic/GameLogic';

const ui = new Ui();
const gameLogic = new GameLogic(ui);
ui.draw();
gameLogic.init();
