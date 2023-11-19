"use client"
import { setCookie } from "cookies-next";
export default function SaveToCookies({data, postNumb} : {data:string, postNumb: number}){
  setCookie('newsVisited', {data, postNumb}, {maxAge: 60*10})
  return (
    <>
    </>
  )
}