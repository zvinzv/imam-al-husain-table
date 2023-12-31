import 'remixicon/fonts/remixicon.css'
import SendReq from "@/components/SendReq"
import GetCorrectDate from "@/func/GetCorrectDate";
import GetCurrentTimeArabicWithStyle from "@/func/GetCurrentTimeArabicWithStyle";
import GetDateFromTelegram from "@/func/GetDateFromTelegram";
import { randomInt } from "crypto";
import { drsAndDay } from "@/data/GetTheClassTable";
import Link from 'next/link';
function  ThisTableForAnyDayOfWeek(dayAsNumberOfWeek:number) {
  // I clarify to the student this table for any day of week
  const script = ["هذا الجدول ليوم الاحد", "هذا الجدول ليوم الاثنين", "هذا الجدول ليوم الثلاثاء", "هذا الجدول ليوم الاربعاء", "هذا الجدول ليوم الخميس"]
  if(dayAsNumberOfWeek < 6) return script[dayAsNumberOfWeek-1]
  return script[0]
}
const MakeTable = (TO_DAY_AS_NUMBER:number, subject:boolean) => {
  const x: JSX.Element[] = [...Array.from(Array(6).keys())].splice(1,).map(num => {
    if ((TO_DAY_AS_NUMBER > 5 && TO_DAY_AS_NUMBER < 8) || TO_DAY_AS_NUMBER === 1) TO_DAY_AS_NUMBER = 1
    return (
      <tr key={TO_DAY_AS_NUMBER+randomInt(100000)} >
      {drsAndDay(num, TO_DAY_AS_NUMBER)[0].dailyPreparation.name.length < 100
        ?
        <>
        <td className="bg-stone-400 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700 w-px">{num}</td>
        <td className="bg-stone-300 dark:bg-stone-500 p-1 px-2 text-center border border-collapse border-stone-700 w-px">{drsAndDay(num, TO_DAY_AS_NUMBER)[0].subject.ar}</td>
        <td className="bg-stone-300 dark:bg-stone-500 p-1 px-2 text-right border border-collapse border-stone-700 whitespace-normal text-sm md:text-base">{drsAndDay(num, TO_DAY_AS_NUMBER)[0].dailyPreparation.name.endsWith(".") ? drsAndDay(num, TO_DAY_AS_NUMBER)[0].dailyPreparation.name : drsAndDay(num, TO_DAY_AS_NUMBER)[0].dailyPreparation.name + "."}</td>
        <td className="bg-stone-300 dark:bg-stone-500 p-2 px-2 text-center border border-collapse border-stone-700 whitespace-normal">{<Link href={`/home-work/${drsAndDay(num, TO_DAY_AS_NUMBER)[0].subject.en}`} className='bg-stone-400 hover:bg-stone-500 hover:text-stone-200 dark:bg-stone-600 dark:hover:bg-stone-700 px-2 py-1 rounded text-sm transition-all'>التفاصيل</Link>}</td>
        </>
        : drsAndDay(num, TO_DAY_AS_NUMBER)[0].dailyPreparation.name.length > 100 && subject
        ?
        <>
        <td className="bg-stone-400 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700 w-px">{num}</td>
        <td className="bg-stone-300 dark:bg-stone-500 p-1 px-2 text-center border border-collapse border-stone-700 w-px">{drsAndDay(num, TO_DAY_AS_NUMBER)[0].subject.ar}</td>
        <td className="bg-stone-300 dark:bg-stone-500 p-1 px-2 text-right border border-collapse border-stone-700 whitespace-normal text-sm md:text-base">{drsAndDay(num, TO_DAY_AS_NUMBER)[0].dailyPreparation.name.endsWith(".") ? drsAndDay(num, TO_DAY_AS_NUMBER)[0].dailyPreparation.name : drsAndDay(num, TO_DAY_AS_NUMBER)[0].dailyPreparation.name + "."}</td>
        <td className="bg-stone-300 dark:bg-stone-500 p-2 px-2 text-center border border-collapse border-stone-700 whitespace-normal">{<Link href={`/home-work/${drsAndDay(num, TO_DAY_AS_NUMBER)[0].subject.en}`} className='bg-stone-400 hover:bg-stone-500 hover:text-stone-200 dark:bg-stone-600 dark:hover:bg-stone-700 px-2 py-1 rounded text-sm transition-all'>التفاصيل</Link>}</td>
        </>
        :  drsAndDay(num, TO_DAY_AS_NUMBER)[0].dailyPreparation.name.length > 100 && !subject ?
        <>
        
          <td className="bg-stone-400 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700 w-px text-yellow-700 dark:text-yellow-400">{num}</td>
          <td className="bg-stone-300 dark:bg-stone-500 p-1 px-2 text-center border border-collapse border-stone-700 w-px text-yellow-700 dark:text-yellow-400">{drsAndDay(num, TO_DAY_AS_NUMBER)[0].subject.ar}</td>
          <td className="bg-stone-300 dark:bg-stone-500 p-1 px-2 text-right border border-collapse border-stone-700 whitespace-normal text-yellow-700 dark:text-yellow-400 text-sm md:text-base">المحتوى كبير <Link href={`/home-work?more=true`} className='underline underline-offset-[2px] hover:text-blue-500'>انقر هنا</Link> للعرض كاملاً.</td>
          <td className="bg-stone-300 dark:bg-stone-500 p-2 px-2 text-center border border-collapse border-stone-700 whitespace-normal text-yellow-700 dark:text-yellow-400">{<Link href={`/home-work/${drsAndDay(num, TO_DAY_AS_NUMBER)[0].subject.en}`} className='bg-yellow-700 hover:bg-yellow-800 text-yellow-400 px-2 py-1 rounded text-sm transition-all'>التفاصيل</Link>}</td>
        </>
        :
        <>
        <td className="bg-stone-400 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700 w-px">{num}</td>
        <td className="bg-stone-300 dark:bg-stone-500 p-1 px-2 text-center border border-collapse border-stone-700 w-px">{drsAndDay(num, TO_DAY_AS_NUMBER)[0].subject.ar}</td>
        <td className="bg-stone-300 dark:bg-stone-500 p-1 px-2 text-right border border-collapse border-stone-700 whitespace-normal text-sm md:text-base">{drsAndDay(num, TO_DAY_AS_NUMBER)[0].dailyPreparation.name.endsWith(".") ? drsAndDay(num, TO_DAY_AS_NUMBER)[0].dailyPreparation.name : drsAndDay(num, TO_DAY_AS_NUMBER)[0].dailyPreparation.name + "."}</td>
        <td className="bg-stone-300 dark:bg-stone-500 p-2 px-2 text-center border border-collapse border-stone-700 whitespace-normal">{<Link href={`/home-work/${drsAndDay(num, TO_DAY_AS_NUMBER)[0].subject.en}`} className='bg-stone-400 hover:bg-stone-500 hover:text-stone-200 dark:bg-stone-600 dark:hover:bg-stone-700 px-2 py-1 rounded text-sm transition-all'>التفاصيل</Link>}</td>
        </>
    }
      </tr>
    )
  })
  return x
}
export default async function HomeWork({subject}: {subject:boolean}) {
  const TelegramApiDate: {data: string, setted: boolean, message?:string} = await GetDateFromTelegram() as {data: string, setted: boolean, message?:string}
  const toDayIs = new Date(TelegramApiDate.data).getDay()+1
  return (
    <div>
      <div className="mx-auto w-fit text-center">
        <h1 className="text-3xl">جدول التحاضير اليومية.</h1>
        <h1 className="text-lg font-bold dark:font-light mt-1 ">للصف الخامس الاعدادي, د.</h1>
        <h1 className="text-xl font-bold dark:font-light mt-5">تاريخ اليوم: {GetCurrentTimeArabicWithStyle(TelegramApiDate.data, {weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit'})}.</h1>
      </div>
      <div className="max-w-lg mx-auto overflow-x-scroll sm:overflow-hidden"> 
        <div className="m-2">
          <table className="table-auto w-full font-bold">
            <thead>
              <tr>
                {["ت", "المادة", "التحضير", "التفاصيل"].map((head:string) => <th key={head} className="bg-stone-400 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700">{head}</th> )}
              </tr>
            </thead>
            <tbody>
                  {MakeTable(toDayIs, subject)}
                  <tr>
                    <td colSpan={4} className="bg-stone-400 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700"><span className="tracking-wider">{ThisTableForAnyDayOfWeek(toDayIs)}</span>, <span>{GetCorrectDate(TelegramApiDate.data, toDayIs == 6 ? 2 : toDayIs == 7 ? 1 : 0).toString().split("-").reverse().join("-")}</span>.</td>
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
