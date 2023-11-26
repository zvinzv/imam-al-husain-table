import { Post, News } from "@/data/News"
import GetDateFromTelegram from "@/func/GetDateFromTelegram"
import SaveToCookies from "@/func/SaveToCookies"
import SaveToCookiesNews from "@/func/SaveToCookiesNews"

import { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
export const metadata: Metadata = {
  title: 'الاخبار.',
  description: 'هذه الصفحة تحتوي على آخر الاخبار على الموقع.',
}
const newPost = (post:number,text:string, desc1:string, desc2: string, date: string | Date | number, btnData:{name:string, link:string}) => {
  return(
    <div key={post} className='flex justify-center'>
      <div className='min-h-36 max-w-sm w-full bg-zinc-600/25 rounded-xl p-4'>
        <div className='flex flex-col gap-2 justify-evenly w-full'>
          <h1 className='h-9 flex items-center text-right font-bold text-xl rounded-sm'>- {text}</h1>
          <div className='flex flex-col gap-1'>
            <h2 className='w-full h-fit rounded-sm text-right'>{desc1}</h2>
            <h2 className='w-full h-fit rounded-sm text-right'>{desc2}</h2>
            <h2 className='w-3/4 h-fit rounded-sm text-right'></h2>
          </div>
          <div className="flex justify-between items-end">
            <Link href={btnData.link} className='w-fit rounded-md bg-zinc-600 hover:bg-zinc-700 px-3 py-1 transition'>{btnData.name}</Link>
            <h5 dir="ltr" className='text-sm rounded-md font-bold text-zinc-500'>{date as string}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
export default async function page() {
  const TelegramApiDate: {data:string, setted: boolean, message?: string} = await GetDateFromTelegram() as {data:string, setted: boolean, message?: string}
  const filteredNewsLength = News.filter(e => new Date(TelegramApiDate.data) < new Date(e.datePost)).length
  return (
    <div className='text-center relative px-5'>
      {TelegramApiDate.setted === true ? <SaveToCookies data={TelegramApiDate.data}/> : TelegramApiDate.setted === false && TelegramApiDate.data === null ? redirect(`/social?alert=${TelegramApiDate.message}`) : null}
      <h1 className='text-3xl'>آخر الاخبار تُنشر هنا!</h1>
      <h1 className='text-lg my-2'>اخبار مدرسة الامام الحسين (ع), للصف الخامس الاعدادي.</h1>
      <div className='flex flex-col gap-2'>
        {<SaveToCookiesNews postNumb={filteredNewsLength}/>}
        {News.map((post:Post) =>  new Date(TelegramApiDate.data) > new Date(post.datePost) ? null : newPost(post.id, post.text, post.desc1, post.desc2, post.date, {name: post.btnData.name, link: post.btnData.link}) )}
      </div>
    </div>
  )
}
