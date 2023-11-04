import { Metadata } from "next"
import Class from "@/components/Class";
export const metadata: Metadata = {
  title: 'جدول الدروس اليومية.',
  description: 'هذا الجدول للصف الخامس الاعدادي للشعبة د, لمدرسة الامام الحسين (ع). من اعمال ZVINZV, وجميع الحقوق تعود للطالب مرتضى ظافر هادي',
}
export default function page() {
return (
    <>
    <Class/>
    </>
  )
}
