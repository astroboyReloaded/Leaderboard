import './style.css';
import renderScores from './modules/renderScores.js';
import submitScore from './modules/submitScore.js';

const [refreshBtn, submitBtn] = document.getElementsByTagName('button');

window.onload = () => {
  renderScores();
};

refreshBtn.onclick = () => {
  renderScores();
};

submitBtn.onclick = (e) => {
  submitScore(e);
};
