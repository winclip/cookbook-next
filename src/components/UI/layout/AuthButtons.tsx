"use client";

import { Button, NavbarItem } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import RegistrationModal from "../modals/Registration.modal";
import LoginModal from "../modals/Login.modal";

export default function AuthButtons() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

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

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
