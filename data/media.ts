// Hand-picked favorites, refreshed quarterly. Data sources, fetch steps and
// raw exports live in the private Neo vault: life/library/Library 数据源.md
export type MediaType = 'anime' | 'book' | 'movie' | 'drama' | 'game' | 'song'
export type MediaState = 'done' | 'doing' | 'todo'

export interface MediaRecord {
  name: string
  creator?: string
  state?: MediaState
  date?: string
  note?: string
  lang?: string
}

export const anime: MediaRecord[] = [
  {
    name: 'となりのトトロ My Neighbor Totoro',
    creator: '宮崎駿',
  },
  {
    name: '火垂るの墓 Grave of the Fireflies',
    creator: '高畑勲',
  },
  {
    name: 'コクリコ坂から From Up on Poppy Hill',
    creator: '宮崎吾朗',
  },
  {
    name: '秒速5センチメートル',
    creator: '新海誠',
  },
  {
    name: '泣きたい私は猫をかぶる A Whisker Away',
    creator: '佐藤順一, 柴山智隆',
  },
  {
    name: '名探偵コナン Detective Conan',
    creator: '青山剛昌',
  },
  {
    name: 'Rick and Morty',
    creator: 'Justin Roiland, Dan Harmon',
  },
]

export const book: MediaRecord[] = [
  {
    name: 'The Almanack of Naval Ravikant',
    creator: 'Eric Jorgenson',
  },
  {
    name: 'The Psychology of Money',
    creator: 'Morgan Housel',
  },
  {
    name: 'Die with Zero',
    creator: 'Bill Perkins',
  },
  {
    name: 'Deep Work',
    creator: 'Cal Newport',
  },
  {
    name: "So Good They Can't Ignore You",
    creator: 'Cal Newport',
  },
  {
    name: "Zen Mind, Beginner's Mind",
    creator: 'Shunryu Suzuki',
  },
  {
    name: 'Why Buddhism Is True',
    creator: 'Robert Wright',
  },
  {
    name: 'Tools of Titans',
    creator: 'Tim Ferriss',
  },
  {
    name: "It Doesn't Have to Be Crazy at Work",
    creator: 'Jason Fried, David Heinemeier Hansson',
  },
  {
    name: 'The Minimalist Entrepreneur',
    creator: 'Sahil Lavingia',
  },
  {
    name: 'Getting Things Done',
    creator: 'David Allen',
  },
  {
    name: 'The Power of Full Engagement',
    creator: 'Jim Loehr, Tony Schwartz',
  },
  {
    name: 'Outliers',
    creator: 'Malcolm Gladwell',
  },
  {
    name: 'Work, Consumerism and the New Poor',
    creator: 'Zygmunt Bauman',
  },
  {
    name: 'Functional Programming in Scala',
    creator: 'Paul Chiusano, Rúnar Bjarnason',
  },
  {
    name: '认知觉醒',
    creator: '周岭',
    lang: 'zh-Hans',
  },
  {
    name: '从内耗到心流',
    creator: '杨鸣',
    lang: 'zh-Hans',
  },
  {
    name: '万历十五年',
    creator: '黄仁宇',
    lang: 'zh-Hans',
  },
]

export const movie: MediaRecord[] = [
  {
    name: 'Dead Poets Society',
    creator: 'Peter Weir',
  },
  {
    name: 'The Godfather',
    creator: 'Francis Ford Coppola',
  },
  {
    name: 'The Irishman',
    creator: 'Martin Scorsese',
  },
  {
    name: '重慶森林',
    creator: '王家衛',
    lang: 'zh-Hant',
  },
  {
    name: "La Vie d'Adèle",
    creator: 'Abdellatif Kechiche',
  },
  {
    name: 'Midnight in Paris',
    creator: 'Woody Allen',
  },
  {
    name: 'The Imitation Game',
    creator: 'Morten Tyldum',
  },
  {
    name: '四月物語',
    creator: '岩井俊二',
  },
  {
    name: 'リトル・フォレスト Little Forest',
    creator: '森淳一',
  },
  {
    name: 'ハチ公物語',
    creator: '神山征二郎',
  },
  {
    name: 'Constantine',
    creator: 'Francis Lawrence',
  },
  {
    name: 'No Time to Die',
    creator: 'Cary Joji Fukunaga',
  },
  {
    name: 'Glass Onion',
    creator: 'Rian Johnson',
  },
]

