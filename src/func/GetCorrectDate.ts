export default function GetCorrectDate(history:string, a:number=0): string{
  const mainDate = new Date(history)
  let day = new Date(new Date(history).setDate(new Date(history).getDate()) + a * 24 * 60 * 60 * 1000).getDate().toString()
  if (day.length <= 1) {
    day = "0" + day
  }
  const month=mainDate.getMonth()+1
  const years=mainDate.getFullYear()
  return `${years}-${month}-${day}`
}