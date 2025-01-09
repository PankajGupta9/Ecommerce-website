import React, { useEffect } from 'react';
import CartItem from '../components/CartItem';
import { ToastContainer,toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(()=>{
    let price = 0;
    productData.map((item)=>{
      price += item.price * item.quantity;
      return price
    });
    setTotalAmt(price.toFixed(2));
  },[productData]);

  const handleCheakout=()=>{
    if(userInfo){
      setPayNow(true)
    }else{
      toast.error("Please sign in to Cheakout");
    }
  }
  return (
    <div>
    <img 
    className='w-full h-60 object-cover'
    src="https://images.unsplash.com/photo-1503455637927-730bce8583c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
    alt="cartImg" 
    />
    <div className='max-w-screen-xl mx-auto py-20 flex'>
    <CartItem/>
      <div className='w-1/3 bg-[#fafafa py-6 px-4 '>
        <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6 '>
          <h2 className='text-2xl font-medium'>Cart Totals</h2>
          <p className='flex items-center gap-4 text-base'>
            Subtotal{" "}
            <span className='font-titleFont font-bold text-lg'>
              $ {totalAmt}
            </span>
          </p>
          <p className='flex items-start gap-4 text-base'>
           Shippping{" "}
           <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Saepe, vero accusamus.
           </span>
          </p>
        </div>
        <p className='font-titleFont font-semibold flex justify-between mt-6'>
          Total <span className='text-xl font-bold'>$ {totalAmt}</span>
        </p>
        <button onClick={handleCheakout} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
        Proceed to cheakout
        </button>
        {
          payNow && (
            <div className='w-full mt-6 flex items-center justify-centern'>
            <StripeCheckout
              stripeKey='pk_test_51NjdGKSFwCQ7nvZsM8Vjw0tBtCDcjHHhS3olAi4BvineJQ6VZp0ICrdHS6daMVWCvTCQqsALwvahqDL6b3QkfnRH00zcVKgdPk'
              name='Ecommmece Online Shopping'
              amount={totalAmt + 100}
              Label="Pay to bazar"
              description={`Your payment amoutn is $${totalAmt}`}
              // token={payment}
              email={userInfo.email}
            />
            </div>

          )

        }
      </div>
    </div>
    <ToastContainer
      position="top-left"
      outClose={3000}
      hideProgessBar={false}
      newsOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
    />
    
    </div>
  )
}

export default Cart
