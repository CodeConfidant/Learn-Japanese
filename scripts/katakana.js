// Object containing Katakana transliterations and kana.
var katakana = [

    // Vowels
    {transliteration: "A", kana: "ア", type: "Katakana"}, {transliteration: "E", kana: "エ", type: "Katakana"},
    {transliteration: "I", kana: "イ", type: "Katakana"}, {transliteration: "O", kana: "オ", type: "Katakana"},
    {transliteration: "U", kana: "ウ", type: "Katakana"},

    // B Consonant
    {transliteration: "Ba", kana: "バ", type: "Katakana"}, {transliteration: "Be", kana: "ベ", type: "Katakana"},
    {transliteration: "Bi", kana: "ビ", type: "Katakana"}, {transliteration: "Bo", kana: "ボ", type: "Katakana"},
    {transliteration: "Bu", kana: "ブ", type: "Katakana"},

    // D Consonant
    {transliteration: "Da", kana: "ダ", type: "Katakana"}, {transliteration: "De", kana: "デ", type: "Katakana"},
    {transliteration: "Do", kana: "ド", type: "Katakana"}, {transliteration: "Du", kana: "ヅ", type: "Katakana"},
    {transliteration: "Dzu", kana: "ヅ", type: "Katakana"},

    // F Consonant
    {transliteration: "Fu", kana: "フ", type: "Katakana"},
    
    // G Consonant
    {transliteration: "Ga", kana: "ガ", type: "Katakana"}, {transliteration: "Ge", kana: "ゲ", type: "Katakana"},
    {transliteration: "Gi", kana: "ギ", type: "Katakana"}, {transliteration: "Go", kana: "ゴ", type: "Katakana"},
    {transliteration: "Gu", kana: "グ", type: "Katakana"},
    
    // H Consonant
    {transliteration: "Ha", kana: "ハ", type: "Katakana"}, {transliteration: "He", kana: "ヘ", type: "Katakana"},
    {transliteration: "Hi", kana: "ヒ", type: "Katakana"}, {transliteration: "Ho", kana: "ホ", type: "Katakana"},
    {transliteration: "Hu", kana: "フ", type: "Katakana"},

    // J Consonant
    {transliteration: "Ji", kana: "ジ", type: "Katakana"},
    
    // K Consonant
    {transliteration: "Ka", kana: "カ", type: "Katakana"}, {transliteration: "Ke", kana: "ケ", type: "Katakana"},
    {transliteration: "Ki", kana: "キ", type: "Katakana"}, {transliteration: "Ko", kana: "コ", type: "Katakana"},
    {transliteration: "Ku", kana: "ク", type: "Katakana"},
    
    // M Consonant
    {transliteration: "Ma", kana: "マ", type: "Katakana"}, {transliteration: "Me", kana: "メ", type: "Katakana"},
    {transliteration: "Mi", kana: "ミ", type: "Katakana"}, {transliteration: "Mo", kana: "モ", type: "Katakana"},
    {transliteration: "Mu", kana: "ム", type: "Katakana"},
    
    // N Consonant
    {transliteration: "N", kana: "ン", type: "Katakana"},  {transliteration: "Na", kana: "ナ", type: "Katakana"},
    {transliteration: "Ne", kana: "ネ", type: "Katakana"}, {transliteration: "Ni", kana: "ニ", type: "Katakana"},
    {transliteration: "No", kana: "ノ", type: "Katakana"}, {transliteration: "Nu", kana: "ヌ", type: "Katakana"},
    
    // P Consonant
    {transliteration: "Pa", kana: "パ", type: "Katakana"}, {transliteration: "Pe", kana: "ペ", type: "Katakana"},
    {transliteration: "Pi", kana: "ピ", type: "Katakana"}, {transliteration: "Po", kana: "ポ", type: "Katakana"},
    {transliteration: "Pu", kana: "プ", type: "Katakana"},

    // R Consonant
    {transliteration: "Ra", kana: "ラ", type: "Katakana"}, {transliteration: "Re", kana: "レ", type: "Katakana"},
    {transliteration: "Ri", kana: "リ", type: "Katakana"}, {transliteration: "Ro", kana: "ロ", type: "Katakana"},
    {transliteration: "Ru", kana: "ル", type: "Katakana"},
    
    // S Consonant
    {transliteration: "Sa", kana: "サ", type: "Katakana"},  {transliteration: "Sha", kana: "サ", type: "Katakana"}, {transliteration: "Se", kana: "セ", type: "Katakana"},
    {transliteration: "Si", kana: "シ", type: "Katakana"},  {transliteration: "Shi", kana: "シ", type: "Katakana"}, {transliteration: "So", kana: "ソ", type: "Katakana"}, 
    {transliteration: "Sho", kana: "ソ", type: "Katakana"}, {transliteration: "Su", kana: "ス", type: "Katakana"},  {transliteration: "Shu", kana: "ス", type: "Katakana"},

    // T Consonant
    {transliteration: "Ta", kana: "タ", type: "Katakana"}, {transliteration: "Te", kana: "テ", type: "Katakana"},
    {transliteration: "Ti", kana: "チ", type: "Katakana"}, {transliteration: "Chi", kana: "チ", type: "Katakana"},
    {transliteration: "To", kana: "ト", type: "Katakana"}, {transliteration: "Tu", kana: "ツ", type: "Katakana"},
    {transliteration: "Tsu", kana: "ツ", type: "Katakana"},

    // W Consonant
    {transliteration: "Wa", kana: "ワ", type: "Katakana"}, {transliteration: "We", kana: "ヱ", type: "Katakana"},
    {transliteration: "Wi", kana: "ヰ", type: "Katakana"}, {transliteration: "Wo", kana: "ヲ", type: "Katakana"},

    // Y Consonant
    {transliteration: "Ya", kana: "ヤ", type: "Katakana"}, {transliteration: "Yo", kana: "ヨ", type: "Katakana"},
    {transliteration: "Yu", kana: "ユ", type: "Katakana"},

    // Z Consonant
    {transliteration: "Za", kana: "ザ", type: "Katakana"}, {transliteration: "Ze", kana: "ゼ", type: "Katakana"},
    {transliteration: "Zi", kana: "ジ", type: "Katakana"}, {transliteration: "Zo", kana: "ゾ", type: "Katakana"},
    {transliteration: "Zu", kana: "ズ"}
];