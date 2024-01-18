import { useEffect, useState } from 'react';
import { CardBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import ItemCard from '../ItemCard';
import { getAllItems } from '../../Api/items';

function OrderModel({ order, onUpdate }) {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState();
  const [addItemsClicked, setAddItemsClicked] = useState(false);

  useEffect(() => {
    getAllItems().then(setItems);
  }, [order]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddItemsClick = () => {
    setAddItemsClicked(!addItemsClicked);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Items
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Card>
          <Card.Body>
            <Card.Title>{order.name}'s order</Card.Title>
            {addItemsClicked ? <Button variant="primary" onClick={handleAddItemsClick}>Done</Button> : ''}
            {addItemsClicked ? (
              <Card.Body>
                {items?.map((item) => (
                  <ItemCard add={true} order={order} item={item} onUpdate={onUpdate} />
                ))}
              </Card.Body>
            ) : (
              <div><Button variant="primary" onClick={handleAddItemsClick}>Add Items</Button> <Button variant="danger">Close Order</Button></div>
            )}
          </Card.Body>
          {!addItemsClicked && (
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{order.type}</ListGroup.Item>
              <ListGroup.Item>Phone#: {order.customerPhone}</ListGroup.Item>
              <ListGroup.Item>Email: {order.customerEmail}</ListGroup.Item>
              <ListGroup.Item>Employee: {order.user.name}</ListGroup.Item>
              <Card.Body>
                {order.items?.map((item) => (
                  <ItemCard add={false} order={order} item={item} onUpdate={onUpdate} />
                ))}
              </Card.Body>
            </ListGroup>
          )}
        </Card>
      </Modal>
    </>
  );
}

export default OrderModel;
