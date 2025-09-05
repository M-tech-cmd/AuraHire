import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated, getCurrentUser } from "@/lib/actions/auth.action";
import SignOutButton from "@/components/SignOutButton"; // Adjust path as needed

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  const user = await getCurrentUser();

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">AuraHire</h2>
        </Link>
        
        <div className="flex items-center gap-4">
          {user && (
            <span className="text-primary-100">
              Hi, {user.name}!
            </span>
          )}
          <SignOutButton />
        </div>
      </nav>

      {children}
    </div>
  );
};

export default Layout;