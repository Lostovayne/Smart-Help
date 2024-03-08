import { CategoryData } from "@/data/category-data";
import { cn } from "@/lib/utils";

import Image from "next/image";

interface Props {
  cat: CategoryData;
  state: string[];
  addOrRemoveCategory: (category: string) => void;
}

const CategoryItem = ({ cat, state, addOrRemoveCategory }: Props) => {
  return (
    <li
      key={cat.id}
      className={cn(
        "py-2 px-4 flex items-center gap-2  capitalize cursor-pointer font-normal rounded hover:shadow hover:scale-105 hover:bg-violet-400 hover:text-white hover:font-medium transition-all ",
        state.includes(cat.name) ? "text-white bg-violet-500 shadow hover:bg-violet-500" : ""
      )}
      onClick={() => addOrRemoveCategory(cat.name)}
    >
      <Image src={cat.icon} alt={cat.name} width={30} height={30} />
      <span>{cat.name}</span>
    </li>
  );
};
export default CategoryItem;
