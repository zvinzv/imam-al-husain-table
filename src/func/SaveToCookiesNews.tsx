"use client"
import { setCookie } from "cookies-next";
export default function SaveToCookiesNews({postNumb} : {postNumb: number}){
  setCookie('newsVisited', {postNumb}, {maxAge: 60*60*24*5})
  return (
    <>
    </>
  )
}