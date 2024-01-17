const transformOrderTerminology = (orders) => {
  const newOrderArry = [];
  orders.forEach((order) => {
    const newOrder = {
      id: order.id,
      name: order.name,
      open: order.open,
      customerPhone: order.customer_phone,
      customerEmail: order.customer_email,
      type: order.type,
      employeeId: order.employee_id,
      user: order.user,
      items: order.items,
    };
    newOrderArry.push(newOrder);
  });
  return newOrderArry;
};

export default transformOrderTerminology;