export const drama: MediaRecord[] = [
  {
    name: 'Breaking Bad',
  },
  {
    name: '더 글로리 The Glory',
  },
  {
    name: '오징어 게임 Squid Game',
  },
  {
    name: "솔로지옥 Single's Inferno",
  },
  {
    name: '繁花',
    lang: 'zh-Hans',
  },
  {
    name: '后宫·甄嬛传',
    lang: 'zh-Hans',
  },
  {
    name: 'Shōgun',
  },
  {
    name: 'House of Cards',
  },
  {
    name: 'Prison Break',
  },
  {
    name: '3 Body Problem',
  },
  {
    name: 'First Love 初恋',
  },
]

export const game: MediaRecord[] = [
  {
    name: 'ELDEN RING',
    creator: 'FromSoftware',
  },
  {
    name: 'SEKIRO: Shadows Die Twice',
    creator: 'FromSoftware',
  },
  {
    name: 'Dota 2',
    creator: 'Valve',
  },
  {
    name: 'Counter-Strike 2',
    creator: 'Valve',
  },
  {
    name: 'World of Warships',
    creator: 'Wargaming',
  },
  {
    name: 'Darkest Dungeon',
    creator: 'Red Hook Studios',
  },
  {
    name: '太吾绘卷',
    creator: '螺舟工作室',
    lang: 'zh-Hans',
  },
  {
    name: 'The Binding of Isaac: Rebirth',
    creator: 'Nicalis',
  },
  {
    name: 'Dota Underlords',
    creator: 'Valve',
  },
  {
    name: 'Shadow Tactics: Blades of the Shogun',
    creator: 'Mimimi Games',
  },
  {
    name: 'Monster Hunter Wilds',
    creator: 'CAPCOM',
  },
  {
    name: 'Clair Obscur: Expedition 33',
    creator: 'Sandfall Interactive',
  },
  {
    name: 'HITMAN',
    creator: 'IO Interactive',
  },
  {
    name: '三國志IX',
    creator: 'コーエーテクモゲームス',
  },
]

export const song: MediaRecord[] = [
  {
    name: '人生のメリーゴーランド',
    creator: '久石譲',
  },
  {
    name: 'あの夏へ',
    creator: '久石譲',
  },
  {
    name: 'Merry Christmas Mr. Lawrence',
    creator: '坂本龍一',
  },
  {
    name: '最蓝梦核',
    creator: '莫非定律乐团',
    lang: 'zh-Hans',
  },
  {
    name: '青苔',
    creator: '莫非定律乐团',
    lang: 'zh-Hans',
  },
  {
    name: '情歌',
    creator: '陳珊妮',
    lang: 'zh-Hant',
  },
  {
    name: '成為一個厲害的普通人',
    creator: '陳珊妮',
    lang: 'zh-Hant',
  },
  {
    name: '我的孤獨認出你的孤獨',
    creator: '陳婧霏',
    lang: 'zh-Hant',
  },
  {
    name: '舞舞舞',
    creator: '陳婧霏',
    lang: 'zh-Hant',
  },
  {
    name: '花斑蚊',
    creator: '攬佬SKAI ISYOURGOD',
    lang: 'zh-Hant',
  },
  {
    name: 'Plastic Love',
    creator: '竹内まりや',
  },
  {
    name: '真夜中のドア〜stay with me',
    creator: '松原みき',
  },
  {
    name: 'アディオス',
    creator: 'DAZBEE',
  },
  {
    name: 'Whiplash',
    creator: 'aespa',
  },
  {
    name: 'Supernova',
    creator: 'aespa',
  },
  {
    name: 'Небо',
    creator: 'SadSvit',
  },
  {
    name: 'Smells Like Teen Spirit',
    creator: 'Nirvana',
  },
  {
    name: 'The Distance',
    creator: 'CAKE',
  },
]

export const media: Record<MediaType, MediaRecord[]> = {
  anime,
  drama,
  movie,
  game,
  song,
  book,
}
