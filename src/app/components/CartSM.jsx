const CartSM = ({ ticketData }) => {
    return (
      <>
        {/* Open the modal using document.getElementById('my_modal_1').showModal() method */}
        <button className="btn lg:hidden fixed right-5 top-1/2 transform -translate-y-1/2" onClick={() => document.getElementById('my_modal_1').showModal()}>Cart</button>
        <dialog id="my_modal_1" className="modal lg:hidden">
          <div className="modal-box bg-[#242424] p-4 rounded-lg shadow-lg">
          <h1>Cart</h1>
      <p>Regular Tickets: {ticketData.regular}</p>
      <p>VIP Tickets: {ticketData.vip}</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </>
    );
  };

export default CartSM;