const translations = {
  "zh-CN": {
    navAbout: "关于我",
    navSkills: "我的技能",
    navProjects: "我的项目",
    navPicks: "我的推荐",
    navContact: "联系我",
    detailKicker: "推荐详情",
    backPicks: "返回推荐",
    categoryAll: "全部",
    ratingLabel: "评分",
    sections: {
      books: {
        title: "书籍",
        intro: "那些读完之后，会改变一点点判断、表达和生活方式的内容。",
        filters: [
          { id: "all", label: "全部" },
          { id: "fiction", label: "小说" },
          { id: "functional", label: "功能性书籍" },
        ],
        items: [
          {
            title: "《被讨厌的勇气》",
            category: "functional",
            tag: "功能性书籍",
            image: "assets/recommendations/被讨厌的勇气.gif",
            quote: "把很多人际关系里的纠结，换成一种更清醒的自我负责。",
          },
          {
            title: "《嫌疑人X的献身》",
            category: "fiction",
            tag: "小说",
            image: "assets/recommendations/嫌疑人X的献身.jpg",
            quote: "一个关于爱、牺牲和逻辑的故事，最后一刻会让人重新理解前面的每个细节。",
          },
          {
            title: "《小而美》",
            category: "functional",
            tag: "功能性书籍",
            image: "assets/recommendations/小而美.jpeg",
            quote: "提醒我商业不一定要做大，也可以做得克制、清楚、有自己的节奏。",
          },
          {
            title: "《恶意》",
            category: "fiction",
            tag: "小说",
            image: "assets/recommendations/恶意.jpg",
            quote: "比悬疑更可怕的是人心里的动机，读完会记得那种冷冷的后劲。",
          },
          {
            title: "《非暴力沟通》",
            category: "functional",
            tag: "功能性书籍",
            image: "assets/recommendations/非暴力沟通.jpg",
            quote: "把情绪、需求和表达拆开看，很多冲突就不再只是输赢问题。",
          },
          {
            title: "《人类简史》",
            category: "functional",
            tag: "功能性书籍",
            image: "assets/recommendations/人类简史.webp",
            quote: "把人类文明放到更长的时间线里看，很多习以为常的东西都会变得值得重新思考。",
          },
          {
            title: "《长安的荔枝》",
            category: "fiction",
            tag: "小说",
            image: "assets/recommendations/长安的荔枝.jpeg",
            quote: "一个小任务牵出庞大系统，荒诞里有很真实的职场感。",
          },
          {
            title: "《三体》",
            category: "fiction",
            tag: "小说",
            image: "assets/recommendations/三体.jpeg",
            quote: "宏大到会改变你看待文明、技术和个体命运的尺度。",
          },
        ],
      },
      films: {
        title: "影视",
        intro: "我喜欢那些能把叙事、画面、节奏和情绪都做成选择的作品。这里按评分从高到低排好，方便你先看最喜欢的。",
        filters: [
          { id: "all", label: "全部" },
          { id: "cn", label: "国产剧" },
          { id: "hk", label: "港剧" },
          { id: "kr", label: "韩剧" },
          { id: "us", label: "美剧" },
          { id: "movie", label: "电影" },
          { id: "jp", label: "日剧" },
        ],
        items: [
          {
            title: "《请回答1988》",
            category: "kr",
            tag: "韩剧",
            rating: 9.7,
            image: "assets/recommendations/请回答1988.jpg",
            quote: "温暖到会让人反复想起家人、朋友和成长的细节。",
          },
          {
            title: "《摩登家庭》",
            category: "us",
            tag: "美剧",
            image: "assets/recommendations/摩登家庭.jpeg",
            rating: 9.7,
            quote: "把家庭关系拍得又聪明又好笑，节奏特别轻快。",
          },
          {
            title: "《非自然死亡》",
            category: "jp",
            tag: "日剧",
            image: "assets/recommendations/非自然死亡.jpeg",
            rating: 9.5,
            quote: "每一集都像在看一个精密又温柔的社会观察切片。",
          },
          {
            title: "《潜伏》",
            category: "cn",
            tag: "国产剧",
            image: "assets/recommendations/潜伏.jpeg",
            rating: 9.5,
            quote: "节奏、人物和暗线都很稳，是我会反复提起的一部国产剧。",
          },
          {
            title: "《机智的医生生活》",
            category: "kr",
            tag: "韩剧",
            image: "assets/recommendations/机智的医生生活.jpeg",
            rating: 9.5,
            quote: "像一群朋友认真生活和工作，温柔但不轻飘。",
          },
          {
            title: "《权力的游戏》",
            category: "us",
            tag: "美剧",
            image: "assets/recommendations/权力的游戏.jpeg",
            rating: 9.4,
            quote: "世界观、权力结构和人物线都足够宏大，值得慢慢看。",
          },
          {
            title: "《甄嬛传》",
            category: "cn",
            tag: "国产剧",
            image: "assets/recommendations/甄嬛传.jpeg",
            rating: 9.4,
            quote: "宫廷里的每个人都在算计，但剧本和表演都太稳了。",
          },
          {
            title: "《机智的监狱生活》",
            category: "kr",
            tag: "韩剧",
            image: "assets/recommendations/机智的监狱生活.jpeg",
            rating: 9.4,
            quote: "不是靠设定取胜，而是靠人物、关系和幽默感。",
          },
          {
            title: "《无耻之徒》",
            category: "us",
            tag: "美剧",
            image: "assets/recommendations/无耻之徒.jpeg",
            rating: 9.4,
            quote: "混乱、荒诞、真实，人物都很有生命力。",
          },
          {
            title: "《胜利即是正义》",
            category: "jp",
            tag: "日剧",
            image: "assets/recommendations/胜利即是正义.jpeg",
            rating: 9.4,
            quote: "把法律戏拍得又快又聪明，台词特别有劲。",
          },
          {
            title: "《盗梦空间》",
            category: "movie",
            tag: "电影",
            image: "assets/recommendations/盗梦空间.jpeg",
            rating: 9.4,
            quote: "结构太漂亮了，看完总想再拆一遍。",
          },
          {
            title: "《千与千寻》",
            category: "movie",
            tag: "电影",
            image: "assets/recommendations/千与千寻.jpeg",
            rating: 9.4,
            quote: "几乎每个画面都像记忆里的梦。",
          },
          {
            title: "《三傻大闹宝莱坞》",
            category: "movie",
            tag: "电影",
            image: "assets/recommendations/三傻大闹宝莱坞.jpeg",
            rating: 9.2,
            quote: "轻松地讲教育和人生，但后劲很足。",
          },
          {
            title: "《哈尔的移动城堡》",
            category: "movie",
            tag: "电影",
            image: "assets/recommendations/哈尔的移动城堡.jpeg",
            rating: 9.1,
            quote: "视觉和情绪都很梦幻，是那种会想反复回看的作品。",
          },
          {
            title: "《破产姐妹》",
            category: "us",
            tag: "美剧",
            image: "assets/recommendations/破产姐妹.jpeg",
            rating: 9.0,
            quote: "很吵，但很有能量，适合需要被提气的时候看。",
          },
          {
            title: "《我不是药神》",
            category: "movie",
            tag: "电影",
            image: "assets/recommendations/我不是药神.jpeg",
            rating: 9.0,
            quote: "情绪和议题都很直接，看完会沉一下。",
          },
          {
            title: "《怦然心动》",
            category: "movie",
            tag: "电影",
            image: "assets/recommendations/怦然心动.jpeg",
            rating: 9.0,
            quote: "轻巧、干净、真挚，是那种看完会心软的电影。",
          },
          {
            title: "《杀死伊芙》",
            category: "us",
            tag: "美剧",
            image: "assets/recommendations/杀死伊芙.jpeg",
            rating: 8.9,
            quote: "人物关系和气质都很抓人，危险又好看。",
          },
          {
            title: "《沉默的羔羊》",
            category: "movie",
            tag: "电影",
            image: "assets/recommendations/沉默的羔羊.jpeg",
            rating: 8.9,
            quote: "经典悬疑的压迫感到今天也很强。",
          },
          {
            title: "《逃避虽然可耻但有用》",
            category: "jp",
            tag: "日剧",
            image: "assets/recommendations/逃避虽然可耻但有用.jpeg",
            rating: 8.8,
            quote: "温柔地讲工作、关系和生活秩序，很治愈。",
          },
          {
            title: "《小巷人家》",
            category: "cn",
            tag: "国产剧",
            image: "assets/recommendations/小巷人家.jpeg",
            rating: 8.7,
            quote: "生活流里有烟火气，也有时代感。",
          },
          {
            title: "《夏日大作战》",
            category: "movie",
            tag: "电影",
            image: "assets/recommendations/夏日大作战.jpeg",
            rating: 8.6,
            quote: "轻快又聪明，信息量和想象力都很足。",
          },
          {
            title: "《伪装者》",
            category: "cn",
            tag: "国产剧",
            image: "assets/recommendations/伪装者.jpeg",
            rating: 8.6,
            quote: "节奏好，人物也有记忆点。",
          },
          {
            title: "《柔美的细胞小将（系列）》",
            category: "kr",
            tag: "韩剧",
            image: "assets/recommendations/柔美的细胞小将.jpeg",
            rating: 8.5,
            quote: "把恋爱、成长和情绪写得很细，系列感也很完整。",
          },
          {
            title: "《蛇蝎女佣》",
            category: "us",
            tag: "美剧",
            image: "assets/recommendations/蛇蝎女佣.jpeg",
            rating: 8.4,
            quote: "狗血、聪明、很好追。",
          },
          {
            title: "《校园之外》",
            category: "us",
            tag: "美剧",
            image: "assets/recommendations/校园之外.jpeg",
            rating: 8.3,
            quote: "青春、成长和自我认同，是比较轻松好看的那种。",
          },
          {
            title: "《我是大哥大》",
            category: "jp",
            tag: "日剧",
            image: "assets/recommendations/我是大哥大.jpeg",
            rating: 8.2,
            quote: "夸张但很疯，喜剧节奏很强。",
          },
          {
            title: "《艺伎回忆录》",
            category: "movie",
            tag: "电影",
            image: "assets/recommendations/艺伎回忆录.jpeg",
            rating: 8.1,
            quote: "画面审美很强，像一部流动的视觉作品。",
          },
          {
            title: "《低智商犯罪》",
            category: "cn",
            tag: "国产剧",
            image: "assets/recommendations/低智商犯罪.jpeg",
            rating: 7.8,
            quote: "带着一点黑色幽默和荒诞感。",
          },
          {
            title: "《知否知否应是绿肥红瘦》",
            category: "cn",
            tag: "国产剧",
            image: "assets/recommendations/知否知否.jpeg",
            rating: 7.8,
            quote: "家宅、成长和阶层关系，越看越有细节。",
          },
          {
            title: "《无法抗拒的他》",
            category: "kr",
            tag: "韩剧",
            image: "assets/recommendations/无法抗拒的他.jpg",
            rating: 7.7,
            quote: "氛围感很强，适合看颜值和情绪流动。",
          },
          {
            title: "《安娜》",
            category: "kr",
            tag: "韩剧",
            image: "assets/recommendations/安娜.jpeg",
            rating: 7.6,
            quote: "偏心理和身份叙事，看点在人物选择。",
          },
          {
            title: "《星期三》",
            category: "us",
            tag: "美剧",
            image: "assets/recommendations/星期三.jpeg",
            rating: 7.8,
            quote: "暗黑校园感很鲜明，角色气质很好记。",
          },
          {
            title: "《八仙！》",
            category: "movie",
            tag: "电影",
            image: "assets/recommendations/八仙.jpeg",
            rating: 7.4,
            quote: "以中国传统神话“八仙过海”为灵感，讲述八个草根凡人凭借机智与民间智慧战胜强敌，最终被世人赞颂为“八仙”的故事。",
          },
          {
            title: "《灼灼韶华》",
            category: "cn",
            tag: "国产剧",
            image: "assets/recommendations/灼灼韶华.jpeg",
            rating: 9.2,
            quote: "人物成长和商业线都很有劲，属于会越看越进入状态的剧。",
          },
          {
            title: "《恶作剧之吻》",
            category: "cn",
            tag: "国产剧",
            image: "assets/recommendations/恶作剧之吻.jpeg",
            rating: 9.0,
            quote: "经典的青春喜剧爱情剧，轻松但很有记忆点。",
          },
          {
            title: "《我可能不会爱你》",
            category: "cn",
            tag: "国产剧",
            image: "assets/recommendations/我可能不会爱你.jpeg",
            rating: 8.9,
            quote: "关于友情、爱情和成长的分界线，细腻又耐看。",
          },
          {
            title: "《妈妈朋友的儿子》",
            category: "kr",
            tag: "韩剧",
            image: "assets/recommendations/妈妈朋友的儿子.jpeg",
            rating: 7.8,
            quote: "温暖、轻快，属于看完会记得彼此陪伴感的那类剧。",
          },
          {
            title: "《无所畏惧》",
            category: "cn",
            tag: "国产剧",
            image: "assets/recommendations/无所畏惧.jpeg",
            rating: 6.5,
            quote: "律政和女性成长的叙事，节奏很直白。",
          },
          {
            title: "《COURT!》",
            category: "hk",
            tag: "港剧",
            image: "assets/recommendations/court.jpeg",
            quote: "透过同一酒店内不同房间发生的三个独立单元故事，探讨司法制度中对「真相」与「公义」的主观诠释。",
          },
        ],
      },
      podcasts: {
        title: "播客",
        intro: "适合散步、通勤和做家务时听的输入：观点、故事和一点点灵感。",
        filters: [
          { id: "all", label: "全部" },
          { id: "podcast", label: "播客" },
        ],
        items: [
          {
            title: "十字路口Crossing",
            category: "podcast",
            tag: "播客",
            image: "assets/recommendations/十字路口Crossing.jpeg",
            quote: "从AI创业者和行动者的故事里，听见科技与人文交界处的新可能。",
          },
          {
            title: "搞钱女孩",
            category: "podcast",
            tag: "播客",
            image: "assets/recommendations/搞钱女孩.jpeg",
            quote: "在女性的折腾故事里，提炼普通人也能借鉴的财富与成长密码。",
          },
          {
            title: "樊书TALK-作者光临",
            category: "podcast",
            tag: "播客",
            image: "assets/recommendations/樊书TALK-作者光临.jpeg",
            quote: "听作者讲书，用对谈的方式快速进入一本书的核心观点。",
          },
        ],
      },
      tools: {
        title: "工具",
        intro: "我常用来把想法推进一步的工具：写、做、设计、整理和自动化。",
        filters: [
          { id: "all", label: "全部" },
          { id: "ai", label: "AI" },
          { id: "design", label: "设计" },
          { id: "productivity", label: "效率" },
        ],
        items: [
          {
            title: "ChatGPT",
            category: "ai",
            tag: "AI",
            image: "assets/recommendations/chatgpt.png",
            quote: "用来拆想法、写初稿、做学习陪练，也用来检查盲点。",
          },
          {
            title: "Codex",
            category: "ai",
            tag: "AI",
            image: "assets/recommendations/codex.jpeg",
            quote: "把想法真正落到页面和产品里，是我学习 Vibe Coding 的关键工具。",
          },
          {
            title: "Figma",
            category: "design",
            tag: "设计",
            image: "assets/recommendations/figma.png",
            quote: "用来整理界面结构、视觉方向和产品体验。",
          },
          {
            title: "Canva",
            category: "design",
            tag: "设计",
            image: "assets/recommendations/canva.jpeg",
            quote: "快速做视觉表达、内容封面和品牌素材，轻量但很实用。",
          },
          {
            title: "Notion",
            category: "productivity",
            tag: "效率",
            image: "assets/recommendations/notion.png",
            quote: "用来整理学习资料、项目想法和个人内容系统。",
          },
        ],
      },
    },
  },
  "zh-HK": {
    navAbout: "關於我",
    navSkills: "我的技能",
    navProjects: "我的項目",
    navPicks: "我的推薦",
    navContact: "聯絡我",
    detailKicker: "推薦詳情",
    backPicks: "返回推薦",
    categoryAll: "全部",
    ratingLabel: "評分",
  },
  en: {
    navAbout: "about",
    navSkills: "skill",
    navProjects: "projects",
    navPicks: "picks",
    navContact: "contact",
    detailKicker: "Picks Detail",
    backPicks: "Back to picks",
    categoryAll: "All",
    ratingLabel: "Rating",
  },
};

