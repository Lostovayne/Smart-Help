"use client";
import { useCartClean } from "@/store/clear-cart-after-checkout";
import { DonationThanks } from "./_components/DonationThanks";
import { useCartStore } from "@/store/cart-state";

const SuccessPage = () => {
  const cleanCartState = useCartClean((state) => state.cleanCart);
  const CleanState = useCartClean((state) => state.CleaningTheCart);
  const CleanCartProduct = useCartStore((state) => state.ClearCart);

  if (!cleanCartState) {
    CleanCartProduct();
    CleanState();
  }

  return (
    <div className="flex justify-center sm:items-center w-full h-[calc(100vh-75px)]">
      <DonationThanks />
    </div>
  );
};
export default SuccessPage;
