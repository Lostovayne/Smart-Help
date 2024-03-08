import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center lg:m-0 w-40">
        <Image src="/chat-round.svg" alt="" width={25} height={25} />
        <p
          className={`${poppins.className} text-2xl lg:text-3xl  whitespace-nowrap font-extrabold text-gray-700`}
        >
          Smart<span className="text-violet-700">Help</span>
        </p>
      </div>
    </Link>
  );
};

export default Logo;
