import Footer from "../../_components/Footer";

export const metadata = {
  title: "Producto",
  description: "Descripcion del producto",
};
export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-md:mt-[75px]">
      {children}
      <Footer />
    </div>
  );
}
