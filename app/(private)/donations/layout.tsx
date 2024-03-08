export const metadata = {
  title: "Donations",
  description: "Donaciones para las distintas causas",
};
export default function DonationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-md:mt-[68px] 3xl:max-w-screen-xl">{children}</div>
    </div>
  );
}
