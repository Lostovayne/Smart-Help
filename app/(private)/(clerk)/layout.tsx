
export const metadata = {
  title: "Login",
  description: "Inicio de Sesion",
};


export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-center items-center h-full">{children}</div>;
}
