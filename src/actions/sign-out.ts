"use server";

import { signOut } from "@/auth/auth";

export async function signOutFunc() {
  try {
    const result = await signOut({ redirectTo: "/" });

    return result;
  } catch (error) {
    console.error("Auth error:", error);
    throw error;
  }
}
