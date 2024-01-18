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

export { deleteOrderItem };
