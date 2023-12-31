"use client"
import {useState} from "react"
import { useRouter,useSearchParams } from "next/navigation"

export default function RedirectList({keyN, content}:{keyN: number, content: string}) {
  const router = useRouter()
  const monthNum = +useSearchParams().getAll("month")
  const visibleBol = useSearchParams().getAll("showHoliday")[0]
  const subjectSelect = useSearchParams().getAll("subject")[0]
  const [show, setShow] = useState<boolean>(false)
  const month = (pageNum: number, pageBol: string, subject:string) => {
    router.push(`/exam?month=${pageNum ? pageNum : monthNum}&showHoliday=${pageBol ? pageBol : visibleBol}&subject=${subject ? subject : subjectSelect}`)
    setShow(false)
  }
  const F = () => {
    return (
      <div className={``}>
        <div className={`absolute m-1 z-20 shadow-lg border border-stone-700 p-2 left-0 top-7 rounded-md bg-stone-600 flex gap-2 justify-center items-center text-black font-bold transition-all`}>
          <main className="flex flex-col gap-2">
            <div className="flex w-full items-center justify-center gap-3">
              <label htmlFor="table" className="whitespace-nowrap text-white flex-1">تنظيم الشهر</label>
              <select name="" id="table" value={monthNum ? monthNum : "0"} onChange={(e) => month(+e.target.value, visibleBol, subjectSelect)} className="bg-stone-300 cursor-pointer border border-stone-500 p-1 px-2 rounded-md text-center outline-none">
                <option className="p-2 font-bold outline-none border-none text-right" disabled hidden>اختر واحد:</option>
                <option value="99" className="p-2 font-bold outline-none border-none text-right">الكل.</option>
                <option value="1" className="p-2 font-bold outline-none border-none text-right">الاول.</option>
                <option value="2" className="p-2 font-bold outline-none border-none text-right">الثاني.</option>
              </select>
            </div>
            <div className="flex w-full items-center justify-center gap-3">
              <label htmlFor="table" className="whitespace-nowrap text-white flex-1">ايام الراحة</label>
              <select name="" id="table" value={visibleBol ? visibleBol : "true"} onChange={(e) => month(monthNum,e.target.value, subjectSelect)} className="bg-stone-300 cursor-pointer border border-stone-500 p-1 px-2 rounded-md text-center outline-none">
                <option value="0" className="p-2 font-bold outline-none border-none text-right" disabled hidden>اختر واحد:</option>
                <option value="true" className="p-2 font-bold outline-none border-none text-right">اظهار.</option>
                <option value="false" className="p-2 font-bold outline-none border-none text-right">اخفاء.</option>
              </select>
            </div>
          </main>
        </div>
        <div onClick={() => setShow(false)} className="fixed h-full w-full z-10 top-0 left-0"></div>
      </div>
    )
  }
  return (
    <>
      <th 
        key={keyN} 
        className="bg-stone-400 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700 relative"
        >
          
          <div className={`${show ? "opacity-100 pointer-events-auto z-30" : !show ? "opacity-0 pointer-events-none z-30" : ""} transition-all aaa`}>
            <F />
          </div>
        <span className="flex items-center justify-center gap-2">
            {content}
            <button
              onClick={() => setShow(prev => !prev)} 
              className="z-20 outline-none border-none"
              >
              <i className={`leading-none aspect-square bg-white/20 hover:bg-white/30 cursor-pointer p-1 rounded ${show ? "ri-close-fill" : "ri-filter-2-fill"}`}></i>
            </button>
        </span>
      </th>
    </>
  )
}