export default function getArabicDateByNewDateFunction(props:string, ty:object) {
  return new Date(props).toLocaleDateString("ar-IQ", ty);
}