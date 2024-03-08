import { getAllProducts, getProductById } from "@/actions/actions";

import Image from "next/image";
import ButtonAddCart from "../../_components/ButtonAddCart";
import Carrousel from "./_components/Carrousel";
interface Props {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: Props) => {
  const productById = await getProductById(Number(id)) ;
  const allProducts = (await getAllProducts()) || [];

  // const productosSugeridos = allProducts.filter((cat: string) => cat.category === productById.category);
  const doblePrice: number = productById!.price * 2;
  const productosSugeridos = allProducts;

  return (
    <section className="mx-auto mt-8 p-2 max-w-screen-xl">
      {/* top content */}
      <div className="flex md:flex-row flex-col items-center md:mx-28 2xl:mx-auto md:h-[400px]">
        {/* img box */}
        <div className="flex justify-center items-center md:order-2 md:w-[40%] h-[100%] overflow-hidden">
          <Image
            src={productById?.image ?? ""}
            width={300}
            height={300}
            className=""
            alt="product image"
          />
        </div>
        {/* Columna de imágenes */}
        <div className="md:order-1 md:mt-4 md:w-[10%] md:h-[100%]">
          <div className="flex justify-center items-center shadow mx-auto rounded-md w-[90px] h-[90px] object-contain">
            <Image src={productById?.image ?? ""} width={40} height={40} alt="product image" />
          </div>
          {/* Agrega más imágenes aquí si es necesario */}
        </div>
        {/* Price rectangle */}
        <div className="md:order-3 md:w-[40%] md:h-[100%]">
          <div className="shadow p-6 rounded-md w-full md:w-[470px] h-full md:h-[230px]">
            <h3 className="font-medium text-gray-400">Tienda: Doña Ema</h3>
            <h1 className="border-b-slate-500 font-bold text-2xl">
              {productById!.name} x {productById!.quantity} unidades
            </h1>
            <h3 className="mt-4 text-slate-400 text-sm line-through">${doblePrice}</h3>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-2xl text-blue-400">${productById!.price}</h3>
              <div className="w-full max-w-56 cursor-pointer" >
                <ButtonAddCart product={productById!} disabled={productById!.quantity === 0} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="md:mx-28 2xl:mx-auto mt-10 px-4">
        <h3 className="mb-4 font-bold text-xl md:text-start lg:text-center xl:text-2xl">Descripción:</h3>
        <h1 className="mb-4 max-w-fit font-bold text-2xl">{productById?.name}</h1>
        <p className="mb-4 md:w-[90%] font-light text-left text-lg">{productById?.description}</p>
      </div>
      {/* Swipper */}
      <div className="md:mx-28 2xl:mx-auto my-4 md:max-w-screen-lg 2xl:max-w-screen-xl md:h-full">
        <h1 className="mb-5 px-5 font-bold text-2xl">También podría interesarte</h1>
        <div className="flex justify-center md:h-[360px]">
          <Carrousel productosSugeridos={productosSugeridos} />
        </div>
      </div>
      {/* <div className="md:mx-28 2xl:mx-auto mt-4 md:max-w-screen-xl md:h-full">
        <h1 className="mb-5 px-5 font-bold text-2xl">Otros productos</h1>
        <div className="flex justify-center mx-auto w-full md:w-[1280px] h-full md:h-[350px]">
          <Carrousel productosSugeridos={productosSugeridos} />
        </div>
      </div> */}
    </section>
  );
};
export default ProductPage;