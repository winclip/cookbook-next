"use client";

import { Button, NavbarItem } from "@heroui/react";
import { useState } from "react";
import RegistrationModal from "../modals/Registration.modal";
import LoginModal from "../modals/Login.modal";
import { signOutFunc } from "@/actions/sign-out";
import { useAuthStore } from "@/store/auth.store";

export default function AuthButtons() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { isAuth, session, status, setAuthState } = useAuthStore();

  console.log(status);
  console.log(session);

  const handleSignOut = async () => {
    try {
      await signOutFunc();
    } catch (error) {
      console.log(error);
    }
    setAuthState("unauthenticated", null);
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
            Zdravo {session?.user?.name || session?.user?.email}!
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
