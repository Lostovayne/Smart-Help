import Image from "next/image";

const AboutUs = () => {
  return (
    <main className="lg:py-10">
      <h1 className="hidden text-center pb-7 lg:mt-5 lg:pb-20 text-4xl font-extrabold text-gray-800 lg:block">
        “Nuestras Contribuciones a Causas Importantes”
      </h1>
      <section className="flex flex-col px-3 gap-10 lg:gap-24 lg:px-0">
        <div className="flex flex-col items-center lg:items-start lg:flex-row">
          <div className=" h-full w-full order-1  lg:order-2 pb-5  lg:w-1/2 pt-5 lg:p-5 flex flex-col justify-center text-center lg:text-left">
            <h2 className=" text-4xl lg:text-5xl pb-5 text-violet-700 font-extrabold text-wrap">
              Viviendas Prefabricadas <span className="text-gray-800">para Familias Afectadas</span>
            </h2>
            <p className="text-gray-600 lg:pt-4 text-base xl:text-xl text-wrap">
              En situaciones de desastres naturales, las casas prefabricadas se convierten en una
              solución clave para brindar refugio rápido y seguro a las familias afectadas. Estas
              estructuras, construidas con materiales resistentes y ensambladas de manera rápida, ofrecen
              un refugio temporal vital mientras se lleva a cabo la reconstrucción de comunidades
              enteras.
            </p>
          </div>
          <div className="h-full lg:w-1/2  order-1 px-3 lg:pr-6">
            <Image
              src={"/prefab-cabin.jpg"}
              width={400}
              height={400}
              alt={"Imagen-homepage"}
              className="w-full lg:h-[500px] object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:items-end pb-10">
          <div className=" h-full pb-5 w-full lg:w-1/2 pt-5 lg:pr-9 text-center lg:text-left lg:pl-3">
            <h2 className=" text-4xl lg:text-5xl pb-5 text-gray-800 font-extrabold text-wrap">
              Iniciativa de <span className="text-violet-700">donación</span> de útiles escolares
            </h2>
            <p className="text-gray-600 lg:pt-3 text-base xl:text-xl text-wrap">
              Entendemos la vital importancia de disponer de los recursos adecuados para el proceso de
              aprendizaje. Por ello, nos comprometemos a proporcionar herramientas fundamentales que
              contribuyan al desarrollo académico de cada estudiante. Desde lápices y cuadernos hasta
              calculadoras científicas y libros de texto, nuestra ayuda abarca todas las etapas
              educativas. Además, estamos comprometidos con la innovación pedagógica, la lectura escolar
              y la integración de tecnología para un aprendizaje significativo12.
            </p>
          </div>
          <div className="h-full px-3 lg:pr-9 lg:w-1/2">
            <Image
              src={"/student.jpg"}
              width={400}
              height={400}
              alt={"Imagen-students"}
              className="w-full lg:h-[500px] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
