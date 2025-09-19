"use client";

import LoginForm from "../forms/Login.form";
import RegistrationForm from "../forms/Registration.form";

export default function Home() {
  return (
    <div>
      <RegistrationForm onClose={() => console.log("close")} />
      <LoginForm onClose={() => console.log("close")} />
    </div>
  );
}
