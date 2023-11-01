export default async function GetDateFromTelegram(offset?:string){
  const response = await fetch(offset ? `api/getDateFromTelegram?offset=${offset}` : `api/getDateFromTelegram`, {
    cache:"no-store",
  })
  return response.json()
}