export const metadata = {
  title: "Política de privacidad",
  description: "Lee nuestra política de privacidad para obtener información sobre cómo recopilamos, usamos y protegemos tus datos personales. Tu privacidad es importante para nosotros y estamos comprometidos a protegerla.",
};

export default function PoliticLayout({ children }: { children: React.ReactNode }) {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
}
