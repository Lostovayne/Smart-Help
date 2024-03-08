import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProductCard from "@/app/(private)/products/_components/productcard";
import { ProductsData } from "@/interfaces/productos";

const Carrousel: any = ({ productosSugeridos }: any) => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="px-4 2xl:px-8 w-full max-w-[330px] md:max-w-4xl 2xl:max-w-6xl"
      >
        <CarouselContent className="">
          {productosSugeridos.map((product: ProductsData) => (
            <CarouselItem key={product.id} className="basis-1/2 lg:basis-1/4 2xl:basis-1/5">
              <div className="p-1">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-md:hidden" />
        <CarouselNext className="max-md:hidden"  />
      </Carousel>
    </div>
  );
};

export default Carrousel;
