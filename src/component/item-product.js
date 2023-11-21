import React from "react";

const Product = (index, item) => {
  return (
    <>
      <div>
        <div>tên sản phẩm: {item?.name}</div>
        <div>số lượng: {item?.quantity}</div>
        <div>giá: {item?.price}</div>
        <img src={item?.image} />
      </div>
    </>
  );
};

export default Product;
