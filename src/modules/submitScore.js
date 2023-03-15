const [name, score] = document.getElementsByTagName('input');

const submitScore = async (e) => {
  e.preventDefault();
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JW2D0NchqUvcYPBtOfmC/scores/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: name.value, score: score.value }),
    },
  );
};

export default submitScore;
