import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="relative flex hover:bg-violet-500 lg:mr-1 px-3.5 py-2 rounded text-stone-600 hover:text-slate-200 transition-colors group"
    >
      {children}
    </Link>
  );
};
export default NavItem;
