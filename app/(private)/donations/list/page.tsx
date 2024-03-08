import { getAllCauses, getAllDonations } from "@/actions/actions";
import { TableDonations } from "./_components/TableDonations";

const ListDonations = async () => {
  const donations = await getAllDonations();
  const causas = await getAllCauses();

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='py-10 sm:pl-3 w-5/6 font-extrabold text-2xl text-center text-gray-700 sm:text-left xl:text-3xl'>
        Lista de donaciones
      </h1>
      <TableDonations causa={causas} data={donations} />
    </div>
  );
};
export default ListDonations;
