import SendReq from "@/components/SendReq"
import GetCorrectDate from "@/func/GetCorrectDate"
import GetDateFromTelegram from "@/func/GetDateFromTelegram"
import SaveToCookies from "@/func/SaveToCookies"
import { redirect } from "next/navigation"
import 'remixicon/fonts/remixicon.css'
import RedirectList from "../RedirectList"

type Exam ={ 
  id:        number,
  day:       string,
  date:      string,
  subject:   string,
  done?:      boolean
  monthId:      number
}

export default async function Exam({monthId}:{monthId:number}) {
  const TelegramApiDate: {data:string, setted: boolean, message?: string} = await GetDateFromTelegram() as {data:string, setted: boolean, message?: string}
  // Get valide date 'YYYY-MM-DD'
  // -1 mean remove 1 day
  const CorrectDate= GetCorrectDate(TelegramApiDate.data,-1)
  // 0 mean remove 0 day
  const CurrentDate = GetCorrectDate(TelegramApiDate.data,0)
  // Data
  const data:{head:string[], body:Exam[]} = {
    head: ["اليوم","التاريخ","المادة", 'الشهر'],
    body: [
      {
        id:1,
        monthId: 1,
        date:"2023-10-29",
        day:"الأحد",
        subject:"إسلامية",
        done: true
      },
      {
        id:2,
        monthId: 1,
        date:"2023-10-30",
        day:"الاثنين",
        subject:"الادب والنصوص",
        done: true
      },
      {
        id:3,
        monthId: 1,
        date:"2023-10-31",
        day:"الثلاثاء",
        subject:"حاسوب",
        done: true
      },
      {
        id:4,
        monthId: 1,
        date:"2023-11-01",
        day:"الاربعاء",
        subject:"راحة",
      },
      {
        id:5,
        monthId: 1,
        date:"2023-11-02",
        day:"الخميس",
        subject:"كيمياء",
      },
      {
        id:6,
        monthId: 1,
        date:"2023-11-03",
        day:"الجمعة",
        subject:"راحة",
      },
      {
        id:7,
        monthId: 1,
        date:"2023-11-04",
        day:"السبت",
        subject:"راحة",
      },
      {
        id:8,
        monthId: 1,
        date:"2023-11-05",
        day:"الأحد",
        subject:"راحة",
      },
      {
        id:9,
        monthId: 1,
        date:"2023-11-06",
        day:"الاثنين",
        subject:"قواعد اللغة العربية",
      },
      {
        id:10,
        monthId: 1,
        date:"2023-11-07",
        day:"الثلاثاء",
        subject:"راحة",
      },
      {
        id:11,
        monthId: 1,
        date:"2023-11-08",
        day:"الاربعاء",
        subject:"رياضيات",
      },{
        id:12,
        monthId: 1,
        date:"2023-11-09",
        day:"الخميس",
        subject:"راحة",
      },{
        id:13,
        monthId: 1,
        date:"2023-11-10",
        day:"الجمعة",
        subject:"راحة",
      },{
        id:14,
        monthId: 1,
        date:"2023-11-11",
        day:"السبت",
        subject:"راحة",
      },{
        id:15,
        monthId: 1,
        date:"2023-11-12",
        day:"الأحد",
        subject:"فيزياء",
      },{
        id:16,
        monthId: 1,
        date:"2023-11-13",
        day:"الاثنين",
        subject:"راحة",
      },{
        id:17,
        monthId: 1,
        date:"2023-11-14",
        day:"الثلاثاء",
        subject:"راحة",
      },{
        id:18,
        monthId: 1,
        date:"2023-11-15",
        day:"الاربعاء",
        subject:"راحة",
      },{
        id:19,
        monthId: 1,
        date:"2023-11-16",
        day:"الخميس",
        subject:"انكليزي",
      },{
        id:20,
        monthId: 1,
        date:"2023-11-17",
        day:"الجمعة",
        subject:"راحة",
      },{
        id:21,
        monthId: 1,
        date:"2023-11-18",
        day:"السبت",
        subject:"راحة",
      },{
        id:22,
        monthId: 1,
        date:"2023-11-19",
        day:"الأحد",
        subject:"احياء",
      },
      {
        id: 23,
        monthId: 2,
        date: "2023-11-30",
        day: "الخميس",
        subject: "حاسوب"
      }
    ],
  }
  // Set {done: true} for passed date.
  data.body.forEach(D => {
    if (new Date(D.date) < new Date(CorrectDate)) {
      D.done = true
    }
  })
  return (
    <div>
      {TelegramApiDate.setted === true ? <SaveToCookies data={TelegramApiDate.data}/> : TelegramApiDate.setted === false && TelegramApiDate.data === null ? redirect(`/social?alert=${TelegramApiDate.message}`) : null}

      <div className="mx-auto w-fit text-center">
      <h1 className="text-3xl"><span>جدول الامتحانات الشهرية.</span></h1>
      <h1 className="text-lg font-bold dark:font-light mt-1">للصف الخامس الاعدادي{+monthId === 1 ? ", الشهر الاول" : +monthId === 2 ? ", الشهر الثاني" : ""}.</h1>
      </div>
      <div >
        {/* <RedirectList /> */}
        <table className="table-fixed m-2 mx-auto font-bold">
          <thead>
            <tr>
              {data.head.map((H:string, i)=> {
                return(
                  H === "الشهر" ? <RedirectList key={i} keyN={i} content={H}/> : <th key={i} className="bg-zinc-200 dark:bg-zinc-600 p-1 px-2 text-center border border-collapse border-zinc-700"><span className="flex items-center justify-center gap-2">{H}</span></th>
                )
              })}
            </tr>
          </thead>
          <tbody>
          
            {data.body.filter(card => monthId ? card.monthId === +monthId : card).length == 0 ?
              <tr>
                <td colSpan={4} className={` dark:bg-zinc-400 dark:text-black text-xl p-1 px-2 text-center border border-zinc-700 `}>لا يوجد امتحان حتى الان.</td>
              </tr>
                  : data.body.filter(card => monthId ? card.monthId === +monthId : card).map((H, i) => {
              if (H.date === CurrentDate){
                return(
                  <tr key={i}>
                    <td className={` bg-emerald-200 text-black dark:bg-emerald-500/70 dark:text-white animate-pulse ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : "" } p-1 px-2 text-center border border-zinc-700`}>{H.day}</td>
                    <td className={` bg-emerald-200 text-black dark:bg-emerald-500/70 dark:text-white animate-pulse ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-zinc-700`}>{H.date}</td>
                    <td className={` bg-emerald-200 text-black dark:bg-emerald-500/70 dark:text-white animate-pulse ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-zinc-700`}>{H.subject}</td>
                    <td className={` bg-emerald-200 text-black dark:bg-emerald-500/70 dark:text-white animate-pulse ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-zinc-700`}>{H.subject}</td>
                  </tr>
                )
              }else if (H.date !== CurrentDate){

                return(
                  <tr key={i}>
                    <td className={`  ${H.subject === "راحة" ? "bg-zinc-200/70 text-black/30" : "bg-zinc-100"} ${H.subject === "راحة" ? "dark:bg-zinc-400/80 dark:text-white/30" : "dark:bg-zinc-400 text-black"} ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : "" } p-1 px-2 text-center border border-zinc-700 `}>{H.day}</td>
                    <td className={`  ${H.subject === "راحة" ? "bg-zinc-200/70 text-black/30" : "bg-zinc-100"} ${H.subject === "راحة" ? "dark:bg-zinc-400/80 dark:text-white/30" : "dark:bg-zinc-400 text-black"} ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-zinc-700 `}>{H.date}</td>
                    <td className={` ${H.subject === "راحة" ? "bg-zinc-200/70 text-black/30" : "bg-zinc-100"} ${H.subject === "راحة" ? "dark:bg-zinc-400/80 dark:text-white/30" : "dark:bg-zinc-400 text-black"} ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-zinc-700 `}>{H.subject}</td>
                    <td className={` ${H.subject === "راحة" ? "bg-zinc-200/70 text-black/30" : "bg-zinc-100"} ${H.subject === "راحة" ? "dark:bg-zinc-400/80 dark:text-white/30" : "dark:bg-zinc-400 text-black"} ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-zinc-700 `}>{H.monthId === 1 ? "الاول" : H.monthId === 2 ? "الثاني" : "الثالث"}</td>
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
        <h1 className="text-md font-bold">{+monthId === 1 ? "اخر تحديث: 2023-11-08." : +monthId === 2 ? "اخر تحديث: 2023-11-25." : ""}</h1>
        <div className="mb-5">
          {<SendReq key={3} secretId={"1145036551"} err={true} maxAge={10} msg={`تصحيح جدول الامتحانات${+monthId === 1 ? " شهر الاول" : +monthId === 2 ? " شهر الثاني" : ""}.`} unieq="Exam"/>}
        </div>
      </div>
    </div>
  )
}

