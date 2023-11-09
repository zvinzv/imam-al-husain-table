import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="mt-5">
        <div className="aspect-square min-w-lg max-w-[15rem] mx-auto relative rounded-2xl overflow-hidden">
          <Image src="/4003d23d3d686ff204f90ee241394cbe.jpg" alt="22" fill/>
        </div>
        <p  className="text-center text-3xl mt-5">اليوم عطلة باشا.</p>
        <br />
        <p className="text-2xl text-center mx-auto p-4">هذه الصفحة تحت التطوير حالياً.</p>
      </div>
    </div>
  )
}
