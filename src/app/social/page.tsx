import 'remixicon/fonts/remixicon.css'
import { Metadata } from "next"
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'تواصل معي.',
  description: 'هذه الصفحة تحتوي على معلومات التواصل مع مطور الموقع.',
}
export default function page({searchParams} : {searchParams: {[key: string] : string}}) {
  const search = searchParams
  return (
    <div className='mx-5 relative'>
      <div className={`absolute min-h-6 p-2 pl-3 border max-w-lg w-full border-red-800 bg-red-600 font-bold rounded-lg top-0 right-1/2 translate-x-1/2 z-50 text-xl  ${search.alert !== undefined ? "-translate-y-12 opacity-100 pointer-events-auto" : "-translate-y-32 opacity-0 pointer-events-none"} transition-all ease-in-out flex items-center gap-2`}>
        <Link href={"/social"} className="ri-close-fill cursor-pointer border border-white/50 bg-white/20 hover:bg-white/30 transition leading-none p-1 rounded-md aspect-square"></Link> 
        <span className='flex flex-col-reverse gap-4 items-center'>
          <span>{search.alert}</span>
        </span>
      </div>
      <h1 className='text-center text-2xl'>تواصل مع المطور على المواقع التالية</h1>
      <div className='flex w-full flex-row flex-wrap gap-3 max-w-lg mx-auto mt-5 text-white'>
        <a href="http://t.me/ZVINZV" className='w-52 flex items-center flex-grow gap-3 bg-sky-600 hover:bg-sky-500 transition-all p-3 px-4 rounded-lg drop-shadow-xl' target='_blank'>
          <i className="ri-telegram-fill font-normal text-3xl group-hover/link:text-zinc-400"></i>
          <span className='font-bold'>التليكرام.</span>
        </a>
        <a href="https://www.instagram.com/x748a/" className='w-52 flex items-center flex-grow gap-3 bbb p-3 px-4 rounded-lg transition-all drop-shadow-xl' target='_blank'>
          <i className="ri-instagram-line font-normal text-3xl"></i>
          <span className='font-bold'>الانستقرام.</span>
        </a>
      </div>
    </div>
  )
}
