import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 px-12 border-b-[1px] shadow-sm">
      <Link href="/" className="flex gap-2 items-center">
        <h1 className="font-bold bg-blue-400 px-3 py-1 rounded-md text-2xl">
          Cab
        </h1>
        <span className="bg-transparent font-bold text-xl ">Connects</span>
      </Link>
      <div className="hidden md:flex items-center gap-8 font-semibold text-md">
        <h2>Home</h2>
        <h2>History</h2>
        <h2>Help</h2>
      </div>
      <div className="px-3">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
