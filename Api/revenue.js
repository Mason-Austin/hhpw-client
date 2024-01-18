import { clientCredentials } from '../utils/client';

const createRevenue = (revenue) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/revenues`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(revenue),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

const getRevenues = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/revenues`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { createRevenue, getRevenues };
