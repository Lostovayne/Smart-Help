import Navbar from "./_components/Navbar";

export const metadata = {
  title: "SEO Title",
  description: "SEO Title",
};
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
