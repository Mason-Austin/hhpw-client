import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.fbUser.displayName}! </h1>
      <Button style={{ marginBottom: '3%' }} variant="danger" type="button" size="lg" className="copy-btn" onClick={() => { router.push('/orders/'); }}>
        View Open Orders
      </Button>
      <Button style={{ marginBottom: '3%' }} variant="danger" type="button" size="lg" className="copy-btn" onClick={() => { router.push('/orders/new'); }}>
        Create Order
      </Button>
      <Button style={{ marginBottom: '3%' }} variant="danger" type="button" size="lg" className="copy-btn" onClick={() => { router.push('/revenue'); }}>
        View Total Revenue
      </Button>
    </div>
  );
}

export default Home;
