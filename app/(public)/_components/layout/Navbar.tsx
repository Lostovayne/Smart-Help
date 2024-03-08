import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "../mobile/MobileMenu";

const Navbar = () => {
  const { userId } = auth();

  return (
    <nav className="flex justify-between items-center mx-auto px-3 pt-7 max-w-screen-xl">
      {/* Logo */}
      <Logo />

      {/* Usuario no logeado */}
      <div className="lg:flex items-center gap-4 hidden">
        {/*Links*/}
        <ul className="lg:flex items-end space-x-4">
          {NAV_LINKS.map(({ href, key, label }) => (
            <Link href={href} key={key} className="text-base hover:text-violet-500 transition-all">
              {label}
            </Link>
          ))}
        </ul>

        {userId ? (
          <Link
            href={"/donations"}
            className="bg-violet-700 hover:bg-violet-600 px-3 py-1.5 rounded-lg text-white"
          >
            Donar
          </Link>
        ) : (
          <Link
            href={"/sign-in"}
            className="flex items-center gap-1 bg-violet-700 hover:bg-violet-600 px-3 py-1.5 rounded-lg text-white"
          >
            <span className="text-base">Ingresar</span>
            <Image src={"ingresar.svg"} alt="logo" width={25} height={25} />
          </Link>
        )}
      </div>

      {/* Navbar Mobile */}
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
