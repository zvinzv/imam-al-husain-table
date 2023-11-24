export type Post = {
  id: number,
  text: string,
  desc1: string,
  desc2: string,
  date: Date | string,
  btnData: {
    name: string, 
    link: string
  }
}
export const News: Post[] = [
  {
    id: 1,
    text: "امتحان حاسوب.",
    desc1: "امتحان حاسوب الشهر الثاني.",
    desc2: "بتاريخ: 30-11-2023.",
    date: "2023-11-24, الجمعة.",
    btnData: {name: "التفاصيل", link: "/home-work/pc"}
  },
  
]
