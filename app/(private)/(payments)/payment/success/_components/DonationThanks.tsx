import { CheckCircle2 } from "lucide-react";

export const DonationThanks = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#845CF8] shadow-sm px-3 py-5 lg:rounded-2xl lg:max-w-screen-md h-[calc(100vh-73px)] lg:h-[82vh]">
      <div className="flex flex-col justify-center py-5 lg:py-0 sm:w-4/5 sm:h-4/6">
        <h1 className="my-7 lg:mt-0 font-bold sm:font-extrabold text-5xl text-center text-white sm:text-4xl 3xl:text-5xl">
          ¡Gracias, tu donativo fué enviado con éxito!
        </h1>
        <div className="flex justify-center">
          <CheckCircle2 size={150} color="#ffffff" className="my-6" />
        </div>
        <p className="font-medium text-center text-sm text-white lg:text-base xl:text-lg">
          El apoyo de personas como vos nos permite llevar ayuda a quienes más lo necesitan, sean quienes
          sean y estén donde estén. Haciendo una donación por única vez estás contribuyendo con la ayuda
          cientos de miles de personas afectadas por emergencias humanitarias causadas por catástrofes
          naturales, hambrunas, epidemias o conflictos armados.
        </p>
      </div>
    </div>
  );
};
