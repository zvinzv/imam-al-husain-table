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
  const subjects: Subjects = {
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
        title: `لا اعلم, سيتم النشر قريباً`,
        sure: "مرتضى ظافر"
      },
      exam: {
        title: "لم يحدد بعد",
        sure: ""
      }
    },
    math: {
      homeWork: {
        title: "مراجعة على الي اخذناه",
        sure: "مرتضى ظافر هادي"
      },
      exam: {
        title: "الفصل الاول والثاني",
        sure: "مرتضى ظافر"
      }
    },
    physics: {
      homeWork: {
        title: "حفظ الي اخذناه",
        sure: "مرتضى ظافر"
      },
      exam: {
        title: "لم يحدد بعد",
        sure: ""
      }
    },
    chemistry: {
      homeWork: {
        title: "مراجعة الي اخذناه",
        sure: ""
      },
      exam: {
        title: "..",
        sure: ""
      }
    },
    biology: {
      homeWork: {
        title: "تكملة من متطلبات الغذاء الى نهاية الفصل, وحل اسئله الفصل الاول",
        sure: ""
      },
      exam: {
        title: "الفصل الاول كامل",
        sure: "مدرس المادة"
      }
    },
    pc: {
      homeWork: {
        title: "امتحان شفوي من صفحة  19 الى صفحة 24",
        sure: "مرتضى ظافر"
      },
      exam: {
        title: "",
        sure: ""
      }
    },
    earth: {
      homeWork: {
        title: "من الكتل الهوائية الى الطقس القاسي ما داخل",
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
        title: "تحضير الاسئله ورسم الاشكال الهندسية",
        sure: ""
      },
      exam: {
        title: "",
        sure: ""
      }
    }
  }
  for (const i in subjects) {
    if (i === subject) {
      return subjects[subject] as Sub
    }
  }
}
