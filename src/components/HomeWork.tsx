import 'remixicon/fonts/remixicon.css'
import SendReq from "@/components/SendReq"
import GetCorrectDate from "@/func/GetCorrectDate";
import GetCurrentTimeArabicWithStyle from "@/func/GetCurrentTimeArabicWithStyle";
import GetDateFromTelegram from "@/func/GetDateFromTelegram";
import { randomInt } from "crypto";
import SaveToCookies from "@/func/SaveToCookies";
import { drsAndDay } from "@/func/GetTheClassTable";
import Link from 'next/link';
function  ThisTableForAnyDayOfWeek(dayAsNumberOfWeek:number) {
  // I clarify to the student this table for any day of week
  const script = ["هذا الجدول ليوم الاحد", "هذا الجدول ليوم الاثنين", "هذا الجدول ليوم الثلاثاء", "هذا الجدول ليوم الاربعاء", "هذا الجدول ليوم الخميس"]
  if(dayAsNumberOfWeek < 6) return script[dayAsNumberOfWeek-1]
  return script[0]
}
const MakeTable = (TO_DAY_AS_NUMBER:number) => {
  const x: JSX.Element[] = [...Array.from(Array(6).keys())].splice(1,).map(num => {
    if ((TO_DAY_AS_NUMBER > 5 && TO_DAY_AS_NUMBER < 8) || TO_DAY_AS_NUMBER === 1) TO_DAY_AS_NUMBER = 1
    return (
      <tr key={TO_DAY_AS_NUMBER+randomInt(100000)}>
          <td className="bg-zinc-400 dark:bg-zinc-600 p-1 px-2 text-center border border-collapse border-zinc-700 w-px">{num}</td>
          <td className="bg-zinc-300 dark:bg-zinc-500 p-1 px-2 text-center border border-collapse border-zinc-700 w-px">{drsAndDay(num, TO_DAY_AS_NUMBER)[0].subject.ar}</td>
          <td className="bg-zinc-300 dark:bg-zinc-500 p-1 px-2 text-right border border-collapse border-zinc-700 whitespace-normal">{drsAndDay(num, TO_DAY_AS_NUMBER)[0].dailyPreparation.name}</td>
          <td className="bg-zinc-300 dark:bg-zinc-500 p-2 px-2 text-center border border-collapse border-zinc-700 whitespace-normal">{<Link href={`/home-work/${drsAndDay(num, TO_DAY_AS_NUMBER)[0].subject.en}`} className='bg-zinc-600 hover:bg-zinc-700 px-2 py-1 rounded text-sm'>التفاصيل</Link>}</td>
          {/* {
          (drs[2] as string).length > 90 ?
          <td key={randomInt(100000)} 
          className="bg-zinc-300 dark:bg-zinc-500 p-1 text-center 
                      border border-collapse border-zinc-700">
                    {<Link href={`home-work/${GetEnglishSubjectAsArabic(drs[1] as string)}`} className="font-bold dark:hover:bg-zinc-700 dark:bg-zinc-600 hover:bg-zinc-300 bg-zinc-20 p-1 px-3 rounded transition-all whitespace-nowrap w-full text-center flex justify-center">التحضير جاهز, هنا!</Link>}</td>
          :
          <td key={randomInt(100000)} className="bg-zinc-300 dark:bg-zinc-500 p-1 text-center border border-collapse border-zinc-700">
            <SendReq key={42} title="طلب الحصول على التحضير." secretId={"1145036551"} err={true} maxAge={10} msg={`طلب الحصول على التحضير لمادة ال${drs[1]}.`} unieq={GetEnglishSubjectAsArabic(drs[1])} 
                    style="font-bold dark:hover:bg-zinc-800 dark:bg-zinc-700
                          hover:bg-zinc-300 bg-zinc-20 p-1 px-3 rounded 
                          transition-all whitespace-nowrap w-full text-center 
                          flex justify-center gap-3"/>
            </td>} */}
      </tr>
    )
  })
  return x
}
export default async function HomeWork() {
  const TelegramApiDate: {data: string, setted: boolean} = await GetDateFromTelegram() as {data: string, setted: boolean}
  const toDayIs = new Date(TelegramApiDate.data).getDay()+1
  return (
    <div>
      {TelegramApiDate.setted === true ? <SaveToCookies data={TelegramApiDate.data}/> : null}
      <div className="mx-auto w-fit text-center mt-6">
        <h1 className="text-3xl font-bold">جدول التحاضير اليومية.</h1>
        <h1 className="text-lg font-bold dark:font-light mt-1 ">للصف الخامس الاعدادي, د.</h1>
        <h1 className="text-xl font-bold dark:font-light mt-5">تاريخ اليوم: {GetCurrentTimeArabicWithStyle(TelegramApiDate.data, {weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit'})}.</h1>
      </div>
      <div className="max-w-lg mx-auto overflow-x-scroll sm:overflow-hidden"> 
        <div className="m-2">
          <table className="table-auto w-full font-bold">
            <thead>
              <tr>
                {["ت", "المادة", "التحضير", "التفاصيل"].map((head:string) => <th key={head} className="bg-zinc-400 dark:bg-zinc-600 p-1 px-2 text-center border border-collapse border-zinc-700">{head}</th> )}
              </tr>
            </thead>
            <tbody>
                  {MakeTable(toDayIs)}
                  <tr>
                    <td colSpan={4} className="bg-zinc-400 dark:bg-zinc-600 p-1 px-2 text-center border border-collapse border-zinc-700"><span className="tracking-wider">{ThisTableForAnyDayOfWeek(toDayIs)}</span>, <span>{GetCorrectDate(TelegramApiDate.data, toDayIs == 6 ? 2 : toDayIs == 7 ? 1 : 0).toString().split("-").reverse().join("-")}</span>.</td>
                  </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      
      <div className="flex flex-col items-center mt-5 gap-2">
          <SendReq key={2} secretId={"1145036551"} err={true} maxAge={10} msg={"طلب تعديل جديد للجدول التحضير اليومي."} unieq="H.W"/>
      </div>
    </div>
  )
}
