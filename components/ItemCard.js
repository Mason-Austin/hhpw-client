/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addOrderItem, deleteOrderItem } from '../Api/items';

function ItemCard({
  item,
  onUpdate,
  order,
  add,
  showClosedOrders,
}) {
  const removeThisItem = () => {
    const orderItemId = { orderItemId: item.id };
    if (window.confirm(`Remove ${item.name}?`)) {
      deleteOrderItem(orderItemId, order.id).then(() => onUpdate());
    }
  };

  const addThisItem = () => {
    const itemId = { itemId: item.id };
    addOrderItem(itemId, order.id).then(() => {
      onUpdate();
      window.alert(`${item.name} successfully added to order`);
    });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.price}</Card.Text>
        {!showClosedOrders && (
          <Button
            onClick={() => {
              add ? addThisItem() : removeThisItem();
            }}
            variant={add ? 'success' : 'danger'}
          >
            {add ? 'Add' : 'Remove'}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  add: PropTypes.bool.isRequired,
  showClosedOrders: PropTypes.bool.isRequired,
};

export default ItemCard;
