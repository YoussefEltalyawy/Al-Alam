import { SignedOut, UserButton } from "@clerk/nextjs";
import { Globe2, LogIn, User } from "lucide-react";
import Link from "next/link";
function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <h1 className="text-3xl font-black text-brandRed flex items-center gap-2 transform -rotate-2">
        <Globe2 className="h-8 w-8" />
        Al-Alam
      </h1>
      <div className="flex gap-4">
        <SignedOut>
          <Link href="/sign-in">
            <button className="flex items-center gap-2 px-4 py-2 bg-brandRed text-brandBeige border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <LogIn className="h-5 w-5" />
              <p className="font-semibold">Sign In</p>
            </button>
          </Link>
          <Link href="sign-up">
            <button className="flex items-center gap-2 px-4 py-2 bg-brandBlue text-brandBeige border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <User className="h-5 w-5" />
              <p className="font-semibold">Sign Up</p>
            </button>
          </Link>
        </SignedOut>
        <UserButton/>
      </div>
    </header>
  );
}
export default Header;
