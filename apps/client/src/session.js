"use server"

import { cookies } from "next/headers";

export async function getSession() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  return accessToken
}