import 'remixicon/fonts/remixicon.css'
import { Metadata } from "next"
export const metadata: Metadata = {
  title: 'تواصل معي.',
  description: 'هذه الصفحة تحتوي على معلومات التواصل مع مطور الموقع.',
}
export default function page() {
  return (
    <div className='mt-10 mx-5'>
      <h1 className='text-center text-2xl'>تواصل مع المطور على المواقع التالية</h1>
      <div className='flex flex-row gap-3 max-w-lg mx-auto mt-5'>
        <a href="http://t.me/ZVINZV" className='flex items-center flex-grow gap-3 bg-sky-600 hover:bg-sky-500 transition-all p-3 px-4 rounded-lg' target='_blank'>
          <i className="ri-telegram-fill text-3xl group-hover/link:text-stone-400"></i>
          <span className='font-bold'>التليكرام.</span>
        </a>
        <a href="https://www.instagram.com/x748a/" className='flex items-center flex-grow gap-3 bbb p-3 px-4 rounded-lg transition-all' target='_blank'>
          <i className="ri-instagram-line text-3xl"></i>
          <span className='font-bold'>الانستقرام.</span>
        </a>
      </div>
    </div>
  )
}
