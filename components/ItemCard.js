/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCard({ item }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{ item.price }</Card.Text>
        <Button variant="danger">Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
