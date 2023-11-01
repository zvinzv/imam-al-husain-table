export default async function GetDateFromTelegram(offset?:string){
  const response = await fetch(offset ? `http://localhost:3000/api/getDateFromTelegram?offset=${offset}` : `http://localhost:3000/api/getDateFromTelegram`, {
    cache:"no-store",
  })
  return response.json()
}