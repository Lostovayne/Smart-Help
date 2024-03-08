export const metadata = {
  title: "Lista de donaciones",
  description: "Lista de donaciones creada por Smart Help",
};

export default function ListDonationsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="bg-slate-50">
        <div className="mx-auto 3xl:max-w-screen-xl h-[calc(100vh-73px)]">{children}</div>
      </div>
    );
  }