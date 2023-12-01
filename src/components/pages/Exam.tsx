import SendReq from "@/components/SendReq"
import GetCorrectDate from "@/func/GetCorrectDate"
import GetDateFromTelegram from "@/func/GetDateFromTelegram"
import SaveToCookies from "@/func/SaveToCookies"
import { redirect } from "next/navigation"
import 'remixicon/fonts/remixicon.css'
import RedirectList from "../RedirectList"
import RedirectListSubject from "../RedirectListSubject"
import GetArabicSubjectFromEnglish from "@/func/GetArabicSubjectFromEnglish"
// import GetArabicSubjectFromEnglish from "@/func/GetArabicSubjectFromEnglish"

type Exam ={ 
  id:        number,
  day:       string,
  date:      string,
  subject:   "احياء" | "كيمياء" | "فيزياء" | "عربي" | "رياضيات" | "انكليزي" | "فنية" | "اسلامية" | "أرض" | "حاسوب" | "ادب" | "قواعد" | "راحة",
  done?:      boolean
  monthId:      number
}

export default async function Exam({monthId, showHoliday, subject}:{monthId:number, showHoliday: boolean | undefined, subject:string}) {
  const TelegramApiDate: {data:string, setted: boolean, message?: string} = await GetDateFromTelegram() as {data:string, setted: boolean, message?: string}
  // Get valide date 'YYYY-MM-DD'
  // -1 mean remove 1 day
  // console.log(showHoliday)
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
        subject:"اسلامية",
        done: true
      },
      {
        id:2,
        monthId: 1,
        date:"2023-10-30",
        day:"الاثنين",
        subject:"ادب",
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
        subject:"قواعد",
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
        id: 999,
        monthId: 1,
        date: "2023-11-22",
        day: "الاربعاء",
        subject: "أرض"
      },
      {
        id: 23,
        monthId: 2,
        date: "2023-11-30",
        day: "الخميس",
        subject: "حاسوب"
      },
      {
        id: 24,
        monthId: 2,
        date: "2023-12-01",
        day: "الجمعة",
        subject: "راحة"
      },
      {
        id: 25,
        monthId: 2,
        date: "2023-12-02",
        day: "السبت",
        subject: "راحة"
      },
      {
        id: 26,
        monthId: 2,
        date: "2023-12-03",
        day: "الاحد",
        subject: "راحة"
      },
      {
        id: 27,
        monthId: 2,
        date: "2023-12-04",
        day: "الاثنين",
        subject: "راحة"
      },
      {
        id: 28,
        monthId: 2,
        date: "2023-12-05",
        day: "الثلاثاء",
        subject: "راحة"
      },
      {
        id: 29,
        monthId: 2,
        date: "2023-12-06",
        day: "الاربعاء",
        subject: "رياضيات"
      }
      ,
      {
        id: 30,
        monthId: 2,
        date: "2023-12-07",
        day: "الخميس",
        subject: "راحة"
      }
      ,
      {
        id: 31,
        monthId: 2,
        date: "2023-12-08",
        day: "الجمعة",
        subject: "راحة"
      }
      ,
      {
        id: 32,
        monthId: 2,
        date: "2023-12-09",
        day: "السبت",
        subject: "راحة"
      }
      ,
      {
        id: 33,
        monthId: 2,
        date: "2023-12-10",
        day: "الاحد",
        subject: "راحة"
      }
      ,
      {
        id: 34,
        monthId: 2,
        date: "2023-12-11",
        day: "الاثنين",
        subject: "ادب"
      }
      ,
      {
        id: 35,
        monthId: 2,
        date: "2023-12-12",
        day: "الثلاثاء",
        subject: "راحة"
      }
      ,
      {
        id: 36,
        monthId: 2,
        date: "2023-12-13",
        day: "الخميس",
        subject: "قواعد"
      }
      ,
      {
        id: 37,
        monthId: 2,
        date: "2023-12-14",
        day: "الجمعة",
        subject: "راحة"
      }
      ,
      {
        id: 38,
        monthId: 2,
        date: "2023-12-15",
        day: "السبت",
        subject: "راحة"
      }
      ,
      {
        id: 39,
        monthId: 2,
        date: "2023-12-16",
        day: "الاحد",
        subject: "احياء"
      }
      ,
      {
        id: 40,
        monthId: 2,
        date: "2023-12-17",
        day: "الاثنين",
        subject: "راحة"
      }
      ,
      {
        id: 41,
        monthId: 2,
        date: "2023-12-18",
        day: "الثلاثاء",
        subject: "راحة"
      }
      ,
      {
        id: 42,
        monthId: 2,
        date: "2023-12-19",
        day: "الاربعاء",
        subject: "فيزياء"
      }
      ,
      {
        id: 43,
        monthId: 2,
        date: "2023-12-20",
        day: "الخميس",
        subject: "أرض"
      }
      ,
      {
        id: 44,
        monthId: 2,
        date: "2023-12-21",
        day: "الجمعة",
        subject: "راحة"
      }
      ,
      {
        id: 45,
        monthId: 2,
        date: "2023-12-22",
        day: "السبت",
        subject: "راحة"
      }
      ,
      {
        id: 46,
        monthId: 2,
        date: "2023-12-23",
        day: "الأحد",
        subject: "كيمياء"
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
        <table className="table-fixed m-2 mx-auto font-bold">
          <thead>
            <tr>
              {data.head.map((H:string, i)=> {
                return(
                  H === "الشهر" ? <RedirectList key={i} keyN={i} content={H}/> : H === "المادة" ? <RedirectListSubject key={i} keyN={i} content={H}/> : <th key={i} className="bg-stone-400 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700"><span className="flex items-center justify-center gap-2">{H}</span></th>
                )
              })}
            </tr>
          </thead>
          <tbody>
          
            {data.body.filter(card => {
                    if (monthId === 999 || subject === "NaN") return card;
                    if (subject === "all"){
                      if (monthId !== 99){
                        if (showHoliday === true) {
                          return card.monthId === monthId
                        }else{
                          return card.monthId === monthId && card.subject !== "راحة";
                        }
                      }else{
                        if (showHoliday === true){
                          return card
                        }else{
                          return card.subject !== "راحة";
                        }
                      }
                    }else{
                      if (monthId !== 99){
                        if (subject !== "all") {
                          return card.monthId === monthId && card.subject === GetArabicSubjectFromEnglish(subject);
                        }
                      }else{
                        return card.subject === GetArabicSubjectFromEnglish(subject);
                      }
                    }
                  }).map((H, i) => {
              if (H.date === CurrentDate){
                return(
                  <tr key={i} className="-z-[2] relative">
                    <td className={` bg-emerald-200 text-black dark:bg-emerald-500/70 dark:text-white animate-pulse -z-20 ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : "" } p-1 px-2 text-center border border-stone-700`}>{H.day}</td>
                    <td className={` bg-emerald-200 text-black dark:bg-emerald-500/70 dark:text-white animate-pulse -z-20 ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-stone-700`}>{H.date}</td>
                    <td className={` bg-emerald-200 text-black dark:bg-emerald-500/70 dark:text-white animate-pulse -z-20 ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-stone-700`}>{H.subject}</td>
                    <td className={` bg-emerald-200 text-black dark:bg-emerald-500/70 dark:text-white animate-pulse -z-20 ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-stone-700`}>{H.monthId === 1 ? "الاول" : H.monthId === 2 ? "الثاني" : "الثالث"}</td>
                  </tr>
                )
              }else if (H.date !== CurrentDate){

                return(
                  <tr key={i}>
                    <td className={`  ${H.subject === "راحة" ? "bg-stone-200/70 text-black/30" : "bg-stone-100"} ${H.subject === "راحة" ? "dark:bg-stone-400/80 dark:text-white/30" : "dark:bg-stone-400 text-black"} ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : "" } p-1 px-2 text-center border border-stone-700 `}>{H.day}</td>
                    <td className={`  ${H.subject === "راحة" ? "bg-stone-200/70 text-black/30" : "bg-stone-100"} ${H.subject === "راحة" ? "dark:bg-stone-400/80 dark:text-white/30" : "dark:bg-stone-400 text-black"} ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-stone-700 `}>{H.date}</td>
                    <td className={` ${H.subject === "راحة" ? "bg-stone-200/70 text-black/30" : "bg-stone-100"} ${H.subject === "راحة" ? "dark:bg-stone-400/80 dark:text-white/30" : "dark:bg-stone-400 text-black"} ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-stone-700 `}>{H.subject}</td>
                    <td className={` ${H.subject === "راحة" ? "bg-stone-200/70 text-black/30" : "bg-stone-100"} ${H.subject === "راحة" ? "dark:bg-stone-400/80 dark:text-white/30" : "dark:bg-stone-400 text-black"} ${H.done === true && H.done !== undefined || H.date === CorrectDate.toString() ? "line-through" : ""} p-1 px-2 text-center border border-stone-700 `}>{H.monthId === 1 ? "الاول" : H.monthId === 2 ? "الثاني" : "الثالث"}</td>
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
        <h1 className="text-md font-bold">{+monthId === 1 ? "اخر تحديث: 2023-11-08." : +monthId === 2 ? "اخر تحديث: 2023-11-29." : ""}</h1>
        <div className="mb-5">
          {<SendReq key={3} secretId={"1145036551"} err={true} maxAge={10} msg={`تصحيح جدول الامتحانات${+monthId === 1 ? " شهر الاول" : +monthId === 2 ? " شهر الثاني" : ""}.`} unieq="Exam"/>}
        </div>
      </div>
    </div>
  )
}

