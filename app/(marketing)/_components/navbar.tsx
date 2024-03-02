"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignOutButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();
  console.log('isAuthed', isAuthenticated)
  return (
    <div
      className={cn(
        "z-50 bg-background fixed flex top-0 items-center w-full p-6 dark:bg-[#1f1f1f]",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <p>Loading...</p>}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size={"sm"}>
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size={"sm"}>Get Botion Free</Button>
            </SignInButton>
          </>
        )}
        <SignOutButton >
        <Button variant="ghost" size={"sm"}>
                Log out
              </Button>
        </SignOutButton>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
