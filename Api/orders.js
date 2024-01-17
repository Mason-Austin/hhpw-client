import { clientCredentials } from '../utils/client';

const getAllOpenOrders = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const updateOrder = (updatedOrder, orderId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${orderId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateOrder),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

export { getAllOpenOrders, updateOrder };
