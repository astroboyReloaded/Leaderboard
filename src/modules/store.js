import { Scores } from '../../temporaryDb';

const scoresDiv = document.getElementById('scores');

const renderScores = () => {
  scoresDiv.innerHTML = `<ul>
    ${Scores.map((score) => `<li>${score.name}: ${score.score}</li>`).join('')}
  </ul>`;
};

export { renderScores };
