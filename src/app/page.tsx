"use client"
import GetTheClassTable, {drsAndDay} from "@/func/GetTheClassTable"
import { redirect } from "next/navigation"
export default async function Home() {
  // redirect("/home-work")
  const head = ["الدرس", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"]
  console.log(drsAndDay(4,5))
  return (
    <>
      <table className="table-fixed m-2 mx-auto font-bold">
          <thead>
            <tr>
              {head.map((H:string)=> {
                return(
                  <th key={head.indexOf(H)} className="bg-stone-300 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700">{H}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {}
          </tbody>
        </table>
    </>
  )
}
