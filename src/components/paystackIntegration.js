import { React, useState } from "react";

import { usePaystackPayment } from "react-paystack";

const PaystackIntegration = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: amount * 100,
    publicKey: "pk_test_ee97bfcd2f09ef39708d999978a685e9a0b55a1e"
  };

 
  const onSuccess = (reference) => {
   
    console.log(reference);
  };


  const onClose = () => {
    
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  const payWithPaystack = (e) => {
    e.preventDefault();

    initializePayment(onSuccess, onClose);
  };

  return (
    <div className='form-container'>
      <div className='form-heading'>
        <h3 className='w3-center'>Make payment with Paystack</h3>
      </div>

      <form id='paymentForm' className='form' onSubmit={payWithPaystack}>
        {/* image */}
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='email'
            id='email-address'
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='tel'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='amount'
            id='amount'
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='first-name'>First Name</label>
          <input
            type='text'
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className='firstname'
            id='first-name'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className='lastname'
            id='last-name'
          />
        </div>

        <div className='form-submit'>
          <button type='submit' className='btn'>
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};
export default PaystackIntegration;
