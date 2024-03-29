import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import OrderModel from './models/OrderModal';
import { deleteSingleOrder } from '../Api/orders';

const OrderCard = ({ order, onUpdate, showClosedOrders }) => {
  const router = useRouter();

  const deleteThisOrder = () => {
    if (window.confirm(`Delete ${order.name}'s order?`)) {
      deleteSingleOrder(order.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '20rem' }}>
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
      <Card.Body style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-evenly' }}>
        <OrderModel showClosedOrders={showClosedOrders} order={order} onUpdate={onUpdate} />
        {!showClosedOrders && (
          <>
            <Button variant="success" type="button" onClick={() => { router.push(`/orders/edit/${order.id}`); }}>Edit</Button>
            <Button variant="danger" type="button" onClick={() => { deleteThisOrder(); }}>Delete</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    customerPhone: PropTypes.number.isRequired,
    customerEmail: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  showClosedOrders: PropTypes.bool.isRequired,
};

export default OrderCard;
