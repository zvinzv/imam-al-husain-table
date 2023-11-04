import { Metadata } from "next"
import HomeWork from "@/components/HomeWork"
export const metadata: Metadata = {
  title: 'جدول التحاضير اليومي.',
  description: 'هذا الجدول للصف الخامس الاعدادي للشعبة د, لمدرسة الامام الحسين (ع). من اعمال ZVINZV, وجميع الحقوق تعود للطالب مرتضى ظافر هادي',
}
export default function page() {
  return (
    <HomeWork />  
  )
}
