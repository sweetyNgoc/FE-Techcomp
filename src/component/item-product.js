import React from "react";

const Product = ({item}) => {
  return (
    <>
      <div>
        <div>tên sản phẩm: {item?.name}</div>
        <div>số lượng: {item?.quantity}</div>
        <div>giá: {item?.price}</div>
        <img style={{ width: "20px", height: "20px" }} src={item?.image} />
      </div>
    </>
  );
};

export default Product;
