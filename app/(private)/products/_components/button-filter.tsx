"use client";
import { RiFilterLine } from "react-icons/ri";
import { useFilterState } from "@/store/filter-state";

const ButtonFilter = () => {
  const onOpen = useFilterState((state) => state.onOpen);

  return (
    <button type="button"  className="max-lg:flex items-center gap-2 hidden bg-slate-100 px-4 py-3 rounded-lg max-w-fit text-gray-500" onClick={onOpen}>
      <RiFilterLine className="w-5 h-5" />
      <span className="font-semibold text-gray-600 text-sm">Filtrar por</span>
    </button>
  );
};
export default ButtonFilter;
