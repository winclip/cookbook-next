"use client";

import { useForm } from "react-hook-form";
import { Button, Form, Input } from "@heroui/react";

interface IForm {
  email: string;
  password: string;
}

interface IProps {
  onClose: () => void;
}

export default function LoginForm({ onClose }: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = async (data: IForm) => {
    console.log(data);

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

      <div className="flex w-full gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Otkaži
        </Button>
        <Button color="primary" type="submit">
          Prijavi se
        </Button>
      </div>
    </Form>
  );
}
