import Image from "next/image";
import Logo from "@/app/assets/images/logo.png";

export function Header() {
  return (
    <div className="w-full bg-[#313233] h-20 px-5 flex items-center justify-between">
      <Image src={Logo} alt="" width={130} height={140} />
    </div>
  );
}
