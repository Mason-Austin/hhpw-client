/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-boolean-value */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import ItemCard from '../ItemCard';
import { getAllItems } from '../../Api/items';
import RevenueForm from '../RevenueForm';

function OrderModel({ order, onUpdate, showClosedOrders }) {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState();
  const [showItemMenu, setShowItemMenu] = useState(false);
  const [showRevenueForm, setShowRevenueForm] = useState(false);

  useEffect(() => {
    getAllItems().then(setItems);
  }, [order]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddItemsClick = () => {
    setShowItemMenu(!showItemMenu);
  };

  const handleShowRevenueForm = () => {
    setShowRevenueForm(!showRevenueForm);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Items
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Card>
          <Card.Body>
            <Card.Title>{order.name}`s order</Card.Title>
            {showRevenueForm && (<RevenueForm handleShowRevenueForm={handleShowRevenueForm} handleClose={handleClose} onUpdate={onUpdate} order={order} />)}
            {showItemMenu && !showRevenueForm && <Button variant="primary" onClick={handleAddItemsClick}>Done</Button> }
            {showItemMenu && !showRevenueForm ? (
              <Card.Body>
                {items?.map((item) => (
                  <ItemCard add={true} order={order} item={item} onUpdate={onUpdate} />
                ))}
              </Card.Body>
            ) : (
              !showRevenueForm && (
                <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-evenly' }}>
                  <Button variant="secondary" onClick={handleClose}>Close Details</Button>
                  {!showClosedOrders ? (
                    <>
                      <Button variant="primary" onClick={handleAddItemsClick}>
                        Add Items
                      </Button>
                      <Button onClick={handleShowRevenueForm} variant="danger">
                        Close Order
                      </Button>
                    </>
                  ) : null}
                </div>
              )
            )}
          </Card.Body>
          {!showItemMenu && !showRevenueForm && (
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{order.type}</ListGroup.Item>
              <ListGroup.Item>Phone#: {order.customerPhone}</ListGroup.Item>
              <ListGroup.Item>Email: {order.customerEmail}</ListGroup.Item>
              <ListGroup.Item>Employee: {order.user.name}</ListGroup.Item>
              <Card.Body>
                {order.items?.map((item) => (
                  <ItemCard key={`orderItem--${item.id}`} showClosedOrders={showClosedOrders} add={false} order={order} item={item} onUpdate={onUpdate} />
                ))}
              </Card.Body>
            </ListGroup>
          )}
        </Card>
      </Modal>
    </>
  );
}

OrderModel.propTypes = {
  order: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    customerPhone: PropTypes.number.isRequired,
    customerEmail: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  showClosedOrders: PropTypes.bool.isRequired,
};

export default OrderModel;
