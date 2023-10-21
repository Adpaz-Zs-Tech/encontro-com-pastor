import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen justify-center items-center flex">
      <div className="w-96">
        <div className="w-full">
          <label className="text-gray-500 font-medium">Nome</label>
          <input
            type="text"
            className="h-12 border rounded-md w-full border-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
