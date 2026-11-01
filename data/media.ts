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
    name: '秒速5センチメートル',
    creator: '新海誠',
  },
  {
    name: '進撃の巨人 Attack on Titan',
    creator: '諫山創',
  },
  {
    name: 'ヴァイオレット・エヴァーガーデン Violet Evergarden',
    creator: '暁佳奈',
  },
  {
    name: '文豪ストレイドッグス Bungo Stray Dogs',
    creator: '朝霧カフカ',
  },
  {
    name: 'かぐや様は告らせたい Kaguya-sama: Love Is War',
    creator: '赤坂アカ',
  },
  {
    name: 'BEASTARS',
    creator: '板垣巴留',
  },
  {
    name: 'やがて君になる Bloom Into You',
    creator: '仲谷鳰',
  },
  {
    name: 'はたらく細胞 Cells at Work!',
    creator: '清水茜',
  },
  {
    name: 'とある科学の超電磁砲 A Certain Scientific Railgun',
    creator: '鎌池和馬',
  },
  {
    name: '乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった… My Next Life as a Villainess',
    creator: '山口悟',
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
]

export const drama: MediaRecord[] = [
  {
    name: 'Breaking Bad',
  },
  {
    name: '오징어 게임 Squid Game',
  },
  {
    name: "솔로지옥 Single's Inferno",
  },
  {
    name: '后宫·甄嬛传',
    lang: 'zh-Hans',
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