translations["zh-CN"].sections.films.showRating = true;
translations["zh-HK"].sections = translations["zh-CN"].sections;

const englishSections = JSON.parse(JSON.stringify(translations["zh-CN"].sections));

englishSections.books.title = "Books";
englishSections.books.intro = "Books that leave a small but lasting shift in how I think, express, and live.";
englishSections.books.filters = [
  { id: "all", label: "All" },
  { id: "fiction", label: "Fiction" },
  { id: "functional", label: "Functional Books" },
];

englishSections.films.title = "Films & TV";
englishSections.films.intro = "Stories where narrative, image, rhythm, and emotion all feel intentionally designed. This list is sorted by rating.";
englishSections.films.filters = [
  { id: "all", label: "All" },
  { id: "cn", label: "Chinese Series" },
  { id: "hk", label: "HK Series" },
  { id: "kr", label: "K-Dramas" },
  { id: "us", label: "US Series" },
  { id: "movie", label: "Movies" },
  { id: "jp", label: "J-Dramas" },
];

englishSections.podcasts.title = "Podcasts";
englishSections.podcasts.intro = "Portable input for walks, commutes, and chores: perspectives, stories, and small sparks of inspiration.";
englishSections.podcasts.filters = [
  { id: "all", label: "All" },
  { id: "podcast", label: "Podcasts" },
];

