import Link from "next/link";
import React from "react";

function Card(item) {
 
  return (
    <div className="row align-items-center mb-5" key={item.id}>
    <div className="col-4 col-sm-3">
      <img className="w-100 rounded-circle mb-3 mb-sm-0" src={item.img} alt="" />
      <h5 className="menu-price">${item.price}</h5>
    </div>
    <div className="col-8 col-sm-9">
      <Link href={`/product/${item.id}`}>
      <h4>{item.title}</h4>
      </Link>
      <p className="m-0">{item.des}</p>
    </div>
  </div>
  );
}

export default Card;
