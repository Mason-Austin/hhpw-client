const transformOrderTerminology = (orders) => {
  // Check if orders is an array
  if (Array.isArray(orders)) {
    return orders.map((order) => ({
      id: order.id,
      name: order.name,
      open: order.open,
      customerPhone: order.customer_phone,
      customerEmail: order.customer_email,
      type: order.type,
      employeeId: order.employee_id,
      user: order.user,
      items: order.items,
    }));
  }
  // If orders is a single object, transform it and return an array with a single item
  return {
    id: orders.id,
    name: orders.name,
    open: orders.open,
    customerPhone: orders.customer_phone,
    customerEmail: orders.customer_email,
    type: orders.type,
    employeeId: orders.employee_id,
    user: orders.user,
    items: orders.items,
  };
};

export default transformOrderTerminology;
