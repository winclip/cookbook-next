"use server";

import { signOut } from "@/auth/auth";

export async function signOutFunc() {
  try {
    const result = await signOut({ redirect: false });

    return result;
  } catch (error) {
    console.error("Auth error:", error);
    throw error;
  }
}
