import Link from "next/link";
import 'remixicon/fonts/remixicon.css'
import SendReq from "@/components/SendReq"
import GetCorrectDate from "@/func/GetCorrectDate";
import GetCurrentTimeArabicWithStyle from "@/func/GetCurrentTimeArabicWithStyle";
import GetDateFromTelegram from "@/func/GetDateFromTelegram";
import GetEnglishSubjectAsArabic from "@/func/GetEnglishSubjectAsArabic";
import GetSubjectDescription, { Sub } from "@/func/GetSubjectDescription";
import { randomInt } from "crypto";
import SaveToCookies from "@/func/SaveToCookies";

function  ThisTableForAnyDayOfWeek(dayAsNumberOfWeek:number) {
  // I clarify to the student this table for any day of week
  let script = ["هذا الجدول ليوم الاحد", "هذا الجدول ليوم الاثنين", "هذا الجدول ليوم الثلاثاء", "هذا الجدول ليوم الاربعاء", "هذا الجدول ليوم الخميس"]
  if(dayAsNumberOfWeek < 6) return script[dayAsNumberOfWeek-1]
  return script[0]
}
function DrosTable(datas:any, day:number): any{
  let x:string = datas.body[day].map((drs: string[]) => 
    <tr key={randomInt(100000)}>
        <td key={randomInt(100000)} className="bg-stone-400 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700">{drs[0]}</td>
        <td key={randomInt(100000)} className="bg-stone-300 dark:bg-stone-500 p-1 px-2 text-center border border-collapse border-stone-700">{drs[1]}</td>
        {
        (drs[2] as string).length > 2 ?
        <td key={randomInt(100000)} 
        className="bg-stone-300 dark:bg-stone-500 p-1 text-center 
                    border border-collapse border-stone-700">
                  {<Link href={`home-work/${GetEnglishSubjectAsArabic(drs[1] as string)}`} className="font-bold dark:hover:bg-stone-700 dark:bg-stone-600 hover:bg-stone-300 bg-stone-20 p-1 px-3 rounded transition-all whitespace-nowrap w-full text-center flex justify-center">التحضير جاهز, هنا!</Link>}</td>
        :
        <td key={randomInt(100000)} className="bg-stone-300 dark:bg-stone-500 p-1 text-center border border-collapse border-stone-700">
          <SendReq key={42} title="طلب الحصول على التحضير." secretId={"1145036551"} err={true} maxAge={10} msg={`طلب الحصول على التحضير لمادة ال${drs[1]}.`} unieq={GetEnglishSubjectAsArabic(drs[1])} 
                  style="font-bold dark:hover:bg-stone-800 dark:bg-stone-700
                        hover:bg-stone-300 bg-stone-20 p-1 px-3 rounded 
                        transition-all whitespace-nowrap w-full text-center 
                        flex justify-center gap-3"/>
          </td>}
    </tr>
  )
  return x
}
export default async function HomeWork() {
  let TelegramApiDate: {data: string, setted: boolean} = await GetDateFromTelegram() as {data: string, setted: boolean}
  let data = {
    head: ["الدرس", "المادة", "التحضير"],
    body: {
      1: [["1", "احياء", (GetSubjectDescription("biology") as Sub).homeWork.title],      ["2", "أرض", (GetSubjectDescription("earth") as Sub).homeWork.title],    ["3", "انكليزي", (GetSubjectDescription("english") as Sub).homeWork.title],   ["4", "رياضيات", (GetSubjectDescription("math") as Sub).homeWork.title],   ["5", "فيزياء",  ( GetSubjectDescription("physics") as Sub).homeWork.title]],
      2: [["1", "كيمياء", (GetSubjectDescription("chemistry") as Sub).homeWork.title],   ["2", "احياء", (GetSubjectDescription("biology") as Sub).homeWork.title],     ["3", "عربي", (GetSubjectDescription("arabic") as Sub).homeWork.title],        ["4", "حاسوب", (GetSubjectDescription("pc") as Sub).homeWork.title],    ["5", "فيزياء", (GetSubjectDescription("physics") as Sub).homeWork.title ]],
      3: [["1", "فيزياء", (GetSubjectDescription("physics") as Sub).homeWork.title],     ["2", "انكليزي", (GetSubjectDescription("english") as Sub).homeWork.title],   ["3", "رياضيات", (GetSubjectDescription("math") as Sub).homeWork.title],      ["4", "عربي", (GetSubjectDescription("arabic") as Sub).homeWork.title],    ["5", "فنية", (GetSubjectDescription("paint") as Sub).homeWork.title]],
      4: [["1", "كيمياء", (GetSubjectDescription("chemistry") as Sub).homeWork.title],      ["2", "عربي", (GetSubjectDescription("arabic") as Sub).homeWork.title],       ["3", "انكليزي", (GetSubjectDescription("english") as Sub).homeWork.title],   ["4", "رياضيات", (GetSubjectDescription("math") as Sub).homeWork.title ], ["5", "اسلامية", (GetSubjectDescription("islamic") as Sub).homeWork.title]],
      5: [["1", "أرض", (GetSubjectDescription("earth") as Sub).homeWork.title],           ["2", "عربي", (GetSubjectDescription("arabic") as Sub).homeWork.title],       ["3", "رياضيات", (GetSubjectDescription("math") as Sub).homeWork.title],      ["4", "حاسوب", (GetSubjectDescription("pc") as Sub).homeWork.title ], ["5", "اسلامية", ( GetSubjectDescription("islamic") as Sub).homeWork.title]],
    },
    toDayIs: new Date(TelegramApiDate.data).getDay()+1
  }
  return (
    <div>
      {TelegramApiDate.setted === true ? <SaveToCookies data={TelegramApiDate.data}/> : null}
      <div className="mx-auto w-fit text-center mt-6">
        <h1 className="text-3xl font-bold">جدول التحاضير اليومية.</h1>
        <h1 className="text-lg font-bold dark:font-light mt-1 ">للصف الخامس الاعدادي, د.</h1>
        <h1 className="text-xl font-bold dark:font-light mt-5">تاريخ اليوم: {GetCurrentTimeArabicWithStyle(TelegramApiDate.data, {weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit'})}.</h1>
      </div>
      <table className="table-fixed m-2 mx-auto font-bold">
        <thead>
          <tr>
            <th className="bg-stone-400 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700">{data.head[0]}</th> 
            <th className="bg-stone-400 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700">{data.head[1]}</th> 
            <th className="bg-stone-400 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700">{data.head[2]}</th>
          </tr>
        </thead>
        <tbody>
              {
                data.toDayIs > 5 && data.toDayIs < 8 && DrosTable(data, 1)
              }
              {
                data.toDayIs === 1 && DrosTable(data, 1) 
              }
              {
                data.toDayIs === 2 && DrosTable(data, 2) 
              }
              {
                data.toDayIs === 3 && DrosTable(data, 3) 
              }
              {
                data.toDayIs === 4 && DrosTable(data, 4) 
              }
              {
                data.toDayIs === 5 && DrosTable(data, 5) 
              }
              <tr>
                <td colSpan={3} className="bg-stone-400 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700"><span className="tracking-wider">{ThisTableForAnyDayOfWeek(data.toDayIs)}</span>, <span>{GetCorrectDate(TelegramApiDate.data, data.toDayIs == 6 ? 2 : data.toDayIs == 7 ? 1 : 0).toString().split("-").reverse().join("-")}</span>.</td>
              </tr>
        </tbody>
      </table>
      
      <div className="flex flex-col items-center">
          <SendReq key={2} secretId={"1145036551"} err={true} maxAge={10} msg={"طلب تعديل جديد للجدول التحضير اليومي."} unieq="H.W"/>
      </div>
    </div>
  )
}
