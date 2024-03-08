import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export const SectionAboutUs = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center text-center my-9 sm:my-14 w-[80%] gap-4'>
        <h2 className='text-gray-800 font-black text-5xl sm:text-6xl'>
          Sobre Nosotros
        </h2>
        <Separator className='bg-gray-400 w-4/5' />
      </div>
      <section className='flex gap-9 flex-col lg:flex-row items-center pb-10 pt-14 lg:py-10 xl:pt-16 px-2'>
        <div className='flex flex-col justify-center gap-5 lg:gap-2 flex-1 lg:p-5'>
          <h2 className='text-5xl lg:text-6xl lg:pb-4 text-gray-800 font-extrabold text-center text-wrap lg:text-left'>
            “Ayudamos a que mas personas se ayuden entre ellas”
          </h2>
          <p className='text-gray-600 text-base xl:text-lg text-wrap text-center px-2 lg:px-0 lg:text-left'>
            Cuando una persona ayuda a otra, esa persona ayuda a otra y esa
            ayuda otra, se crea una cadena de favores. Queremos ayudar a
            personas que quieren ayudar a otras personas que puedan estar cerca,
            dentro del mismo barrio, o pueden estar muy lejos, en otro país.
            Nuestra misión es conectar a personas con personas.
          </p>
        </div>
        <div className='h-full w-full flex-1 px-3 lg:px-0'>
          <Image
            src={"/smile-people.png"}
            width={400}
            height={400}
            alt={"Imagen-homepage"}
            className='w-full lg:h-[500px] object-cover rounded-xl'
          />
        </div>
      </section>
      <section className='pb-10 pt-14 lg:py-10 xl:pt-16 px-2'>
        <div className='flex flex-col items-center lg:items-start lg:flex-row'>
          <div className='h-full w-full order-1 lg:order-2 pb-5 lg:w-1/2 pt-5 lg:p-5 flex flex-col justify-center text-center lg:text-left gap-5 lg:gap-2 flex-1 lg:pr-9'>
            <h2 className='text-5xl lg:text-6xl lg:pb-4 text-gray-800 font-extrabold text-center text-wrap lg:text-left'>
              Donaciones y Compras Solidarias
            </h2>
            <p className='text-gray-600 text-base xl:text-lg text-wrap text-center px-2 lg:px-0 lg:text-left'>
              Nuestra plataforma no solo facilita las donaciones, sino que
              también permite la compra de productos que se entregan
              directamente a quienes más los necesitan. Cada compra es un acto
              de bondad que llega a aquellos en necesidad. Únete a nosotros y
              transforma vidas con tus donaciones y compras solidarias.
            </p>
          </div>
          <div className='h-full lg:w-1/2  order-1 px-3 lg:pr-6'>
            <Image
              src={"/donation-food.jpg"}
              width={400}
              height={400}
              alt={"Imagen-homepage"}
              className='w-full lg:h-[500px] object-cover rounded-xl'
            />
          </div>
        </div>
      </section>
    </>
  );
};
