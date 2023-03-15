const scoresDiv = document.getElementById('scores');

const renderScores = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JW2D0NchqUvcYPBtOfmC/scores/'
  )
    .then((response) => response.json())
    .then((data) => {
      const Scores = data.result;
      scoresDiv.innerHTML = `<ul class="scoresUl">
    ${Scores.map(
      (score) => `<li class="scoreLi">${score.user}: ${score.score}</li>`
    ).join('')}
  </ul>`;
    });
};
export default renderScores;
