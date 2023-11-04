export default function GetArabicSubjectFromEnglish(nameAsString:string) {
  let script = ["احياء", "كيمياء","فيزياء", "عربي", "رياضيات", "انكليزي", "فنية", "اسلامية", "أرض", "حاسوب"]
  let dic = ["biology", "chemistry", "physics", "arabic", "math", "english", "paint", "islamic", "earth", "pc"]
  return script[dic.indexOf(nameAsString)]
}