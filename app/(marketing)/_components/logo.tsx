import Image from "next/image";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-2">
      <Image src="logo.svg" height="40" width="40" alt="logo" />
    </div>
  );
};

export default Logo;
