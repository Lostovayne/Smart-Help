"use client";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants";
import { useSheetNavbarPublic } from "@/store/public-navbar-state";
import { useAuth } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const MobileMenu = () => {
  const { userId } = useAuth();
  const isOpen = useSheetNavbarPublic((state) => state.isOpen);
  const onOpen = useSheetNavbarPublic((state) => state.onOpen);
  const onClose = useSheetNavbarPublic((state) => state.onClose);

  const path = usePathname();

  useEffect(() => {
    onClose();
  }, [path, onClose]);

  return (
    <div className="lg:hidden">
      <Button variant="ghost" onClick={onOpen}>
        <Menu className="w-14" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetTrigger asChild></SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="flex justify-center items-center">
            <SheetTitle className="my-4">
              <Logo />
            </SheetTitle>
            <div className="gap-4 grid py-4">
              <div className="flex flex-col items-center gap-4">
                {NAV_LINKS.map(({ href, key, label }) => (
                  <Button variant="ghost" key={key}>
                    <Link href={href} className="text-base hover:text-violet-500 transition-all">
                      {label}
                    </Link>
                  </Button>
                ))}
                <Button variant="purple" className="lg:flex gap-2">
                  {!userId ? (
                    <Link href={"/sign-in"} className="flex items-center gap-1">
                      <span className="text-base">Ingresar</span>
                      <Image src={"ingresar.svg"} alt="logo" width={25} height={25} />
                    </Link>
                  ) : (
                    <Link href={"/donations"}>Donar</Link>
                  )}
                </Button>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
