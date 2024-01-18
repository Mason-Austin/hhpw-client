import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import createRevenue from '../Api/revenue'

const initialState = {
  orderId: '',
  paymentType: '',
  tip: '',
};

const RevenueForm = ({ user }) => {
  const router = useRouter();
  const [currentRevenue, setCurrentRevenue] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentRevenue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();
      const revenue = {
        orderId: '',
        paymentType: currentRevenue.paymentType,
        tip: currentRevenue.tip,
      }
      createRevenue(revenue).then(() => router.push('/orders/'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Payment Type</Form.Label>
          <Form.Select
            aria-label="Class"
            name="paymentType"
            onChange={handleChange}
            className="mb-3"
            value={currentRevenue.paymentType}
            required
          >
            <option value="">Select a type</option>

            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="Mobile">Mobile</option>

          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tip Ammount</Form.Label>
          <Form.Control name="tip" required value={currentRevenue.tip} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Close Order
        </Button>
      </Form>
    </>
  );
};

RevenueForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderForm;
