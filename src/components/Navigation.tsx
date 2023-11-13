import Link from "next/link";
import 'remixicon/fonts/remixicon.css'
import {data} from "./NavigationJSON"
const Navigation = ({children}: {children: React.ReactNode}) => {
  return (
    
    <div className="m">  
      <div className="mx-2">
        <nav className={` bg-zinc-400 h-16 w-full max-w-lg mx-auto flex justify-center items-center dark:bg-zinc-700 rounded-xl mt-3 p-3 z-50`}>
            <div dir="ltr" className="text_en flex flex-col justify-center items-center gap-1">
              <h1 className="text-4xl font-extrabold leading-none ml-1">ZVINZV</h1>
            </div>
        </nav>
      </div>
      <div>
        {children}
      </div>
      <div className='z-10 w-full grid place-items-center '>
        <nav className={` flex justify-center items-center w-fit mx-5 mb-5 rounded-xl p-3  bg-zinc-400 dark:bg-zinc-700 `}>
            <ul className="text_en text-2xl flex justify-between items-center gap-3 w-fit menu rounded-lg flex-wrap">
              
              {data.map(i => <Link key={i.id} href={i.href} className=" dark:hover:bg-zinc-600 dark:bg-zinc-500  hover:bg-zinc-300 bg-zinc-200 aspect-square p-3 leading-none rounded-xl transition-all relative group/icon"><i className={i.icon}></i><span className="absolute top-0 left-0 text_ar text-sm text-white font-bold bg-zinc-500 whitespace-nowrap block px-3 py-3 leading-3 rounded-md right-1/2 translate-x-1/2 w-fit -translate-y-12 arrow after:border-t-zinc-500 opacity-0 pointer-events-none group-hover/icon:pointer-events-auto group-hover/icon:opacity-100 transition-all">{i.text}</span></Link>)}
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
