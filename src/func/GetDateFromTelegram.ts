import { headers } from "next/headers"

export default async function GetDateFromTelegram(offset?:string){
  const response = await fetch(offset ? `${headers().get("url")}/api/getDateFromTelegram?offset=${offset}` : `${headers().get("url")}/api/getDateFromTelegram`, {
    cache:"no-store",
  })
  return response.json()
}