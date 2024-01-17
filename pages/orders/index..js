import { useEffect, useState } from 'react';
import { getAllOpenOrders } from '../../Api/orders';

function ViewOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOpenOrders().then(setOrders);
  }, []);

  return (null);
}
