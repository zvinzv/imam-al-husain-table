export default function GetCorrectDate(history:string, a:number=0): string{
  const mainDate = new Date(new Date(history).setDate(new Date(history).getDate()) + (a * 24 * 60 * 60 * 1000))
  let day = mainDate.getDate().toString()
  if (mainDate.getDate().toString().length <= 1) {
    day = "0" + mainDate.getDate().toString()
  }
  const month=mainDate.getMonth()+1
  const years=mainDate.getFullYear()
  return `${years}-${month}-${day}`
}