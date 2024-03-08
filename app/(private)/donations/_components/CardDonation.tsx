import { FormDonation } from "./formDonation";

export const CardDonation = () => {
  return (
    <div className="md:flex justify-center items-start bg-white lg:shadow-lg lg:py-24 2xl:py-32 max-lg:pt-10 rounded-xl">
      <div className="w-full md:w-1/2">
        <h1 className="mt-0 mb-5 font-bold sm:font-extrabold text-5xl text-center text-custom-purple sm:text-6xl lg:text-left">
          Gracias por apoyar nuestra causa
        </h1>
        <p className="max-lg:px-4 font-medium text-base text-gray-600 sm:text-base lg:text-pretty lg:text-left lg:text-xl">
          El apoyo de personas como vos nos permite llevar ayuda a quienes más lo necesitan, sean quienes
          sean y estén donde estén. Haciendo una donación por única vez estás contribuyendo con la ayuda
          cientos de miles de personas afectadas por emergencias humanitarias causadas por catástrofes
          naturales, hambrunas, epidemias o conflictos armados.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center py-2">
        <h2 className="pb-5 font-bold text-3xl text-center text-custom-purple">
          Quiero hacer una donación
        </h2>
        <FormDonation />
      </div>
    </div>
  );
};
