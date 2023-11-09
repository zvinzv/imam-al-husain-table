"use client"
import Link from "next/link";
import 'remixicon/fonts/remixicon.css'
import { useState } from "react";
const Navigation = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    
    <>  
      <nav className={` bg-stone-400 h-16 w-full max-w-lg mx-auto flex justify-between items-center dark:bg-stone-700 rounded-xl mt-3 p-3 z-50`}>

          <i onClick={() => setOpen(true)} className="ri-menu-line group/icon font-bold cursor-pointer dark:hover:bg-stone-600 dark:bg-stone-500 hover:bg-stone-300 bg-stone-200 p-2 px-3 rounded-lg transition-all">
          </i>
          <ul style={{"opacity": isOpen ? "100" : "0", "height": isOpen ? "170px" : "0", "backgroundColor" : isOpen ? "rgb(68 64 60)" : "rgba(0,0,0,0)", "padding" : isOpen ? "0.75rem" : "0", "pointerEvents" : isOpen ? "auto" : "none"}} className="text_ar z-20 flex flex-col items-center bg-stone-700 justify-between gap-3 absolute mt-16 top-0 -mr-3 rounded-lg opacity-0  h-0 transition-all">
              <Link href={"/home-work"} onClick={() => setOpen(false)} className="font-bold dark:hover:bg-stone-600 dark:bg-stone-500 hover:bg-stone-300 bg-stone-200 p-2 px-3 rounded transition-all tracking-wider  whitespace-nowrap w-full text-center">التحاضير اليومية</Link>
              <Link href={"/class"} onClick={() => setOpen(false)} className="font-bold dark:hover:bg-stone-600 dark:bg-stone-500 hover:bg-stone-300 bg-stone-200 p-2 px-3 rounded transition-all tracking-wider  whitespace-nowrap w-full text-center">الدروس اليومية</Link>
              <Link href={"/exam"} onClick={() => setOpen(false)} className="font-bold dark:hover:bg-stone-600 dark:bg-stone-500 hover:bg-stone-300 bg-stone-200 p-2 px-3 rounded transition-all  tracking-wider whitespace-nowrap w-full text-center">الامتحانات الشهرية</Link>
            </ul>
          <div onClick={() => isOpen ? setOpen(false) : null} style={{"backgroundColor" : isOpen ? "rgba(0,0,0,.5)" : "", "pointerEvents" : isOpen ? "auto" : "none"}} className="fixed z-10 h-screen w-full transition-all top-0 left-0"></div>
          <div dir="ltr" className="text_en flex flex-col gap-1">
            <h1 className="text-2xl font-semibold leading-none ml-1">ZVINZV</h1>
          </div>
          
      </nav>
    </>
  );
};

export default Navigation;
