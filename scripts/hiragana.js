// Object containing Hiragana transliterations and kana.
var hiragana = [

    // Vowels
    {transliteration: "A", kana: "ぁ", type: "Hiragana"}, {transliteration: "E", kana: "ぇ", type: "Hiragana"},
    {transliteration: "I", kana: "い", type: "Hiragana"}, {transliteration: "O", kana: "お", type: "Hiragana"},
    {transliteration: "U", kana: "う", type: "Hiragana"},

    // B Consonant
    {transliteration: "Ba", kana: "ば", type: "Hiragana"}, {transliteration: "Be", kana: "べ", type: "Hiragana"},
    {transliteration: "Bi", kana: "び", type: "Hiragana"}, {transliteration: "Bo", kana: "ぼ", type: "Hiragana"}, 
    {transliteration: "Bu", kana: "ぶ", type: "Hiragana"},
   
    // D Consonant
    {transliteration: "Da", kana: "だ", type: "Hiragana"}, {transliteration: "De", kana: "で", type: "Hiragana"},
    {transliteration: "Do", kana: "ど", type: "Hiragana"}, {transliteration: "Du", kana: "づ", type: "Hiragana"},
    {transliteration: "Dzu", kana: "づ", type: "Hiragana"},

    // F Consonant
    {transliteration: "Fu", kana: "ふ", type: "Hiragana"},
    
    // G Consonant
    {transliteration: "Ga", kana: "が", type: "Hiragana"}, {transliteration: "Ge", kana: "げ", type: "Hiragana"},
    {transliteration: "Gi", kana: "ぎ", type: "Hiragana"}, {transliteration: "Go", kana: "ご", type: "Hiragana"},
    {transliteration: "Gu", kana: "ぐ", type: "Hiragana"},
    
    // H Consonant
    {transliteration: "Ha", kana: "は", type: "Hiragana"}, {transliteration: "He", kana: "へ", type: "Hiragana"},
    {transliteration: "Hi", kana: "ひ", type: "Hiragana"}, {transliteration: "Ho", kana: "ほ", type: "Hiragana"},
    {transliteration: "Hu", kana: "ふ", type: "Hiragana"},

    // J Consonant
    {transliteration: "Ji", kana: "じ", type: "Hiragana"},
    
    // K Consonant
    {transliteration: "Ka", kana: "か", type: "Hiragana"}, {transliteration: "Ke", kana: "け", type: "Hiragana"},
    {transliteration: "Ki", kana: "き", type: "Hiragana"}, {transliteration: "Ko", kana: "こ", type: "Hiragana"},
    {transliteration: "Ku", kana: "く", type: "Hiragana"},
    
    // M Consonant
    {transliteration: "Ma", kana: "ま", type: "Hiragana"}, {transliteration: "Me", kana: "め", type: "Hiragana"},
    {transliteration: "Mi", kana: "み", type: "Hiragana"}, {transliteration: "Mo", kana: "も", type: "Hiragana"},
    {transliteration: "Mu", kana: "む", type: "Hiragana"},
    
    // N Consonant
    {transliteration: "N", kana: "ん", type: "Hiragana"},  {transliteration: "Na", kana: "な", type: "Hiragana"},
    {transliteration: "Ne", kana: "ね", type: "Hiragana"}, {transliteration: "Ni", kana: "に", type: "Hiragana"},
    {transliteration: "No", kana: "の", type: "Hiragana"}, {transliteration: "Nu", kana: "ぬ", type: "Hiragana"},
    
    // P Consonant
    {transliteration: "Pa", kana: "ぱ", type: "Hiragana"}, {transliteration: "Pe", kana: "ぺ", type: "Hiragana"},
    {transliteration: "Pi", kana: "ぴ", type: "Hiragana"}, {transliteration: "Po", kana: "ぽ", type: "Hiragana"},
    {transliteration: "Pu", kana: "ぷ", type: "Hiragana"},

    // R Consonant
    {transliteration: "Ra", kana: "ら", type: "Hiragana"}, {transliteration: "Re", kana: "れ", type: "Hiragana"},
    {transliteration: "Ri", kana: "り", type: "Hiragana"}, {transliteration: "Ro", kana: "ろ", type: "Hiragana"},
    {transliteration: "Ru", kana: "る", type: "Hiragana"},
    
    // S Consonant
    {transliteration: "Sa", kana: "さ", type: "Hiragana"},  {transliteration: "Sha", kana: "さ", type: "Hiragana"}, {transliteration: "Se", kana: "せ", type: "Hiragana"},
    {transliteration: "Si", kana: "し", type: "Hiragana"},  {transliteration: "Shi", kana: "し", type: "Hiragana"}, {transliteration: "So", kana: "そ", type: "Hiragana"}, 
    {transliteration: "Sho", kana: "そ", type: "Hiragana"}, {transliteration: "Su", kana: "す", type: "Hiragana"},  {transliteration: "Shu", kana: "す", type: "Hiragana"},

    // T Consonant
    {transliteration: "Ta", kana: "た", type: "Hiragana"}, {transliteration: "Te", kana: "て", type: "Hiragana"},
    {transliteration: "Ti", kana: "ち", type: "Hiragana"}, {transliteration: "Chi", kana: "ち", type: "Hiragana"},
    {transliteration: "To", kana: "と", type: "Hiragana"}, {transliteration: "Tu", kana: "っ", type: "Hiragana"},
    {transliteration: "Tsu", kana: "っ", type: "Hiragana"},

    // W Consonant
    {transliteration: "Wa", kana: "わ", type: "Hiragana"}, {transliteration: "We", kana: "ゑ", type: "Hiragana"},
    {transliteration: "Wi", kana: "ゐ", type: "Hiragana"}, {transliteration: "Wo", kana: "を", type: "Hiragana"},

    // Y Consonant
    {transliteration: "Ya", kana: "や", type: "Hiragana"}, {transliteration: "Yo", kana: "よ", type: "Hiragana"},
    {transliteration: "Yu", kana: "ゆ", type: "Hiragana"},

    // Z Consonant
    {transliteration: "Za", kana: "ざ", type: "Hiragana"}, {transliteration: "Ze", kana: "ぜ", type: "Hiragana"},
    {transliteration: "Zi", kana: "じ", type: "Hiragana"}, {transliteration: "Zo", kana: "ぞ", type: "Hiragana"},
    {transliteration: "Zu", kana: "ず"}
];