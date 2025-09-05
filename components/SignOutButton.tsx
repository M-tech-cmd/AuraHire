"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "@/firebase/client";
import { signOut } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      // Sign out from Firebase client
      await firebaseSignOut(auth);
      
      // Clear server session
      await signOut();
      
      toast.success("Signed out successfully.");
      router.push("/sign-in");
    } catch (error) {
      console.error("Sign out error:", error);
      toast.error("Failed to sign out. Please try again.");
    }
  };

  return (
    <Button 
      onClick={handleSignOut}
      variant="outline"
      className="ml-auto cursor-pointer"
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;