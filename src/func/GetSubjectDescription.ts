export type Sub = {
  homeWork: {
      title: string,
      sure: string
    },
    exam: {
      title: string,
      sure: string
    },
}
export type Subjects = {
  [K in "arabic" | "english" | "math"| "physics" | "chemistry" | "biology" | "pc" | "earth" | "islamic" | "paint"]: Sub
}
export default function GetSubjectDescription(subject: "arabic" | "english" | "math"| "physics" | "chemistry" | "biology" | "pc" | "earth" | "islamic" | "paint"): Subjects | Sub | undefined{
  let subjects: Subjects = {
    arabic: {
      homeWork: {
        title: "لا يوجد لدينا واجب",
        sure: "مرتضى ظافر"
      },
      exam: {
        title: "امتحان في المواضيع الاتية: المبتدأ والخبر - كان واخواتها - أن واخواتها",
        sure: "مدرس المادة"
      }
    },
    english: {
      homeWork: {
        title: "لا يوجد لدينا تحضير",
        sure: "مرتضى ظافر"
      },
      exam: {
        title: "لم يحدد بعد",
        sure: ""
      }
    },
    math: {
      homeWork: {
        title: "حفظ القوانين والجدول",
        sure: "مرتضى ظافر هادي"
      },
      exam: {
        title: "الفصل الاول والثاني",
        sure: "مدرس المادة"
      }
    },
    physics: {
      homeWork: {
        title: "",
        sure: ""
      },
      exam: {
        title: "",
        sure: ""
      }
    },
    chemistry: {
      homeWork: {
        title: "",
        sure: ""
      },
      exam: {
        title: "",
        sure: ""
      }
    },
    biology: {
      homeWork: {
        title: "تكملة من متطلبات الغذاء الى نهاية الفصل",
        sure: ""
      },
      exam: {
        title: "الفصل الاول كامل",
        sure: "مدرس المادة"
      }
    },
    pc: {
      homeWork: {
        title: "",
        sure: ""
      },
      exam: {
        title: "من البداية حتى صفحة 18 ما داخل",
        sure: "مدرس المادة"
      }
    },
    earth: {
      homeWork: {
        title: "",
        sure: ""
      },
      exam: {
        title: "",
        sure: ""
      }
    },
    islamic: {
      homeWork: {
        title: "حفظ سورة المؤمنون من اية 51 الى اية 62",
        sure: "مرتضى ظافر"
      },
      exam: {
        title: "لم يحدد بعد",
        sure: ""
      }
    },
    paint: {
      homeWork: {
        title: "",
        sure: ""
      },
      exam: {
        title: "",
        sure: ""
      }
    }
  }
  for (let i in subjects) {
    if (i === subject) {
      return subjects[subject] as Sub
    }
  }
}