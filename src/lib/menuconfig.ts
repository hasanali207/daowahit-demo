import {
  ArrowLeftRight,
  Banknote,
  BanknoteArrowDown,
  BanknoteArrowUp,
  BarChart3,
  BookOpen,
  BookText,
  Brush,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  CalendarRange,
  ChevronsLeft,
  ClipboardList,
  Clock3,
  CreditCard,
  DollarSignIcon,
  Download,
  FileBarChart,
  FileDown,
  FileIcon,
  FilePlus,
  FileText,
  Fingerprint,
  GlobeIcon,
  GraduationCap,
  HandHelping,
  HeartHandshake,
  Home,
  IdCard,
  Image,
  KeySquareIcon,
  Library,
  List,
  ListMinus,
  ListPlus,
  LogOut,
  MailOpen,
  Megaphone,
  MonitorSmartphone,
  NotebookPen,
  NotebookPenIcon,
  PenLine,
  Power,
  Presentation,
  Printer,
  Settings,
  ShoppingCart,
  Stamp,
  User2Icon,
  UserCheck,
  UserCog,
  UserPlus,
  UserRound,
  UserRoundSearch,
  Users,
  Wallet,
} from "lucide-react";
interface MenuItem {
  name: string; // Menu item এর নাম
  icon: any; // Icon component
  href?: string; // সাধারণ লিঙ্ক
  sub?: MenuItem[]; // Dropdown sub items
  protectedPath?: string; // Protected route এর path
}

