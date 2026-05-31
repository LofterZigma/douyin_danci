/**
 * 本地词库（共享数据源）
 * 字段说明：
 *   word        英文单词
 *   level       CET4 / CET6 / IELTS / 自定义
 *   phonetic    音标
 *   meaning     中文释义
 *   examples[]  英文例句数组；每条 { en, cn }
 *   videos[]    视频出处数组；每条 { title, source, url, timestamp, cover }
 *               规则：examples[i] 对应 videos[i]，即"一个视频出处配一条例句"
 *
 * 兼容旧字段：单条 example / video 仍可用（页面会自动包裹成数组）
 */
const WORDS = [
  {
    word: "serendipity", level: "IELTS", phonetic: "/ˌserənˈdɪpəti/",
    meaning: "n. 意外发现美好事物的能力",
    examples: [
      { en: "Meeting you here was pure serendipity.",
        cn: "在这里遇见你完全是意外的惊喜。" },
      { en: "Science is full of moments of serendipity.",
        cn: "科学发现中充满了意外的惊喜。" },
      { en: "She found her favorite book by serendipity.",
        cn: "她意外发现了自己最喜欢的那本书。" }
    ],
    videos: [
      { title: "Top 10 beautiful English words you should know", source: "TED-Ed",
        url: "https://www.youtube.com/results?search_query=serendipity+meaning",
        timestamp: "2:14", cover: "https://picsum.photos/seed/sere1/160" },
      { title: "The science of serendipity", source: "BBC Reel",
        url: "https://www.youtube.com/results?search_query=science+of+serendipity",
        timestamp: "0:48", cover: "https://picsum.photos/seed/sere2/160" },
      { title: "Bookshop serendipity – a short film", source: "Vimeo Staff Picks",
        url: "https://www.youtube.com/results?search_query=bookshop+serendipity",
        timestamp: "3:02", cover: "https://picsum.photos/seed/sere3/160" }
    ]
  },
  {
    word: "ephemeral", level: "IELTS", phonetic: "/ɪˈfemərəl/",
    meaning: "adj. 短暂的，转瞬即逝的",
    examples: [
      { en: "Fame in the digital age is ephemeral.",
        cn: "数字时代的名声是转瞬即逝的。" },
      { en: "Cherry blossoms are famously ephemeral.",
        cn: "樱花以转瞬即逝著称。" }
    ],
    videos: [
      { title: "Why everything feels ephemeral now", source: "TED-Ed",
        url: "https://www.youtube.com/results?search_query=ephemeral+meaning",
        timestamp: "4:02", cover: "https://picsum.photos/seed/eph1/160" },
      { title: "The ephemeral beauty of cherry blossoms", source: "National Geographic",
        url: "https://www.youtube.com/results?search_query=cherry+blossom+ephemeral",
        timestamp: "1:25", cover: "https://picsum.photos/seed/eph2/160" }
    ]
  },
  {
    word: "ubiquitous", level: "CET6", phonetic: "/juːˈbɪkwɪtəs/",
    meaning: "adj. 无处不在的",
    examples: [
      { en: "Smartphones have become ubiquitous in modern life.",
        cn: "智能手机在现代生活中已无处不在。" },
      { en: "Coffee shops are now ubiquitous in big cities.",
        cn: "如今咖啡店在大城市里随处可见。" }
    ],
    videos: [
      { title: "How smartphones became ubiquitous in 10 years", source: "Vox",
        url: "https://www.youtube.com/results?search_query=ubiquitous+smartphones",
        timestamp: "0:48", cover: "https://picsum.photos/seed/ubi1/160" },
      { title: "Why coffee shops are everywhere", source: "The Atlantic",
        url: "https://www.youtube.com/results?search_query=ubiquitous+coffee+shops",
        timestamp: "2:10", cover: "https://picsum.photos/seed/ubi2/160" }
    ]
  },
  {
    word: "resilient", level: "CET6", phonetic: "/rɪˈzɪliənt/",
    meaning: "adj. 有韧性的，能迅速恢复的",
    examples: [
      { en: "Children are often more resilient than adults expect.",
        cn: "孩子往往比成年人想象中更有韧性。" },
      { en: "A resilient economy can recover from shocks quickly.",
        cn: "有韧性的经济能迅速从冲击中恢复。" },
      { en: "Athletes train their bodies to be resilient.",
        cn: "运动员训练身体使其更具韧性。" }
    ],
    videos: [
      { title: "The secret to building resilience", source: "TED · Lucy Hone",
        url: "https://www.youtube.com/results?search_query=resilience+lucy+hone",
        timestamp: "5:30", cover: "https://picsum.photos/seed/res1/160" },
      { title: "Building resilient economies", source: "World Economic Forum",
        url: "https://www.youtube.com/results?search_query=resilient+economy",
        timestamp: "1:48", cover: "https://picsum.photos/seed/res2/160" },
      { title: "How athletes stay resilient under pressure", source: "Olympic Channel",
        url: "https://www.youtube.com/results?search_query=athletes+resilient",
        timestamp: "0:32", cover: "https://picsum.photos/seed/res3/160" }
    ]
  },
  {
    word: "meticulous", level: "IELTS", phonetic: "/məˈtɪkjələs/",
    meaning: "adj. 一丝不苟的，极其仔细的",
    examples: [
      { en: "She is meticulous about every detail in her work.",
        cn: "她对工作中的每一个细节都一丝不苟。" },
      { en: "The chef is meticulous about ingredients.",
        cn: "这位主厨对食材一丝不苟。" }
    ],
    videos: [
      { title: "The meticulous craft of Japanese carpentry", source: "Great Big Story",
        url: "https://www.youtube.com/results?search_query=meticulous+japanese+carpentry",
        timestamp: "2:40", cover: "https://picsum.photos/seed/met1/160" },
      { title: "Inside a meticulous three-Michelin-star kitchen", source: "Eater",
        url: "https://www.youtube.com/results?search_query=meticulous+michelin",
        timestamp: "3:15", cover: "https://picsum.photos/seed/met2/160" }
    ]
  },
  {
    word: "thrive", level: "CET4", phonetic: "/θraɪv/",
    meaning: "v. 茁壮成长，蓬勃发展",
    examples: [
      { en: "Small businesses can thrive in a supportive community.",
        cn: "小企业可以在支持性的社区中蓬勃发展。" }
    ],
    videos: [
      { title: "How small towns thrive in tough times", source: "BBC Ideas",
        url: "https://www.youtube.com/results?search_query=thrive+community",
        timestamp: "1:12", cover: "https://picsum.photos/seed/thr/160" }
    ]
  },
  {
    word: "humble", level: "CET4", phonetic: "/ˈhʌmbəl/",
    meaning: "adj. 谦逊的，普通的",
    examples: [
      { en: "He remained humble despite his success.",
        cn: "尽管取得了成功，他依然很谦逊。" },
      { en: "Many great leaders share a humble background.",
        cn: "许多伟大的领袖都有着普通的出身。" }
    ],
    videos: [
      { title: "Why humble leaders are stronger", source: "TEDx",
        url: "https://www.youtube.com/results?search_query=humble+leader+ted",
        timestamp: "3:25", cover: "https://picsum.photos/seed/hum1/160" },
      { title: "From humble beginnings: stories of success", source: "Big Think",
        url: "https://www.youtube.com/results?search_query=humble+beginnings",
        timestamp: "0:55", cover: "https://picsum.photos/seed/hum2/160" }
    ]
  },
  {
    word: "vivid", level: "CET4", phonetic: "/ˈvɪvɪd/",
    meaning: "adj. 生动的，鲜明的",
    examples: [
      { en: "Her story gave me a vivid picture of the city.",
        cn: "她的讲述让我对这座城市有了生动的印象。" }
    ],
    videos: [
      { title: "How to write vivid descriptions", source: "Reedsy",
        url: "https://www.youtube.com/results?search_query=vivid+writing",
        timestamp: "0:55", cover: "https://picsum.photos/seed/viv/160" }
    ]
  },
  {
    word: "insight", level: "CET6", phonetic: "/ˈɪnsaɪt/",
    meaning: "n. 洞察力，深刻见解",
    examples: [
      { en: "The book offers valuable insight into human behavior.",
        cn: "这本书为人类行为提供了宝贵的洞察。" },
      { en: "Data can give us insight into customer needs.",
        cn: "数据能让我们洞察客户的需求。" }
    ],
    videos: [
      { title: "Insights on human behavior — Behavioral economics", source: "Big Think",
        url: "https://www.youtube.com/results?search_query=insight+human+behavior",
        timestamp: "6:08", cover: "https://picsum.photos/seed/ins1/160" },
      { title: "Data-driven insights that change product design", source: "Google Design",
        url: "https://www.youtube.com/results?search_query=insight+product+design",
        timestamp: "1:32", cover: "https://picsum.photos/seed/ins2/160" }
    ]
  },
  {
    word: "subtle", level: "CET6", phonetic: "/ˈsʌtəl/",
    meaning: "adj. 微妙的，不易察觉的",
    examples: [
      { en: "There is a subtle difference between the two ideas.",
        cn: "这两个观点之间有细微差别。" }
    ],
    videos: [
      { title: "Subtle signs of effective communication", source: "Charisma on Command",
        url: "https://www.youtube.com/results?search_query=subtle+communication",
        timestamp: "1:30", cover: "https://picsum.photos/seed/sub/160" }
    ]
  },
  {
    word: "radiant", level: "IELTS", phonetic: "/ˈreɪdiənt/",
    meaning: "adj. 容光焕发的，明亮的",
    examples: [
      { en: "She looked radiant in the morning sunlight.",
        cn: "晨光中她显得容光焕发。" }
    ],
    videos: [
      { title: "A radiant morning routine", source: "Matt D'Avella",
        url: "https://www.youtube.com/results?search_query=radiant+morning",
        timestamp: "0:22", cover: "https://picsum.photos/seed/rad/160" }
    ]
  },
  {
    word: "curious", level: "CET4", phonetic: "/ˈkjʊriəs/",
    meaning: "adj. 好奇的",
    examples: [
      { en: "A curious mind learns faster and deeper.",
        cn: "好奇的头脑学得更快也更深入。" },
      { en: "Children are naturally curious about the world.",
        cn: "孩子天生对世界充满好奇。" }
    ],
    videos: [
      { title: "Why curious minds learn faster", source: "TED-Ed",
        url: "https://www.youtube.com/results?search_query=curious+kids",
        timestamp: "2:00", cover: "https://picsum.photos/seed/cur1/160" },
      { title: "Raising curious children", source: "Edutopia",
        url: "https://www.youtube.com/results?search_query=curious+children",
        timestamp: "1:10", cover: "https://picsum.photos/seed/cur2/160" }
    ]
  },
  {
    word: "clarity", level: "IELTS", phonetic: "/ˈklærəti/",
    meaning: "n. 清晰，明晰",
    examples: [
      { en: "Good writing depends on clarity and structure.",
        cn: "好的写作依赖于清晰和结构。" }
    ],
    videos: [
      { title: "The power of clarity in writing", source: "Grammarly",
        url: "https://www.youtube.com/results?search_query=clarity+writing",
        timestamp: "1:48", cover: "https://picsum.photos/seed/cla/160" }
    ]
  },
  {
    word: "fragile", level: "CET4", phonetic: "/ˈfrædʒaɪl/",
    meaning: "adj. 脆弱的，易碎的",
    examples: [
      { en: "Trust can be fragile when communication breaks down.",
        cn: "当沟通出现问题时，信任会变得脆弱。" },
      { en: "Coral reefs are extremely fragile ecosystems.",
        cn: "珊瑚礁是极其脆弱的生态系统。" }
    ],
    videos: [
      { title: "How trust is built and broken", source: "TED · Frances Frei",
        url: "https://www.youtube.com/results?search_query=trust+fragile+ted",
        timestamp: "4:12", cover: "https://picsum.photos/seed/fra1/160" },
      { title: "Saving fragile coral reefs", source: "National Geographic",
        url: "https://www.youtube.com/results?search_query=fragile+coral+reef",
        timestamp: "0:40", cover: "https://picsum.photos/seed/fra2/160" }
    ]
  },
  {
    word: "sincere", level: "CET4", phonetic: "/sɪnˈsɪr/",
    meaning: "adj. 真诚的，诚挚的",
    examples: [
      { en: "She gave him a sincere apology.",
        cn: "她向他作了真诚的道歉。" }
    ],
    videos: [
      { title: "How to apologize sincerely", source: "Psych2Go",
        url: "https://www.youtube.com/results?search_query=sincere+apology",
        timestamp: "0:50", cover: "https://picsum.photos/seed/sin/160" }
    ]
  },
  {
    word: "efficient", level: "CET4", phonetic: "/ɪˈfɪʃənt/",
    meaning: "adj. 高效的，效率高的",
    examples: [
      { en: "A simple system is often more efficient.",
        cn: "简单的系统往往更高效。" },
      { en: "Electric cars are more energy-efficient than petrol ones.",
        cn: "电动汽车比汽油车更节能高效。" }
    ],
    videos: [
      { title: "Designing efficient systems", source: "Nielsen Norman Group",
        url: "https://www.youtube.com/results?search_query=efficient+system+design",
        timestamp: "2:33", cover: "https://picsum.photos/seed/eff1/160" },
      { title: "How efficient are electric cars really?", source: "Wendover Productions",
        url: "https://www.youtube.com/results?search_query=efficient+electric+car",
        timestamp: "3:18", cover: "https://picsum.photos/seed/eff2/160" }
    ]
  },
  {
    word: "adapt", level: "CET4", phonetic: "/əˈdæpt/",
    meaning: "v. 适应，调整",
    examples: [
      { en: "We must adapt quickly to changing conditions.",
        cn: "我们必须迅速适应变化的环境。" }
    ],
    videos: [
      { title: "How animals adapt to new environments", source: "BBC Earth",
        url: "https://www.youtube.com/results?search_query=adapt+evolution",
        timestamp: "3:01", cover: "https://picsum.photos/seed/ada/160" }
    ]
  },
  {
    word: "graceful", level: "IELTS", phonetic: "/ˈɡreɪsfəl/",
    meaning: "adj. 优雅的，从容的",
    examples: [
      { en: "The dancer made every movement look graceful.",
        cn: "舞者让每一个动作都显得很优雅。" }
    ],
    videos: [
      { title: "The graceful art of ballet", source: "Royal Opera House",
        url: "https://www.youtube.com/results?search_query=graceful+ballet",
        timestamp: "1:05", cover: "https://picsum.photos/seed/gra/160" }
    ]
  },
  {
    word: "wander", level: "CET4", phonetic: "/ˈwɒndər/",
    meaning: "v. 漫游，徘徊",
    examples: [
      { en: "We wandered through the old streets after dinner.",
        cn: "晚饭后我们在老街里漫步。" },
      { en: "My mind tends to wander during long meetings.",
        cn: "长时间开会时我的思绪容易走神。" }
    ],
    videos: [
      { title: "Wandering through Kyoto's old streets", source: "Walk Travel",
        url: "https://www.youtube.com/results?search_query=wander+kyoto+streets",
        timestamp: "0:18", cover: "https://picsum.photos/seed/wan1/160" },
      { title: "Why your mind wanders – and what to do", source: "TED-Ed",
        url: "https://www.youtube.com/results?search_query=wander+mind",
        timestamp: "2:24", cover: "https://picsum.photos/seed/wan2/160" }
    ]
  },
  {
    word: "brisk", level: "IELTS", phonetic: "/brɪsk/",
    meaning: "adj. 轻快的，活泼迅速的",
    examples: [
      { en: "She took a brisk walk before breakfast.",
        cn: "她在早餐前快步走了一圈。" }
    ],
    videos: [
      { title: "The health benefits of a brisk walk", source: "Mayo Clinic",
        url: "https://www.youtube.com/results?search_query=brisk+walking+benefits",
        timestamp: "1:50", cover: "https://picsum.photos/seed/bri/160" }
    ]
  },
  {
    word: "anchor", level: "CET6", phonetic: "/ˈæŋkər/",
    meaning: "n. 锚；v. 使固定，给以依靠",
    examples: [
      { en: "Family can be an emotional anchor in hard times.",
        cn: "在困难时期，家人可以成为情感上的依靠。" },
      { en: "The ship dropped anchor in the bay.",
        cn: "船在海湾里抛了锚。" }
    ],
    videos: [
      { title: "Emotional anchors and resilience", source: "Therapy in a Nutshell",
        url: "https://www.youtube.com/results?search_query=emotional+anchor",
        timestamp: "3:40", cover: "https://picsum.photos/seed/anc1/160" },
      { title: "How a ship's anchor actually works", source: "Practical Engineering",
        url: "https://www.youtube.com/results?search_query=ship+anchor+how+it+works",
        timestamp: "0:58", cover: "https://picsum.photos/seed/anc2/160" }
    ]
  },
  {
    word: "spark", level: "CET4", phonetic: "/spɑːrk/",
    meaning: "n. 火花；v. 激发，引发",
    examples: [
      { en: "A single question can spark a great idea.",
        cn: "一个问题就可能激发出一个好点子。" },
      { en: "The speech sparked a heated debate.",
        cn: "这次演讲引发了一场激烈的辩论。" }
    ],
    videos: [
      { title: "What sparks creativity?", source: "TED · Elizabeth Gilbert",
        url: "https://www.youtube.com/results?search_query=spark+creativity+ted",
        timestamp: "2:22", cover: "https://picsum.photos/seed/spa1/160" },
      { title: "Speeches that sparked movements", source: "Vox",
        url: "https://www.youtube.com/results?search_query=spark+debate+speech",
        timestamp: "1:48", cover: "https://picsum.photos/seed/spa2/160" }
    ]
  },
  {
    word: "steady", level: "CET4", phonetic: "/ˈstedi/",
    meaning: "adj. 稳定的，平稳的",
    examples: [
      { en: "Progress is slow but steady.",
        cn: "进步虽然缓慢，但很稳定。" }
    ],
    videos: [
      { title: "Slow and steady wins the race", source: "TED-Ed",
        url: "https://www.youtube.com/results?search_query=slow+and+steady",
        timestamp: "0:38", cover: "https://picsum.photos/seed/ste/160" }
    ]
  },
  {
    word: "glimpse", level: "IELTS", phonetic: "/ɡlɪmps/",
    meaning: "n. 一瞥；v. 瞥见",
    examples: [
      { en: "We caught a glimpse of the mountains at sunset.",
        cn: "日落时我们瞥见了群山。" },
      { en: "The film offers a glimpse into rural life.",
        cn: "这部影片让我们一窥乡村生活。" }
    ],
    videos: [
      { title: "A glimpse of the Alps from above", source: "National Geographic",
        url: "https://www.youtube.com/results?search_query=glimpse+alps",
        timestamp: "1:14", cover: "https://picsum.photos/seed/gli1/160" },
      { title: "A glimpse into rural Japan", source: "NHK World",
        url: "https://www.youtube.com/results?search_query=glimpse+rural+japan",
        timestamp: "2:05", cover: "https://picsum.photos/seed/gli2/160" }
    ]
  },
  {
    word: "nurture", level: "IELTS", phonetic: "/ˈnɜːrtʃər/",
    meaning: "v. 培养，滋养",
    examples: [
      { en: "Teachers should nurture creativity in students.",
        cn: "老师应该培养学生的创造力。" },
      { en: "Good soil nurtures healthy plants.",
        cn: "肥沃的土壤滋养出健康的植物。" }
    ],
    videos: [
      { title: "How to nurture creativity in children", source: "Edutopia",
        url: "https://www.youtube.com/results?search_query=nurture+creativity",
        timestamp: "2:05", cover: "https://picsum.photos/seed/nur1/160" },
      { title: "Healthy soil, healthy plants", source: "Gardeners' World",
        url: "https://www.youtube.com/results?search_query=nurture+soil+plants",
        timestamp: "0:42", cover: "https://picsum.photos/seed/nur2/160" }
    ]
  }
];

if (typeof window !== "undefined") {
  window.WORDS = WORDS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { WORDS };
}
