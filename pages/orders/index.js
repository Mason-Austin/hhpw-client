import { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import { getAllOpenOrders } from '../../Api/orders';
import OrderCard from '../../components/OrderCard';
import transformOrderTerminology from '../../utils/orderServerToFront';

function ViewOrders() {
  const [orders, setOrders] = useState([]);

  const getAllOrders = () => {
    getAllOpenOrders().then(transformOrderTerminology).then(setOrders);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <article className="orders">
      <h1>Orders</h1>
      {/* <Button
        onClick={() => {
          router.push('/orders/new');
        }}
      >
        Register New order
      </Button> */}
      {orders.map((order) => (
        <section key={`order--${order.id}`} className="order">
          <OrderCard order={order} onUpdate={getAllOrders} />
        </section>
      ))}
    </article>
  );
}

export default ViewOrders;
