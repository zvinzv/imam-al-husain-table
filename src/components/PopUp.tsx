"use client"

import { useEffect, useRef } from "react"
import { useState } from "react"

export default function PopUp({clearWidget, explain, mainFunction}:{clearWidget: VoidFunction, explain: string, mainFunction: VoidFunction}) {
  const [state, setState] = useState(5)
  const [show, setShow] = useState(false)
  const [confirm, setConfirm] = useState("")
  const [succes, setSucces] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const color = ["border-emerald-500", "focus:border-emerald-500", "border-transparent", "focus:border-red-500", "text-red-400", "text-emerald-400"]
  useEffect(()=>{
    const t = setInterval(() => {
      setState((prev: number) => prev - 1 > 0 ? prev - 1 : prev - 1 == 0 ? prev - 1 : prev = 0)
    }, 1000)
    return () => clearInterval(t)
  }, [state])
  useEffect(() => {
    if (succes === 1){
      
      setTimeout(() => {
        setSucces(-1)
        setTimeout(() => {
          clearWidget()
        }, 1000);
      }, 5000);
    }
  }, [succes])
  return (
    
    <div className="PopUpBtn">
      <div className={`absolute top-0 right-1/2 translate-x-1/2 h-20  max-w-lg w-[calc(100%-1.25rem)] z-30 ${succes == 1 ? "translate-y-12" : "-translate-y-52"} transition-all`}>
        <div className={`absolute w-10/12 max-w-xs p-2 px-5 pl-3 border border-green-800 bg-green-600 text-white font-bold rounded-lg flex items-center gap-2 top-0 right-1/2 translate-x-1/2 z-50 text-xl transition-transform ease-in-out`}>
          < i className="ri-close-fill cursor-pointer border border-white/50 bg-white/20 hover:bg-white/30 text-white transition leading-none p-1 rounded-md aspect-square" onClick={() =>setSucces(-1)}></i> <span>نـجـح, تم مسح الكـوكـيـز !</span>
        </div>
      </div>
      {succes == 1 || succes == -1 ? null : 
      <div className="transition-all absolute z-20 min-w-full h-screen top-0 left-0 grid place-content-center">
        <div className="bg-stone-800 mx-5 flex flex-col gap-4 p-3 rounded-xl font-bold ">
          <div className="flex flex-col gap-2 p-2 py-1 w-full">
            <p className="text-xl text-white text-right w-full">تحذير هام !!</p>
            <p className={`text-base w-full text-${confirm === "تأكيد" ? "emerald" : "red"}-400 text-right overflow-hidden`}>{show ? "للمرة الاخيرة, " : null}{explain}</p>
          </div>
          <div className="flex flex-col-reverse flex-wrap gap-2 w-full">
            <button className="bg-stone-500/60 hover:bg-stone-500/70 active:bg-stone-500/40  transition-all rounded p-2 flex-grow w-full" onClick={clearWidget}>تراجع.</button>
            {state > 0 ? <button className="bg-red-500/20 hover:bg-red-500/20  transition-all rounded p-2 cursor-not-allowed w-full" disabled>انتظر {state} ثواني.</button> : confirm === "تأكيد" ? <button className={`bg-emerald-500/60 hover:bg-emerald-500/70 active:bg-emerald-500/40  transition-all rounded p-2`} onClick={() => show == false ? setShow(true) : confirm === "تأكيد" ? (setSucces(1), mainFunction()) : inputRef?.current?.focus()} >نعم.</button> : <button className={`bg-red-500/60 hover:bg-red-500/70 active:bg-red-500/40 transition-all rounded p-2`} onClick={() => show == false ? setShow(true) : confirm === "تأكيد" ? mainFunction() : inputRef?.current?.focus()} >نعم.</button>}
            <form action={() => {
              show == false ? setShow(true) : confirm === "تأكيد" ? (setSucces(1), mainFunction()) : inputRef?.current?.focus()
            }}>
              {show ? 
              <input 
              ref={inputRef} 
              type="text" 
              className={`placeholder:text-stone-400 text-white bg-white/5 outline-none p-2 px-3 rounded border w-full ${confirm === "تأكيد" ? "border-emerald-500 focus:border-emerald-500" : "border-transparent focus:border-red-500"} transition-all`}
              onChange={(e) => setConfirm(e.target.value)} 
              placeholder="اكتب 'تأكيد' للحذف..." /> 
              :null}
            </form>
          </div>
        </div>
        <div className="absolute bg-black/80 h-screen w-full -z-10 transition-all"></div>
      </div>}
    </div>
    
  )
}
