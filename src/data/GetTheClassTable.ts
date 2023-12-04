type Preparation = {
  name: string;
  sure: {
    name: "مرتضى ظافر" | "مصطفى نسيم"| "الجني الاثول" | "", 
    logic: boolean
  }
  accessories: [
    {
      id:number, 
      file: string[], 
      description: string[], 
      sure: {
        name: string, 
        logic: boolean
      }
    }
  ];
};
export type Table = {
  id: number;
  subject: {
    ar: string,
    en: string
  }
  day:
    {
      name: {
        ar: string,
        en: string
      };
      number: number;
      drs: number
    }[];
  dailyPreparation: Preparation
  examPreparation: Preparation
}[]
export default function GetTheClassTable(): Table  {
  return [
    // Start Math
    {
      id: 1,
      subject: {
        ar: "رياضيات",
        en: "math"
      },
      day: [
        {
          name: {
            ar: "الاحد",
            en: "sunday"
          },
          number: 1,
          drs: 4
        },
        {
          name: {
            ar: "الثلاثاء",
            en: "tuesday"
          },
          number: 3,
          drs: 3
        },
        
        {
          name: {
            ar: "الاربعاء",
            en: "wednesday"
          },
          number: 4,
          drs: 4
        },
        
        {
          name: {
            ar: "الخميس",
            en: "thursday"
          },
          number: 5,
          drs: 3
        },
        
      ],
      dailyPreparation: {
        name: 'سوف نّسمط سمطاً جميلا.',
        accessories: [
          {
            id: 1,
            file: [""],
            description: [""],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "مرتضى ظافر",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الثاني - الفصل الثالث والفصل الرابع.",
        accessories: [
          {
            id: 1,
            file: [""],
            description: [""],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "مرتضى ظافر",
          logic: false
        }
      }
    },
    // End Math
    // Start Arabic
    {
      id: 2,
      subject: {
        ar: "عربي",
        en: "arabic"
      },
      day: [
        {
          name: {
            ar: "الاثنين",
            en: "monday"
          },
          number: 2,
          drs: 3
        },
        {
          name: {
            ar: "الثلاثاء",
            en: "tuesday"
          },
          number: 3,
          drs: 4
        },
        {
          name: {
            ar: "الاربعاء",
            en: "wednesday"
          },
          number: 4,
          drs: 2
        },
        {
          name: {
            ar: "الخميس",
            en: "thursday"
          },
          number: 5,
          drs: 2
        },
      ],
      dailyPreparation: {
        name: `قواعد: العطف.`,
        accessories: [
          {
            id: 1,
            file: [],
            description: [],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "مرتضى ظافر",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الثاني - لم يحدد",
        accessories: [
          {
            id: 1,
            file: [""],
            description: [""],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "",
          logic: false
        }
      }
    },
    // End Arabic
    // Start English
    {
      id: 3,
      subject: {
        ar: "انكليزي",
        en: "english"
      },
      day: [
        {
          name: {
            ar: "الاحد",
            en: "sunday"
          },
          number: 1,
          drs: 3
        },
        {
          name: {
            ar: "الثلاثاء",
            en: "tuesday"
          },
          number: 3,
          drs: 2
        },
        {
          name: {
            ar: "الاربعاء",
            en: "wednesday"
          },
          number: 4,
          drs: 3
        },
      ],
      dailyPreparation: {
        name: "عمل انشاء عن موضوع `حماية البيئة`. على ما اضن بس هذا, واذا اكو بعد قدم بلاغ من الزر ادناه.",
        accessories: [
          {
            id: 1,
            file: [],
            description: [],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "مرتضى ظافر",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الثاني - لم يحدد بعد.",
        accessories: [
          {
            id: 1,
            file: [""],
            description: [""],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "",
          logic: false
        }
      }
    },
    // End English
    // Start Physics
    {
      id: 4,
      subject: {
        ar: "فيزياء",
        en: "physics"
      },
      day: [
        {
          name: {
            ar: "الاثنين",
            en: "monday"
          },
          number: 2,
          drs: 5
        },
        {
          name: {
            ar: "الثلاثاء",
            en: "tuesday"
          },
          number: 3,
          drs: 1
        },
        
      ],
      dailyPreparation: {
          name: 'تحضير حل تمارين الفصل الثالث.',
          sure: {
            name: "مرتضى ظافر", 
            logic: false
          },
          accessories: [
            {
              id:1, 
              file: [], 
              description: [], 
              sure: {
                name: "", 
                logic: false
              }
            }
          ]
      },

      examPreparation: {
          name: "امتحان الشهر الثاني - الفصل الثالث والرابع",
          sure: {
            name: "", 
            logic: false
          },
          accessories: [
            {
              id:1, 
              file: [""],
              description: [""],
              sure: {
                name: "", 
                logic: false
              }
            }
          ]
      }
    },
    // End Physics
    // Start Chemistry
    {
      id: 6,
      subject: {
        ar: "كيمياء",
        en: "chemistry"
      },
      day: [
        {
          name: {
            ar: "الاثنين",
            en: "monday"
          },
          number: 2,
          drs: 1
        },
        {
          name: {
            ar: "الاربعاء",
            en: "wednesday"
          },
          number: 4,
          drs: 1
        },
      ],
      dailyPreparation: {
        name: 'هو ما اطانه واجب, بس اقره المواد السابقة قد يسوي امتحان يومي. يفضل تقره 1- الكهروسلبية. 2- خواص الفلزات والافلزات. 3- طيف اللهب.',
        accessories: [
          {
            id: 1,
            file: [],
            description: [],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "مرتضى ظافر",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الثاني - لم يحدد بعد",
        accessories: [
          {
            id: 1,
            file: [""],
            description: [""],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "",
          logic: false
        }
      }
    },
    // End Chemistry
    // Start Biology
    {
      id: 7,
      subject: {
        ar: "احياء",
        en: "biology"
      },
      day: [
        {
          name: {
            ar: "الاحد",
            en: "sunday"
          },
          number: 1,
          drs: 1
        },
        {
          name: {
            ar: "الاثنين",
            en: "monday"
          },
          number: 2,
          drs: 2
        },
      ],
      dailyPreparation: {
        name: 'من صفحة 9 (تكملة لما توقف عنه الاستاذ) حتى صفحة 11 داخل, (الصفحات لملزمة الاستاذ).',
        accessories: [
          {
            id: 1,
            file: [],
            description: [],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "مرتضى ظافر",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الثاني - لم يحدد بعد",
        accessories: [
          {
            id: 1,
            file: [""],
            description: [""],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "",
          logic: false
        }
      }
    },
    // End Biology
    // Start Earth
    {
      id: 8,
      subject: {
        ar: "أرض",
        en: "earth"
      },
      day: [
        {
          name: {
            ar: "الاحد",
            en: "sunday"
          },
          number: 1,
          drs: 2
        },
        {
          name: {
            ar: "الخميس",
            en: "thursday"
          },
          number: 5,
          drs: 1
        },
      ],
      dailyPreparation: {
        name: "من صفحة 34 الى صفحة 39 ما داخلة.",
        accessories: [
          {
            id: 1,
            file: [],
            description: [],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "مرتضى ظافر",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الثاني - لم يحدد بعد",
        accessories: [
          {
            id: 1,
            file: [""],
            description: [""],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "",
          logic: false
        }
      }
    },
    // End Earth
    // Start Islamic
    {
      id: 9,
      subject: {
        ar: "اسلامية",
        en: "islamic"
      },
      day: [
        
        {
          name: {
            ar: "الاربعاء",
            en: "wednesday"
          },
          number: 4,
          drs: 5
        },
        {
          name: {
            ar: "الخميس",
            en: "thursday"
          },
          number: 5,
          drs: 5
        },
      ],
      dailyPreparation: {
        name: 'الموضوع الذي يلي الحديث, مع حل مناقشة السورة والحديث.',
        accessories: [
          {
            id: 1,
            file: [],
            description: [],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "مرتضى ظافر",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الثاني - لم يحدد بعد.",
        accessories: [
          {
            id: 1,
            file: [""],
            description: [""],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "",
          logic: false
        }
      }
    },
    // End Islamic
    // Start Pc
    {
      id: 10,
      subject: {
        ar: "حاسوب",
        en: "pc"
      },
      day: [
        {
          name: {
            ar: "الاثنين",
            en: "monday"
          },
          number: 2,
          drs: 4
        },
        {
          name: {
            ar: "الخميس",
            en: "thursday"
          },
          number: 5,
          drs: 4
        },
      ],
      dailyPreparation: {
        name: 'من صفحة 34 الى صفحة 36.',
        accessories: [
          {
            id: 1,
            file: [],
            description: [],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "مرتضى ظافر",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الثاني - من صفحة 19 الى صفحة 32 غير داخل",
        accessories: [
          {
            id: 1,
            file: [""],
            description: [""],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "مرتضى ظافر",
          logic: false
        }
      }
    },
    // End Pc
    // Start Paint
    {
      id: 11,
      subject: {
        ar: "فنية",
        en: "paint"
      },
      day: [
        {
          name: {
            ar: "الثلاثاء",
            en: "thursday"
          },
          number: 3,
          drs: 5
        },
      ],
      dailyPreparation: {
        name: 'نرسم الطبيعة.',
        accessories: [
          {
            id: 1,
            file: [""],
            description: [""],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "مرتضى ظافر",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الثاني - لم يحدد بعد.",
        accessories: [
          {
            id: 1,
            file: [""],
            description: [""],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "",
          logic: false
        }
      }
    },
    // End Paint
    // Start sport
    {
      id: 12,
      subject: {
        ar: "رياضة",
        en: "sport"
      },
      day: [
        {
          name: {
            ar: "الاحد",
            en: "sunday"
          },
          number: 1,
          drs: 5
        },
      ],
      dailyPreparation: {
        name: "براحتك, يفضل تلعب وي برشلونه وتفوز عليهم 5-0.",
        accessories: [
          {
            id: 1,
            file: [],
            description: [],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "الجني الاثول",
          logic: false
        }
      },

      examPreparation: {
        name: "وين اكو امتحان شهري للرياضة 😂",
        accessories: [
          {
            id: 1,
            file: [""],
            description: [""],
            sure: {
              name: "",
              logic: false
            }
          }
        ],
        sure: {
          name: "الجني الاثول",
          logic: false
        }
      }
    },
    // End sport
  ]
}
export function drsAndDay(drs:number, dayNumber: number) {
  const table = GetTheClassTable()
  const list = table.filter(subject => subject.day.some(das => das.drs === drs && das.number === dayNumber))
  return list
}
export function subjectName(enNameSubject?:string, arNameSubject?:string) {
  const table = GetTheClassTable()
  const list = table.filter(subject => subject.subject.ar === arNameSubject || subject.subject.en === enNameSubject)
  return list
  
}
