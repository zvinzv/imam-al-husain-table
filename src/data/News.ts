export type Post = {
  id: number,
  corner: string,
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
class NewPost{
  private static  data: Post[] = []
  private static   post: number = 1
  constructor(public dataInsert: Omit<Post, "id">){
    NewPost.data.push({id: NewPost.post++,...dataInsert})
  }
  static getData(){
    return NewPost.data
  }
  static editPost(id:number, data:Partial<Omit<Post, "id">>): void{
    const indexOfSelect = NewPost.data.filter(e=>e.id === id)[0]
    const indexOfData = NewPost.data.indexOf(indexOfSelect)
    indexOfSelect ? NewPost.data[indexOfData] = {...indexOfSelect, ...data} : null
  }
}
new NewPost({    text: "تم تحديد امتحانات الشهر الثاني.",  corner: "I",  desc1: "جدول امتحانات الشهر الثاني.",   desc2: "بتاريخ: 03-12-2023, الأحد حتى 2023-12-24, الأحد.",   date: "2023-11-29, الاربعاء.",    datePost: "2023-12-02",   btnData: {name: "التفاصيل", link: "/exam?month=2"}},)

const allPost =  NewPost.getData()
export const News = allPost