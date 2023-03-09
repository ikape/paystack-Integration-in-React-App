import { React, useState } from 'react'
import PaystackPop from '@paystack/inline-js'

const PaystackIntegration = () => {
    const [email, setEmail] = useState('')
    const [amount, setAmount] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')

    const payWithPaystack = (e) => {
        e.preventDefault()
    const paystack = new PaystackPop()
        paystack.newTransaction({
            key: "pk_test_ee97bfcd2f09ef39708d999978a685e9a0b55a1e",
            amount: amount * 100,
            email,
            firstname,
            lastname,
            onSuccess(transaction) {
                let message = `Payment Complete! Reference ${transaction.reference}`
                alert(message)
                setEmail("")
                setAmount("")
                setFirstname("")
                setLastname("")
            },
            onCancel() {
                alert("You have Canceled the transaction")
            }
        })
    }

    return (
 <div className='form-container'>
    <div className='form-heading'>
        <h3 className='w3-center'>Make payment with Paystack</h3>
    </div>

       
  <form id="paymentForm" className='form'>  
                        {/* image             */}
  <div class="form-group">
    <label for="email">Email Address</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='email' id="email-address" required />
  </div>
                        
  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="tel" value={amount} onChange={(e)=>setAmount(e.target.value)} className='amount' id="amount" required />
  </div>
                        
  <div class="form-group">
    <label for="first-name">First Name</label>
    <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} className='firstname' id="first-name" />
   </div>
                        
  <div class="form-group">
    <label for="last-name">Last Name</label>
    <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} className='lastname' id="last-name" />
  </div>
                        
   <div class="form-submit">
    <button className='btn' type="submit" onclick={payWithPaystack}> Pay </button>
   </div>   
                        
        </form>
     
    </div>
    )
}
export default PaystackIntegration