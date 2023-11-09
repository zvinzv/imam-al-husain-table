type Preparation = {
  name: string;
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
type Table = {
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
          name: 'مراجعة على الي اخذناه.',
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
      },

      examPreparation: {
          name: "امتحان الشهر الاول - فصل الاول والثاني",
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
          name: 'حل تمارين',
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
          name: "امتحان الشهر الاول - فصل الاول والثاني",
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
          name: 'لا اعلم, سيتم النشر قريباً.',
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
          name: "امتحان الشهر الاول - فصل الاول والثاني",
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
            ar: "الاحد",
            en: "sunday"
          },
          number: 1,
          drs: 5
        },
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
          name: 'حفظ الي اخذناه.',
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
          name: "امتحان الشهر الاول - فصل الاول والثاني",
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
          name: 'حل تمارين',
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
          name: "امتحان الشهر الاول - فصل الاول والثاني",
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
          name: 'تكملة من متطلبات الغذاء الى نهاية الفصل, وحل اسئله الفصل الاول.',
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
          name: "امتحان الشهر الاول - فصل الاول والثاني",
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
          name: 'من الكتل الهوائية الى الطقس القاسي ما داخل.',
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
          name: "امتحان الشهر الاول - فصل الاول والثاني",
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
          name: 'حل تمارين',
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
          name: "امتحان الشهر الاول - فصل الاول والثاني",
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
          name: 'حل تمارين',
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
          name: "امتحان الشهر الاول - فصل الاول والثاني",
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
          name: 'حل تمارين',
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
          name: "امتحان الشهر الاول - فصل الاول والثاني",
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
    // End Paint
  ]
}
export function drsAndDay(drs:number, dayNumber: number) {
  const table = GetTheClassTable()
  let list = table.filter(subject => subject.day.some(das => das.drs === drs && das.number === dayNumber))
  return list
}