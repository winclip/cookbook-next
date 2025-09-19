"use server";

import { IFormData } from "@/types/form-data";
import prisma from "@/utils/prisma";

export async function registerUser(data: IFormData) {
  try {
    const { email, password, confirmPassword } = data;

    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return { error: "Error while register" };
  }
}
