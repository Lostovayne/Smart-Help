export const metadata = {
  title: "Contacto",
  description: "¿Tienes alguna pregunta, comentario o inquietud? Utiliza nuestros detalles de contacto para comunicarte con nuestro equipo. Ya sea que necesites asistencia con un pedido, tengas una consulta sobre nuestros productos o simplemente quieras decir hola, estamos aquí para ayudarte.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
}
