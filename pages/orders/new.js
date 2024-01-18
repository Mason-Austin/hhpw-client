import { useAuth } from '../../utils/context/authContext';
import OrderForm from '../../components/OrderForm';

const NewOrder = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Register New Order</h2>
      <OrderForm user={user} />
    </div>
  );
};

export default NewOrder;
