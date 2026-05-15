export type BulletSection = {
  englishHeading: string;
  persianLead?: string;
  bullets: string[];
};

export type Chapter = {
  id: string;
  englishTitle: string;
  persianNarrative?: string;
  sections?: BulletSection[];
};

export const proposalChapters: Chapter[] = [
  {
    id: "introduction",
    englishTitle: "Project Introduction",
    persianNarrative:
      "این پروژه با هدف طراحی و اجرای یک مسیر بازاریابی متفاوت برای برند SPM تعریف شده است؛ مسیری که علاوه بر افزایش فروش، جایگاه برند را به‌عنوان یک انتخاب تخصصی و حرفه‌ای در ذهن مخاطب تثبیت می‌کند.",
    sections: [
      {
        englishHeading: "Project Introduction",
        persianLead: "خلاصه مسیر اجرایی پروژه:",
        bullets: [
          "هم‌راستاسازی پیام برند با نیاز واقعی بازار قهوه",
          "تمرکز بر آموزش نگهداری تجهیزات و مصرف صحیح شوینده تخصصی",
          "ایجاد پل مستقیم بین آگاهی مخاطب و تصمیم خرید",
        ],
      },
    ],
  },
  {
    id: "why",
    englishTitle: "Why This Project Exists",
    persianNarrative:
      "برند SPM با وجود کیفیت مناسب محصولات، هنوز در بخش بزرگی از بازار به‌عنوان یک برند تخصصی شناخته نشده است و نیاز به یک روایت یکپارچه و عملیاتی دارد.",
    sections: [
      {
        englishHeading: "Why This Project Exists",
        persianLead: "شکاف‌های اصلی فعلی بازار:",
        bullets: [
          "شناخت ناکافی مخاطبان از کاربرد تخصصی محصولات",
          "ابهام در تفاوت SPM با شوینده‌های عمومی و غیرتخصصی",
          "درک پایین نسبت به اهمیت نگهداری استاندارد تجهیزات قهوه",
        ],
      },
    ],
  },
  {
    id: "overview",
    englishTitle: "Brand Overview — SPM",
    persianNarrative: "SPM یک برند تخصصی در حوزه شوینده‌های دستگاه‌های قهوه و اسپرسو است که تمرکز آن روی کارایی، ایمنی و دوام تجهیزات قرار دارد.",
    sections: [
      {
        englishHeading: "Brand Overview — SPM",
        persianLead: "محصولات این برند شامل:",
        bullets: ["شوینده تجهیزات قهوه", "شوینده دستگاه اسپرسو", "شوینده آسیاب قهوه", "محصولات نگهداری تجهیزات کافه"],
      },
      {
        englishHeading: "Key Advantages",
        persianLead: "مزیت‌های کلیدی برند:",
        bullets: ["دارای سیب سلامت", "کیفیت رقابتی با نمونه‌های خارجی", "قیمت اقتصادی‌تر نسبت به برندهای وارداتی", "تمرکز تخصصی روی حوزه قهوه"],
      },
    ],
  },
  {
    id: "audience",
    englishTitle: "Target Audience",
    persianNarrative: "مخاطب هدف پروژه به دو گروه حرفه‌ای و خانگی تقسیم می‌شود تا پیام، محتوا و پیشنهاد فروش برای هر گروه متناسب طراحی شود.",
    sections: [
      {
        englishHeading: "Target Audience",
        persianLead: "دسته‌بندی اصلی مخاطبان:",
        bullets: ["مخاطبان حرفه‌ای بازار قهوه", "مصرف‌کنندگان خانگی تجهیزات قهوه", "کاربران حساس به کیفیت و نگهداری", "خریداران فعال در بسترهای آنلاین"],
      },
      {
        englishHeading: "Professional Users",
        persianLead: "مخاطبان حرفه‌ای شامل:",
        bullets: ["کافه‌ها", "باریستاها", "مجموعه‌های تخصصی قهوه", "مصرف‌کنندگان حرفه‌ای تجهیزات اسپرسو"],
      },
      {
        englishHeading: "Home Users",
        persianLead: "مخاطبان خانگی شامل:",
        bullets: ["مصرف‌کنندگان دستگاه‌های اسپرسو خانگی", "علاقه‌مندان به قهوه", "کاربران تجهیزات دم‌آوری خانگی", "خریداران آنلاین محصولات نگهداری"],
      },
    ],
  },
  {
    id: "foundation",
    englishTitle: "Strategic Foundation",
    persianNarrative: "استراتژی اصلی پروژه بر پایه ساخت جایگاه تخصصی برای برند SPM و ایجاد اعتماد پایدار میان مخاطبان حرفه‌ای و خانگی طراحی شده است.",
    sections: [
      {
        englishHeading: "Strategic Foundation",
        persianLead: "ستون‌های بنیادین استراتژی:",
        bullets: ["تبدیل SPM به انتخاب حرفه‌ای بازار", "افزایش اعتماد مخاطب", "رشد فروش بازار", "توسعه آگاهی برند"],
      },
    ],
  },
  {
    id: "structure",
    englishTitle: "Strategy Structure",
    persianNarrative: "ساختار استراتژی با اتصال تحقیق، تحلیل مخاطب و مسیر ارتباطی شکل می‌گیرد تا هر فاز خروجی قابل سنجش داشته باشد.",
    sections: [
      {
        englishHeading: "Strategy Structure",
        persianLead: "اجزای ساختار راهبردی:",
        bullets: ["بازارشناسی و تحلیل رقبا", "تقسیم‌بندی دقیق مخاطب", "طراحی پیام و لحن ارتباطی", "تبدیل تحلیل به برنامه اجرایی"],
      },
      {
        englishHeading: "Market Research",
        persianLead: "تحلیل بازار با تمرکز بر:",
        bullets: ["بررسی رفتار مصرف‌کننده", "تحلیل بازار قهوه", "تحلیل رقبا", "شناسایی فرصت‌های بازار"],
      },
      {
        englishHeading: "Audience Analysis",
        persianLead: "تحلیل دقیق رفتار مخاطب:",
        bullets: ["دغدغه‌ها", "نیازها", "رفتار خرید", "سبک استفاده از تجهیزات"],
      },
      {
        englishHeading: "Communication Strategy",
        persianLead: "طراحی لحن و مسیر ارتباطی برند بر اساس:",
        bullets: ["تخصص", "اعتماد", "کیفیت", "تجربه حرفه‌ای"],
      },
    ],
  },
  {
    id: "awareness",
    englishTitle: "Awareness Phase",
    persianNarrative: "هدف این فاز افزایش آگاهی مخاطبان نسبت به اهمیت نگهداری تجهیزات و معرفی SPM به‌عنوان راهکار تخصصی است.",
    sections: [
      {
        englishHeading: "Awareness Phase",
        persianLead: "خروجی‌های مورد انتظار در فاز آگاهی:",
        bullets: ["افزایش دسترسی مخاطب به محتوای تخصصی", "افزایش جست‌وجوی برند در بسترهای دیجیتال", "تقویت اعتبار آموزشی برند", "توسعه جامعه مخاطبان علاقه‌مند"],
      },
      {
        englishHeading: "Public Relations",
        persianLead: "تولید محتوای آموزشی و تخصصی شامل:",
        bullets: ["مقالات آموزشی", "محتوای نگهداری تجهیزات", "محتوای افزایش عمر دستگاه", "محتوای تخصصی حوزه قهوه"],
      },
      {
        englishHeading: "Social Media",
        persianLead: "فعالیت مستمر در شبکه‌های اجتماعی:",
        bullets: ["تولید محتوای آموزشی", "محتوای برندینگ", "ویدیوهای کوتاه", "معرفی کاربرد محصولات", "تعامل با مخاطبان"],
      },
      {
        englishHeading: "Digital Activities",
        persianLead: "فعالیت‌های دیجیتال شامل:",
        bullets: ["کمپین‌های دیجیتال", "تبلیغات آنلاین", "همکاری با اینفلوئنسرها", "تبلیغات هدفمند"],
      },
    ],
  },
  {
    id: "positioning",
    englishTitle: "Positioning Phase",
    persianNarrative: "هدف این مرحله تثبیت SPM به‌عنوان یک برند حرفه‌ای و تخصصی در ذهن مخاطب است.",
    sections: [
      {
        englishHeading: "Positioning Phase",
        persianLead: "خروجی‌های جایگاه‌سازی برند:",
        bullets: ["افزایش ترجیح برند در خرید", "کاهش مقایسه با گزینه‌های عمومی", "ایجاد اعتماد تخصصی پایدار", "ارتقای تصویر حرفه‌ای برند"],
      },
      {
        englishHeading: "Brand Positioning Goals",
        persianLead: "اهداف جایگاه‌سازی:",
        bullets: ["ایجاد اعتماد تخصصی", "افزایش اعتبار برند", "فاصله گرفتن از شوینده‌های عمومی", "تثبیت کیفیت برند"],
      },
      {
        englishHeading: "Positioning Methods",
        persianLead: "روش‌های اجرایی جایگاه‌سازی:",
        bullets: ["استانداردسازی پیام برند در تمام کانال‌ها", "استفاده از روایت مبتنی بر تجربه مصرف", "تاکید بر شواهد کیفیت و ایمنی", "نمایش موردی کاربرد محصول در محیط واقعی"],
      },
      {
        englishHeading: "Collaboration & Endorsement",
        persianLead: "همکاری با:",
        bullets: ["کافه‌ها", "باریستاها", "فعالان حوزه قهوه", "برندهای معتبر"],
      },
      {
        englishHeading: "Campaign Design",
        persianLead: "طراحی کمپین‌هایی با محور:",
        bullets: ["تخصص", "کیفیت", "تجربه حرفه‌ای", "نگهداری صحیح تجهیزات"],
      },
    ],
  },
  {
    id: "advertising",
    englishTitle: "Advertising Phase",
    persianNarrative: "تمرکز این فاز روی طراحی مسیر تبلیغاتی مؤثر برای رشد فروش بازار است.",
    sections: [
      {
        englishHeading: "Advertising Phase",
        persianLead: "چارچوب اجرایی فاز تبلیغات:",
        bullets: ["ترکیب رسانه‌های آنلاین و آفلاین", "پوشش نقاط تماس کلیدی مخاطب", "تمرکز بر پیام مزیت رقابتی", "هم‌راستاسازی تبلیغ با فروش"],
      },
      {
        englishHeading: "Media Planning",
        persianLead: "طراحی و اجرای تبلیغات در:",
        bullets: ["دیجیکالا", "اسنپ‌فود", "اسنپ‌مارکت", "اکالا", "تبلیغات آنلاین", "تبلیغات محیطی"],
      },
      {
        englishHeading: "Advertising Goals",
        persianLead: "هدف‌های تبلیغاتی:",
        bullets: ["افزایش دیده‌شدن برند", "افزایش آگاهی بازار", "رشد فروش", "تقویت جایگاه برند"],
      },
    ],
  },
  {
    id: "sell",
    englishTitle: "Sell Phase",
    persianNarrative: "این فاز روی تبدیل آگاهی به فروش مستقیم تمرکز دارد و خروجی آن بهینه‌سازی نرخ تبدیل در نقطه خرید است.",
    sections: [
      {
        englishHeading: "Sell Phase",
        persianLead: "اهرم‌های اصلی تبدیل فروش:",
        bullets: ["قدرت نمایش محصول در لحظه تصمیم", "تجربه واقعی مصرف پیش از خرید", "پیشنهاد فروش ترکیبی", "تحریک خرید با پروموشن هدفمند"],
      },
      {
        englishHeading: "POS",
        persianLead: "فعالیت‌های فروشگاهی شامل:",
        bullets: ["طراحی POS", "استند", "ابزارهای فروشگاهی", "نمایش برند در نقطه فروش"],
      },
      {
        englishHeading: "Sampling & Bundle",
        persianLead: "طراحی:",
        bullets: ["باندل‌های فروش", "سمپلینگ", "پیشنهادهای ترکیبی", "تجربه مستقیم محصول"],
      },
      {
        englishHeading: "Promotion",
        persianLead: "فعالیت‌های پروموشنال شامل:",
        bullets: ["تخفیف", "کمپین فروش", "پیشنهادهای ویژه", "فعال‌سازی فروش"],
      },
    ],
  },
  {
    id: "kpi",
    englishTitle: "Budget & KPI",
    persianNarrative: "بودجه‌بندی و سنجش عملکرد به‌صورت مرحله‌ای تعریف می‌شود تا اثربخشی هر اقدام به‌طور شفاف ارزیابی شود.",
    sections: [
      {
        englishHeading: "Budget & KPI",
        persianLead: "شاخص‌های اصلی پروژه:",
        bullets: ["Impression", "View", "CTR", "Click", "Engagement", "Page View"],
      },
    ],
  },
  {
    id: "outcome",
    englishTitle: "Expected Outcome",
    persianNarrative: "نتیجه مورد انتظار پروژه ایجاد رشد پایدار فروش همراه با تقویت جایگاه تخصصی برند SPM در ذهن بازار است.",
    sections: [
      {
        englishHeading: "Expected Outcome",
        persianLead: "دستاوردهای کلیدی نهایی:",
        bullets: ["افزایش فروش بازار", "افزایش آگاهی برند", "تبدیل SPM به انتخاب تخصصی بازار", "ایجاد جایگاه حرفه‌ای برای برند", "توسعه ارتباط مؤثر با مخاطب"],
      },
    ],
  },
];
