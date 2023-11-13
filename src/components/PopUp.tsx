
export default function PopUp() {
  return (
    <>
      <div className="bg-zinc-300 flex flex-col p-3 rounded">
        <label htmlFor="explain">ما سبب طلبك ؟</label>
        <input type="text" name="" id="explain" placeholder="مثال: هناك خطأ في مادة الاحياء." />
        <textarea name="" id="" placeholder="مثال: هناك خطأ في مادة الاحياء الداخلة من البداية حتى صفحى 60." />
        <button type="submit">أرسال</button>
      </div>
    </>
  )
}