export const menus: Record<string, MenuItem[]> = {
  admin: [
    { name: "ড্যাশবোর্ড", icon: Home, href: "/admin" },
    {
      name: "সেশন",
      icon: CalendarClock,
      sub: [
        { name: "নতুন সেশন", icon: CalendarDays, href: "/admin/session" },
        {
          name: "নতুন শ্রেণি যোগ",
          icon: CalendarDays,
          href: "/admin/addclass",
        },
        { name: "কিতাবসমূহ", icon: FileDown, href: "/admin/subjects" },
      ],
    },
    {
      name: "শিক্ষার্থী",
      icon: Users,
      sub: [
        {
          name: "নতুন শিক্ষার্থী ভর্তি",
          icon: UserPlus,
          href: "/admin/addstudent",
        },
        {
          name: "সকল শিক্ষার্থী",
          icon: UserRoundSearch,
          href: "/admin/student",
        },
        {
          name: "ক্লাসওয়ারী পেমেন্ট রিপোর্ট",
          icon: UserRoundSearch,
          href: "/admin/classledger",
        },
        { name: "ক্লাস ভর্তি", icon: NotebookPen, href: "/admin/admission" },
        { name: "ডাটা ডাউনলোড", icon: FileDown, href: "/admin/downlaod" },
      ],
    },
    {
      name: "পরীক্ষা",
      icon: BookOpen,
      sub: [
        { name: "পরীক্ষার নাম", href: "/admin/examname", icon: BookOpen },
        {
          name: "পরীক্ষার বিষয় সমূহ",
          href: "/admin/examsubjects",
          icon: BookOpen,
        },
        {
          name: "পরীক্ষা ছাত্র রেজিষ্ট্রেশন",
          href: "/admin/examstudent",
          icon: BookOpen,
        },
        { name: "এডমিট কার্ড", href: "/admin/admitcard", icon: BookOpen },
        {
          name: "পরীক্ষার সিট সিরিয়াল",
          href: "/admin/examsitserial",
          icon: BookOpen,
        },
      ],
    },
    {
      name: "ফলাফল",
      icon: BookOpen,
      sub: [
        {
          name: "গড় ফলাফল এন্ট্রি",
          href: "/admin/entryresult",
          icon: BookOpen,
        },
        { name: "ফলাফল", href: "/admin/result", icon: BookOpen },
        {
          name: "ফলাফল রিপোর্ট",
          href: "/admin/singleresult",
          icon: BookOpen,
        },
      ],
    },
    {
      name: "শিক্ষক",
      icon: Users,
      sub: [
        {
          name: "নতুন শিক্ষক ভর্তি",
          icon: UserPlus,
          href: "/admin/addteacher",
        },
        {
          name: "সকল শিক্ষক",
          icon: UserRoundSearch,
          href: "/admin/teacher",
        },
        {
          name: "দায়িত্ব বন্টন",
          icon: UserRoundSearch,
          href: "/admin/teacher/responsibilty",
        },
        {
          name: "দৈনিক দায়িত্ব এন্ট্রি",
          icon: UserRoundSearch,
          href: "/admin/teacher/dailytaskentry",
        },
        {
          name: "দৈনিক দায়িত্ব রিপোর্ট",
          icon: UserRoundSearch,
          href: "/admin/teacher/responsibilitydashboard",
        },
      ],
    },
    {
      name: "ওয়েবসাইট",
      icon: GlobeIcon,
      sub: [
        {
          name: "ব্যনার ডিজাইন",
          href: "/admin/website/banner",
          icon: Image,
        },
        {
          name: "পোস্টার যুক্ত",
          href: "/admin/website/poster",
          icon: Image,
        },
        {
          name: "নোটিশ ‍যুক্ত করুন",
          href: "/admin/website/notices",
          icon: Megaphone,
        },
        {
          name: "পড়ালেখার শিট ",
          href: "/admin/website/shits",
          icon: NotebookPenIcon,
        },
      ],
    },
    {
      name: "ডকুমেন্টস/ফরমেট",
      icon: FileIcon,
      sub: [
        {
          name: "শিট ফাইল কভার ",
          href: "/admin/shitfilecover",
          icon: NotebookPenIcon,
        },
      ],
    },
    { name: "সকল ব্যবহারকারী", icon: UserRound, href: "/admin/users" },
    { name: "প্রোফাইল", icon: Settings, href: "/admin/profile" },
    {
      name: "Settings",
      icon: Settings,
      sub: [
        {
          name: "পাসওয়ার্ড পরিবর্তন",
          icon: KeySquareIcon,
          href: "/password",
        },
      ],
    },
    { name: "বাহির", icon: ChevronsLeft, href: "/" },
    { name: "লগ আউট", icon: LogOut, href: "/logout" },
  ],

  accountant: [
    {
      name: "শিক্ষার্থী",
      icon: Users,
      sub: [
        {
          name: "নতুন শিক্ষার্থী ভর্তি",
          icon: UserPlus,
          href: "/accountant/addstudent",
        },
        {
          name: "ক্লাস ভর্তি",
          icon: NotebookPen,
          href: "/accountant/studentadmission",
        },
        {
          name: "সকল শিক্ষার্থী",
          icon: FileDown,
          href: "/accountant/allstudents",
        },
        {
          name: "ডাটা ডাউনলোড",
          icon: FileDown,
          href: "/accountant/downlaod",
        },
      ],
    },
    {
      name: "শিক্ষার্থী পেমেন্ট",
      icon: DollarSignIcon,
      sub: [
        {
          name: "ফি  এর ধরন",
          href: "/accountant/payments/feecategory",
          icon: BookOpen,
        },
        {
          name: "শ্রেণী ভিত্তিক ফি",
          href: "/accountant/payments/classfees",
          icon: BookOpen,
        },
        {
          name: "বেতন তৈরী",
          href: "/accountant/payments/payment",
          icon: BookOpen,
        },
        {
          name: "ছাত্র আলাদা ফি",
          href: "/accountant/payments/studentfees",
          icon: BookOpen,
        },
        {
          name: "এক্সট্রা ফি যুক্ত",
          href: "/accountant/payments/addextrafee",
          icon: FilePlus,
        },
        {
          name: "শিক্ষার্থী বেতন জমা",
          icon: KeySquareIcon,
          href: "/accountant/accounts/payments/mutiplemonthcash",
        },
        {
          name: "ইনভয়েস প্রিন্ট",
          icon: KeySquareIcon,
          href: "/accountant/accounts/transactioninvoice",
        },
        {
          name: "লেনদেন রিপোর্ট",
          icon: KeySquareIcon,
          href: "/accountant/payments/paidpayments",
        },
        {
          name: "ক্লাসওয়ারী রিপোর্ট",
          icon: KeySquareIcon,
          href: "/accountant/classledger",
        },
      ],
    },
    {
      name: "একাউন্টস",
      icon: Wallet,
      sub: [
        {
          name: "আয়ের খাতসমূহ",
          href: "/accountant/accounts/income/accountcategory",
          icon: ListPlus,
        },
        {
          name: "আয়ের হিসাব",
          href: "/accountant/accounts/income/accountentries",
          icon: BanknoteArrowUp,
        },
        {
          name: "আয় ব্যয় ম্যাপিং",
          href: "/accountant/accounts/mapping",
          icon: BanknoteArrowUp,
        },
        {
          name: "ব্যয়ের খাতসমূহ",
          href: "/accountant/accounts/expense/accountcategory",
          icon: ListMinus,
        },
        {
          name: "ব্যয়ের হিসাব",
          href: "/accountant/accounts/expense/accountentries",
          icon: BanknoteArrowDown,
        },
        {
          name: "আয় ব্যয় খাত রিপোর্ট",
          href: "/accountant/accounts/allocationreport",
          icon: Banknote,
        },
        {
          name: "আয় ব্যয় রিপোর্ট",
          href: "/accountant/accounts/report",
          icon: Banknote,
        },
        {
          name: "বাৎসরিক হিসাব ক্লোজিং",
          href: "/accountant/accounts/yearly",
          icon: Stamp,
        },
      ],
    },
    {
      name: "সাধারণ অনুদান",
      icon: HandHelping,
      sub: [
        {
          name: "জমা করুন",
          icon: KeySquareIcon,
          href: "/accountant/donation",
        },
        {
          name: "রিপোর্ট দেখুন",
          icon: KeySquareIcon,
          href: "/accountant/donation/report",
        },
      ],
    },
    {
      name: "মাসিক সদস্য অনুদান",
      icon: HeartHandshake,
      sub: [
        {
          name: "দাতা সদস্য তৈরি",
          icon: KeySquareIcon,
          href: "/accountant/donor/adddonor",
        },
        {
          name: "দাতা সদস্যগণ",
          icon: KeySquareIcon,
          href: "/accountant/donor/alldonor",
        },
        {
          name: "দানের পরিমাণ",
          icon: KeySquareIcon,
          href: "/accountant/donor/addamount",
        },
        {
          name: "অনুদান পেমেন্ট তৈরি",
          icon: KeySquareIcon,
          href: "/accountant/donor/generateinvoice",
        },
        {
          name: "জমা করুন",
          icon: KeySquareIcon,
          href: "/accountant/donor/receivedamount",
        },
        {
          name: "অনুদান রিপোর্ট",
          icon: KeySquareIcon,
          href: "/accountant/donor/report",
        },
      ],
    },
    {
      name: "SMS Services",
      icon: MailOpen,
      sub: [
        {
          name: "SMS Dashboard",
          icon: BarChart3,
          href: "/accountant/sms/smsconfig",
        },
        {
          name: "সকল প্রদানকৃত SMS",
          icon: KeySquareIcon,
          href: "/accountant/sms/smslogs",
        },
      ],
    },
    {
      name: "বেতন শীট",
      icon: Settings,
      sub: [
        {
          name: "আবাসিক বেতন শিট",
          icon: KeySquareIcon,
          href: "/accountant/betnsheet",
        },
        {
          name: "নূরানী বেতন শিট",
          icon: KeySquareIcon,
          href: "/accountant/nuranibetnsheet",
        },
      ],
    },
    {
      name: "Settings",
      icon: Settings,
      sub: [
        {
          name: "পাসওয়ার্ড পরিবর্তন",
          icon: KeySquareIcon,
          href: "/password",
        },
      ],
    },
    { name: "বাহির", icon: ChevronsLeft, href: "/" },
    { name: "লগ আউট", icon: LogOut, href: "/logout" },
  ],

  teacher: [
    { name: "ড্যাশবোর্ড", icon: Home, href: "/teacher" },
    {
      name: "ডাটা ডাউনলোড",
      icon: BookOpen,
      href: "/teacher/download",
    },
    {
      name: "ক্লাস ওয়ারী পেমেন্ট",
      icon: KeySquareIcon,
      href: "/teacher/classledger",
    },
    {
      name: "ছুট/ছাটা",
      icon: Settings,
      sub: [
        {
          name: "ছুটির আবেদন",
          icon: KeySquareIcon,
          href: "/teacher/leave/leaveapplication",
        },
        {
          name: "আমার ছুটি",
          icon: KeySquareIcon,
          href: "/teacher/leave/myleave",
        },
      ],
    },
    {
      name: "Settings",
      icon: Settings,
      sub: [
        {
          name: "পাসওয়ার্ড পরিবর্তন",
          icon: KeySquareIcon,
          href: "/password",
        },
      ],
    },

    { name: "বাহির", icon: ChevronsLeft, href: "/" },
    { name: "লগ আউট", icon: LogOut, href: "/logout" },
  ],

  student: [
    { name: "ড্যাশবোর্ড", icon: Home, href: "/studentdashboard" },
    { name: "ফলাফল", icon: BookOpen, href: "/studentdashboard/result" },
    {
      name: "পেমেন্ট তথ্য",
      icon: Home,
      href: "/studentdashboard/mypayments",
    },
    { name: "প্রোফাইল", icon: Settings, href: "/studentdashboard/profile" },
    {
      name: "Settings",
      icon: Settings,
      sub: [
        {
          name: "পাসওয়ার্ড পরিবর্তন",
          icon: KeySquareIcon,
          href: "/password",
        },
      ],
    },
    { name: "বাহির", icon: ChevronsLeft, href: "/" },
    { name: "লগ আউট", icon: LogOut, href: "/logout" },
  ],

  donor: [
    { name: "ড্যাশবোর্ড", icon: Home, href: "/studentdashboard" },
    {
      name: "পেমেন্ট তথ্য",
      icon: Home,
      href: "/donordashboard/mypayments",
    },
    { name: "প্রোফাইল", icon: Settings, href: "/donordashboard/profile" },
    {
      name: "Settings",
      icon: Settings,
      sub: [
        {
          name: "পাসওয়ার্ড পরিবর্তন",
          icon: KeySquareIcon,
          href: "/password",
        },
      ],
    },
    { name: "বাহির", icon: ChevronsLeft, href: "/" },
    { name: "লগ আউট", icon: LogOut, href: "/logout" },
  ],

  super_admin: [
    { name: "ড্যাশবোর্ড", icon: Home, href: "/superadmin" },
    {
      name: "মোহতামীম প্রোফাইল",
      icon: Home,
      sub: [
        {
          name: "প্রাতিষ্ঠানিক গঠনতন্ত্র",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: "মজলিসে শুরা",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: "মজলিসে আমেলা",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: " উপজেলা নির্বাহী পরিচিতি",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: "প্রশাসন থানা পরিচিতি",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: "সহযোগী দ্বায়ী ডাটা",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: "নওমুসলিম ডাটা",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: "চাকুরীজীবী অভিভাবক",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: "রাজনৈতিক অভিভাবক",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: "ব্যবসায়িক অভিভাবক",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: "নোয়াফিক এলাকাবাসী",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: "ফায়ার সার্ভিস",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: "ইলেকট্রিক মিস্ত্রী",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: "নির্মাণ মিস্ত্রি",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: "ফিটিং ও প্লামবার",
          icon: Home,
          href: "/superadmin",
        },
        {
          name: "শিক্ষক কোয়াটার নিতীমালা",
          icon: Home,
          href: "/superadmin",
        },
      ],
    },
    {
      name: "শিক্ষক প্রোফাইল",
      icon: Users,
      sub: [
        {
          name: "শিক্ষক প্রোফাইল তৈরি",
          icon: UserPlus,
          href: "/superadmin/admin/addteacher",
        },
        {
          name: "শিক্ষক বায়োডাটা",
          icon: UserRoundSearch,
          href: "/superadmin/teacher/allteacher",
        },
        {
          name: "বেতন তৈরি",
          icon: UserRoundSearch,
          href: "/superadmin/teacher/createsalary",
        },
        {
          name: "শিক্ষক প্রোফাইল/বেতন তালিকা",
          icon: UserRoundSearch,
          href: "/superadmin/teacher/salarylist",
        },
        {
          name: "শিক্ষকগণের অতিরিক্ত দায়িত্ব",
          icon: UserRoundSearch,
          href: "/superadmin/teacher/responsibilitydashboard",
        },
        {
          name: "দৈনিক দায়িত্ব রিপোর্ট",
          icon: UserRoundSearch,
          href: "/superadmin/teacher/responsibilitydashboard",
        },
        {
          name: "হাজিরা",
          icon: UserRoundSearch,
          href: "/superadmin/teacher/assignshift",
        },
        {
          name: "ছুটি / ছাটা",
          icon: UserRoundSearch,
          href: "/superadmin/teacher/responsibilitydashboard",
        },
      ],
    },

    {
      name: "নাযেমে তালিমাত",
      icon: User2Icon,
      sub: [
        {
          name: "নতুন সেশন",
          icon: CalendarDays,
          href: "/superadmin/admin/session",
        },
        {
          name: "নতুন শ্রেণি যোগ",
          icon: CalendarDays,
          href: "/superadmin/admin/addclass",
        },
        {
          name: "কিতাবসমূহ",
          icon: FileDown,
          href: "/superadmin/admin/subjects",
        },
        {
          name: "নতুন শিক্ষার্থী ভর্তি",
          icon: UserPlus,
          href: "/superadmin/admin/addstudent",
        },
        {
          name: "সকল শিক্ষার্থী",
          icon: UserRoundSearch,
          href: "/superadmin/admin/student",
        },
        {
          name: "ক্লাস ভর্তি",
          icon: NotebookPen,
          href: "/superadmin/admin/admission",
        },
        {
          name: "ডাটা ডাউনলোড",
          icon: FileDown,
          href: "/superadmin/admin/downlaod",
        },

        {
          name: "পরীক্ষার নাম",
          href: "/superadmin/admin/examname",
          icon: BookText,
        },
        {
          name: "পরীক্ষার বিষয় সমূহ",
          href: "/superadmin/admin/examsubjects",
          icon: Library,
        },
        {
          name: "পরীক্ষা ছাত্র রেজিষ্ট্রেশন",
          href: "/superadmin/admin/examstudent",
          icon: ClipboardList,
        },
        {
          name: "এডমিট কার্ড",
          href: "/superadmin/admin/admitcard",
          icon: IdCard,
        },

        {
          name: "গড় ফলাফল এন্ট্রি",
          href: "/superadmin/admin/entryresult",
          icon: PenLine,
        },
        {
          name: "ফলাফল",
          href: "/superadmin/admin/result",
          icon: FileBarChart,
        },
        {
          name: "ফলাফল রিপোর্ট",
          href: "/superadmin/admin/classwarymarksheet",
          icon: FileText,
        },
      ],
    },

    {
      name: "অফিস একাউন্টিং",
      icon: Wallet,
      sub: [
        {
          name: "শিক্ষার্থী ফি ব্যবস্থাপনা",
          icon: CreditCard,
          sub: [
            {
              name: "ফি এর ধরন",
              href: "/superadmin/accountant/payments/feecategory",
              icon: List,
            },
            {
              name: "শ্রেণী ভিত্তিক ফি",
              href: "/superadmin/accountant/payments/classfees",
              icon: GraduationCap,
            },
            {
              name: "ছাত্র আলাদা ফি",
              href: "/superadmin/accountant/payments/studentfees",
              icon: UserCog,
            },
            {
              name: "বেতন তৈরী",
              href: "/superadmin/accountant/payments/payment",
              icon: FilePlus,
            },
            {
              name: "এক্সট্রা ফি যুক্ত",
              href: "/superadmin/accountant/addextrafee",
              icon: FilePlus,
            },
            {
              name: "শিক্ষার্থী ফি গ্রহণ",
              href: "/superadmin/accountant/accounts/payments/mutiplemonthcash",
              icon: CalendarRange,
            },

            {
              name: "লেনদেন রিপোর্ট",
              href: "/superadmin/accountant/payments/paidpayments",
              icon: BarChart3,
            },
            {
              name: "ক্লাসভিত্তিক রিপোর্ট",
              href: "/superadmin/admin/classledger",
              icon: GraduationCap,
            },
          ],
        },

        // =====================================================
        // আয়-ব্যয় ব্যবস্থাপনা
        // =====================================================
        {
          name: "আয়-ব্যয় ব্যবস্থাপনা",
          icon: Wallet,
          sub: [
            {
              name: "আয়ের খাতসমূহ",
              href: "/superadmin/accountant/accounts/income/accountcategory",
              icon: ListPlus,
            },
            {
              name: "হ্যান্ড রশিদ এন্ট্রি",
              href: "/superadmin/accountant/accounts/income/accountentries",
              icon: BanknoteArrowUp,
            },
            {
              name: "আয় ব্যয় ম্যাপিং",
              href: "/superadmin/accountant/accounts/mapping",
              icon: ArrowLeftRight,
            },
            {
              name: "ব্যয়ের খাতসমূহ",
              href: "/superadmin/accountant/accounts/expense/accountcategory",
              icon: ListMinus,
            },
            {
              name: "হ্যান্ড ভাউচার এন্ট্রি",
              href: "/superadmin/accountant/accounts/expense/accountentries",
              icon: BanknoteArrowDown,
            },
            {
              name: "আয় ব্যয় খাত রিপোর্ট",
              href: "/superadmin/accountant/accounts/allocationreport",
              icon: Banknote,
            },
            {
              name: "আয়-ব্যয় রিপোর্ট",
              href: "/superadmin/accountant/accounts/report",
              icon: FileBarChart,
            },
          ],
        },

        {
          name: "কলামনার ক্যাশবুক",
          href: "/superadmin/accountant/monthreport",
          icon: BookOpen,
        },
        {
          name: "বছরব্যাপী হিসাব রিপোর্ট",
          href: "/superadmin/accountant/accounts/yearly",
          icon: CalendarDays,
        },

        {
          name: "সাধারণ অনুদান",
          icon: HandHelping,
          sub: [
            {
              name: "জমা করুন",
              icon: KeySquareIcon,
              href: "/superadmin/accountant/donation",
            },
            {
              name: "রিপোর্ট দেখুন",
              icon: KeySquareIcon,
              href: "/superadmin/accountant/donations/report",
            },
          ],
        },
        {
          name: "মাসিক সদস্য অনুদান",
          icon: HeartHandshake,
          sub: [
            {
              name: "দাতা সদস্য তৈরি",
              icon: KeySquareIcon,
              href: "/superadmin/accountant/donor/adddonor",
            },
            {
              name: "দাতা সদস্যগণ",
              icon: KeySquareIcon,
              href: "/superadmin/donor/donor_list",
            },
            {
              name: "ডাটা ডাউনলোড",
              icon: Download,
              href: "/superadmin/donor/download",
            },
            {
              name: "দানের পরিমাণ",
              icon: KeySquareIcon,
              href: "/superadmin/accountant/donor/donoramount",
            },
            {
              name: "অনুদান পেমেন্ট তৈরি",
              icon: KeySquareIcon,
              href: "/superadmin/accountant/monthlydonation/generateinvoice",
            },
            {
              name: "জমা করুন",
              icon: KeySquareIcon,
              href: "/superadmin/accountant/monthlydonation",
            },
            {
              name: "অনুদান রিপোর্ট",
              icon: KeySquareIcon,
              href: "/superadmin/accountant/monthlydonation/report",
            },
          ],
        },
        {
          name: "ইনভয়েস প্রিন্ট",
          href: "/superadmin/accountant/transactioninvoice",
          icon: Printer,
        },
      ],
    },
    {
      name: "নাযেমে দারুল ইকামাহ",
      icon: Stamp,
      sub: [
        {
          name: "নাযেমে দারুল ইকামাহ",
          icon: Stamp,
        },
      ],
    },
    {
      name: "বোডিং ডিপার্টমেন্ট",
      icon: Presentation,
      sub: [
        {
          name: "সকল বোডিং সদস্য",
          icon: Presentation,
        },
        {
          name: "বোডিং খানার হিসাব",
          icon: Presentation,
        },
        {
          name: "বোডিং খানার হাজিরা",
          icon: Presentation,
        },
      ],
    },
    {
      name: "কেয়ার টেকার",
      icon: Brush,
      sub: [
        {
          name: "কেয়ার টেকার",
          icon: Brush,
        },
      ],
    },
    {
      name: "ক্যান্টিন ব্যবস্থাপনা",
      icon: ShoppingCart,
      sub: [
        {
          name: "ক্যান্টিন ব্যবস্থাপনা",
          icon: ShoppingCart,
        },
      ],
    },

    {
      name: "ডিজিটাল হাজিরা",
      icon: Fingerprint,
      sub: [
        {
          name: "ডিভাইস কানেকশন",
          href: "/superadmin/attendance/devicestatus",
          icon: MonitorSmartphone,
        },
        {
          name: "উপস্থিতি রিপোর্ট",
          href: "/superadmin/attendance/report",
          icon: ClipboardList,
        },
        {
          name: "ডিভাইস ইউজার",
          href: "/superadmin/attendance/deviceuser",
          icon: Users,
        },
        {
          name: "ম্যানুয়াল হাজিরা",
          href: "/superadmin/attendance/manual",
          icon: UserCheck,
        },
        {
          name: "শিফট",
          href: "/superadmin/attendance/shift",
          icon: Clock3,
        },
        {
          name: "ছুটির দিন",
          href: "/superadmin/attendance/holiday",
          icon: CalendarCheck,
        },
        {
          name: "ছুটির আবেদন",
          href: "/superadmin/attendance/leave",
          icon: CalendarClock,
        },
      ],
    },
    {
      name: "ওয়েবসাইট",
      icon: GlobeIcon,
      sub: [
        {
          name: "একাডেমিক তথ্য",
          href: "/superadmin/admin/website/academicinfo",
          icon: Image,
        },
        {
          name: "ব্যনার ডিজাইন",
          href: "/superadmin/admin/website/banner",
          icon: Image,
        },
        {
          name: "পোস্টার যুক্ত",
          href: "/superadmin/admin/website/poster",
          icon: Image,
        },
        {
          name: "নোটিশ ‍যুক্ত করুন",
          href: "/superadmin/admin/website/notices",
          icon: Megaphone,
        },
        {
          name: "পড়ালেখার শিট ",
          href: "/superadmin/admin/website/shits",
          icon: NotebookPenIcon,
        },
      ],
    },
    {
      name: "ডকুমেন্টস/ফরমেট",
      icon: FileIcon,
      sub: [
        {
          name: "শিট ফাইল কভার ",
          href: "/superadmin/admin/shitfilecover",
          icon: NotebookPenIcon,
        },
        {
          name: "আবাসিক বেতন শিট",
          icon: KeySquareIcon,
          href: "/superadmin/accountant/betnsheet",
        },
        {
          name: "নূরানী বেতন শিট",
          icon: KeySquareIcon,
          href: "/superadmin/accountant/nuranibetnsheet",
        },
      ],
    },
    {
      name: "সকল ব্যবহারকারী",
      icon: UserRound,
      href: "/superadmin/admin/users",
    },
    {
      name: "SMS Services",
      icon: MailOpen,
      sub: [
        {
          name: "SMS Dashboard",
          icon: BarChart3,
          href: "/superadmin/sms/smsconfig",
        },
        {
          name: "সকল প্রদানকৃত SMS",
          icon: KeySquareIcon,
          href: "/superadmin/sms/smslogs",
        },
      ],
    },
    {
      name: "Settings",
      icon: Settings,
      sub: [
        {
          name: "পেমেন্ট সংশোধন",
          icon: UserPlus,
          protectedPath: "/superadmin/accountant/paymentmanager",
        },
        {
          name: "পেমেন্ট",
          icon: BarChart3,
          protectedPath:
            "/superadmin/accountant/accounts/payments/allstudentpayments",
        },
        {
          name: "পাসওয়ার্ড পরিবর্তন",
          icon: KeySquareIcon,
          href: "/password",
        },
        {
          name: "ট্রানজেকশন সংশোধন",
          icon: UserPlus,
          protectedPath: "/superadmin/accountant/transactionmanager",
        },
        {
          name: "নতুন ব্যবহারকারী",
          icon: UserPlus,
          href: "/superadmin/user/createuser",
        },
        {
          name: "তিজারাহ পয়েন্ট",
          icon: DollarSignIcon,
          href: "/superadmin/borrower/allborrower", // shob /borrower/* route protect korar jonne
        },
      ],
    },
    { name: "Subscription", icon: ChevronsLeft, href: "/subscription" },
    { name: "বাহির", icon: ChevronsLeft, href: "/" },
    { name: "লগ আউট", icon: Power, href: "/logout" },
  ],
};
