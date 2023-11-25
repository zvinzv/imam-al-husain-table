"use client"
import {useState} from "react"
import { useRouter,useSearchParams } from "next/navigation"

export default function RedirectList({keyN, content}:{keyN: number, content: string}) {
  const router = useRouter()
  const path = +useSearchParams().getAll("month")
  const [show, setShow] = useState(false)
  const red = (pageNum: number) => {
    router.push(pageNum ? `/exam?month=${pageNum}` : `/exam`)
    setShow(false)
  }
  const F = () => {
    return (
      <div className={`absolute m-1 shadow-lg border border-zinc-700 p-1 left-0 top-7 rounded-md bg-zinc-600 flex gap-2 justify-center items-center text-black font-bold transition-all`}>
        <div className="flex w-fit items-center justify-center gap-3">
          <select name="" id="table" value={path ? path : "0"} onChange={(e) => red(+e.target.value)} className="bg-zinc-300 cursor-pointer border border-zinc-500 p-1 px-2 rounded-md text-center outline-none">
            <option value="0" className="p-2 font-bold outline-none border-none text-right" disabled hidden>الاعتمد على:</option>
            <option           className="p-2 font-bold outline-none border-none text-right">الكل.</option>
            <option value="1" className="p-2 font-bold outline-none border-none text-right">الاول.</option>
            <option value="2" className="p-2 font-bold outline-none border-none text-right">الثاني.</option>
          </select>
        </div>
      </div>
    )
  }
  return (
    <>
      {show ? <th key={keyN} className="bg-zinc-200 dark:bg-zinc-600 p-1 px-2 text-center border border-collapse border-zinc-700 relative">{<F />}<span className="flex items-center justify-center gap-2">{content}{<i onClick={() => setShow(prev => !prev)} className="leading-none aspect-square bg-white/20 hover:bg-white/30 cursor-pointer p-1 rounded ri-close-fill"></i>}</span></th> : <th key={keyN} className="bg-zinc-200 dark:bg-zinc-600 p-1 px-2 text-center border border-collapse border-zinc-700 relative"><span className="flex items-center justify-center gap-2">{content}{<i onClick={() => setShow(prev => !prev)} className="leading-none aspect-square bg-white/20 hover:bg-white/30 cursor-pointer p-1 rounded ri-filter-2-fill"></i>}</span></th>}
    </>
  )
}