englishSections.tools.title = "Tools";
englishSections.tools.intro = "Tools I use to move ideas forward: writing, building, designing, organizing, and automating.";
englishSections.tools.filters = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "design", label: "Design" },
  { id: "productivity", label: "Productivity" },
];

const englishTagByCategory = {
  fiction: "Fiction",
  functional: "Functional Books",
  cn: "Chinese Series",
  hk: "HK Series",
  kr: "K-Drama",
  us: "US Series",
  movie: "Movie",
  jp: "J-Drama",
  ai: "AI / Tech",
  business: "Business",
  life: "Lifestyle",
  podcast: "Podcast",
  design: "Design",
  productivity: "Productivity",
};

const englishBookCopy = {
  "《被讨厌的勇气》": {
    title: "The Courage to Be Disliked",
    quote: "It turns a lot of relationship anxiety into a clearer sense of self-responsibility.",
  },
  "《嫌疑人X的献身》": {
    title: "The Devotion of Suspect X",
    quote: "A story about love, sacrifice, and logic. The ending changes how every detail before it feels.",
  },
  "《小而美》": {
    title: "Small Is Beautiful",
    quote: "A reminder that business does not always need to be big. It can be restrained, clear, and self-paced.",
  },
  "《恶意》": {
    title: "Malice",
    quote: "More frightening than suspense is the motive inside a person. It leaves a cold aftertaste.",
  },
  "《非暴力沟通》": {
    title: "Nonviolent Communication",
    quote: "When emotions, needs, and expression are separated, many conflicts stop being only about winning or losing.",
  },
  "《人类简史》": {
    title: "Sapiens",
    quote: "It stretches human civilization across a longer timeline and makes the familiar feel worth questioning again.",
  },
  "《长安的荔枝》": {
    title: "Chang'an's Lychees",
    quote: "A small mission reveals a huge system, with workplace realism hidden inside the absurdity.",
  },
  "《三体》": {
    title: "The Three-Body Problem",
    quote: "It expands the scale of how I think about civilization, technology, and individual fate.",
  },
};

