import Scores from '../../temporaryDb.js';

const scoresDiv = document.getElementById('scores');

const renderScores = () => {
  scoresDiv.innerHTML = `<ul class="scoresUl">
    ${Scores.map(
    (score) => `<li class="scoreLi">${score.name}: ${score.score}</li>`,
  ).join('')}
  </ul>`;
};

export default renderScores;
