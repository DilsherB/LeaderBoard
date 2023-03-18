const extractData = (gameData) => {
  let apiMarkup = '';
  gameData.forEach((data) => {
    apiMarkup += `
      <li class="scoreItem"> 
        <span>${data.user}:</span> 
        <span>${data.score}</span>
      </li>`;
  });
  return apiMarkup;
};

const populate = (data, containerEle) => {
  const markup = extractData(data);
  containerEle.innerHTML = markup;
};

export default populate;