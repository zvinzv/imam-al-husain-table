import { redirect } from "next/navigation"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: 'root.',
  description: 'هذه الصفحة تحتوي على آخر الاخبار على الموقع.',
}
export default async function Home() {
  redirect("/home-work")
  return (
    <>
    </>
  )
}
