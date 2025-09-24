"use client";

import { Button, NavbarItem } from "@heroui/react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import RegistrationModal from "../modals/Registration.modal";
import LoginModal from "../modals/Login.modal";
import { signOutFunc } from "@/actions/sign-out";

export default function AuthButtons() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const { data: session, status } = useSession();
  const isAuth = !!session;

  const handleSignOut = async () => {
    await signOutFunc();
  };

  if (status === "loading") {
    return <NavbarItem>Loading...</NavbarItem>;
  }

  return (
    <>
      {!isAuth ? (
        <>
          <NavbarItem>
            <Button
              color="secondary"
              variant="flat"
              onPress={() => setIsLoginOpen(true)}
            >
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              color="primary"
              variant="flat"
              onPress={() => setIsRegistrationOpen(true)}
            >
              Register
            </Button>
          </NavbarItem>
        </>
      ) : (
        <>
          <NavbarItem>
            <Button color="primary" variant="flat" onPress={handleSignOut}>
              Sign out
            </Button>
          </NavbarItem>
          <NavbarItem>
            Zdravo {session.user?.name || session.user?.email}!
          </NavbarItem>
        </>
      )}

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
