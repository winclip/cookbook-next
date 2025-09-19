"use server";

import { IFormData } from "@/types/form-data";
import { saltAndHashPassword } from "@/utils/password";
import prisma from "@/utils/prisma";

export async function registerUser(data: IFormData) {
  try {
    const { email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      return { error: "Passwords do not match" };
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return { error: "User already exists" };
    }

    const hashedPassword = await saltAndHashPassword(password);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return { success: true, user };
  } catch (error) {
    console.error(error);
    return { error: "Error while registering user" };
  }
}
