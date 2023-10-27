"use client"
import { useState } from "react";
import { setCookie,getCookie } from "cookies-next";
import { useRef } from 'react';
import "remixicon/fonts/remixicon.css"

const SendReq = ({secret}:{secret:string}) => {
  const [loading, setLoading] = useState(false);
  const [isDone, setDone] = useState<number|null>()
  
  const timerId:any = useRef<NodeJS.Timeout>(null); // استخدم useRef لتخزين معرف العداد التنازلي
  const handleClick = async () => {
    
      setLoading(true);
      setDone(null);

      // إذا كان هناك عداد تنازلي قائم، قم بإزالته
      if (timerId.current) {
          clearTimeout(timerId.current);
      }
      if (getCookie("SendRequest") !== "true" && loading !== true) {
          try {
              const response = await fetch("https://api.telegram.org/bot5129401785:AAFRNWARWM88YcxJsgbEiJvvNB3lpEU-3Z4/sendMessage?chat_id="+secret+"&text=طلب تعديل جديد");
              const todos = await response.json();
              todos.ok && setDone(1);true && setCookie("SendRequest", todos.ok, {maxAge: 60*60*6});
              setLoading(false);
          } catch (error) {
              setTimeout(() => {
                  setDone(-1);
                  setLoading(false);
              }, 100);
          }
      } else {
          setTimeout(() => {
              setDone(0);
              setLoading(false);
          }, 100);
      }
      timerId.current = setTimeout(() => {
          setDone(null);
      }, 5000);
  }

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault();
        handleClick();
        return;
      }}>

        {loading ? 
            <button type="submit" className="flex items-center gap-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-700  transition-all p-3 rounded w-fit mx-auto font-bold opacity-60"><i className="ri-file-edit-fill"></i>طلب اعادة النظر أو تعديل الجدول. </button> 
          : 
            <button type="submit" className="flex items-center gap-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-700 transition-all p-3 rounded w-fit mx-auto font-bold"><i className="ri-file-edit-fill"></i> طلب اعادة النظر أو تعديل الجدول.</button>}
        
        {   isDone === 1 ?
            <p className="text-md text-center text-emerald-500 font-bold mt-2 flex gap-2 items-center justify-center">
              <span className="cursor-pointer" onClick={() => setDone(null)}>
                <i className="ri-close-line"></i>
              </span>
              <span>تم ارسال الطلب.</span>
            </p>
          : isDone === -1 ?
            <p className="text-md text-center text-red-500 font-bold mt-2 flex gap-2 items-center justify-center">
              <span className="cursor-pointer" onClick={() => setDone(null)}>
                <i className="ri-close-line"></i>
              </span>
              <span>تم رفض الطلب, تواصل مع <a href="https://t.me/ZVINZV" target="_blank" className="text-blue-500 underline md:hover:underline md:no-underline underline-offset-[5px] font-bold">المطور للاصلاح</a>.</span>
            </p>
          : isDone === 0 ? 
            <p className="text-md text-center text-blue-500 font-bold mt-2 flex gap-2 items-center justify-center">
              <span className="cursor-pointer" onClick={() => setDone(null)}>
                <i className="ri-close-line"></i>
              </span>
              <span>تم ارسال الطلب مسبقاً.</span>
            </p> 
          : 
            ""}
      
      </form>
      <div className="w-fit mx-auto mt-2">
        {loading && <p className="animate-spin-slow w-fit h-fit "><svg xmlns="http://www.w3.org/2000/svg" className="dark:fill-white" width={20} viewBox="0 0 24 24"><path d="M12 2C12.5523 2 13 2.44772 13 3V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V3C11 2.44772 11.4477 2 12 2ZM12 17C12.5523 17 13 17.4477 13 18V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18C11 17.4477 11.4477 17 12 17ZM22 12C22 12.5523 21.5523 13 21 13H18C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11H21C21.5523 11 22 11.4477 22 12ZM7 12C7 12.5523 6.55228 13 6 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H6C6.55228 11 7 11.4477 7 12ZM19.0711 19.0711C18.6805 19.4616 18.0474 19.4616 17.6569 19.0711L15.5355 16.9497C15.145 16.5592 15.145 15.9261 15.5355 15.5355C15.9261 15.145 16.5592 15.145 16.9497 15.5355L19.0711 17.6569C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711ZM8.46447 8.46447C8.07394 8.85499 7.44078 8.85499 7.05025 8.46447L4.92893 6.34315C4.53841 5.95262 4.53841 5.31946 4.92893 4.92893C5.31946 4.53841 5.95262 4.53841 6.34315 4.92893L8.46447 7.05025C8.85499 7.44078 8.85499 8.07394 8.46447 8.46447ZM4.92893 19.0711C4.53841 18.6805 4.53841 18.0474 4.92893 17.6569L7.05025 15.5355C7.44078 15.145 8.07394 15.145 8.46447 15.5355C8.85499 15.9261 8.85499 16.5592 8.46447 16.9497L6.34315 19.0711C5.95262 19.4616 5.31946 19.4616 4.92893 19.0711ZM15.5355 8.46447C15.145 8.07394 15.145 7.44078 15.5355 7.05025L17.6569 4.92893C18.0474 4.53841 18.6805 4.53841 19.0711 4.92893C19.4616 5.31946 19.4616 5.95262 19.0711 6.34315L16.9497 8.46447C16.5592 8.85499 15.9261 8.85499 15.5355 8.46447Z"></path></svg></p>}
      </div>
    </>
  );
};

export default SendReq;
