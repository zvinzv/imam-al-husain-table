"use client"
import { setCookie } from "cookies-next";
export default function SaveToCookies({data} : {data:string}){
  setCookie('DateFromTelegarm', data, {maxAge: 60*10})
  return (
    <>
    </>
  )
}