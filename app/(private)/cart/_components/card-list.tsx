"use client";
import { Button } from "@/components/ui/button";
import { CartProduct } from "@/interfaces/product-cart";
import { useCartStore } from "@/store/cart-state";
import Image from "next/image";

import { RiAddLine, RiSubtractLine } from "react-icons/ri";

interface Props {
  product: CartProduct;
}

const CardList = ({ product }: Props) => {
  const addOrRemoveQuantity = useCartStore((state) => state.addOrRemoveQuantity);

  const handleAddProduct = (item: number , quantity: number) => {
    addOrRemoveQuantity(item , quantity);
  };

  const handleRemoveProduct = (item: number , quantity: number) => {
    addOrRemoveQuantity(item, quantity);
  };

  return (
    <div className="flex justify-between items-center bg-slate-50/20 shadow mt-3 py-4 p-3 rounded-lg w-full transition-all hover:scale-105">
      <Image
        src={product.image}
        alt={product.name}
        width={50}
        height={50}
        className="w-14 h-14 select-none object-contain"
      />

      <div className="w-full lg:w-80 font-medium text-base truncate select-none">
        <span>{product.name}</span>
      </div>
      <div className="w-40 text-center" >
        <span className="w-full select-none">$ {product.price}</span>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="p-1 cursor-pointer"
          type="button"
          size={"icon"}
          asChild
          onClick={() => handleRemoveProduct(product.id, -1)}
        >
          <RiSubtractLine className="w-8 h-8" />
        </Button>
        <span className="font-semibold text-base select-none"> {product.quantity}</span>
        <Button
          variant="outline"
          type="button"
          className="p-1 cursor-pointer"
          size={"icon"}
          asChild
          onClick={() => handleAddProduct(product.id, 1)}
        >
          <RiAddLine className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};
export default CardList;
