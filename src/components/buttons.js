import React, { useState } from "react";
import PaymentsModal from "./PaymentsModal";
import "./Buttons.css";

export const Buttons = () => {
  const [modalState, setModalState] = useState({
    type: "",
    open: false,
  });

  return (
    <Modal
     isOpen={modalState.open}
     style={customStyles}
     contentLabel="Example Modal"
     appElement={document.getElementById("root")}
   >
     <p
       className="close-button"
       onClick={() => {
         setModalState({ open: false, type: null });
       }}
     >
       X
     </p>
     {/* If it is a send */}
     {modalState.type === "send" && (
       <form>
         <label>paste an invoice</label>
         <input
           type="text"
           value={formData.invoiceToPay}
           onChange={(e) =>
             setFormData({ ...formData, invoiceToPay: e.target.value })
           }
         />
         <button className="button" onClick={(e) => handleSend(e)}>
           Submit
         </button>
       </form>
     )}
     {/* If it is a receive */}
     {modalState.type === "receive" && (
       <form>
         <label>enter amount</label>
         <input
           type="number"
           min="0"
           value={formData.amount}
           onChange={(e) =>
             setFormData({ ...formData, amount: e.target.value })
           }
         />
         <button className="button" onClick={(e) => handleReceive(e)}>
           Submit
         </button>
       </form>
     )}
     {/* If we are displaying our newly created invoice */}
     {invoice && (
       <section>
         <h3>Invoice created</h3>
         <p>{invoice}</p>
         {/* ToDo: Create a QR code out of this invoice as well */}
       </section>
     )}
     {/* If we are displaying the status of our successful payment */}
     {paymentInfo.paymentHash && (
       <section>
         <h3>Payment sent</h3>
         <p>Payment hash: {paymentInfo.paymentHash}</p>
         <p>Checking id: {paymentInfo.checkingId}</p>
       </section>
     )}
   </Modal>

