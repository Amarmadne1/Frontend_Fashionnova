import React from "react";

import { useNavigate } from "react-router-dom";

import { navigation } from "../../../config/navigationMenu";
const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${product.topLavelCategory}/${ product.secondLavelCategory}/${product.thirdLavelCategory}`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-xl overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img 
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900 ">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
        <p className="mt-2 text-sm text-black-900">Rs. {product?.discountedPrice}<span className="mt-2 ml-2 text-sm text-gray-500 line-through ">Rs. {product?.price}</span><span className="mt-2 ml-2 text-sm text-green-500">({product?.discountPersent}%)</span></p>
      </div>
    </div>
  );
};

export default HomeProductCard;
