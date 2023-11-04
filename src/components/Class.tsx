import SendReq from "@/components/SendReq"
import GetCorrectDate from "@/func/GetCorrectDate";
import GetDateFromTelegram from "@/func/GetDateFromTelegram";
import SaveToCookies from "@/func/SaveToCookies";
import 'remixicon/fonts/remixicon.css'
function getCurrentDate(props:string, ty:object) {
  return new Date(props).toLocaleDateString("ar-IQ", ty);
}

export default async function Class() {
  const TelegramApiDate = await GetDateFromTelegram()
  const data:{[key:string]:any} = {
    head: ["الدرس", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"],
    body: [["1","احياء", "كيمياء", "فيزياء", " احياء", " كيمياء"], ["2","فيزياء", "احياء", "انكليزي", "عربي", " عربي"], ["3","انكليزي", "فنية", "رياضيات", " انكليزي", " رياضيات"], ["4","رياضيات", "عربي", " عربي", "اسلامية", " اسلامية"], ["5","أرض", "فيزياء", "حاسوب", "رياضيات", " أرض"]],
    date:{
      fullDate: getCurrentDate(TelegramApiDate.data, {weekday: 'long', year: 'numeric', month: '2-digit', day: 'numeric'}) === "Invalid Date" ? false : getCurrentDate(TelegramApiDate.data, {weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit'}),
      day: getCurrentDate(TelegramApiDate.data, {weekday: 'long'}),
      toDayHoliday: false,
    }
  }
  const setHoliday = (isHoliday:boolean) => {
    for(let i in data.date){
      if (data.date.fullDate == false) {
        data.date.toDayHoliday = undefined
      }
    }
  }
  data.date.toDayHoliday =  data.date.toDayHoliday ? true : ["الجمعة", "السبت"].includes(data.date.day) ? true : false 
  setHoliday(true)
  
  return (
    <div>
      {TelegramApiDate.setted === true ? <SaveToCookies data={TelegramApiDate.data}/> : null}
      <div className="mx-auto w-fit text-center mt-6">
      <h1 className="text-3xl font-bold">جدول الدروس اليومية.</h1>
      <h1 className="text-lg font-bold dark:font-light mt-1 ">للصف الخامس الاعدادي, د.</h1>
      <h1 className="text-xl font-bold dark:font-light mt-5">
        {data.date.fullDate} {
        data.date.toDayHoliday === true ? 
        
          <span className="text-red-400">عطلة</span> 
        
        :
        data.date.toDayHoliday === false ?
          <span className="text-emerald-400">دوام رسمي</span>
          :
          <span className="text-stone-600 dark:text-stone-300">خلل في التاريخ</span>
        }
      .</h1>
      </div>
      <div >
        <table className="table-fixed m-2 mx-auto font-bold">
          <thead>
            <tr>
              {data.head.map((H:string)=> {
                return(
                  data.date.toDayHoliday === undefined ? <th key={data.head.indexOf(H)} className="bg-stone-300 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700">{H}</th> : <th key={data.head.indexOf(H)} className="bg-stone-300 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700">{H}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
          
          {
            data.body.map((B:string[]) => {
              return(
                <tr key={data.body.indexOf(B)}>
                {B.map((T:string) => 
                      +T > 0 && data.date.toDayHoliday === undefined ?         <td key={B.indexOf(T)} className="bg-stone-300 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700">{T}</td> 
                      :
                      +T > 0                               ?         <td key={B.indexOf(T)} className="bg-stone-300 dark:bg-stone-600 p-1 px-2 text-center border border-collapse border-stone-700">{T}</td> 
                      : 
                      data.date.toDayHoliday === undefined ?         <td key={B.indexOf(T)} className="bg-stone-100 dark:bg-stone-500 p-1 px-2 text-center border border-collapse border-stone-700">{T}</td> 
                      :
                      data.date.toDayHoliday === true      ?         <td key={B.indexOf(T)} className="bg-red-200/60 dark:bg-red-400/60 p-1 px-2 text-center border border-collapse border-stone-700">{T}</td> 
                      :
                      data.head.includes(data.date.day) && data.head.indexOf(data.date.day) && B.indexOf(T) > 0 && B.indexOf(T) === data.head.indexOf(data.date.day) ? <td key={B.indexOf(T)} className="bg-stone-200 dark:bg-emerald-500/70 animate-pulse p-1 px-2 text-center border border-collapse border-stone-700">{T}</td>
                      : 
                      <td key={B.indexOf(T)} className="bg-stone-100 dark:bg-stone-500 p-1 px-2 text-center border border-collapse border-stone-700">{T}</td>
                  )
                }
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
      
      <div className="flex flex-col items-center">
        {data.date.toDayHoliday === undefined ? <SendReq key={1} secretId={"1145036551"} maxAge={5} err={true} msg={"طلب تصحيح التاريخ."} unieq="Class"/> : <SendReq key={2} secretId={"1145036551"} err={true} maxAge={10} msg={"طلب تعديل جديد."} unieq="Class"/>}
        {data.date.toDayHoliday && <a href="" className="text-gray-500 w-fit  text-[.65rem]  underline md:hover:underline md:no-underline underline-offset-[5px] font-bold">رابط مصدر العطلة الرسمية.</a>}
      </div>
    </div>
  )
}
