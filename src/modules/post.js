import { myURL } from './get.js';

const postData = async (formData) => {
  await fetch(myURL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
};

export default postData;