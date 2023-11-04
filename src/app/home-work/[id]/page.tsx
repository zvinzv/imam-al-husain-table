import SendReq from "@/components/SendReq"
import GetArabicSubjectFromEnglish from "@/func/GetArabicSubjectFromEnglish"
import GetSubjectDescription, { Sub } from "@/func/GetSubjectDescription"
import { Metadata} from "next"
import Link from "next/link"
import 'remixicon/fonts/remixicon.css'

export function generateMetadata({ params }: {params: {id: string}}): Metadata {
  return {
    title: `تفاصيل لمادة ال${GetArabicSubjectFromEnglish(params.id)}.`,
    description: 'هذا الجدول للصف الخامس الاعدادي للشعبة د, لمدرسة الامام الحسين (ع). من اعمال ZVINZV, وجميع الحقوق تعود للطالب مرتضى ظافر هادي',
  }
}
export function Card({subject, title, content, sureMsg, icon="ri-book-fill"}:{subject:string, title:string, content:string, sureMsg?:string, icon?:string}){
  return (
    <div className="bg-stone-800 w-full mt-6 white">
      <p className="text-2xl bg-stone-700 flex justify-center sm:justify-start items-center h-12 p-3 font-semibold gap-2"> <i className={icon}></i>  <span>{title}</span></p>
      <p className="text-xl flex flex-col items-start sm:items-start text-right justify-center h-fit p-3 font-semibold"><span className="">{content}</span></p>
      <br />
      <div className="text-sm space-y-1 py-2">
      
      {sureMsg ? <span className="text-base text-emerald-400 text-right flex justify-start px-3">حالة التحقق: تم التحقق بواسطة {sureMsg}.</span> : <span className="text-base animate-pulse">حالة التحقق: لا يزال التحقق جاري.</span>}
      {sureMsg ? "" : <SendReq title="طلب التأكيد مرة اخرى." secretId="1145036551" unieq={`NeedAuth${icon}`} msg={`طلب تاكيد ${title.split(".")[0]} لمادة ال${GetArabicSubjectFromEnglish(subject)}.`} maxAge={30} err={true}/>}
      </div>
    </div>
  )
}
export default function page({params}:{params:any}) {
  let subject: Sub = GetSubjectDescription(params.id) as Sub
  
  return (
    <>
      {subject ? 
      (<div className="text_en capitalize w-[20rem] mx-auto text-center my-6 text-3xl text_ar">
        <h1 className="font-bold">تفاصيل مادة ال{GetArabicSubjectFromEnglish(params.id)}.</h1>
        <Card key={1} subject={params.id} title="التحضير اليومي." content={`${subject.homeWork.title}.`} sureMsg={`${subject.homeWork.sure}`} icon="ri-book-fill"/>
        <Card key={2} subject={params.id} title="الامتحان الشهري." content={`${subject.exam.title}.`} sureMsg={`${subject.exam.sure}`} icon="ri-book-open-fill"/>
      </div>)
      :
      (<h1 className="text-center my-12 text-3xl font-bold">لا توجد هكذا مادة !!</h1>)
      }
      <Link className="text-center bg-stone-600 flex justify-center gap-2 w-fit mx-auto p-2 rounded hover:bg-stone-700 transition-all" href={"/home-work"}><i className="ri-arrow-go-back-fill"></i>  <span>الرجوع الى الخلف.</span></Link>
    </>
    
  )
}
