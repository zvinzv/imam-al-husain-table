import 'remixicon/fonts/remixicon.css'

export default function page() {
  return (
    <div className='flex flex-col gap-3 w-fit mx-auto mt-10'>
      <a href="http://t.me/ZVINZV" className='flex items-center gap-3 bg-sky-600 hover:bg-sky-500 transition-all p-3 px-4 rounded-lg' target='_blank'>
        <i className="ri-telegram-fill text-3xl group-hover/link:text-stone-400"></i>
        <span className='font-bold'>التواصل مع المطور على التليكرام.</span>
      </a>
      <a href="http://t.me/ZVINZV" className='flex items-center gap-3 bbb p-3 px-4 rounded-lg transition-all' target='_blank'>
        <i className="ri-instagram-line text-3xl"></i>
        <span className='font-bold'>التواصل مع المطور على الانستقرام.</span>
      </a>
    </div>
  )
}
