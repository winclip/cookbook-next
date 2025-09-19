"use client";

import { Button, NavbarItem } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import RegistrationModal from "../modals/Registration.modal";
import LoginModal from "../modals/Login.modal";
import { signOutFunc } from "@/actions/sign-out";

export default function AuthButtons() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignOut = async () => {
    await signOutFunc();
  };
  return (
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

      <NavbarItem>
        <Button color="primary" variant="flat" onPress={handleSignOut}>
          Sign out
        </Button>
      </NavbarItem>
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
