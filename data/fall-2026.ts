export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const courses = [
  // =========================
  // Monday
  // =========================
  {
    day: "Monday",
    start: "08:30",
    end: "09:50",
    name: "AIE 1001 - L03",
    type: "讲演",
    location: "Teaching Complex B206",
    locationImage: "/images/locations/aie-1001-l03.jpg",
    audit: false,

    courseName: "人工智能编程导论",
    credits: "3 units",
    grading: "Graded",
    description:
      "本课程旨在培养本科生的基础编程能力，并引导学生入门人工智能应用。课程专为没有编程经验的初学者设计，以 Python 作为主要教学语言，从变量、数据类型、函数到面向对象编程等基础概念循序渐进地讲解，帮助学生打下扎实的编程基础。同时，课程还会简单引入数据结构的概念，培养学生编写模块化、可复用代码的能力。课程中后期将逐步引导学生进入人工智能编程阶段，内容包括使用 NumPy 等进行数据处理，实现基础的图像处理与自然语言处理任务，并了解使用先进人工智能工具，如 ChatGPT。通过本课程的学习，学生将建立起扎实的 Python 编程基础和初步的人工智能实践能力，为后续深入人工智能的学习奠定坚实基础。",
    teacher: "马文静",
    homepage: "https://sai.cuhk.edu.cn/zh-hans/teacher/210",
  },
  {
    day: "Monday",
    start: "10:30",
    end: "11:50",
    name: "ECO 2011 - L06",
    type: "讲演",
    location: "Teaching Complex C302",
    locationImage: "/images/locations/aie-1901-s06.jpg",
    audit: true,

    courseName: "微观经济学导论",
    credits: "3 units",
    grading: "Graded",
    description:
      "本科讲授个体经济概念，主题包括：消费者偏好及决策、需求理论及应用、企业理论、局部均衡中之完全竞争、垄断、寡头垄断、基本博弈论、一般竞争性均衡、福利经济学及市场失灵。",
    teacher: "叶立新、郑艺颖",
    homepages: [
      "https://myweb.cuhk.edu.cn/lixinye/Home/Research",
      "https://myweb.cuhk.edu.cn/emilyzheng/Home/Research",
    ],
  },
  {
    day: "Monday",
    start: "13:30",
    end: "15:20",
    name: "MAT 1001 - L02",
    type: "讲演",
    location: "Teaching Complex A402",
    locationImage: "/images/locations/mat-1001-l02.jpg",
    audit: false,

    courseName: "微积分（一）",
    credits: "3 units",
    grading: "Graded",
    description:
      "本课程教授一元微积分，强调对微积分的直观和概念性的理解，培养学生的计算能力和应用微积分解决数学与实际问题的意识和能力。",
    teacher: "刘杨",
    homepage: "https://myweb.cuhk.edu.cn/liuyang",
  },
  {
    day: "Monday",
    start: "15:30",
    end: "16:50",
    name: "MAT 2040 - L02",
    type: "讲演",
    location: "Teaching B Building 202",
    locationImage: "/images/locations/aie-1001-l03.jpg",
    audit: false,

    courseName: "线性代数",
    credits: "3 units",
    grading: "Graded",
    description:
      "本课程旨在介绍线性代数的基础概念和方法。内容包括：线性方程组，矩阵，向量，向量空间，行列式，线性变换，正交性，特征理论，二次型， 以及奇异值分解。",
    teacher: "贺冬冬",
    homepage: "https://myweb.cuhk.edu.cn/hedongdong",
  },
  {
    day: "Monday",
    start: "19:30",
    end: "20:50",
    name: "MAT 1001 - T08",
    type: "指导教学",
    location: "Teaching A Building 309",
    locationImage: "/images/locations/mat-1001-t08.jpg",
    audit: false,
  },

  // =========================
  // Tuesday
  // =========================
  {
    day: "Tuesday",
    start: "08:30",
    end: "10:20",
    name: "PED 1113 - L01",
    type: "讲演",
    location: "Sports Complex SF",
    locationImage: "/images/locations/ped-1113-l01.jpg",
    audit: false,

    courseName: "足球",
    credits: "1 unit",
    grading: "Graded",
    description:
      "体育与健康课程是香港中文大学（深圳）的一门核心课程，它分为两个部分，即：（一）体育，（二）体适能与健康）。足球是体育模块中的课程之一。足球被誉为“世界第一运动”，是一项主要用脚完成技术动作为核心的团队竞技运动。比赛由两队进行对抗，以攻入对方球门的进球数决定胜负。本课程主要教授体适能基本理论（涵盖身体成分分析与运动处方设计）和足球基础理论与专项技能：学习足球运动发展历史、核心规则及实践技术（如控运球、传球、射门等）。课程旨在激发学生对足球运动的兴趣与爱好，促进身心健康发展，并培养团队协作意识与能力。",
    teacher: "王琛",
    homepage: "https://myweb.cuhk.edu.cn/wangchen",
  },
  {
    day: "Tuesday",
    start: "10:30",
    end: "11:50",
    name: "ENG 1001 - L12",
    type: "讲演",
    location: "Teaching D Building 109",
    locationImage: "/images/locations/aie-1001-t02.jpg",
    audit: false,

    courseName: "基础英语",
    credits: "3 units",
    grading: "Graded",
    description:
      "基础英语课程(EBP)作为英语课程系列（共四门）中的第一门，旨在提高学生的英语听说读写能力。课程目标是学生能够使用英语在学术环境中进行准确、有效且自信的沟通。为实现这一目标，本课程将通过融合听说读写各项技能的系列作业来帮助学生系统地学习英语。各项作业由浅入深、循序渐进，不断增加学生所学知识与技巧。课程将涵盖词形、句子语法、写作过程、段落和文章组织、写作风格、引用材料、阅读技巧、听力技巧和演讲技巧等一系列重要内容。本课程为学生精选了以主题分类的富有挑战性的阅读材料和视频，能帮助学生提高阅读和听力水平。学生将把阅读和听力技巧运用到课堂上对指定材料及短文写作作业的讨论中。教师通过向每位学生提供这些写作及口语作业的反馈，帮助学生提高口语和写作能力。学期中，学生将在课堂上进行写作训练，并撰写一篇个人自传式论文（堂上写作）和一篇回应性论文（与期末阅读理解考试相结合的堂上考核）。学生还会进行演讲练习，并进行一次正式课堂演讲（计分并带问答环节）以及期末听力考试。",
    teacher: "吴菁轩",
    homepage: "https://myweb.cuhk.edu.cn/wujingxuan",
  },
  {
    day: "Tuesday",
    start: "15:30",
    end: "16:50",
    name: "CHI 1000 - L14",
    type: "讲演",
    location: "Teaching C Building 108",
    locationImage: "/images/locations/chi-1000-l14.jpg",
    audit: false,

    courseName: "大学中文",
    credits: "3 units",
    grading: "Graded",
    description:
      "本课旨在训练和提高学生运用中文、分析作品的能力，扩大其语言文化视野。内容包括：（1）不同文体文章赏析与写作；（2）口头表达训练；（3）中国语言文学知识。",
    teacher: "林成川",
    homepage: "https://myweb.cuhk.edu.cn/linchengchuan",
  },
  {
    day: "Tuesday",
    start: "19:00",
    end: "19:50",
    name: "AIE 1001 - T02",
    type: "指导教学",
    location: "Teaching D Building 102",
    locationImage: "/images/locations/aie-1001-t02.jpg",
    audit: false,
  },

  // =========================
  // Wednesday
  // =========================
  {
    day: "Wednesday",
    start: "08:30",
    end: "09:50",
    name: "AIE 1001 - L03",
    type: "讲演",
    location: "Teaching Complex B206",
    locationImage: "/images/locations/aie-1001-l03.jpg",
    audit: false,

    courseName: "人工智能编程导论",
    credits: "3 units",
    grading: "Graded",
    description:
      "本课程旨在培养本科生的基础编程能力，并引导学生入门人工智能应用。课程专为没有编程经验的初学者设计，以 Python 作为主要教学语言，从变量、数据类型、函数到面向对象编程等基础概念循序渐进地讲解，帮助学生打下扎实的编程基础。同时，课程还会简单引入数据结构的概念，培养学生编写模块化、可复用代码的能力。课程中后期将逐步引导学生进入人工智能编程阶段，内容包括使用 NumPy 等进行数据处理，实现基础的图像处理与自然语言处理任务，并了解使用先进人工智能工具，如 ChatGPT。通过本课程的学习，学生将建立起扎实的 Python 编程基础和初步的人工智能实践能力，为后续深入人工智能的学习奠定坚实基础。",
    teacher: "马文静",
    homepage: "https://sai.cuhk.edu.cn/zh-hans/teacher/210",
  },
  {
    day: "Wednesday",
    start: "10:30",
    end: "11:50",
    name: "ECO 2011 - L06",
    type: "讲演",
    location: "Teaching Complex C302",
    locationImage: "/images/locations/aie-1901-s06.jpg",
    audit: true,

    courseName: "微观经济学导论",
    credits: "3 units",
    grading: "Graded",
    description:
      "本科讲授个体经济概念，主题包括：消费者偏好及决策、需求理论及应用、企业理论、局部均衡中之完全竞争、垄断、寡头垄断、基本博弈论、一般竞争性均衡、福利经济学及市场失灵。",
    teacher: "叶立新、郑艺颖",
    homepages: [
      "https://myweb.cuhk.edu.cn/lixinye/Home/Research",
      "https://myweb.cuhk.edu.cn/emilyzheng/Home/Research",
    ],
  },
  {
    day: "Wednesday",
    start: "13:30",
    end: "15:20",
    name: "MAT 1001 - L02",
    type: "讲演",
    location: "Teaching Complex A402",
    locationImage: "/images/locations/mat-1001-l02.jpg",
    audit: false,

    courseName: "微积分（一）",
    credits: "3 units",
    grading: "Graded",
    description:
      "本课程教授一元微积分，强调对微积分的直观和概念性的理解，培养学生的计算能力和应用微积分解决数学与实际问题的意识和能力。",
    teacher: "刘杨",
    homepage: "https://myweb.cuhk.edu.cn/liuyang",
  },
  {
    day: "Wednesday",
    start: "15:30",
    end: "16:50",
    name: "MAT 2040 - L02",
    type: "讲演",
    location: "Teaching B Building 202",
    locationImage: "/images/locations/aie-1001-l03.jpg",
    audit: false,

    courseName: "线性代数",
    credits: "3 units",
    grading: "Graded",
    description:
      "本课程旨在介绍线性代数的基础概念和方法。内容包括：线性方程组，矩阵，向量，向量空间，行列式，线性变换，正交性，特征理论，二次型， 以及奇异值分解。",
    teacher: "贺冬冬",
    homepage: "https://myweb.cuhk.edu.cn/hedongdong",
  },
  {
    day: "Wednesday",
    start: "18:00",
    end: "20:50",
    name: "CEC 1000 - L11",
    type: "讲演",
    location: "Teaching Complex C302",
    locationImage: "/images/locations/aie-1901-s06.jpg",
    audit: false,

    courseName: "思想道德与法治",
    credits: "3 units",
    grading: "Distinction/Pass/Failure",
    description:
      "本课程致力于引导学生成为一个有理想信念、有道德意识和法治意识的合格公民。通过将课程理论与学生的日常生活联系在一起，探讨与学生生活息息相关的道德修养问题、法治问题，帮助学生获得切实的学习及生活指导，树立正确的世界观和人生观。同时，在了解世界、了解社会、了解中国发展的过程中，促使学生形成更强的责任意识，更加关心社会发展问题，关心中国的命运与前途。",
    teacher: "王薛时",
    homepage: "https://myweb.cuhk.edu.cn/wangxueshi",
  },

  // =========================
  // Thursday
  // =========================
  {
    day: "Thursday",
    start: "10:30",
    end: "11:50",
    name: "ENG 1001 - L12",
    type: "讲演",
    location: "Teaching D Building 109",
    locationImage: "/images/locations/aie-1001-t02.jpg",
    audit: false,

    courseName: "基础英语",
    credits: "3 units",
    grading: "Graded",
    description:
      "基础英语课程(EBP)作为英语课程系列（共四门）中的第一门，旨在提高学生的英语听说读写能力。课程目标是学生能够使用英语在学术环境中进行准确、有效且自信的沟通。为实现这一目标，本课程将通过融合听说读写各项技能的系列作业来帮助学生系统地学习英语。各项作业由浅入深、循序渐进，不断增加学生所学知识与技巧。课程将涵盖词形、句子语法、写作过程、段落和文章组织、写作风格、引用材料、阅读技巧、听力技巧和演讲技巧等一系列重要内容。本课程为学生精选了以主题分类的富有挑战性的阅读材料和视频，能帮助学生提高阅读和听力水平。学生将把阅读和听力技巧运用到课堂上对指定材料及短文写作作业的讨论中。教师通过向每位学生提供这些写作及口语作业的反馈，帮助学生提高口语和写作能力。学期中，学生将在课堂上进行写作训练，并撰写一篇个人自传式论文（堂上写作）和一篇回应性论文（与期末阅读理解考试相结合的堂上考核）。学生还会进行演讲练习，并进行一次正式课堂演讲（计分并带问答环节）以及期末听力考试。",
    teacher: "吴菁轩",
    homepage: "https://myweb.cuhk.edu.cn/wujingxuan",
  },
  {
    day: "Thursday",
    start: "13:30",
    end: "15:20",
    name: "AIE 1901 - S06",
    type: "监督",
    location: "Teaching Complex C501",
    locationImage: "/images/locations/aie-1901-s06.jpg",
    audit: false,

    courseName: "人工智能探索（一）- 运筹学中的大语言模型",
    credits: "2 units",
    grading: "Graded",
    description:
      '本课程系列（AIE1901-AIE1904）以"项目实践"为核心教学模式，通过阶梯式项目设计满足学生在不同学习阶段对人工智能技术的需求，旨在培养学生对 AI 的兴趣及使用 AI 工具解决具体问题的能力。在 14 周系统化学习中，学生将在导师指导下初步了解人工智能技术的基本原理和工具使用，初步掌握人工智能技术在多个领域的应用场景和可以赋能解决的实际问题。课程深度融合前沿技术案例与科研实践课题，着力培养学生的跨学科思维与创新能力。针对编程零基础学生，课程特别设置"零代码 AI 开发"相关的项目，帮助学生在无需编写代码的前提下，掌握 AI 工具的实践应用，使所有学生都能将人工智能技术有效融入日常学习与研究实践。AIE1901 是该系列课程的第一门。',
    teacher: "王捷",
    homepage: "https://sai.cuhk.edu.cn/zh-hans/teacher/150",
  },
  {
    day: "Thursday",
    start: "15:30",
    end: "16:50",
    name: "CHI 1000 - L14",
    type: "讲演",
    location: "Teaching C Building 108",
    locationImage: "/images/locations/chi-1000-l14.jpg",
    audit: false,

    courseName: "大学中文",
    credits: "3 units",
    grading: "Graded",
    description:
      "本课旨在训练和提高学生运用中文、分析作品的能力，扩大其语言文化视野。内容包括：（1）不同文体文章赏析与写作；（2）口头表达训练；（3）中国语言文学知识。",
    teacher: "林成川",
    homepage: "https://myweb.cuhk.edu.cn/linchengchuan",
  },
  {
    day: "Thursday",
    start: "19:00",
    end: "19:50",
    name: "MAT 2040 - L08",
    type: "指导教学",
    location: "Teaching B Building 301",
    locationImage: "/images/locations/mat-2040-l08.jpg",
    audit: false,
  },
];


export type CourseSession = (typeof courses)[number];
