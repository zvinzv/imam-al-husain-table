import SendReq from "@/components/SendReq"
import { Metadata } from "next"
import 'remixicon/fonts/remixicon.css'

export const metadata: Metadata = {
  title: 'الجدول الدروس اليومية',
  description: 'هذا الجدول للصف الخامس الاعدادي للشعبة د, لمدرسة الامام الحسين (ع)',
}
export default function Home() {
  const data = {
    head: ["الدرس", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"],
    body: [["1","احياء", "كيمياء", "فيزياء", " احياء", " كيمياء"], ["2","فيزياء", "احياء", "انكليزي", "عربي", " عربي"], ["3","انكليزي", "فنية", "رياضيات", " انكليزي", " رياضيات"], ["4","رياضيات", "عربي", " عربي", "اسلامية", " اسلامية"], ["5","أرض", "فيزياء", "حاسوب", "رياضيات", " أرض"]],
    date:{
      day: new Date().toLocaleDateString("ar-IQ", {weekday: 'long'}),
      fullDate: new Date().toLocaleDateString("ar-Iq", {weekday: 'long', year: 'numeric', month: '2-digit', day: 'numeric'}),
      toDayHoliday: false,
    }
  }
  data.date.toDayHoliday =  data.date.toDayHoliday ? true : ["الجمعة", "السبت"].includes(data.date.day) ? true : false 
  return (
    <div>
      <div className="mx-auto w-fit text-center mt-6">
      <h1 className="text-3xl font-bold">جدول الدروس اليومية.</h1>
      <h1 className="text-lg font-bold dark:font-light mt-1 ">للصف الخامس الاعدادي, د.</h1>
      <h1 className="text-xl font-bold dark:font-light mt-5">
        {data.date.fullDate} {data.date.toDayHoliday ? 
        <>
          <span className="text-red-400">عطلة</span> 
        </>
        : 
        <>
          <span className="text-emerald-400">دوام رسمي</span>
        </>}
      .</h1>
      </div>
      <div >
        <table className="table-fixed m-2 mx-auto font-bold">
          <thead>
            <tr>
              {data.head.map(H => <th key={data.head.indexOf(H)} className="bg-slate-300 dark:bg-slate-600 p-1 px-2 text-center border border-collapse border-slate-700">{H}</th>)}
            </tr>
          </thead>
          <tbody>
          {data.body.map(B => {
            return(
              <tr key={data.body.indexOf(B)}>
                {B.map(T => 
                  +T > 0
                  ? 
                    <td key={B.indexOf(T)} className="bg-slate-300 dark:bg-slate-600 p-1 px-2 text-center border border-collapse border-slate-700">{T}</td> 
                  :
                  data.date.toDayHoliday?
                    <td key={B.indexOf(T)} className="bg-red-200/60 dark:bg-red-400/60 p-1 px-2 text-center border border-collapse border-slate-700">{T}</td>
                      :
                      data.head.includes(data.date.day) && data.head.indexOf(data.date.day) && B.indexOf(T) > 0 && B.indexOf(T) === data.head.indexOf(data.date.day) ?
                      <td key={B.indexOf(T)} className="bg-emerald-200 dark:bg-emerald-500/70 p-1 px-2 text-center border border-collapse border-slate-700">{T}</td>
                        :
                        <td key={B.indexOf(T)} className="bg-slate-100 dark:bg-slate-500 p-1 px-2 text-center border border-collapse border-slate-700">{T}</td>)}
              </tr>
            )
            })}
          </tbody>
        </table>
      </div>
      
      <div className="w-fit mx-auto flex flex-col items-center">
        <SendReq secret={"1145036551"} />
        {data.date.toDayHoliday && <a href="" className="text-gray-500 w-fit  text-[.65rem]  underline md:hover:underline md:no-underline underline-offset-[5px] font-bold">رابط مصدر العطلة الرسمية.</a>}
      </div>
    </div>
  )
}
