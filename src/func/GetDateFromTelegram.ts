import { cookies } from 'next/headers';
export default async function GetDateFromTelegram(){
  const cook = cookies().get("DateFromTelegarm")
  if (cook?.name !== "DateFromTelegarm") {
    try {
      const response = await fetch("https://api.telegram.org/bot5129401785:AAFRNWARWM88YcxJsgbEiJvvNB3lpEU-3Z4/getUpdates?offset=-1", {
        cache:"no-store",
      })
      const res = await response.json()
      return {data: res?.result[0]?.message?.text as string, setted: true}
    } catch (error) {
      throw Error("هناك خطا في التحميل, قم باعادة تحميل الموقع او تواصل مع المطور.")
    }
  }else{
    return {data: cook.value as string, setted: false}
  }
  
}