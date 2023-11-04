export default function GetCurrentTimeArabicWithStyle(TimeMoment:string, style:object) {
  return new Date(TimeMoment).toLocaleDateString("ar-IQ", style);
}