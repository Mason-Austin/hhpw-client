/* eslint-disable react/prop-types */
import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const OrderCard = ({
  name,
  open,
  customerPhone,
  customerEmail,
  id,
  type,
  onUpdate,
}) => {
  const router = useRouter();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{name}`s order</Card.Title>
        <Card.Text>
          {type}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{open ? 'Open order' : 'Closed order'}</ListGroup.Item>
        <ListGroup.Item>Phone#: {customerPhone}</ListGroup.Item>
        <ListGroup.Item>Email: {customerEmail}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Items</Card.Link>
        <Card.Link href="#">Edit</Card.Link>

      </Card.Body>
    </Card>
  );
};

export default OrderCard;
