import { Inter } from "next/font/google";
import Image from "next/image";
import BgImage from "../../public/background.png";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Eco Vista",
   description: "A weather dashboard app",
};

export default function DashboardLayout({
   children,
   weather,
   aqi,
   wind,
   temperature,
}) {
   return (
      <div className="relative min-h-screen">
         {/* Background Image */}
         <div className="absolute inset-0 -z-10">
            <Image
               src={BgImage}
               alt="Background"
               className="h-full w-full object-cover"
               priority
            />
         </div>

         {/* Overlay */}
         <div className="absolute inset-0 bg-black/30 -z-10"></div>

         {/* Main Content */}
         <main className="relative z-10 w-full">
            <div className="container mx-auto">
               <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
                  {children}
                  {weather}
                  {aqi}
                  {wind}
                  {temperature}
               </div>
            </div>
         </main>
      </div>
   );
}
