import SendReq from "@/components/SendReq"
import GetDateFromTelegram from "@/func/GetDateFromTelegram";
import {drsAndDay} from "@/func/GetTheClassTable";
import SaveToCookies from "@/func/SaveToCookies";
import getArabicDateByNewDateFunction from "@/func/function getArabicDateByNewDateFunction";
import Link from "next/link";
import 'remixicon/fonts/remixicon.css'
const MakeTable = (DRS_NUMBER:number, STYLE_BY_DAY:number) => {
  return (
    <tr key={DRS_NUMBER}>
      <td className="bg-stone-300 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700 w-fit">{DRS_NUMBER}</td>
      <td className={`${STYLE_BY_DAY === 1 ? "bg-emerald-500/70 animate-pulse" : STYLE_BY_DAY > 5 && STYLE_BY_DAY < 8 ? "bg-red-500/70" : "bg-stone-500"} p-1 px-2 text-center border border-collapse border-stone-700`}>{drsAndDay(DRS_NUMBER, 1)[0].subject.ar}</td>
      <td className={`${STYLE_BY_DAY === 2 ? "bg-emerald-500/70 animate-pulse" : STYLE_BY_DAY > 5 && STYLE_BY_DAY < 8 ? "bg-red-500/70" : "bg-stone-500"} p-1 px-2 text-center border border-collapse border-stone-700`}>{drsAndDay(DRS_NUMBER, 2)[0].subject.ar}</td>
      <td className={`${STYLE_BY_DAY === 3 ? "bg-emerald-500/70 animate-pulse" : STYLE_BY_DAY > 5 && STYLE_BY_DAY < 8 ? "bg-red-500/70" : "bg-stone-500"} p-1 px-2 text-center border border-collapse border-stone-700`}>{drsAndDay(DRS_NUMBER, 3)[0].subject.ar}</td>
      <td className={`${STYLE_BY_DAY === 4 ? "bg-emerald-500/70 animate-pulse" : STYLE_BY_DAY > 5 && STYLE_BY_DAY < 8 ? "bg-red-500/70" : "bg-stone-500"} p-1 px-2 text-center border border-collapse border-stone-700`}>{drsAndDay(DRS_NUMBER, 4)[0].subject.ar}</td>
      <td className={`${STYLE_BY_DAY === 5 ? "bg-emerald-500/70 animate-pulse" : STYLE_BY_DAY > 5 && STYLE_BY_DAY < 8 ? "bg-red-500/70" : "bg-stone-500"} p-1 px-2 text-center border border-collapse border-stone-700`}>{drsAndDay(DRS_NUMBER, 5)[0].subject.ar}</td>
    </tr>
  )
}
export default async function Class() {
  const TelegramApiDate = await GetDateFromTelegram() 
  const DateObject:{toDayHoliday: boolean | undefined, toDayIs: number} = {
      toDayHoliday: getArabicDateByNewDateFunction(TelegramApiDate.data, {weekday: 'long', year: 'numeric', month: '2-digit', day: 'numeric'}) === "Invalid Date" ? undefined : ["الجمعة", "السبت"].includes(getArabicDateByNewDateFunction(TelegramApiDate.data, {weekday: 'long'})) ? true : false,
      toDayIs: new Date(TelegramApiDate.data).getDay()+1,
  }
  return (
    <div>
      {TelegramApiDate.setted === true ? <SaveToCookies data={TelegramApiDate.data}/> : null}
      <div className="mx-auto w-fit text-center mt-6">
      <h1 className="text-3xl font-bold">جدول الدروس اليومية.</h1>
      <h1 className="text-lg font-bold dark:font-light mt-1 ">للصف الخامس الاعدادي, د.</h1>
      <h1 className={`text-xl font-bold dark:font-light mt-5 mx-auto dot after:animate-ping ${ DateObject.toDayHoliday === false ? "before:bg-emerald-400 after:bg-emerald-400" : DateObject.toDayHoliday === true ? "before:bg-red-600 after:bg-red-600" : "before:bg-stone-400 after:bg-stone-400"}`}>
        {getArabicDateByNewDateFunction(TelegramApiDate.data, {weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit'})} {
        DateObject.toDayHoliday === true ? 
        
          <span className="text-red-400">عطلة</span> 
        
        :
        DateObject.toDayHoliday === false ?
          <span className="text-emerald-400">دوام رسمي</span>
          :
          <span className="text-stone-600 dark:text-stone-300">خلل في التاريخ</span>
        }
      .</h1>
      </div>
      <div className="max-w-lg mx-auto overflow-x-scroll sm:overflow-hidden">
        <div className="m-2">
          <table className="table-auto w-full font-bold">
            <thead>
              <tr>
                {["ت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"].map((H:string)=> <th key={H} className="bg-stone-300 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700">{H}</th>)}
              </tr>
            </thead>
            <tbody>
              {[1,2,3,4,5].map(num => MakeTable(num, DateObject.toDayIs))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="flex flex-col items-center mt-5 gap-2">
        {DateObject.toDayHoliday === undefined ? <SendReq key={1} secretId={"1145036551"} maxAge={5} err={true} msg={"طلب تصحيح التاريخ."} unieq="Class"/> : <SendReq key={2} secretId={"1145036551"} err={true} maxAge={10} msg={"طلب تعديل جديد للجدول الاسبوعي."} unieq="Class"/>}
        {DateObject.toDayHoliday && <Link href="class/holiday" className="text-gray-500 w-fit  text-[.65rem] underline md:hover:underline md:no-underline underline-offset-[5px] font-bold">رابط مصدر العطلة الرسمية.</Link>}
      </div>
    </div>
  )
}
