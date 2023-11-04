export default function GetEnglishSubjectAsArabic(nameAsString:string) {
  let script = ["احياء", "كيمياء","فيزياء", "عربي", "رياضيات", "انكليزي", "فنية", "اسلامية", "أرض", "حاسوب"]
  let dic = ["biology", "chemistry", "physics", "arabic", "math", "english", "paint", "islamic", "earth", "pc"]
  return dic[script.indexOf(nameAsString)]
}