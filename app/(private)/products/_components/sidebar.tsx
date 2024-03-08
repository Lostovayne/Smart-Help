"use client";
import { CategoryDat } from "@/data/category-data";
import { useCategoryState } from "@/store/category-state";
import CategoryItem from "./category-item";

const Sidebar = () => {
  // Zustand
  const addOrRemoveCategory = useCategoryState((state: any) => state.addOrRemoveCategory);
  const state = useCategoryState((state: any) => state.categories);

  return (
    <aside className="xl:block top-9 bottom-0 left-0 sticky hidden bg-white xl:px-10 xl:py-8 p-6 rounded-lg w-[330px]">
      <h3 className="mb-5 font-bold text-lg text-normal text-violet-400 lg:text-lg">Categorías</h3>
      <ul className="space-y-2">
        {CategoryDat.map((cat) => (
          <CategoryItem key={cat.id} cat={cat} state={state} addOrRemoveCategory={addOrRemoveCategory} />
        ))}
      </ul>
    </aside>
  );
};
export default Sidebar;
