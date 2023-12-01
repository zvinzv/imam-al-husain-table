import SendReq from "@/components/SendReq"
import GetArabicSubjectFromEnglish from "@/func/GetArabicSubjectFromEnglish"
import { Table, subjectName } from "@/data/GetTheClassTable"
import { Metadata} from "next"
import Link from "next/link"
import 'remixicon/fonts/remixicon.css'
type accessories = {
  id: number,
  file: string[],
  description: string[],
  sure: {
    name: string,
    logic: boolean
  }
}[]
export function generateMetadata({ params }: {params: {id: "biology" | "chemistry" | "physics" | "arabic" | "math" | "english" | "paint" | "islamic" | "earth" | "pc"}}): Metadata {
  return {
    title: `تفاصيل لمادة ال${GetArabicSubjectFromEnglish(params.id)}.`,
    description: 'هذا الجدول للصف الخامس الاعدادي للشعبة د, لمدرسة الامام الحسين (ع). من اعمال ZVINZV, وجميع الحقوق تعود للطالب مرتضى ظافر هادي',
  }
}
function Card({subject, title, content, sureMsg, icon="ri-book-fill", accessories}:{subject:string, title:string, content:string, sureMsg?:string, icon?:string, accessories:accessories}): JSX.Element{
  return (
    <div className="bg-stone-400/20 shadow-xl z-[1] dark:bg-stone-800 max-w-md w-full flex-grow mt-6 relative overflow-hidden rounded-xl">
      <div className="z-[2] h-full flex flex-col">
        <p className="text-2xl bg-stone-600/10 dark:bg-stone-700 flex justify-center sm:justify-start items-center h-12 p-3 font-semibold gap-2"> <i className={icon}></i>  <span>{title}</span></p>
        <p className="text-xl flex flex-col items-start sm:items-start text-right justify-center h-fit p-3 font-semibold"><span className="">{content !== "" ? content : "لم يحدد بعد."}</span></p>

        {accessories.map(acces => <div key={acces.id} className="px-3">
          {acces.file.length >= 1 && acces.file[0] !== "" ? acces.file.map(files => <div key={acces.file.indexOf(files)} className="flex gap-2 flex-wrap"><p className="text-sm text-right rounded font-bold bg-stone-400/50 hover:bg-stone-400/80 dark:bg-stone-600 dark:hover:bg-stone-700 transition-colors w-fit"><a href={files.slice(7, )} className="block px-2 py-1">عرض {acces.description[acces.file.indexOf(files)]}</a></p><p className="text-sm text-right rounded font-bold bg-stone-400/50 hover:bg-stone-400/80 dark:bg-stone-600 dark:hover:bg-stone-700 w-fit transition-colors"><a download href={files.slice(7, )} className="block px-2 py-1">تنزيل {acces.description[acces.file.indexOf(files)+1]}</a></p> </div>) : <p className="text-sm text-zinc-500 font-bold">لا توجد اضافات.</p>}
        </div>)}
        <br />
        <div className="text-sm space-y-1 py-2 text-cente h-full flex flex-col  items-center ">
          {sureMsg ? <span className="text-sm sm:text-base text-stone-950 drop-shadow dark:text-emerald-400 flex justify-start p-3 py-1 self-start">حالة التحقق: تم التحقق بواسطة {sureMsg}.</span> : <span className="text-base animate-pulse text-center">حالة التحقق: لا يزال التحقق جاري.</span>}
          {sureMsg ? null : <SendReq title="طلب التأكد مرة اخرى." secretId="1145036551" unieq={`NeedAuth${icon}`} msg={`طلب تاكيد ${title.split(".")[0]} لمادة ال${GetArabicSubjectFromEnglish(subject)}.`} maxAge={30} err={true}/>}
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 blur-3xl -z-[1] left-0 h-52 aspect-square rounded-full bg-stone-300/70 dark:bg-stone-600/20 moving2"></div>
    </div>
  )
}
export default function page({params}:{params: {id: "biology" | "chemistry" | "physics" | "arabic" | "math" | "english" | "paint" | "islamic" | "earth" | "pc" | "عربي"}}) {
  const subject: Table = subjectName(params.id) as Table
  
  return (
    <>
      {subject.length > 0 ? 
      (<div className="text_en capitalize min-w-[20rem] mx-auto mb-6 text-3xl text_ar">
        <h1 className="text-center">تفاصيل مادة ال{subject[0].subject.ar}.</h1>
        <div className="flex flex-wrap gap-5 max-w-5xl justify-center p-6 w-full mx-auto">
          <Card key={1} subject={params.id} title="التحضير اليومي." content={`${subject[0].dailyPreparation.name.endsWith(".") ? subject[0].dailyPreparation.name : subject[0].dailyPreparation.name + "."}`} sureMsg={subject[0].dailyPreparation.sure.name} icon="ri-book-fill" accessories={subject[0].dailyPreparation.accessories}/>
          <Card key={2} subject={params.id} title="الامتحان الشهري." content={`${subject[0].examPreparation.name.endsWith(".") ? subject[0].examPreparation.name : subject[0].examPreparation.name + "."}`} sureMsg={subject[0].examPreparation.sure.name} icon="ri-book-open-fill" accessories={subject[0].examPreparation.accessories}/>
        </div>
      </div>)
      :
      (<h1 className="text-center my-12 text-3xl font-bold">لا توجد هكذا مادة !!</h1>)
      }
      <Link className="text-center bg-stone-600/30 hover:bg-stone-600/60 dark:bg-stone-600/30 text-white font-bold flex justify-center gap-2 w-fit mx-auto p-2 rounded dark:hover:bg-stone-700/50 transition-all" href={"/home-work"}><i className="ri-arrow-go-back-fill"></i>  <span>الرجوع الى الخلف.</span></Link>
    </>
    
  )
}
