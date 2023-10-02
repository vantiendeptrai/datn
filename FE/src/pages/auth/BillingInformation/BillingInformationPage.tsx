import React from 'react';
import { BsCardList } from 'react-icons/bs';

const BillingInformationPage = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className='w-full md:w-[550px] lg:w-[700px] h-[580px] mx-auto shadow-lg rounded border border-solid pt-4  pr-8 '>
      <div className='container pl-6 '>
        <h1 className='text-red-600 font-mono font-bold text-2xl'>TRANG THANH TOÁN</h1>
        <p className='text-base font-mono pt-2 text-green-700'>THẺ THANH TOÁN</p>
        <div className='flex flex-wrap gap-2 '>
          <img src='https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/amex.svg' alt='' />
          <img src='https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/discover.svg' alt='' />
          <img src='https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/mc.svg' alt='' />
          <img src='https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/jcb.svg' alt='' />
          <img src='https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/cartebancaire.svg' alt='' />
          <img src='https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/visa.svg' alt='' />
          <img src='https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/unionpay.svg' alt='' />
          <img src='https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/diners.svg' alt='' />
          <img src='' alt='' />
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-group font-mono'>
            <p className='text-green-700 mt-4'>Tên chủ thẻ:</p>
            <input
              type='text'
              id='cardHolder'
              name='cardHolder'
              placeholder='xxxxx-xxxxx'
              required
              className='w-full md:full  h-[40px] border border-solid rounded shadow-md text-xs pl-2 '
            />
          </div>
          <div className='form-group mt-2'>
            <p className='text-green-700'>Số thẻ tín dụng:</p>
            <input
              type='text'
              id='cardNumber'
              name='cardNumber'
              placeholder='xxxxx-xxxxx'
              required
              className='w-full md:full h-[40px] border border-solid rounded shadow-md text-xs pl-2'
            />
          </div>
          <div className='form-group mt-2'>
            <p className='text-green-700'>Ngày hết hạn:</p>
            <input
              type='text'
              id='expiryDate'
              name='expiryDate'
              placeholder='MM/YY'
              required
              className='w-full md:full h-[40px] border border-solid rounded shadow-md text-xs pl-2'
            />
          </div>
          <div className='form-group mt-2'>
            <p className='text-green-700'>CVV:</p>
            <input
              type='text'
              id='cvv'
              name='cvv'
              required
              className='w-full md:full h-[40px] border border-solid rounded shadow-md text-xs pl-2'
            />
          </div>
          <div className='w-full md:full h-[40px] bg-cyan-400 border border-solid rounded text-center mt-4'>
            <button type='submit' className='custom-button font-mono text-base pt-2 '>
              Xác Nhận
            </button>
          </div>
          <div className='w-full md:full  grid grid-cols-3'>
            <div className='border-b border-solid'></div>
            <div className='text-center pt-2'>
              <p>Hoặc</p>
            </div>
            <div className='border-b border-solid'></div>
          </div>
          <div className='w-full md:full h-[40px] bg-slate-300 border border-solid rounded text-center mt-4'>
            <button type='submit' className='font-mono text-base pt-2 '>
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingInformationPage;
