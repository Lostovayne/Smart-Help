import Footer from "./_components/layout/Footer";
import Navbar from "./_components/layout/Navbar";

export const metadata = {
  title: "Smart Help",
  description: "Home",
};
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
