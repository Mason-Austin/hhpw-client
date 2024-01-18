/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addOrderItem, deleteOrderItem } from '../Api/items';

function ItemCard({ item, onUpdate, order, add }) {
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
        <Card.Text>{ item.price }</Card.Text>
        {!add ? <Button onClick={() => { removeThisItem(); }} variant="danger">Remove</Button> : <Button onClick={() => { addThisItem(); }} variant="success">Add</Button>}
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
