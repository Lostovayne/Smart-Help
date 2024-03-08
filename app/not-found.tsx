import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="m-5 sm:m-14">
      <h1 className="py-12 font-extrabold text-8xl sm:text-9xl">( ._.)</h1>
      <h2 className="font-bold text-4xl sm:text-5xl">¡Ups! Parece que esta página no existe.</h2>
      <p className="py-5 font-light text-base text-black">
        Lo sentimos, pero la página que estás buscando no existe o no se encuentra disponible. Puede que
        haya sido movida o eliminada.
      </p>
      <Button className="flex flex-row gap-2 hover:gap-3 my-5 transition-all" variant="outline">
        <ArrowLeft size={15} />
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  );
}
