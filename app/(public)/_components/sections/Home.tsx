import Image from "next/image";

const Home = () => {
  return (
    <section className=" flex gap-9  flex-col lg:flex-row items-center pb-10 pt-14 lg:py-10 xl:pt-16 px-2">
      <div className="flex flex-col justify-center gap-5 lg:gap-2 flex-1 lg:pr-9 ">
        <h1 className="text-5xl lg:text-6xl lg:pb-4 text-gray-800 font-extrabold text-center text-wrap lg:text-left">
          Smart Help: donaciones que <span className="text-violet-700">impactan</span>.
        </h1>
        <p className="text-gray-600 text-base xl:text-lg text-wrap text-center px-2 lg:px-0 lg:text-left">
          ¡Bienvenido a nuestra plataforma de donaciones con visión de futuro! Aquí descubrirás una
          amplia gama de causas y proyectos dignos de apoyo. Desde iniciativas locales que atienden
          necesidades inmediatas hasta programas globales que enfrentan desafíos a gran escala, ¡tenemos
          algo para todos! Únete a nosotros en esta misión de hacer del mundo un lugar mejor.
        </p>
      </div>
      <div className="h-full w-full flex-1 px-3 lg:px-0">
        <Image
          src={"/make-a-change.jpg"}
          width={400}
          height={400}
          alt={"Imagen-homepage"}
          className=" w-full  object-contain rounded-xl"
        />
      </div>
    </section>
  );
};

export default Home;
