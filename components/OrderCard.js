/* eslint-disable react/prop-types */
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import OrderModel from './models/OrderModal';

const OrderCard = ({ order, onUpdate }) => {
  const router = useRouter();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{order.name}`s order</Card.Title>
        <Card.Text>
          {order.type}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{order.open ? 'Open order' : 'Closed order'}</ListGroup.Item>
        <ListGroup.Item>Phone#: {order.customerPhone}</ListGroup.Item>
        <ListGroup.Item>Email: {order.customerEmail}</ListGroup.Item>
        <ListGroup.Item>Employee: {order.user.name}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <OrderModel order={order} />
        <Button variant="success" type="button" onClick={() => { router.push(`/orders/edit/${order.id}`); }}>Edit</Button>

      </Card.Body>
    </Card>
  );
};

export default OrderCard;
