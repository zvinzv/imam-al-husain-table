import GetDateFromTelegram from "@/func/GetDateFromTelegram";
import SaveToCookies from "@/func/SaveToCookies";
import Image from "next/image";
import { Metadata } from "next"
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: 'حالة التعطيل.',
  description: 'نشر تفاصيل العطلة هنا.',
}
export default async function page() {
  const TelegramApiDate: {data:string, setted: boolean, message?: string} = await GetDateFromTelegram() as {data:string, setted: boolean, message?: string}
  return (
    <div>
      {TelegramApiDate.setted === true ? <SaveToCookies data={TelegramApiDate.data}/> : TelegramApiDate.setted === false && TelegramApiDate.data === null ? redirect(`/social?alert=${TelegramApiDate.message}`) : null}
      <div className="mt-5">
        <div className="aspect-square min-w-lg max-w-[15rem] mx-auto relative rounded-2xl overflow-hidden">
          <Image src="/4003d23d3d686ff204f90ee241394cbe.jpg" alt="22" fill/>
        </div>
        <p  className="text-center text-3xl mt-5">اليوم عطلة خالي, كوم اقره.</p>
        <br />
        <p className="text-2xl text-center mx-auto p-4">هذه الصفحة تحت التطوير حالياً.</p>
      </div>
    </div>
  )
}
