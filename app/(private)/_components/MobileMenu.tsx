"use client";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { NAV_LINKS_PRIVATE } from "@/constants";
import { useSheetState } from "@/store/sheet-state";
import { UserButton, useUser } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { useCartStore } from "@/store/cart-state";
import { TbShoppingCartHeart } from "react-icons/tb";

export const MobileMenu = () => {
  // Zustand
  const onOpen = useSheetState((state) => state.onOpen);
  const onClose = useSheetState((state) => state.onClose);
  const isOpen = useSheetState((state) => state.isOpen);

  const { user } = useUser();
  console.log();

  //React
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());


  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" onClick={onOpen} className="p-0" >
        <Menu />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left">
          <SheetHeader className="flex justify-center items-center">
            <SheetTitle className="my-4">
              <Logo />
            </SheetTitle>
            <div className="gap-4 grid py-4">
              <div className="flex flex-col justify-center items-start gap-4">
                <div className="gap-4 grid py-4">
                  <div className="flex flex-col items-start gap-4">
                    {NAV_LINKS_PRIVATE.map(({ href, key, label, icon: Icon }) => (
                      <Button variant="ghost" key={key}>
                        <Link href={href} className="flex flex-row items-center gap-3 text-base">
                          <Icon color="#421c86" />
                          {label}
                        </Link>
                      </Button>
                    ))}

                    <NavItem href="/cart">
                      {isMounted && totalItemsInCart > 0 && (
                        <span className="group-hover:bg-white group-hover:text-violet-500 top-0 left-0 absolute bg-violet-500 p-1 rounded-full w-6 h-6 font-medium text-center text-white text-xs">
                          {totalItemsInCart}
                        </span>
                      )}
                      <TbShoppingCartHeart className="mr-2 w-6 h-6" />
                      Carrito
                    </NavItem>
                    <Button variant="ghost" className="flex flex-row gap-3 py-6 text-base">
                      <UserButton afterSignOutUrl="/" />
                      {user?.firstName} {user?.lastName}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

//updated
