import SaveToCookies from "@/func/SaveToCookiesNews"
import { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = {
  title: 'الاخبار.',
  description: 'هذه الصفحة تحتوي على آخر الاخبار على الموقع.',
}
function f(text:string, desc1:string, desc2: string, date: string, btnData:{name:string, link:string}){
  return(
    <div className='flex justify-center'>
      {<SaveToCookies data={Date()} postNumb={1} key={1}/>}
      <div className='min-h-36 w-96 bg-zinc-600/25 rounded-xl p-4'>
        <div className='flex flex-col gap-2 justify-evenly w-full'>
          <h1 className='h-9 flex items-center text-right font-bold text-xl rounded-sm'>- {text}</h1>
          <div className='flex flex-col gap-1'>
            {/* <h2 className='w-full h-fit rounded-sm text-right'></h2> */}
            <h2 className='w-full h-fit rounded-sm text-right'>{desc1}</h2>
            <h2 className='w-full h-fit rounded-sm text-right'>{desc2}</h2>
            <h2 className='w-3/4 h-fit rounded-sm text-right'></h2>
            {/* <h2 className='w-2/4 h-2 rounded-sm animate-pulse'></h2> */}
          </div>
          <div className="flex justify-between items-end">
            <Link href={btnData.link} className='w-fit rounded-md bg-zinc-600 hover:bg-zinc-700 px-3 py-1 transition'>{btnData.name}</Link>
            <h5 dir="ltr" className='text-sm rounded-md font-bold text-zinc-500'>{date}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function page() {
  return (
    <div className='text-center relative'>
      <h1 className='text-3xl my-4'>آخر الاخبار تُنشر هنا!</h1>
      <div className='flex flex-col gap-2'>
        {f("امتحان علم الارض.", "الامتحان الشهر الاول, الفصل الاول فقط.", "بتاريخ: 22-11-2023, الاربعاء.", "2023-11-19, الاحد.",{name: "التفاصيل", link:"/home-work/earth"})}
        {f("ملزمة الاحياء الفصل الثاني.", "ملزمة الاحياء للصف الخامس الاعدادي.", "تاريخ التنفيذ: 18-11-2023.", "2023-11-19, الاحد.", {name: "تحميل من Google Drive", link:"https://drive.google.com/file/d/1DFzNBtCRjW6NjWjt_-Se2vwCi7TDBjaT/view?usp=drive_link"})}
      </div>
      {/* <h3 className='flex justify-center mt-4 items-center w-full'>الصفحة تحت التطوير!</h3> */}
    </div>
  )
}
