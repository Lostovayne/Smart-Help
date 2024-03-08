"use client";
import { CategoryDat } from "@/data/category-data";
import { useCategoryState } from "@/store/category-state";
import CategoryItem from "./category-item";
import { useFilterState } from "@/store/filter-state";
import { cn } from "@/lib/utils";

const SidebarMobile = () => {
  // Zustand
  const addOrRemoveCategory = useCategoryState((state: any) => state.addOrRemoveCategory);
  const state = useCategoryState((state: any) => state.categories);
  const isOpen = useFilterState((state: any) => state.isOpen);
  const onClose = useFilterState((state: any) => state.onClose);

  return (
    <aside
      className={cn(
        "xl:block top-9  bottom-0 left-0   sticky  bg-white xl:px-10 xl:py-8 p-6 rounded-lg w-[330px] max-md:z-50",
        isOpen
          ? "max-md:fixed max-md:top-[70px] max-md:z-50 max-md:w-screen max-md:h-[calc(100vh-70px)] max-md:overflow-hidden transition-all duration-500"
          : " -left-full w-screen max-md:top-[70px] max-md:fixed transition-all duration-700 "
      )}
    >
      <h3 className="mb-5 font-bold text-lg text-normal text-violet-400 lg:text-lg">Categorías</h3>
      <ul className="space-y-2" onClick={onClose}>
        {CategoryDat.map((cat) => (
          <CategoryItem key={cat.id} cat={cat} state={state} addOrRemoveCategory={addOrRemoveCategory} />
        ))}
      </ul>
    </aside>
  );
};
export default SidebarMobile;
