import SendReq from "@/components/SendReq"
import { Metadata } from "next"
import 'remixicon/fonts/remixicon.css'
export const metadata: Metadata = {
  title: 'الجدول الامتحانات الشهرية',
  description: 'هذا الجدول للصف الخامس الاعدادي للشعبة د, لمدرسة الامام الحسين (ع). من اعمال ZVINZV, وجميع الحقوق تعود للطالب مرتضى ظافر هادي',
}
type Exam ={ 
  id:        number,
  day:       string,
  date:      string,
  subject:   string,
  done?:      boolean
}
export default async function page() {
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
        subject:"انكليزي",
      },{
        id:18,
        date:"2023-11-15",
        day:"الاربعاء",
        subject:"راحة",
      },{
        id:19,
        date:"2023-11-16",
        day:"الخميس",
        subject:"راحة",
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
  return (
    <div>
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
                    <th key={data.head.indexOf(H)} className="bg-stone-300 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700">{H}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
          
            {data.body.map(H => 
                <tr key={H.id}>
                  <td className={` ${H.subject === "راحة" ? "bg-slate-300" : "bg-slate-100"} ${H.subject === "راحة" ? "dark:bg-stone-400/80 text-white/30" : "dark:bg-stone-400 text-black"} ${H.done === true && H.done !== undefined ? "line-through" : ""} p-1 px-2 text-center border border-collapse border-stone-700`}>{H.day}</td>
                  <td className={` ${H.subject === "راحة" ? "bg-slate-300" : "bg-slate-100"} ${H.subject === "راحة" ? "dark:bg-stone-400/80 text-white/30" : "dark:bg-stone-400 text-black"} ${H.done === true && H.done !== undefined ? "line-through" : ""} p-1 px-2 text-center border border-collapse border-stone-700`}>{H.date}</td>
                  <td className={` ${H.subject === "راحة" ? "bg-slate-300" : "bg-slate-100"} ${H.subject === "راحة" ? "dark:bg-stone-400/80 text-white/30" : "dark:bg-stone-400 text-black"} ${H.done === true && H.done !== undefined ? "line-through" : ""} p-1 px-2 text-center border border-collapse border-stone-700`}>{H.subject}</td>
                </tr>)}
          </tbody>
        </table>
      </div>
      
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-md font-bold">اخر تحديث: 2023-11-01.</h1>
        { <SendReq secret={"1145036551"} err={true} maxAge={30} msg={"تصحيح جدول الامتحانات."}/>}
      </div>
    </div>
  )
}

