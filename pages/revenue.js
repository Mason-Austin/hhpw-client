import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import { getTotalRevenue } from '../Api/revenue';

function Revenue() {
  const [totalRevenue, setTotalRevenue] = useState([]);

  useEffect(() => {
    getTotalRevenue().then((totalRevenueObj) => {
      const newTotalRevenue = {
        total: totalRevenueObj.total_revenue,
        totalTip: totalRevenueObj.total_tip,
      };
      setTotalRevenue(newTotalRevenue);
    });
  }, []);

  return (
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Total Revenue with Tips: ${totalRevenue.total}</ListGroup.Item>
        <ListGroup.Item>Total in Tips: ${totalRevenue.totalTip}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Revenue;
