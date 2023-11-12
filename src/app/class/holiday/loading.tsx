import 'remixicon/fonts/remixicon.css'

export default function loading() {
  return (
    <div className='flex flex-col justify-center items-center h-72'>
      <p className="animate-spin-slow w-fit h-fit "><svg xmlns="http://www.w3.org/2000/svg" className="dark:fill-stone-300" width={80} viewBox="0 0 24 24"><path d="M12 3C16.9706 3 21 7.02944 21 12H19C19 8.13401 15.866 5 12 5V3Z"></path></svg></p>
      <h1 className='font-bold'>اصبر شوية, شبيك مستعجل</h1>
    </div>
  )
}
