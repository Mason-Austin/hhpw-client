import { useState } from 'react';
import { CardBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import ItemCard from '../ItemCard';

function OrderModel({ order, onUpdate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Items
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Card>
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
            <CardBody>
              {order.items?.map((item) => (<ItemCard order={order} item={item} onUpdate={onUpdate} />))}
            </CardBody>
          </ListGroup>
        </Card>
      </Modal>
    </>
  );
}

export default OrderModel;
