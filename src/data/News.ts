export type Post = {
  id: number,
  text: string,
  desc1: string,
  desc2: string,
  date: Date | string,
  datePost: string,
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
    desc2: "بتاريخ: 30-11-2023, الخميس.",
    date: "2023-11-24, الجمعة.",
    datePost: "2023-11-30",
    btnData: {name: "التفاصيل", link: "/home-work/pc"}
  },
  {
    id: 2,
    text: "امتحان رياضيات.",
    desc1: "امتحان رياضيات الشهر الثاني.",
    desc2: "بتاريخ: 06-12-2023, الاربعاء.",
    date: "2023-11-26, الاحد.",
    datePost: "2023-12-06",
    btnData: {name: "التفاصيل", link: "/home-work/math"}
  },
].reverse()
