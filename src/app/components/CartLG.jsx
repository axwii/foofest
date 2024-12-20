const CartLG = ({ ticketData }) => {
  return (
    <div className="lg:w-[250px] lg:min-h-[300px] bg-[#242424] p-4 rounded-3xl shadow-lg fixed right-5 top-1/2 transform -translate-y-1/2 hidden lg:block">
      <div className="ml-2">
        <h1 className="text-center text-3xl font-GermaniaOneRegular">Cart</h1>
        <h2 className="font-bold text-xl  font-GermaniaOneRegular">Tickets</h2>
        <div className=" mt-2 font-Gambetta flex justify-between">
          <div>
            <p>VIP Tickets:</p>
            <p className="text-sm font-thin">1299 DKK</p>
          </div>
          <p className="justify-end mt-3">X {ticketData.vip}</p>
        </div>
        <hr className="my-4" />
        <h2 className="font-bold text-xl  font-GermaniaOneRegular">Camping</h2>
        <p className="font-Gambetta">Alfheim</p>
        <hr className="my-4" />
        <div className="flex justify-between font-Gambetta">
          <p className="text-lg">Subtotal:</p>
          <p className="justify-end text-lg">799DKK</p>
        </div>
      </div>
    </div>
  );
};

export default CartLG;
