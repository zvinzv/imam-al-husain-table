"use client"

import { useState } from "react"

export default function page() {
  const [showData, setShowData] = useState<boolean>(false)
  return (
    <div className="flex justify-center items-center gap-5 h-48 flex-col">
      <div dir="ltr" className="text_en rounded-lg border max-h-16 h-full border-stone-500 overflow-y-auto h-fit p-2 w-full max-w-lg">
        
        <p className="w-full rounded-md p-1 px-2 bg-red-300">{showData ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias soluta asperiores, harum debitis molestias eaque quos consequatur nisi quia numquam voluptate tenetur sint fuga. Quis dolore repellendus beatae vel officiis!" : null}</p>
      </div>
      <button onClick={() => setShowData(prev => !prev)}  dir="ltr" className={`${showData ? "brightness-75 bg-red-400 hover:bg-red-500" : ""} text_en relative bg-sky-400 hover:bg-sky-500 transition-all p-2 px-4 rounded-md self-center group/main`}>
        Click me !
        <span className="absolute top-[calc(-100%+0.4rem)] left-1/2 -translate-x-1/2 whitespace-nowrap bg-stone-500 px-2 p-1 text-xs rounded pointer-events-none opacity-0 group-hover/main:opacity-100 group-hover/main:delay-500 transition-all arrow after:border-t-stone-500">Click to show data!</span>
      </button>
    </div>
  )
}
