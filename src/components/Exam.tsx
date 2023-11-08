import SendReq from "@/components/SendReq"
import GetCorrectDate from "@/func/GetCorrectDate"
import GetDateFromTelegram from "@/func/GetDateFromTelegram"
import SaveToCookies from "@/func/SaveToCookies"
import { Metadata } from "next"
import { cookies } from "next/headers"
import 'remixicon/fonts/remixicon.css'

type Exam ={ 
  id:        number,
  day:       string,
  date:      string,
  subject:   string,
  done?:      boolean
}

export default async function Exam() {
  const TelegramApiDate = await GetDateFromTelegram()
  // Get valide date 'YYYY-MM-DD'
  // -1 mean remove 1 day
  const CorrectDate= GetCorrectDate(TelegramApiDate.data,-1)
  // 0 mean remove 0 day
  const CurrentDate = GetCorrectDate(TelegramApiDate.data,0)
  // Data
  const data:{head:string[], body:Exam[]} = {
    head: ["اليوم","التاريخ","المادة"],
    body:  [
      {
        id:1,
        date:"2023-10-29",
        day:"الأحد",
        subject:"إسلامية",
        done: true
      },
      {
        id:2,
        date:"2023-10-30",
        day:"الاثنين",
        subject:"الادب والنصوص",
        done: true
      },
      {
        id:3,
        date:"2023-10-31",
        day:"الثلاثاء",
        subject:"حاسوب",
        done: true
      },
      {
        id:4,
        date:"2023-11-01",
        day:"الاربعاء",
        subject:"راحة",
      },
      {
        id:5,
        date:"2023-11-02",
        day:"الخميس",
        subject:"كيمياء",
      },
      {
        id:6,
        date:"2023-11-03",
        day:"الجمعة",
        subject:"راحة",
      },
      {
        id:7,
        date:"2023-11-04",
        day:"السبت",
        subject:"راحة",
      },
      {
        id:8,
        date:"2023-11-05",
        day:"الأحد",
        subject:"راحة",
      },
      {
        id:9,
        date:"2023-11-06",
        day:"الاثنين",
        subject:"قواعد اللغة العربية",
      },
      {
        id:10,
        date:"2023-11-07",
        day:"الثلاثاء",
        subject:"راحة",
      },
      {
        id:11,
        date:"2023-11-08",
        day:"الاربعاء",
        subject:"رياضيات",
      },{
        id:12,
        date:"2023-11-09",
        day:"الخميس",
        subject:"راحة",
      },{
        id:13,
        date:"2023-11-10",
        day:"الجمعة",
        subject:"راحة",
      },{
        id:14,
        date:"2023-11-11",
        day:"السبت",
        subject:"راحة",
      },{
        id:15,
        date:"2023-11-12",
        day:"الأحد",
        subject:"فيزياء",
      },{
        id:16,
        date:"2023-11-13",
        day:"الاثنين",
        subject:"راحة",
      },{
        id:17,
        date:"2023-11-14",
        day:"الثلاثاء",
        subject:"راحة",
      },{
        id:18,
        date:"2023-11-15",
        day:"الاربعاء",
        subject:"راحة",
      },{
        id:19,
        date:"2023-11-16",
        day:"الخميس",
        subject:"انكليزي",
      },{
        id:20,
        date:"2023-11-17",
        day:"الجمعة",
        subject:"راحة",
      },{
        id:21,
        date:"2023-11-18",
        day:"السبت",
        subject:"راحة",
      },{
        id:22,
        date:"2023-11-19",
        day:"الأحد",
        subject:"احياء",
      },
    ],
  }
  // Set {done: true} for passed date.
  data.body.forEach(D => {
    if (new Date(D.date) < new Date(CorrectDate)) {
      D.done = true
    }
  })
  let color = []
  for (let i = 0; i > 10; i++) {
    color.push("bg-red-300")
    color.push("bg-red-300")
    color.push("dark:bg-red-600/70")
    color.push("dark:bg-red-600/70")
  }
  return (
    <div>
      {TelegramApiDate.setted === true ? <SaveToCookies data={TelegramApiDate.data}/> : null}
      <div className="mx-auto w-fit text-center mt-6">
      <h1 className="text-3xl font-bold">جدول الامتحانات الشهرية.</h1>
      <h1 className="text-lg font-bold dark:font-light mt-1 ">للصف الخامس الاعدادي.</h1>
      </div>
      <div >
        <table className="table-fixed m-2 mx-auto font-bold">
          <thead>
            <tr>
              {data.head.map((H:string)=> {
                return(
                    <th key={data.head.indexOf(H)} className="bg-stone-200 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700">{H}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
          
            {data.body.map(H => {
              if (H.date === CurrentDate){
                return(
                  <tr key={H.id}>
                    <td className={` bg-emerald-200 text-black dark:bg-emerald-500/70 dark:text-white animate-pulse ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : "" } p-1 px-2 text-center border border-stone-700`}>{H.day}</td>
                    <td className={` bg-emerald-200 text-black dark:bg-emerald-500/70 dark:text-white animate-pulse ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-stone-700`}>{H.date}</td>
                    <td className={` bg-emerald-200 text-black dark:bg-emerald-500/70 dark:text-white animate-pulse ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-stone-700`}>{H.subject}</td>
                  </tr>
                )
              }else if (H.date !== CurrentDate){

                return(
                  <tr key={H.id}>
                    <td className={`  ${H.subject === "راحة" ? "bg-stone-200/70 text-black/30" : "bg-stone-100"} ${H.subject === "راحة" ? "dark:bg-stone-400/80 dark:text-white/30" : "dark:bg-stone-400 text-black"} ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : "" } p-1 px-2 text-center border border-stone-700 `}>{H.day}</td>
                    <td className={`  ${H.subject === "راحة" ? "bg-stone-200/70 text-black/30" : "bg-stone-100"} ${H.subject === "راحة" ? "dark:bg-stone-400/80 dark:text-white/30" : "dark:bg-stone-400 text-black"} ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-stone-700 `}>{H.date}</td>
                    <td className={` ${H.subject === "راحة" ? "bg-stone-200/70 text-black/30" : "bg-stone-100"} ${H.subject === "راحة" ? "dark:bg-stone-400/80 dark:text-white/30" : "dark:bg-stone-400 text-black"} ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-stone-700 `}>{H.subject}</td>
                  </tr>
                )
              }else{
                return
              }
            })}
          </tbody>
        </table>
      </div>
      
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-md font-bold">اخر تحديث: 2023-11-08.</h1>
        <div className="mb-14">
        { <SendReq key={3} secretId={"1145036551"} err={true} maxAge={10} msg={"تصحيح جدول الامتحانات."} unieq="Exam"/>}
        </div>
      </div>
    </div>
  )
}

