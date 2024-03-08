import { ProductsData } from "@/interfaces/productos";
import Image from "next/image";
import React from "react";

import { RiHeart3Line } from "react-icons/ri";
import ButtonAddCart from "../../_components/ButtonAddCart";
import Link from "next/link";

interface ProductCardProps {
  product: ProductsData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Cambié el nombre de la función a PascalCase según las convenciones de React
  const { image, name, price, quantity , id } = product;

  return (
    <div
      className="w-40 lg:w-52 h-64 lg:h-80 hover:scale-105 relative flex flex-col justify-between items-baseline hover:border-gray-500 bg-white shadow hover:shadow-lg px-4 pt-8 pb-4 border-transparent rounded transition-all cursor-pointer"
    >
      <Link
      href={`/product/${id}`}>
        <div className="top-4 right-4 absolute text-violet-400 text-xl">
          <RiHeart3Line />
        </div>
        {quantity === 0 && (
          <div>
            <span className="top-0 left-0 absolute bg-red-200/80 px-2 py-1.5 rounded-br-sm font-semibold text-red-400 text-xs">
              Agotado
            </span>
          </div>
        )}
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="mx-auto max-md:w-24 lg:w-28 max-md:h-20 lg:h-32 object-contain"
        />
        <div className="flex flex-col flex-1 items-start w-full">
          <p className="font-semibold text-base text-violet-600">${price}</p>
          <p className="font-normal text-gray-400 text-xs line-through">${price * 2}</p>
          <h2 className="mb-2 line-clamp-2 font-semibold text-gray-700 text-left text-sm max-md:text-xs lg:text-center">
            {name}
          </h2>
        </div>
      </Link>
      <ButtonAddCart product={product} disabled={quantity === 0} />
    </div>
  );
};

export default ProductCard;


