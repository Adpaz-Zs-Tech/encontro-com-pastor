import Image from "next/image";

export function Header() {
  return (
    <div className="w-full bg-[#313233] h-20 flex items-center justify-between">
      {/* <Image
        className="ml-10"
        src="/logoadpaz.png"
        alt=""
        width={130}
        height={140}
      /> */}

      <button className="text-white mr-10">Encontro com pastor</button>
    </div>
  );
}
