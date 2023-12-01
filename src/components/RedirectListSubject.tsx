"use client"
import {useState} from "react"
import { useRouter,useSearchParams } from "next/navigation"

export default function RedirectList({keyN, content}:{keyN: number, content: string}) {
  const router = useRouter()
  const monthNum = +useSearchParams().getAll("month")
  const visibleBol = useSearchParams().getAll("showHoliday")[0]
  const subjectSelect = useSearchParams().getAll("subject")[0]
  console.log(subjectSelect)
  const [show, setShow] = useState<boolean>(false)
  const month = (pageNum: number, pageBol: string, subject:string) => {
    router.push(`/exam?month=${pageNum ? pageNum : monthNum}&showHoliday=${pageBol ? pageBol : visibleBol}&subject=${subject ? subject : subjectSelect}`)
    setShow(false)
  }
  const F = () => {
    return (
      <>
        <div className={`absolute m-1 z-20 shadow-lg border border-stone-700 p-2 left-0 top-7 rounded-md bg-stone-600 flex gap-2 justify-center items-center text-black font-bold transition-all`}>
          <main className="flex flex-col gap-2">
            <div className="flex w-full items-center justify-center gap-3">
              <label htmlFor="table" className="whitespace-nowrap text-white flex-1">تصفية للمادة</label>
              <select name="" id="table" value={subjectSelect ? subjectSelect : "all"} onChange={(e) => month(+monthNum, visibleBol, e.target.value)} className="bg-stone-300 cursor-pointer border border-stone-500 p-1 px-2 rounded-md text-center outline-none">
                <option className="p-2 font-bold outline-none border-none text-right" disabled hidden>اختر واحد:</option>
                <option value="all" className="p-2 font-bold outline-none border-none text-right">الكل.</option>
                <option value="rule" className="p-2 font-bold outline-none border-none text-right">قواعد.</option>
                <option value="respect" className="p-2 font-bold outline-none border-none text-right">ادب.</option>
                <option value="english" className="p-2 font-bold outline-none border-none text-right">الانكليزي.</option>
                <option value="math" className="p-2 font-bold outline-none border-none text-right">الرياضيات.</option>
                <option value="biology" className="p-2 font-bold outline-none border-none text-right">الاحياء.</option>
                <option value="physics" className="p-2 font-bold outline-none border-none text-right">الفيزياء.</option>
                <option value="chemistry" className="p-2 font-bold outline-none border-none text-right">الكيمياء.</option>
                <option value="islamic" className="p-2 font-bold outline-none border-none text-right">اسلامية.</option>
                <option value="earth" className="p-2 font-bold outline-none border-none text-right">أرض.</option>
                <option value="pc" className="p-2 font-bold outline-none border-none text-right">حاسوب.</option>
              </select>
            </div>
          </main>
        </div>
        <div onClick={() => setShow(false)} className="fixed h-full w-full z-10 top-0 left-0"></div>
      </>
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