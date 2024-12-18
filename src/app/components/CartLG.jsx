
const CartLG = ({ ticketData }) => {
  return (
    <div className="lg:w-[250px] lg:h-[300px] bg-[#242424] p-4 rounded-lg shadow-lg fixed right-5 top-1/2 transform -translate-y-1/2 hidden lg:block">
      <h1>Cart</h1>
      <p>Regular Tickets: {ticketData.regular}</p>
      <p>VIP Tickets: {ticketData.vip}</p>
    </div>
  );
};

export default CartLG;