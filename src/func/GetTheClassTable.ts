type Preparation = {
  name: string;
  sure: {
    name: string, 
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
        name: 'مراجعة على الي اخذناه.',
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
      },

      examPreparation: {
        name: "امتحان الشهر الاول - فصل الاول والثاني",
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
        name: `ادب: من الوحدة الرابعة الى عبد الحميد الكاتب  ما داخل.`,
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
        name: 'P.46 B C Dو P.47 E Fو انشاء عن الانترنيت مدري عن الهاتف',
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
          name: "مصطفى نسيم",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الاول - لم يحدد بعد",
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
          name: 'تحضير نيوتن الثالث.',
          sure: {
            name: "", 
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
          name: "امتحان الشهر الاول - فصل الاول والثاني",
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
        name: 'حفظ الي اخذناه, ويفضل قرائة التهجين (غير مجبور ان تقراه).',
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
          name: "",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الاول - فصل الاول والثاني",
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
        name: 'الفصل الثاني - من البداية حتى تنفس النباتات ما داخل, حل اسئلة الفصل الاول.',
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
          name: "",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الاول - فصل الاول والثاني",
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
          name: "",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الاول - فصل الاول والثاني",
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
        name: 'حل تمارين',
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
          name: "",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الاول - فصل الاول والثاني",
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
        name: 'الفصل الثاني - الدرس الاول - اكسل - 28 و29 و30 و31.',
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
          name: "",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الاول - فصل الاول والثاني",
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
          name: "",
          logic: false
        }
      },

      examPreparation: {
        name: "امتحان الشهر الاول - فصل الاول والثاني",
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
        name: "يعني رياضة يعني شتريد مثلا,",
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
          name: "",
          logic: false
        }
      },

      examPreparation: {
        name: "",
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