const englishFilmTitle = {
  "《请回答1988》": "Reply 1988",
  "《摩登家庭》": "Modern Family",
  "《非自然死亡》": "Unnatural Death",
  "《潜伏》": "Latent",
  "《机智的医生生活》": "Hospital Playlist",
  "《权力的游戏》": "Game of Thrones",
  "《甄嬛传》": "Empresses in the Palace",
  "《机智的监狱生活》": "Prison Playbook",
  "《无耻之徒》": "Shameless",
  "《胜利即是正义》": "Legal High",
  "《盗梦空间》": "Inception",
  "《千与千寻》": "Spirited Away",
  "《三傻大闹宝莱坞》": "3 Idiots",
  "《哈尔的移动城堡》": "Howl's Moving Castle",
  "《破产姐妹》": "2 Broke Girls",
  "《我不是药神》": "Dying to Survive",
  "《怦然心动》": "Flipped",
  "《杀死伊芙》": "Killing Eve",
  "《沉默的羔羊》": "The Silence of the Lambs",
  "《逃避虽然可耻但有用》": "The Full-Time Wife Escapist",
  "《小巷人家》": "Romance in the Alley",
  "《夏日大作战》": "Summer Wars",
  "《伪装者》": "The Disguiser",
  "《柔美的细胞小将（系列）》": "Yumi's Cells",
  "《蛇蝎女佣》": "Devious Maids",
  "《校园之外》": "Off Campus",
  "《我是大哥大》": "From Today, It's My Turn!!",
  "《艺伎回忆录》": "Memoirs of a Geisha",
  "《低智商犯罪》": "Low IQ Crime",
  "《知否知否应是绿肥红瘦》": "The Story of Minglan",
  "《无法抗拒的他》": "Nevertheless",
  "《安娜》": "Anna",
  "《星期三》": "Wednesday",
  "《八仙！》": "Eight Immortals!",
  "《灼灼韶华》": "Zhuo Zhuo Shao Hua",
  "《恶作剧之吻》": "It Started with a Kiss",
  "《我可能不会爱你》": "In Time with You",
  "《妈妈朋友的儿子》": "Love Next Door",
  "《无所畏惧》": "Fearless",
  "《COURT!》": "COURT!",
};

