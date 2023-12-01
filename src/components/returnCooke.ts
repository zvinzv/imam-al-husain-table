import { cookies } from "next/headers";

export const ReturnCookeisServer = (nameOfCookeis: string) => {
  const cooke = cookies().get(nameOfCookeis)?.value
  return cooke
}