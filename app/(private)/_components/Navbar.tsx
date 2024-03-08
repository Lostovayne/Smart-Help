"use client";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS_PRIVATE } from "@/constants";
import { useCartStore } from "@/store/cart-state";
import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { TbShoppingCartHeart } from "react-icons/tb";
import { MobileMenu } from "./MobileMenu";
import NavItem from "./NavItem";

const Navbar = () => {
  // Logica del numero en el icono del carrito
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
      <nav className="max-md:top-0 max-md:right-0 max-md:left-0 max-md:z-50 max-md:fixed border-slate-100 bg-white shadow px-0 border-b w-full max-md">
      <div className="flex justify-between items-start md:items-center px-3 sm:px-10 py-4 w-full">
        <Logo />

        <div className="flex items-center gap-x-3">
          <div className="md:flex flex-row gap-1 hidden">
            {NAV_LINKS_PRIVATE.map(({ href, key, label, icon: Icon }) => (
              <NavItem key={key} href={href}>
                <Icon className="mr-2 w-6 h-6" />
                {label}
              </NavItem>
            ))}
            <NavItem href="/cart">
              {loading && totalItemsInCart > 0 && (
                <span className="group-hover:bg-white group-hover:text-violet-500 top-0 left-0 absolute bg-violet-500 p-1 rounded-full w-6 h-6 font-medium text-center text-white text-xs">
                  {totalItemsInCart}
                </span>
              )}
              <TbShoppingCartHeart className="mr-2 w-6 h-6" />
              Carrito
            </NavItem>
          </div>
          <div className="md:flex hidden w-8 h-8">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};
export default Navbar;
