/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getAllClosedOrders, getAllOpenOrders } from '../../Api/orders';
import OrderCard from '../../components/OrderCard';
import transformOrderTerminology from '../../utils/orderServerToFront';

function ViewOrders() {
  const [orders, setOrders] = useState([]);
  const [showClosedOrders, setShowClosedOrders] = useState(false);

  const getAllOrders = () => {
    if (showClosedOrders) {
      getAllClosedOrders().then(transformOrderTerminology).then(setOrders);
    } else {
      getAllOpenOrders().then(transformOrderTerminology).then(setOrders);
    }
    console.warn(showClosedOrders);
  };

  const handleShowClosedOrders = () => {
    setShowClosedOrders(!showClosedOrders);
  };

  useEffect(() => {
    getAllOrders();
  }, [showClosedOrders]);

  return (
    <article className="orders">
      <h1>{showClosedOrders ? 'Closed Orders' : 'Open Orders'}</h1>
      <Button style={{ marginBottom: '3%' }} variant="danger" type="button" size="lg" className="copy-btn" onClick={handleShowClosedOrders}>
        {showClosedOrders ? 'View Open Orders' : 'View Closed Orders'}
      </Button>
      {orders.map((order) => (
        <section key={`order--${order.id}`} className="order">
          <OrderCard showClosedOrders={showClosedOrders} order={order} onUpdate={getAllOrders} />
        </section>
      ))}
    </article>
  );
}

export default ViewOrders;
