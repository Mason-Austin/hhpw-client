/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteOrderItem } from '../Api/items';

function ItemCard({ item, onUpdate, order }) {
  const removeThisItem = () => {
    const orderItemId = { orderItemId: item.id };
    if (window.confirm(`Remove ${item.name}?`)) {
      deleteOrderItem(orderItemId, order.id).then(() => onUpdate());
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{ item.price }</Card.Text>
        <Button onClick={() => { removeThisItem(); }} variant="danger">Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
