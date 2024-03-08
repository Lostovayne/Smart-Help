"use client";

import { CartProduct } from "@/interfaces/product-cart";
import { useCartStore } from "@/store/cart-state";
import CardList from "./card-list";

const ListProductInCart = () => {
  const ProductsInCart: CartProduct[] = useCartStore((state) => state.cart);
  return (
    <div className="my-5" >
      {ProductsInCart.map((product) => (
        <CardList key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ListProductInCart;
