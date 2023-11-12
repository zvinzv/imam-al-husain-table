import { Metadata } from "next"
export const metadata: Metadata = {
  title: 'الاخبار.',
  description: 'هذه الصفحة تحتوي على آخر الاخبار على الموقع.',
}
function f(){
  return(
    <div className='flex justify-center'>
      <div className='min-h-36 w-96 bg-slate-600/25 rounded-xl p-4'>
        <div className='flex flex-col gap-2 justify-evenly w-full'>
          <h1 className='w-1/2 h-6 bg-slate-200/25 rounded-sm animate-pulse'></h1>
          <div className='flex flex-col gap-1'>
            <h2 className='w-full h-2 bg-slate-200/25 rounded-sm animate-pulse'></h2>
            <h2 className='w-3/4 h-2 bg-slate-200/25 rounded-sm animate-pulse'></h2>
            <h2 className='w-2/4 h-2 bg-slate-200/25 rounded-sm animate-pulse'></h2>
          </div>
          <h5 className='w-1/3 h-7 rounded-md animate-pulse delay-100 bg-slate-200/25 '></h5>
        </div>
      </div>
    </div>
  )
}
export default function page() {
  return (
    <div className='text-center relative'>
      <h1 className='text-3xl my-4'>آخر الاخبار تُنشر هنا!</h1>
      <h1 className='text-xl my-2'>نموذج مبسط للاخبار</h1>
      <div className='flex flex-col gap-2'>
        {f()}
        {f()}
        {f()}
      </div>
      <h3 className='flex justify-center mt-4 items-center w-full'>الصفحة تحت التطوير!</h3>
    </div>
  )
}
