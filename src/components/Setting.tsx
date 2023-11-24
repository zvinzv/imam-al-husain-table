/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import PopUp from "@/components/PopUp"
import {deleteCookie, getCookies} from "cookies-next"
import { useReducer } from "react"
type Rule = {
  of?: "All" | "Timing" | "News",
  logic?: boolean, 
  text?: string,
  mainFunc?: () => void;
  closeFunc?: () => void;
}
export default function Setting() {
  const initState: Required<Rule> = {
    of: "All",
    logic: false,
    text: "",
    mainFunc: (): void =>{},
    closeFunc:  (): void => {}
  }
  const reducer = (state: Required<Rule>, action: Rule) => {
    switch (action.of) {
      case "All":
        return {...state, ...{logic: true, text: "هل انت متاكد من حذف جميع الكوكيز ؟", closeFunc: () => {dispatch({logic: false})},mainFunc: () => {for(const i in getCookies() as object){deleteCookie(i)} }}}
      case "Timing":
        return {...state, ...{logic: true, text: "هل انت متاكد من حذف كوكيز التوقيت ؟", closeFunc: () => {dispatch({logic: false})},mainFunc: () => {deleteCookie("DateFromTelegarm"); }}}
      case "News":
        return {...state, ...{logic: true, text: "هل انت متاكد من حذف كوكيز الاخبار ؟", closeFunc: () => {dispatch({logic: false})},mainFunc: () => {deleteCookie("newsVisited"); }}}
      default:
        return {...state, ...action}
    }
  }
  const [states, dispatch] = useReducer(reducer, initState)
  return (
    <div className="mt-4">
      <h1 className="text-center text-3xl mb-4">الاعدادات الرئيسية</h1>
      <div className="max-w-lg mx-auto px-5">
        <h1 className="text-right text-2xl my-2">الكوكيز :</h1>
        <div className="flex justify-end flex-wrap w-full gap-2">
          <button onClick={() => dispatch({of: "All"})} className="bg-zinc-600 hover:bg-zinc-700 transition p-2 px-3 rounded-lg flex-grow"><i className="ri-delete-bin-5-fill"></i> حذف جميع الكوكيز.</button>
          <button onClick={() => dispatch({of: "Timing"})} className="bg-zinc-600 hover:bg-zinc-700 transition p-2 px-3 rounded-lg flex-grow"><i className="ri-delete-bin-5-fill"></i> حذف كوكيز التوقيت.</button>
          <button onClick={() => dispatch({of: "News"})} className="bg-zinc-600 hover:bg-zinc-700 transition p-2 px-3 rounded-lg flex-grow"><i className="ri-delete-bin-5-fill"></i> حذف كوكيز الاخبار.</button>
        </div>
      </div>
      <div style={{opacity: states.logic ? "1" : "0", pointerEvents: states.logic ? "all" : "none"}} className="transition-all">
        {states.logic && <PopUp clearWidget={states.closeFunc} mainFunction={states.mainFunc} explain={states.text}/>}
      </div>
    </div>
  )
}
