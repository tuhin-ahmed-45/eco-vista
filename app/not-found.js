'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const location = pathname.substring(1); // Remove the leading slash
  console.log(location);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <Image src="/not-found.png" width={400} height={400} alt="" />
        <p className="text-white font-semibold text-xl">This <span className="text-[#daf400] capitalize">{location}</span> location is not found!</p>
      </div>
    </div>
  );
}
