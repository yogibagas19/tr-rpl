"use client";
import React from "react";
import { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 50) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <div className="wrapperCount flex justify-between items-center mt-[30px]">
        <div className="count flex flex-row items-center text-center">
          <p className="mr-[20px]">Jumlah Tiket</p>
          <button
            type="button"
            className="w-[25px] bg-[#5b5b5b] rounded-[12px] text-white"
            onClick={handleDecrement}
          >
            -
          </button>
          {/* <div className="num w-[40px] text-center">{quantity}</div> */}
          {/* <input
            className="w-[10%] border-none p-[0] text-center"
            type="number"
            disabled
            value={quantity}
            name="tiket"
          /> */}
          <div className="w-[25px]">{quantity}</div>
          <button
            type="button"
            className="w-[25px] bg-[#5b5b5b] rounded-[12px] text-white"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <div className="displayCount">
          <div>Total Rp {quantity * 5000},00</div>
        </div>
      </div>
    </>
  );
};

export default Quantity;
