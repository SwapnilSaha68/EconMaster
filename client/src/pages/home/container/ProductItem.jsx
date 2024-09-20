import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductItem = (props) => {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);

  const product = props.product;

  const addToCartHandler = () => {
    navigate(`/cart/${product._id}?qty=1`);
  };

  return (
    <li
      className="flex flex-col text-center"
      onMouseEnter={() => {
        setIsShown(true);
      }}
      onMouseLeave={() => {
        setIsShown(false);
      }}
      style={{ position: 'relative' }}
    >
      <Link className="h-fit" to={`/product/${product._id}`}>
        <img
          className="object-cover object-center w-full h-auto"
          src={product.image}
          alt={product.name}
        />
      </Link>
      <Link className="h-fit" to={`/product/${product._id}`}>
        <h5 className="text-palette-graniteGray font-normal mt-2">
          {product.name}
        </h5>
      </Link>
      
      {product.countInStock > 0 ? (
        isShown ? (
          <button
            onClick={addToCartHandler}
            className="font-medium text-green-500 py-2 px-4"
          >
            ADD TO CART
          </button>
        ) : (
          <span className="py-2 px-4 w-full h-full text-palette-chineseBlack font-medium">
            BDT {product.price}
          </span>
        )
      ) : (
        <div className="py-2 px-4 w-full h-full relative">
          <span
            className="text-red-500 font-medium absolute inset-0 flex items-center justify-center"
            style={{
              opacity: isShown ? 0 : 1,
              transition: 'opacity 0s ease'
            }}
          >
            Out of Stock
          </span>
          <button
            className="mt-2 font-medium text-blue-500 py-2 px-4 absolute inset-0 flex items-center justify-center"
            style={{
              opacity: isShown ? 1 : 0,
              transition: 'opacity 0s ease',
              pointerEvents: isShown ? 'auto' : 'none'
            }}
          >
            ADD TO WISHLIST
          </button>
        </div>
      )}
    </li>
  );
};

export default ProductItem;