const englishFilmQuote = {
  "《请回答1988》": "So warm that it makes me think again and again about family, friendship, and the tiny details of growing up.",
  "《摩登家庭》": "Smart, funny, and incredibly light on its feet in the way it writes family relationships.",
  "《非自然死亡》": "Each episode feels like a precise and gentle slice of social observation.",
  "《潜伏》": "The rhythm, characters, and hidden threads are all steady and memorable.",
  "《机智的医生生活》": "A group of friends living and working seriously. Gentle, but never thin.",
  "《权力的游戏》": "Its world, power structures, and character arcs are large enough to watch slowly.",
  "《甄嬛传》": "Everyone is calculating, but the script and performances are unbelievably solid.",
  "《机智的监狱生活》": "It wins through people, relationships, and humor rather than just its setting.",
  "《无耻之徒》": "Chaotic, absurd, real, and full of people who feel alive.",
  "《胜利即是正义》": "A legal drama that is fast, clever, and full of sharp dialogue.",
  "《盗梦空间》": "The structure is so elegant that I always want to take it apart again.",
  "《千与千寻》": "Almost every frame feels like a dream stored in memory.",
  "《三傻大闹宝莱坞》": "It talks about education and life lightly, but the aftertaste is strong.",
  "《哈尔的移动城堡》": "Dreamlike in both image and emotion, and worth revisiting.",
  "《破产姐妹》": "Loud, energetic, and perfect when I need a quick lift.",
  "《我不是药神》": "Direct in both emotion and theme. It leaves a weight behind.",
  "《怦然心动》": "Light, clean, sincere, and quietly softening.",
  "《杀死伊芙》": "The relationship and atmosphere are gripping, dangerous, and beautiful.",
  "《沉默的羔羊》": "Classic suspense that still feels intensely pressurized.",
  "《逃避虽然可耻但有用》": "A gentle story about work, relationships, and the order of everyday life.",
  "《小巷人家》": "Full of everyday texture, warmth, and a sense of its time.",
  "《夏日大作战》": "Light, smart, imaginative, and packed with information.",
  "《伪装者》": "Good pacing and memorable characters.",
  "《柔美的细胞小将（系列）》": "It writes love, growth, and emotion in small, precise details.",
  "《蛇蝎女佣》": "Dramatic, clever, and very easy to keep watching.",
  "《校园之外》": "Youth, growth, and identity in an easy-to-watch rhythm.",
  "《我是大哥大》": "Wildly exaggerated, very funny, and driven by strong comic timing.",
  "《艺伎回忆录》": "Visually strong, almost like a moving aesthetic object.",
  "《低智商犯罪》": "A little dark, a little absurd, and quietly funny.",
  "《知否知否应是绿肥红瘦》": "Family, growth, and class relations, with more detail the longer you watch.",
  "《无法抗拒的他》": "Atmospheric and emotional, with a strong visual pull.",
  "《安娜》": "A psychological and identity-driven story, centered on character choices.",
  "《星期三》": "A clear dark-campus vibe and a very memorable lead character.",
  "《八仙！》": "Inspired by the Chinese myth of the Eight Immortals crossing the sea, it follows eight ordinary people who use wit and folk wisdom to outmaneuver powerful immortal villains and become celebrated as the Eight Immortals.",
  "《灼灼韶华》": "The character growth and business line both have energy.",
  "《恶作剧之吻》": "A classic youth romantic comedy that is light and memorable.",
  "《我可能不会爱你》": "A delicate story about the line between friendship, love, and growing up.",
  "《妈妈朋友的儿子》": "Warm and light, with a clear feeling of companionship.",
  "《无所畏惧》": "A direct legal and female-growth story.",
  "《COURT!》": "Through three standalone stories set in different rooms of the same hotel, it explores how truth and justice are subjectively interpreted within the legal system.",
};

