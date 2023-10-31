import { Metadata } from "next"
import Exam from '@/components/Exam'
export const metadata: Metadata = {
  title: 'الجدول الامتحانات الشهرية',
  description: 'هذا الجدول للصف الخامس الاعدادي للشعبة د, لمدرسة الامام الحسين (ع). من اعمال ZVINZV, وجميع الحقوق تعود للطالب مرتضى ظافر هادي',
}
export default function page() {
  return (
    <>
      <Exam />
    </>
  )
}
