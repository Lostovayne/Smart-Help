export const metadata = {
  title: "Sobre Nosotros",
  description: "Descubre quiénes somos y nuestra misión. Te contamos nuestra historia, nuestros valores y nuestro compromiso con nuestros clientes y la comunidad. Conoce al equipo detrás de nuestra marca y entiende cómo trabajamos para hacer del mundo un lugar mejor.",
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
    return <div className="max-w-screen-xl mx-auto">{children}</div>;
}
  