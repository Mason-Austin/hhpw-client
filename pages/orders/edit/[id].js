import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import OrderForm from '../../../components/OrderForm';
import { useAuth } from '../../../utils/context/authContext';
import { getSingleOrder } from '../../../Api/orders';
import transformOrderTerminology from '../../../utils/orderServerToFront';

const EditOrder = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { id } = router.query;
  const [editOrder, setEditOrder] = useState();

  useEffect(() => {
    getSingleOrder(id).then(transformOrderTerminology).then(setEditOrder);
  }, [id]);

  return (
    <div>
      <h2>Edit Order</h2>
      <OrderForm user={user} initialOrder={editOrder} />
    </div>
  );
};

export default EditOrder;
