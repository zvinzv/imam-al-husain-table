import Link from "next/link";
import { headers } from "next/headers";

const Navigation = () => {
  const is = headers().get("referer")?.split("/").includes("class")
  return (
    
    <>  
      <nav className={`bg-stone-700 w-fit mx-auto p-3 rounded-xl mt-3 flex flex-row justify-center items-center gap-3 h-16`}>
        <Link href={"/exam"} className="font-bold hover:bg-stone-600 bg-stone-500 p-2 px-3 rounded transition-all  tracking-wider">جدول الامتحانات</Link>
        <Link href={"/class"} className="font-bold hover:bg-stone-600 bg-stone-500 p-2 px-3 rounded transition-all tracking-wider ">جدول الدروس</Link>
      </nav>
    </>
  );
};

export default Navigation;
