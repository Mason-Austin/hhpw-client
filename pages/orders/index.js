import { useEffect, useState } from 'react';
import { getAllOpenOrders } from '../../Api/orders';
import OrderCard from '../../components/OrderCard';

function ViewOrders() {
  const [orders, setOrders] = useState([]);

  const getAllOrders = () => {
    getAllOpenOrders().then(setOrders);
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
          <OrderCard name={order.name} open={order.open} customerPhone={order.customer_phone} customerEmail={order.customer_email} id={order.id} type={order.type} onUpdate={getAllOrders} />
        </section>
      ))}
    </article>
  );
}

export default ViewOrders;
