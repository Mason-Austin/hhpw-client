import { clientCredentials } from '../utils/client';

const getAllOpenOrders = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getAllClosedOrders = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders?closed=True`)
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
    body: JSON.stringify(updatedOrder),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

const createOrder = (order) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

const getSingleOrder = (orderId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${orderId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteSingleOrder = (orderId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${orderId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export {
  getAllOpenOrders,
  updateOrder,
  createOrder,
  getSingleOrder,
  getAllClosedOrders,
};
