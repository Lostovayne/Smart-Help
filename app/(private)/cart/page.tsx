"use client";

import { BuyProduct } from "@/actions/paymentProductsCart";
import { Button } from "@/components/ui/button";
import { PaymentProduct } from "@/interfaces/payment-product";
import { useCartStore } from "@/store/cart-state";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DataPayment from "./_components/data-payment";
import ListProductInCart from "./_components/list-product-cart";
import { useCartClean } from "@/store/clear-cart-after-checkout";

const CartPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const CartProducts = useCartStore((state) => state.cart);
  const TotalItems = useCartStore((state) => state.getTotalItems());
  const clearCartAfterCheckout = useCartClean((state) => state.clearCartAfterCheckout);
  const TotalPrice = useCartStore((state) => state.TotalPriceProducts());
  const valorEnvio = Math.round(TotalPrice * 0.5);
  const ProductsPayment: PaymentProduct[] = CartProducts.map((product) => ({
    id: `${product.id}`,
    title: product.name,
    unit_price: product.price,
    quantity: product.quantity,
    // picture_url: product.image,
  }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await BuyProduct([
      ...ProductsPayment,
      {
        id: "Envío",
        title: "Envío",
        unit_price: valorEnvio,
        quantity: 1,
      },
    ]);
  };

  const handleClearCart = () => {
    clearCartAfterCheckout();
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <main className="flex lg:flex-row flex-col justify-center items-stretch lg:items-start gap-5 mx-auto max-md:mt-[75px] px-5 lg:px-0 py-5 lg:pt-16 lg:pb-10 w-full lg:max-w-screen-xl h-auto lg:h-[calc(100vh-75px)]">
      <section className="flex-1">
        <Link href={"/products"} className="font-medium text-base underline">
          Continuar Comprando
        </Link>
        <h2 className="my-2 font-semibold text-gray-800 text-xl lg:text-3xl">My Carrito de compras</h2>
        <span className="font-base text-gray-600">Tienes {TotalItems} productos en tu carrito</span>
        <div className="px-8 w-full h-auto max-h-[400px] overflow-x-hidden overflow-y-auto scrollbar">
          <ListProductInCart />
        </div>
      </section>
      <form
        onSubmit={handleSubmit}
        className="bg-emerald-50 shadow px-10 py-8 rounded-lg w-full lg:min-w-[350px] lg:max-w-[400px] font-medium text-sm select-none"
      >
        <h3 className="font-semibold text-gray-700 text-xl">Total de la orden</h3>
        <DataPayment />

        <Button
          variant="default"
          className="bg-white hover:bg-gray-50 shadow mt-5 mb-2 w-full text-black"
          asChild
        >
          <Link href={"/products"}>Continuar Comprando</Link>
        </Button>
        <Button
          onClick={handleClearCart}
          type="submit"
          variant="default"
          className="bg-emerald-400 hover:bg-emerald-500 w-full"
        >
          Continuar con el pago
        </Button>

        <div className="flex justify-evenly items-center mx-5 mt-5">
          <Image src="/visa.svg" width={50} height={50} alt="visa" className="w-12" />
          <Image src="/mastercard.svg" width={50} height={50} alt="mastercard" className="w-12" />
          <Image src="/american.svg" width={50} height={50} alt="american express" className="w-12" />
        </div>
      </form>
    </main>
  );
};
export default CartPage;
// update
