"use client";

import { useForm } from "react-hook-form";
import { Button, Input, Form } from "@heroui/react";
import prisma from "@/utils/prisma";
import { registerUser } from "@/actions/register";

interface IForm {
  email: string;
  password: string;
  confirmPassword: string;
}

interface IProps {
  onClose: () => void;
}

export default function RegistrationForm({ onClose }: IProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>();

  const password = watch("password");

  const onSubmit = async (data: IForm) => {
    const register = await registerUser(data);

    console.log(register);

    onClose();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <Input
        {...register("email", {
          required: "Email je obavezan",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Neispravan email",
          },
        })}
        placeholder="Unesite email"
        type="email"
        isRequired
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none",
        }}
        aria-label="Email"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      <Input
        {...register("password", {
          required: "Lozinka je obavezna",
          minLength: {
            value: 6,
            message: "Lozinka mora imati najmanje 6 karaktera",
          },
        })}
        placeholder="Unesite lozinku"
        type="password"
        isRequired
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none",
        }}
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password.message}</p>
      )}

      <Input
        {...register("confirmPassword", {
          required: "Potvrda lozinke je obavezna",
          validate: (value: string) =>
            value === password || "Lozinke se ne poklapaju",
        })}
        placeholder="Potvrdite lozinku"
        type="password"
        isRequired
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none",
        }}
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
      )}

      <div className="flex w-full gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Otkaži
        </Button>
        <Button color="primary" type="submit">
          Registruj se
        </Button>
      </div>
    </Form>
  );
}
