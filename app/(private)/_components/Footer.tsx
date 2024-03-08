import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-100 mb-0 p-5 w-full">
      <div className="flex md:flex-row lg:flex-row xl:flex-row flex-col justify-center gap-4 align-center">
        <p className="relative px-8 md:border-r lg:border-r xl:border-r">
          <Link href={"#"}>
            Condiciones de campaña
            <ChevronRight className="top-0 right-0 absolute md:hidden lg:hidden xl:hidden" />
          </Link>
        </p>
        <p className="relative px-8 md:border-r lg:border-r xl:border-r">
          <Link href={"#"}>
            Como donar
            <ChevronRight className="top-0 right-0 absolute md:hidden lg:hidden xl:hidden" />
          </Link>
        </p>
        <p className="relative px-8 md:border-r lg:border-r xl:border-r">
          <Link href={"#"}>
            Mi cuenta
            <ChevronRight className="top-0 right-0 absolute md:hidden lg:hidden xl:hidden" />
          </Link>
        </p>
        <p className="relative px-8">
          <Link href={"#"}>
            Politica de privacidad
            <ChevronRight className="top-0 right-0 absolute md:hidden lg:hidden xl:hidden" />
          </Link>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
