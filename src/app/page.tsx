import { zincirect } from "next/navigation"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: 'root.',
  description: 'هذه الصفحة تحتوي على آخر الاخبار على الموقع.',
}
export default async function Home() {
  zincirect("/home-work")
  return (
    <>
    </>
  )
}