const englishPodcastCopy = {
  "十字路口Crossing": "Good for listening to other people's thinking and experience at the crossroads of real-life choices.",
  "搞钱女孩": "A podcast about money, independence, choices, and how ordinary people can build more confidence in life.",
  "樊书TALK-作者光临": "Through the author's own voice, it quickly brings you into the questions and creative context behind a book.",
};

const englishToolCopy = {
  ChatGPT: "For breaking down ideas, drafting, learning with a thinking partner, and checking blind spots.",
  Codex: "The key tool that helps me turn ideas into real pages and products while learning Vibe Coding.",
  Figma: "For organizing interface structure, visual direction, and product experience.",
  Canva: "For fast visual expression, content covers, and lightweight brand materials.",
  Notion: "For organizing learning materials, project ideas, and my personal content system.",
};

englishSections.books.items = englishSections.books.items.map((item) => ({
  ...item,
  title: englishBookCopy[item.title]?.title || item.title,
  quote: englishBookCopy[item.title]?.quote || item.quote,
  tag: englishTagByCategory[item.category] || item.tag,
}));

englishSections.films.items = englishSections.films.items.map((item) => ({
  ...item,
  title: englishFilmTitle[item.title] || item.title,
  quote: englishFilmQuote[item.title] || item.quote,
  tag: englishTagByCategory[item.category] || item.tag,
}));

