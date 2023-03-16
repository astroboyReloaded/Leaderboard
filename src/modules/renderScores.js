const scoresDiv = document.getElementById('scores');

const renderScores = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JW2D0NchqUvcYPBtOfmC/scores/',
  )
    .then((response) => response.json())
    .then((data) => {
      const Scores = Array.from(data.result);
      Scores.sort((a, b) => b.score - a.score);
      scoresDiv.innerHTML = `<ul class="scoresUl">
    ${Scores.map(
    (score) => `<li class="scoreLi">
          <label class="user">${score.user}:</label>
          <input class="user-score" value="${score.score}" disabled>
        </li>`,
  ).join('')}
  </ul>`;
    });
};
export default renderScores;
