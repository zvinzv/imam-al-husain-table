import { Metadata } from "next"
import HomeWork from "@/components/pages/HomeWork"
export const metadata: Metadata = {
  title: 'جدول التحاضير اليومي.',
  description: 'هذا الجدول للصف الخامس الاعدادي للشعبة د, لمدرسة الامام الحسين (ع). من اعمال ZVINZV, وجميع الحقوق تعود للطالب مرتضى ظافر هادي',
}
export default function page({searchParams}:{searchParams:{[key:string] : string}}) {
  return (
    <HomeWork all={searchParams.more === "true" ? true : false}/>  
  )
}
