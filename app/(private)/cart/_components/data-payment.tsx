"use client";

import { useCartStore } from "@/store/cart-state";
import { useEffect, useState } from "react";

const DataPayment = () => {
  const TotalPrice = useCartStore((state) => state.TotalPriceProducts());
  const valorEnvio = TotalPrice * 0.5;
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div>
      <div className="flex justify-between items-center my-2">
        <span>Valor total del donativo</span>
        <span>${TotalPrice}</span>
      </div>
      <div className="flex justify-between items-center my-2">
        <span>Valor del envío</span>
        <span>${valorEnvio}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Total</span>
        <span>${TotalPrice + valorEnvio}</span>
      </div>
    </div>
  );
};
export default DataPayment;
