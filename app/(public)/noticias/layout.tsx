export const metadata = {
  title: "Noticias",
  description: "Mantente al tanto de las últimas noticias sobre desastres naturales en todo el mundo y descubre cómo puedes ayudar a través de donaciones y actos de caridad. Infórmate sobre cómo las comunidades están respondiendo a emergencias y cómo puedes marcar la diferencia.",
};

export default function NoticeLayout({ children }: { children: React.ReactNode }) {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
}
