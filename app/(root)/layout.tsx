import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { LogoutButton } from "@/components/LogoutButton";

const RootLayout = async ({ children }: { children: ReactNode }) => {
    // Removed auth check - middleware handles this now
    const user = await getCurrentUser();

    return (
        <div className="root-layout">
            <nav className="flex items-center justify-between p-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
                    <h2 className="text-primary-100">AuraHire</h2>
                </Link>

                {user && (
                    <div className="flex items-center gap-4">
                        <span>Welcome, {user.name || user.email}</span>
                        <LogoutButton />
                    </div>
                )}
            </nav>

            {children}
        </div>
    );
};

export default RootLayout;