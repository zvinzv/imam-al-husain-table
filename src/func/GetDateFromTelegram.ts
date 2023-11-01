export default async function GetDateFromTelegram(offset?:string){
  const response = await fetch(offset ? `https://imam-al-husain-table.vercel.app/api/getDateFromTelegram?offset=${offset}` : `https://imam-al-husain-table.vercel.app/api/getDateFromTelegram`, {
    cache:"no-store",
  })
  return response.json()
}