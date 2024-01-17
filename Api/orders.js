import { clientCredentials } from '../utils/client';

const getAllOpenOrders = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { getAllOpenOrders }
