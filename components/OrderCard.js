import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import OrderModel from './models/OrderModal';

const OrderCard = ({ order, onUpdate, showClosedOrders }) => {
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
        <ListGroup.Item>Phone#: {order.customerPhone}</ListGroup.Item>
        <ListGroup.Item>Email: {order.customerEmail}</ListGroup.Item>
        <ListGroup.Item>Employee: {order.user.name}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <OrderModel showClosedOrders={showClosedOrders} order={order} onUpdate={onUpdate} />
        {!showClosedOrders && (
          <Button variant="success" type="button" onClick={() => { router.push(`/orders/edit/${order.id}`); }}>Edit</Button>
        )}
      </Card.Body>
    </Card>
  );
};

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    customerPhone: PropTypes.string.isRequired,
    customerEmail: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    // Add other properties of the 'order' object if needed
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  showClosedOrders: PropTypes.bool.isRequired,
};

export default OrderCard;
