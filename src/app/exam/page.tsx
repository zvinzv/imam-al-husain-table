import Exam from "@/components/pages/Exam"
import { Metadata } from "next"
import { redirect } from "next/navigation"

export function generateMetadata({ searchParams }: {searchParams: {[key: string]:number}}): Metadata {
  return {
    title: `جدول الامتحانات الشهرية${+searchParams.month === 1 ? ", الشهر الاول" : +searchParams.month === 2 ? ", الشهر الثاني" : ""}.`,
    description: 'هذا الجدول للصف الخامس الاعدادي للشعبة د, لمدرسة الامام الحسين (ع). من اعمال ZVINZV, وجميع الحقوق تعود للطالب مرتضى ظافر هادي',
  }
}
export default function page({searchParams} : {searchParams: {[key: string] : number}}) {
  if (isNaN(+searchParams.month) || searchParams.showHoliday === undefined) redirect("/exam?month=2&showHoliday=true")
  return (
    <>
      <Exam monthId={+searchParams.month} showHoliday={searchParams.showHoliday.toString()}/>
    </>
  )
}
