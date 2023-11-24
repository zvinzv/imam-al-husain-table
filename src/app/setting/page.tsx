import { Metadata } from "next"
export const metadata: Metadata = {
  title: 'الاعدادات.',
  description: 'هذه الصفحة تحتوي على اعدادات الموقع على الموقع.',
}
import Setting from "@/components/pages/Setting"
export default function page() {
  return (
    <Setting />
  )
}
