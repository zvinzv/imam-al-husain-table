"use client"
import { setCookie } from "cookies-next";
export default function SaveToCookies({postNumb} : {postNumb: number}){
  setCookie('newsVisited', {postNumb})
  return (
    <>
    </>
  )
}