englishSections.podcasts.items = englishSections.podcasts.items.map((item) => ({
  ...item,
  quote: englishPodcastCopy[item.title] || item.quote,
  tag: englishTagByCategory[item.category] || item.tag,
}));

englishSections.tools.items = englishSections.tools.items.map((item) => ({
  ...item,
  quote: englishToolCopy[item.title] || item.quote,
  tag: englishTagByCategory[item.category] || item.tag,
}));

translations.en.sections = englishSections;

let currentLang = detectLanguage();
let currentFilter = "all";

function getSavedLanguage() {
  try {
    return localStorage.getItem("zoraLang");
  } catch {
    return "";
  }
}

function saveLanguage(lang) {
  try {
    localStorage.setItem("zoraLang", lang);
  } catch {
    // Language still changes for the current page when storage is unavailable.
  }
}

function detectLanguage() {
  const saved = getSavedLanguage();
  if (saved && translations[saved]) return saved;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  const languages = navigator.languages || [navigator.language || ""];
  const joined = languages.join(" ").toLowerCase();
  if (timezone.includes("Hong_Kong") || joined.includes("zh-hk") || joined.includes("zh-tw")) return "zh-HK";
  if (timezone.includes("Shanghai") || joined.includes("zh-cn") || joined.includes("zh")) return "zh-CN";
  return "en";
}

