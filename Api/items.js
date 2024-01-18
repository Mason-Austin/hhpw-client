import { clientCredentials } from '../utils/client';

const deleteOrderItem = (orderItemId, orderId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${orderId}/remove_item_from_order`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderItemId),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

const getAllItems = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const addOrderItem = (itemId, orderId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${orderId}/add_item_to_order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemId),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

export { deleteOrderItem, getAllItems, addOrderItem };
