import { getAllProducts } from "@/actions/actions";
import ProductList from "./_components/product-list";
import Sidebar from "./_components/sidebar";
import ButtonFilter from "./_components/button-filter";
import SidebarMobile from "./_components/sidebar-mobile";

const Product = async () => {
  const products = await getAllProducts();

  return (
    <div className="relative flex justify-center lg:justify-around items-start lg:gap-4 mx-auto px-4 py-6 xl:p-10 max-w-screen-2xl max-lg:min-h-[calc(100vh-258px)] lg:min-h-[calc(100vh-138px)]">
      <div className="lg:block hidden">
        <Sidebar />
      </div>
      <div className="block lg:hidden">
        <SidebarMobile />
      </div>
      <section className="">
        <div className="flex justify-end pb-2 w-full" >
          <ButtonFilter />
        </div>
        <ProductList products={products} />
      </section>
    </div>
  );
};

export default Product;
