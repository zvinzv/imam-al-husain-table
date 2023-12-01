import 'remixicon/fonts/remixicon.css'
import Link from "next/link";
import SaveToCookies from "@/func/SaveToCookies";
import GetDateFromTelegram from "@/func/GetDateFromTelegram";
import {NavigationLink} from "@/data/NavigationLink"
import { cookies } from "next/headers";
import { News } from "@/data/News";
import { redirect } from "next/navigation";
import SaveToCookiesNews from '@/func/SaveToCookiesNews';


const Navigation = async ({children}: {children: React.ReactNode}) => {
  const TelegramApiDate: {data:string, setted: boolean, message?: string} = await GetDateFromTelegram() as {data:string, setted: boolean, message?: string}
  const cookie = cookies().get("newsVisited")
  const maxIdPost = cookie?.value ? JSON.parse(cookie?.value).postNumb : 0
  const filteredNewsLength = News.filter(e => e.id > +maxIdPost).length
  const MainIcon = ({children, i}:{children: React.ReactNode, i: typeof NavigationLink[0]}) => {
    return(
      <Link key={i.id} href={i.href} className={`border-[1px] ss dark:hover:bg-zinc-600 dark:bg-zinc-500  hover:bg-zinc-300 bg-zinc-200 p-3 leading-none rounded-xl transition-all relative group/icon flex items-center justify-center flex-grow`}> 
        <i className={`${i.icon} font-normal`}></i>
        <span className="absolute top-0 left-0 text_ar text-sm text-white font-bold bg-zinc-500 whitespace-nowrap block px-3 py-3 leading-3 rounded-md right-1/2 translate-x-1/2 w-fit arrow after:border-t-zinc-500 opacity-0 pointer-events-none group-hover/icon:pointer-events-auto group-hover/icon:-translate-y-12 group-hover/icon:z-0 -translate-y-10 group-hover/icon:opacity-100 transition-all shadow-2xl z-30">{i.text}</span>
        {children}
      </Link>
    )
  }
  return (
    
    <div className="m">
      {<SaveToCookiesNews postNumb={News[News.length-1].id}/>}

      {TelegramApiDate.setted === true ? <SaveToCookies data={TelegramApiDate.data}/> : TelegramApiDate.setted === false && TelegramApiDate.data === null ? redirect(`/social?alert=${TelegramApiDate.message}`) : null}
      <div className="m-5">
        <nav className={` bg-zinc-400 h-16 w-full max-w-lg mx-auto relative z-[1] overflow-hidden flex justify-center items-center dark:bg-zinc-700 rounded-xl p-3 `}>
            <div dir="ltr" className="text_en flex flex-col justify-center items-center gap-1 z-[2]">
              <h1 className="text-4xl font-extrabold leading-none ml-1">ZVINZV</h1>
            </div>
          <div className='absolute h-52 z-[1] aspect-square rounded-full blur-xl left-0 top-0 moving bg-zinc-300/50 dark:bg-zinc-600/50 transition-all'/>
        </nav>
      </div>
      <div className="z-10">
        {children}
      </div>
      <div className='w-full pt-6 grid place-items-center'>
        <nav className={`flex relative  justify-center items-center mx-5 mb-5 rounded-xl p-3 bg-zinc-400 dark:bg-zinc-700 `}>
            <ul className="text_en text-2xl flex z-[2] justify-start items-center gap-3 w-fit menu rounded-lg flex-wrap">
              {NavigationLink.map(i => {
                return(
                  i.href === "/news" && cookie === undefined && filteredNewsLength != 0 ?
                    <MainIcon key={i.id} i={i}>
                      <span className="noficationDot bg-red-500 text-white font-bold">{filteredNewsLength > 9 ? "+9" : filteredNewsLength}</span>
                    </MainIcon>  
                  : 
                  i.href === "/news" && cookie !== undefined ?
                    <MainIcon key={i.id} i={i}>
                      {filteredNewsLength > 9 ? <span className="noficationDot bg-red-500 text-white font-bold">+9</span> : filteredNewsLength > 0 ? <span className="noficationDot bg-red-500 text-white font-bold">{filteredNewsLength}</span> : null }
                    </MainIcon>
                  :
                    <MainIcon key={i.id} i={i}> </MainIcon>
                )
              })}
            </ul>

        </nav>
      </div>
    </div>
  );
};

export default Navigation;