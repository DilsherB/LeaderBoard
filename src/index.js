import './style.css';
import { getData } from './modules/get.js';
import populate from './modules/populate.js';
import postData from './modules/post.js';

const dataContainer = document.querySelector('.scoresList');
const refreshBtn = document.querySelector('.refreshBtn');
const form = document.querySelector('.form');
refreshBtn.addEventListener('click', async () => {
  const { result } = await getData();
  populate(result, dataContainer);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const score = e.target.score.value;
  if (!name.trim() || !score) return;
  postData({
    user: name,
    score,
  });
  form.reset();
});