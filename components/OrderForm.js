import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createOrder, updateOrder } from '../Api/orders';

const initialState = {
  name: '',
  customerPhone: '',
  customerEmail: '',
  type: '',
};

const OrderForm = ({ user, initialOrder }) => {
  const router = useRouter();
  const [currentOrder, setCurrentOrder] = useState(initialOrder || initialState);

  useEffect(() => {
    // Update the form fields when the initialOrder prop changes
    if (initialOrder) {
      setCurrentOrder(initialOrder);
    }
  }, [initialOrder]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentOrder((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    const order = {
      name: currentOrder.name,
      customerPhone: currentOrder.customerPhone,
      customerEmail: currentOrder.customerEmail,
      type: currentOrder.type,
      userId: user.id,
      open: true,
    };

    // Send POST request to your API
    if (initialOrder) {
      updateOrder(order, initialOrder.id).then(() => router.push('/orders/'));
    } else {
      createOrder(order).then(() => router.push('/orders/'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control name="name" required value={currentOrder.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Customer Phone Number</Form.Label>
          <Form.Control name="customerPhone" required value={currentOrder.customerPhone} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Customer Phone Email</Form.Label>
          <Form.Control name="customerEmail" required value={currentOrder.customerEmail} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Order Type</Form.Label>
          <Form.Select
            aria-label="Class"
            name="type"
            onChange={handleChange}
            className="mb-3"
            value={currentOrder.type}
            required
          >
            <option value="">Select a type</option>

            <option value="Call In">Call in</option>
            <option value="In Person">In Person</option>

          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          {currentOrder ? 'Save' : 'Create'}
        </Button>
      </Form>
    </>
  );
};

OrderForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  initialOrder: PropTypes.object,
};

OrderForm.defaultProps = {
  initialOrder: null,
};

export default OrderForm;
