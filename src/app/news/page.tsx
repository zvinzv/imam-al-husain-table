import { Post, News } from "@/data/News"
import GetDateFromTelegram from "@/func/GetDateFromTelegram"
import SaveToCookiesNews from "@/func/SaveToCookiesNews"
import { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = {
  title: 'الاخبار.',
  description: 'هذه الصفحة تحتوي على آخر الاخبار على الموقع.',
}
const newPost = (corner: string,post:number,text:string, desc1:string, desc2: string, date: string | Date | number, btnData:{name:string, link:string}) => {
  return(
    <div key={post} className='flex justify-center '>
      
      <div className='min-h-36 max-w-sm w-full relative border-stone-900 bg-stone-200/25 dark:bg-stone-700/25 dark:shadow-zinc-800 shadow-2xl rounded-xl p-4 overflow-hidden'>
        <div className="h-full w-full absolute top-0 left-0 border border-stone-700/70 bg-transparent animate-pulse rounded-xl"></div>
        <div className='relative flex flex-col gap-2 justify-evenly w-full'>
          <div className="absolute w-52 h-52 top-20 -left-32 blur-3xl text-4xl font-bold animate-pulse  dark:bg-white/10 bg-black/20 rounded-full"></div>
          {/* <div className="absolute w-52 h-52 top-20 left-10  text-4xl font-bold opacity-10 bg-white rounded-full"></div> */}
          <div className="absolute w-52 h-52 -top-32 -right-16 blur-3xl text-4xl animate-pulse font-bold  dark:bg-white/20 bg-black/30 -z-10  rounded-full"></div>
          <h1 className='h-9 flex items-center text-right font-bold text-xl rounded-sm'>{corner}- {text}</h1>
          <div className='flex flex-col gap-1'>
            <h2 className='w-full h-fit rounded-sm text-right'>{desc1}</h2>
            <h2 className='w-full h-fit rounded-sm text-right'>{desc2}</h2>
            <h2 className='w-3/4 h-fit rounded-sm text-right'></h2>
          </div>
          <div className="flex justify-between items-end">
            <Link href={btnData.link} className='w-fit rounded-md bg-stone-300/10 hover:bg-stone-300/20 px-3 py-1 shadow-md shadow-zinc-800 transition'>{btnData.name}</Link>
            <h5 dir="ltr" className='text-sm rounded-md font-bold text-zinc-500'>{date as string}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
export default async function page() {
  // const cookie = cookies()
  const TelegramApiDate: {data:string, setted: boolean, message?: string} = await GetDateFromTelegram() as {data:string, setted: boolean, message?: string}
  // const filteredNewsLength = News.filter(e => new Date(TelegramApiDate.data) < new Date(e.datePost)).length
  // console.log(News.reverse())
  return (
    <div className='text-center relative px-5'>
      <h1 className='text-3xl'>آخر الاخبار تُنشر هنا!</h1>
      <h1 className='text-lg my-2'>اخبار مدرسة الامام الحسين (ع), للصف الخامس الاعدادي.</h1>
      <div className='flex flex-col gap-2'>
        {<SaveToCookiesNews postNumb={News[News.length-1].id}/>}
        {News.map((post:Post) =>  new Date(TelegramApiDate.data) > new Date(post.datePost) ?  null : newPost(post.corner,post.id, post.text, post.desc1, post.desc2, post.date, {name: post.btnData.name, link: post.btnData.link}) )}
      </div>
    </div>
  )
}
