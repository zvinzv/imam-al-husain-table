export default async function GetDateFromTelegram(offset?:string){
  const response = await fetch("https://api.telegram.org/bot5129401785:AAFRNWARWM88YcxJsgbEiJvvNB3lpEU-3Z4/getUpdates?offset=-1", {
    cache:"no-store",
  })
  return response.json()
}