function getSectionType() {
  const type = new URLSearchParams(window.location.search).get("type");
  return translations[currentLang].sections[type] ? type : "books";
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderTabs(section) {
  const tabs = document.querySelector("#categoryTabs");
  tabs.innerHTML = section.filters
    .map(
      (filter) =>
        `<button class="recommendation-tab${filter.id === currentFilter ? " active" : ""}" type="button" data-filter="${filter.id}">${escapeHtml(filter.label)}</button>`
    )
    .join("");
  tabs.querySelectorAll(".recommendation-tab").forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      renderRecommendations();
    });
  });
}

function renderCards(section) {
  const grid = document.querySelector("#recommendationGrid");
  const filteredItems = currentFilter === "all" ? section.items : section.items.filter((item) => item.category === currentFilter);
  const items = section.showRating
    ? filteredItems.slice().sort((a, b) => (b.rating || 0) - (a.rating || 0) || a.title.localeCompare(b.title, "zh-Hans-CN"))
    : filteredItems;
  grid.innerHTML = items
    .map(
      (item) => {
        const meta = section.showRating && item.rating
          ? `${translations[currentLang].ratingLabel} ${item.rating} · ${item.tag}`
          : item.tag;
        return `
        <article class="recommendation-card">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" />
          <div>
            <small>${escapeHtml(meta)}</small>
            <h2>${escapeHtml(item.title)}</h2>
            <p>${escapeHtml(item.quote)}</p>
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function renderRecommendations() {
  const current = translations[currentLang];
  const section = current.sections[getSectionType()];
  document.title = `Zora | ${section.title}`;
  document.querySelector("#picksTitle").textContent = section.title;
  document.querySelector("#picksIntro").textContent = section.intro;
  renderTabs(section);
  renderCards(section);
}

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "en";
  saveLanguage(currentLang);
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = translations[currentLang][node.dataset.i18n];
    if (value) node.textContent = value;
  });
  const backButton = document.querySelector(".detail-back");
  if (backButton) {
    backButton.setAttribute("aria-label", translations[currentLang].backPicks);
    backButton.setAttribute("title", translations[currentLang].backPicks);
  }
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });
  currentFilter = "all";
  renderRecommendations();
}

function bindReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.08 }
  );
  document.querySelectorAll(".fade-in, .reveal").forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index * 0.05, 0.3)}s`;
    observer.observe(node);
  });
}

function bindCursor() {
  const cursor = document.querySelector(".cursor-light");
  window.addEventListener("pointermove", (event) => {
    cursor.style.opacity = "1";
    cursor.style.transform = `translate(${event.clientX - 11}px, ${event.clientY - 11}px)`;
  });
  window.addEventListener("pointerleave", () => {
    cursor.style.opacity = "0";
  });
}

function bindEvents() {
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });
}

function init() {
  bindEvents();
  bindReveal();
  bindCursor();
  applyLanguage(currentLang);
}

init();
