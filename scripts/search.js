// Object containing Hiragana transliterations and kana.
var hiragana = [

    // Vowels
    {transliteration: "A", kana: "ぁ"}, {transliteration: "E", kana: "ぇ"},
    {transliteration: "I", kana: "い"}, {transliteration: "O", kana: "お"},
    {transliteration: "U", kana: "う"},

    // B Consonant
    {transliteration: "Ba", kana: "ば"}, {transliteration: "Be", kana: "べ"},
    {transliteration: "Bi", kana: "び"}, {transliteration: "Bo", kana: "ぼ"}, 
    {transliteration: "Bu", kana: "ぶ"},
   
    // D Consonant
    {transliteration: "Da", kana: "だ"}, {transliteration: "De", kana: "で"},
    {transliteration: "Do", kana: "ど"}, {transliteration: "Du", kana: "づ"},
    {transliteration: "Dzu", kana: "づ"},
    
    // G Consonant
    {transliteration: "Ga", kana: "が"}, {transliteration: "Ge", kana: "げ"},
    {transliteration: "Gi", kana: "ぎ"}, {transliteration: "Go", kana: "ご"},
    {transliteration: "Gu", kana: "ぐ"},
    
    // H Consonant
    {transliteration: "Ha", kana: "は"}, {transliteration: "He", kana: "へ"},
    {transliteration: "Hi", kana: "ひ"}, {transliteration: "Ho", kana: "ほ"},
    {transliteration: "Hu", kana: "ふ"},

    // J Consonant
    {transliteration: "Ji", kana: "じ"},
    
    // K Consonant
    {transliteration: "Ka", kana: "か"}, {transliteration: "Ke", kana: "け"},
    {transliteration: "Ki", kana: "き"}, {transliteration: "Ko", kana: "こ"},
    {transliteration: "Ku", kana: "く"},
    
    // M Consonant
    {transliteration: "Ma", kana: "ま"}, {transliteration: "Me", kana: "め"},
    {transliteration: "Mi", kana: "み"}, {transliteration: "Mo", kana: "も"},
    {transliteration: "Mu", kana: "む"},
    
    // N Consonant
    {transliteration: "N", kana: "ん"},  {transliteration: "Na", kana: "な"},
    {transliteration: "Ne", kana: "ね"}, {transliteration: "Ni", kana: "に"},
    {transliteration: "No", kana: "の"}, {transliteration: "Nu", kana: "ぬ"},
    
    // P Consonant
    {transliteration: "Pa", kana: "ぱ"}, {transliteration: "Pe", kana: "ぺ"},
    {transliteration: "Pi", kana: "ぴ"}, {transliteration: "Po", kana: "ぽ"},
    {transliteration: "Pu", kana: "ぷ"},

    // R Consonant
    {transliteration: "Ra", kana: "ら"}, {transliteration: "Re", kana: "れ"},
    {transliteration: "Ri", kana: "り"}, {transliteration: "Ro", kana: "ろ"},
    {transliteration: "Ru", kana: "る"},
    
    // S Consonant
    {transliteration: "Sa", kana: "さ"}, {transliteration: "Se", kana: "せ"},
    {transliteration: "Si", kana: "し"}, {transliteration: "Shi", kana: "し"},
    {transliteration: "So", kana: "そ"}, {transliteration: "Su", kana: "す"},
    {transliteration: "Shu", kana: "す"},

    // T Consonant
    {transliteration: "Ta", kana: "た"}, {transliteration: "Te", kana: "て"},
    {transliteration: "Ti", kana: "ち"}, {transliteration: "Chi", kana: "ち"},
    {transliteration: "To", kana: "と"}, {transliteration: "Tu", kana: "っ"},
    {transliteration: "Tsu", kana: "っ"},

    // W Consonant
    {transliteration: "Wa", kana: "わ"}, {transliteration: "We", kana: "ゑ"},
    {transliteration: "Wi", kana: "ゐ"}, {transliteration: "Wo", kana: "を"},

    // Y Consonant
    {transliteration: "Ya", kana: "や"}, {transliteration: "Yo", kana: "よ"},
    {transliteration: "Yu", kana: "ゆ"},

    // Z Consonant
    {transliteration: "Za", kana: "ざ"}, {transliteration: "Ze", kana: "ぜ"},
    {transliteration: "Zi", kana: "じ"}, {transliteration: "Zo", kana: "ぞ"},
    {transliteration: "Zu", kana: "ず"}
];

// Object containing Katakana transliterations and kana.
var katakana = [

    // Vowels
    {transliteration: "A", kana: "ア"}, {transliteration: "E", kana: "エ"},
    {transliteration: "I", kana: "イ"}, {transliteration: "O", kana: "オ"},
    {transliteration: "U", kana: "ウ"},

    // B Consonant
    {transliteration: "Ba", kana: "バ"}, {transliteration: "Be", kana: "ベ"},
    {transliteration: "Bi", kana: "ビ"}, {transliteration: "Bo", kana: "ボ"},
    {transliteration: "Bu", kana: "ブ"},

    // D Consonant
    {transliteration: "Da", kana: "ダ"}, {transliteration: "De", kana: "デ"},
    {transliteration: "Do", kana: "ド"}, {transliteration: "Du", kana: "ヅ"},
    {transliteration: "Dzu", kana: "ヅ"},
    
    // G Consonant
    {transliteration: "Ga", kana: "ガ"}, {transliteration: "Ge", kana: "ゲ"},
    {transliteration: "Gi", kana: "ギ"}, {transliteration: "Go", kana: "ゴ"},
    {transliteration: "Gu", kana: "グ"},
    
    // H Consonant
    {transliteration: "Ha", kana: "ハ"}, {transliteration: "He", kana: "ヘ"},
    {transliteration: "Hi", kana: "ヒ"}, {transliteration: "Ho", kana: "ホ"},
    {transliteration: "Hu", kana: "フ"},

    // J Consonant
    {transliteration: "Ji", kana: "ジ"},
    
    // K Consonant
    {transliteration: "Ka", kana: "カ"}, {transliteration: "Ke", kana: "ケ"},
    {transliteration: "Ki", kana: "キ"}, {transliteration: "Ko", kana: "コ"},
    {transliteration: "Ku", kana: "ク"},
    
    // M Consonant
    {transliteration: "Ma", kana: "マ"}, {transliteration: "Me", kana: "メ"},
    {transliteration: "Mi", kana: "ミ"}, {transliteration: "Mo", kana: "モ"},
    {transliteration: "Mu", kana: "ム"},
    
    // N Consonant
    {transliteration: "N", kana: "ン"},  {transliteration: "Na", kana: "ナ"},
    {transliteration: "Ne", kana: "ネ"}, {transliteration: "Ni", kana: "ニ"},
    {transliteration: "No", kana: "ノ"}, {transliteration: "Nu", kana: "ヌ"},
    
    // P Consonant
    {transliteration: "Pa", kana: "パ"}, {transliteration: "Pe", kana: "ペ"},
    {transliteration: "Pi", kana: "ピ"}, {transliteration: "Po", kana: "ポ"},
    {transliteration: "Pu", kana: "プ"},

    // R Consonant
    {transliteration: "Ra", kana: "ラ"}, {transliteration: "Re", kana: "レ"},
    {transliteration: "Ri", kana: "リ"}, {transliteration: "Ro", kana: "ロ"},
    {transliteration: "Ru", kana: "ル"},
    
    // S Consonant
    {transliteration: "Sa", kana: "サ"}, {transliteration: "Se", kana: "セ"},
    {transliteration: "Si", kana: "シ"}, {transliteration: "Shi", kana: "シ"},
    {transliteration: "So", kana: "ソ"}, {transliteration: "Su", kana: "ス"},
    {transliteration: "Shu", kana: "ス"},

    // T Consonant
    {transliteration: "Ta", kana: "タ"}, {transliteration: "Te", kana: "テ"},
    {transliteration: "Ti", kana: "チ"}, {transliteration: "Chi", kana: "チ"},
    {transliteration: "To", kana: "ト"}, {transliteration: "Tu", kana: "ツ"},
    {transliteration: "Tsu", kana: "ツ"},

    // W Consonant
    {transliteration: "Wa", kana: "ワ"}, {transliteration: "We", kana: "ヱ"},
    {transliteration: "Wi", kana: "ヰ"}, {transliteration: "Wo", kana: "ヲ"},

    // Y Consonant
    {transliteration: "Ya", kana: "ヤ"}, {transliteration: "Yo", kana: "ヨ"},
    {transliteration: "Yu", kana: "ユ"},

    // Z Consonant
    {transliteration: "Za", kana: "ザ"}, {transliteration: "Ze", kana: "ゼ"},
    {transliteration: "Zi", kana: "ジ"}, {transliteration: "Zo", kana: "ゾ"},
    {transliteration: "Zu", kana: "ズ"}
];

// Object containing Kanji transliterations, kana, and translations.
var kanji = [

    // Nouns
    {translation: "Japan", kana:"日本", transliteration:"Nihon"},
    {translation: "Japan", kana:"日本", transliteration:"Nippon"},
    {translation: "Ground", kana:"地", transliteration:"Ji"},
    {translation: "Water", kana:"水", transliteration:"Mizu"},
    {translation: "Wind", kana:"風", transliteration:"Kaze"},
    {translation: "Rain", kana:"雨", transliteration:"Ame"},
    {translation: "Fire", kana:"火", transliteration:"Hi"},
    {translation: "Thunder", kana:"雷", transliteration:"Kaminari"},
    {translation: "Lake", kana:"湖", transliteration:"Mizumi"},
    {translation: "Island", kana:"島", transliteration:"Shima"},
    {translation: "Mountain", kana:"山", transliteration:"Yama"},
    {translation: "Righteousness", kana:"義", transliteration:"Gi"},
    {translation: "Courage", kana:"勇", transliteration:"Yu"},
    {translation: "Compassion", kana:"仁", transliteration:"Jin"},
    {translation: "Respect", kana:"礼", transliteration:"Rei"},
    {translation: "Honesty", kana:"誠", transliteration:"Makoto"},
    {translation: "Honor", kana:"名誉", transliteration:"Meiyo"},
    {translation: "Loyalty", kana:"忠義", transliteration:"Chugi"},
    {translation: "Self-Control", kana:"自制", transliteration:"Jisei"},
    {translation: "Filial Piety", kana:"孝", transliteration:"Ko"},
    {translation: "Wisdom", kana:"智", transliteration:"Chi"},
    {translation: "Fraternity", kana:"悌", transliteration:"Tei"},
    
    // Verbs
    {translation: "Learn", kana:"学ぶ", transliteration:"Manabu"},

    // Adjectives
    {translation: "Japanese", kana:"日本語", transliteration:"Nihon-Koku"},
    {translation: "Japanese", kana:"日本語", transliteration:"Nippon-Koku"},
];

// Object containing General Hiragana transliterations, kana, and translations.
var general_hiragana = [

    // Articles
    {translation: "The", kana:"その", transliteration:"Sono"},

    // Nouns
    {translation: "Rabbit", kana:"うさぎ", transliteration:"Usagi"},
    {translation: "Bear", kana:"くま", transliteration:"Kuma"},
    {translation: "Fox", kana:"きっね", transliteration:"Kitsune"},
    {translation: "Honey", kana:"はちみっ", transliteration:"Hachimitsu"},
    {translation: "Country", kana:"こく", transliteration:"Koku"},
    {translation: "Hand", kana:"て", transliteration:"Te"},
    {translation: "Empty-Hand", kana:"からて", transliteration:"Karate"},
    {translation: "Sword-Path", kana:"けんど", transliteration:"Kendo"},
    {translation: "Sword-Way", kana:"けんど", transliteration:"Kendo"},
    {translation: "Warrior", kana:"ぶし", transliteration:"Bushi"},
    {translation: "Wood", kana:"ぼく", transliteration:"Boku"},
    {translation: "Wooden-Sword", kana:"ぼけん", transliteration:"Boken"},
    {translation: "Sword", kana:"けん", transliteration:"Ken"},
    {translation: "Warrior-Path", kana:"ぶしど", transliteration:"Bushido"},
    {translation: "Warrior-Way", kana:"ぶしど", transliteration:"Bushido"},
    {translation: "War-Path", kana:"ぶど", transliteration:"Budo"},
    {translation: "War-Way", kana:"ぶど", transliteration:"Budo"},
    {translation: "War", kana:"ぶ", transliteration:"Bu"},
    {translation: "Path", kana:"ど", transliteration:"Do"},
    {translation: "Way", kana:"ど", transliteration:"Do"},
    {translation: "Sword-Master", kana:"けんせい", transliteration:"Kensei"},
    {translation: "Sword-Saint", kana:"けんせい", transliteration:"Kensei"},

    // Pronouns
    {translation: "This", kana:"この", transliteration:"Kono"},
    {translation: "This", kana:"これ", transliteration:"Kore"},
    {translation: "That", kana:"ぁの", transliteration:"Ano"},
    {translation: "Which", kana:"どの", transliteration:"Dono"},

    // Verbs
    {translation: "Learn", kana:"まなぶ", transliteration:"Manabu"},

    // Adverbs
    {translation: "Out", kana:"でる", transliteration:"Deru"},
    {translation: "Very", kana:"ども", transliteration:"Domo"},

    // Adjectives
    {translation: "Many", kana:"ども", transliteration:"Domo"},
    {translation: "Martial", kana:"ぶ", transliteration:"Bu"},
    {translation: "Wooden", kana:"ぼく", transliteration:"Boku"},

    // Interjections
    {translation: "Hello", kana:"こんにちわ", transliteration:"Konnichiwa"},
    {translation: "Goodbye", kana:"さよむら", transliteration:"Sayonara"},
    {translation: "Thanks", kana:"ありがと", transliteration:"Arigato"},
    {translation: "Thank-You", kana:"ありがと", transliteration:"Arigato"},
    {translation: "Good-Evening", kana:"こんばんわ", transliteration:"Konbanwa"},
    {translation: "Good-Afternoon", kana:"こんにちわん", transliteration:"Konnichiwan"},

    // Prepositions
    {translation: "Of", kana:"の", transliteration:"No"},
    {translation: "At", kana:"の", transliteration:"No"},
    {translation: "What", kana:"なに", transliteration:"Nani"},
];

// Object containing General Katakana transliterations, kana, and translations.
var general_katakana = [

    // Articles
    {translation: "The", kana:"ソノ", transliteration:"Sono"},

    // Nouns
    {translation: "Rabbit", kana:"ウサギ", transliteration:"Usagi"},
    {translation: "Bear", kana:"クマ", transliteration:"Kuma"},
    {translation: "Fox", kana:"キツネ", transliteration:"Kitsune"},
    {translation: "Honey", kana:"ハチミツ", transliteration:"Hachimitsu"},
    {translation: "Country", kana:"コク", transliteration:"Koku"},
    {translation: "Hand", kana:"テ", transliteration:"Te"},
    {translation: "Empty-Hand", kana:"カラテ", transliteration:"Karate"},
    {translation: "Sword-Path", kana:"ケンド", transliteration:"Kendo"},
    {translation: "Sword-Way", kana:"ケンド", transliteration:"Kendo"},
    {translation: "Warrior", kana:"ブシ", transliteration:"Bushi"},
    {translation: "Wood", kana:"ボク", transliteration:"Boku"},
    {translation: "Wooden-Sword", kana:"ボケン", transliteration:"Boken"},
    {translation: "Sword", kana:"ケン", transliteration:"Ken"},
    {translation: "Warrior-Path", kana:"ブシド", transliteration:"Bushido"},
    {translation: "Warrior-Way", kana:"ブシド", transliteration:"Bushido"},
    {translation: "War-Path", kana:"ブド", transliteration:"Budo"},
    {translation: "War-Way", kana:"ブド", transliteration:"Budo"},
    {translation: "War", kana:"ブ", transliteration:"Bu"},
    {translation: "Path", kana:"ド", transliteration:"Do"},
    {translation: "Way", kana:"ド", transliteration:"Do"},
    {translation: "Sword-Master", kana:"ケンセイ", transliteration:"Kensei"},
    {translation: "Sword-Saint", kana:"ケンセイ", transliteration:"Kensei"},

    // Pronouns
    {translation: "This", kana:"コノ", transliteration:"Kono"},
    {translation: "This", kana:"コレ", transliteration:"Kore"},
    {translation: "That", kana:"アノ", transliteration:"Ano"},
    {translation: "Which", kana:"ドノ", transliteration:"Dono"},

    // Verbs
    {translation: "Learn", kana:"マナブ", transliteration:"Manabu"},

    // Adverbs
    {translation: "Out", kana:"デル", transliteration:"Deru"},
    {translation: "Very", kana:"ドモ", transliteration:"Domo"},

    // Adjectives
    {translation: "Many", kana:"ドモ", transliteration:"Domo"},
    {translation: "Martial", kana:"ブ", transliteration:"Bu"},
    {translation: "Wooden", kana:"ボク", transliteration:"Boku"},

    // Interjections
    {translation: "Hello", kana:"コンニチワ", transliteration:"Konnichiwa"},
    {translation: "Goodbye", kana:"サヨナラ", transliteration:"Sayonara"},
    {translation: "Thanks", kana:"アリガト", transliteration:"Arigato"},
    {translation: "Thank-You", kana:"アリガト", transliteration:"Arigato"},
    {translation: "Good-Evening", kana:"コンバンワ", transliteration:"Konbanwa"},
    {translation: "Good-Afternoon", kana:"コンニチワン", transliteration:"Konnichiwan"},

    // Prepositions
    {translation: "Of", kana:"ノ", transliteration:"No"},
    {translation: "At", kana:"ノ", transliteration:"No"},
    {translation: "What", kana:"ナニ", transliteration:"Nani"},
];

// Remove number characters from argument string and return.
trimNumbers = (arg) => {
    for (var i of arg){
        switch(i) {
            case "0":
                arg = arg.replace("0", "");
                break;
            case "1":
                arg = arg.replace("1", "");
                break;
            case "2":
                arg = arg.replace("2", "");
                break;
            case "3":
                arg = arg.replace("3", "");
                break;
            case "4":
                arg = arg.replace("4", "");
                break;
            case "5":
                arg = arg.replace("5", "");
                break;
            case "6":
                arg = arg.replace("6", "");
                break;
            case "7":
                arg = arg.replace("7", "");
                break;
            case "8":
                arg = arg.replace("8", "");
                break;
            case "9":
                arg = arg.replace("9", "");
                break;
        }
    }

    return arg;
};

// Remove whitespace characters from argument string and return.
trimSpace = (arg) => {
    arg = arg.replace(/ /g, "");
    return arg;
};

// Remove special characters from argument string and return.
trimSpec = (arg) => {
    arg = arg.replace(/\"/g, "");

    for (var i of arg){
        switch(i) {
            case "`":
                arg = arg.replace("`", "");
                break;
            case "~":
                arg = arg.replace("~", "");
                break;
            case "!":
                arg = arg.replace("!", "");
                break;
            case "@":
                arg = arg.replace("@", "");
                break;
            case "#":
                arg = arg.replace("#", "");
                break;
            case "$":
                arg = arg.replace("$", "");
                break;
            case "%":
                arg = arg.replace("%", "");
                break;
            case "^":
                arg = arg.replace("^", "");
                break;
            case "&":
                arg = arg.replace("&", "");
                break;
            case "*":
                arg = arg.replace("*", "");
                break;
            case "(":
                arg = arg.replace("(", "");
                break;
            case ")":
                arg = arg.replace(")", "");
                break;
            case "_":
                arg = arg.replace("_", "");
                break;
            case "-":
                arg = arg.replace("-", "");
                break;
            case "+":
                arg = arg.replace("+", "");
                break;
            case "=":
                arg = arg.replace("=", "");
                break;
            case "|":
                arg = arg.replace("|", "");
                break;
            case "}":
                arg = arg.replace("}", "");
                break;
            case "{":
                arg = arg.replace("{", "");
                break;
            case "]":
                arg = arg.replace("]", "");
                break;
            case "[":
                arg = arg.replace("[", "");
                break;
            case "'":
                arg = arg.replace("'", "");
                break;
            case ":":
                arg = arg.replace(":", "");
                break;
            case ";":
                arg = arg.replace(";", "");
                break;
            case "/":
                arg = arg.replace("/", "");
                break;
            case "?":
                arg = arg.replace("?", "");
                break;
            case ">":
                arg = arg.replace(">", "");
                break;
            case "<":
                arg = arg.replace("<", "");
                break;
            case ".":
                arg = arg.replace(".", "");
                break;
            case ",":
                arg = arg.replace(",", "");
                break;
        }
    }

    return arg;
};

// Remove line-break characters from argument string and return.
trimLineBreak = (arg) => {
    arg = arg.replace(/\\/g, "");
    return arg;
};

// Remove numbers, whitespace, special, and line break characters from argument string and return.
trimAll = (arg) => {
    arg = trimNumbers(arg);
    arg = trimSpace(arg);
    arg = trimSpec(arg);
    arg = trimLineBreak(arg);
    return arg;
};

// Check argument for matches in Hiragana object and log to console.
searchlog_hiragana = (search_value) => {
    for (var i of hiragana) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase());
        var temp_kana = trimAll(i.kana.toLowerCase());

        if (search_value === temp_transliteration) {
            console.log("Hiragana:", i);
        }   
        else if (search_value === temp_kana) {
            console.log("Hiragana:", i);
        }
    }
};

// Check argument for matches in Katakana object and log to console.
searchlog_katakana = (search_value) => {
    for (var i of katakana) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase());
        var temp_kana = trimAll(i.kana.toLowerCase());

        if (search_value === temp_transliteration) {
            console.log("Katakana:", i);
        }   
        else if (search_value === temp_kana) {
            console.log("Katakana:", i);
        }
    }
};

// Check argument for matches in Kanji object and log to console.
searchlog_kanji = (search_value) => {
    for (var i of kanji) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase());
        var temp_kana = trimAll(i.kana.toLowerCase());
        var temp_translation = trimAll(i.translation.toLowerCase());

        if (search_value === temp_transliteration) {
            console.log("Kanji:", i);
        }   
        else if (search_value === temp_kana) {
            console.log("Kanji:", i);
        }
        else if (search_value === temp_translation) {
            console.log("Kanji:", i);
        }
    }
};

// Check argument for matches in General Hiragana object and log to console.
searchlog_general_hiragana = (search_value) => {
    for (var i of general_hiragana) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase());
        var temp_kana = trimAll(i.kana.toLowerCase());
        var temp_translation = trimAll(i.translation.toLowerCase());

        if (search_value === temp_transliteration) {
            console.log("General Hiragana:", i);
        }   
        else if (search_value === temp_kana) {
            console.log("General Hiragana:", i);
        }
        else if (search_value === temp_translation) {
            console.log("General Hiragana:", i);
        }
    }
};

// Check argument for matches in General Katakana object and log to console.
searchlog_general_katakana = (search_value) => {
    for (var i of general_katakana) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase());
        var temp_kana = trimAll(i.kana.toLowerCase());
        var temp_translation = trimAll(i.translation.toLowerCase());

        if (search_value === temp_transliteration) {
            console.log("General Katakana:", i);
        }   
        else if (search_value === temp_kana) {
            console.log("General Katakana:", i);
        }
        else if (search_value === temp_translation) {
            console.log("General Katakana:", i);
        }
    }
};

// Log search match to console.
search_log = (search_value) => {
    var trimmed_value = trimAll(search_value.toLowerCase());
    var search_array = search_value.split(" ");
    
    if (search_value.length < 1) {
        console.clear();
        console.log("The search query is empty!");
    }
    else if (direct_match(trimmed_value) === true) {
        console.clear();
        searchlog_hiragana(trimmed_value);
        searchlog_katakana(trimmed_value);
        searchlog_kanji(trimmed_value);
        searchlog_general_hiragana(trimmed_value);
        searchlog_general_katakana(trimmed_value);
    }
    else {
        console.clear();
        
        for (var j of search_array) {
            j = trimAll(j.toLowerCase());
            searchlog_hiragana(j);
            searchlog_katakana(j);
            searchlog_kanji(j);
            searchlog_general_hiragana(j);
            searchlog_general_katakana(j);
        }     
    }
};

// Insert header row into the table. Add header values.
insert_headRow = (table_ID) => {
    var table = document.getElementById(table_ID);
    var headRow = table.insertRow(0);
    var typeHead = headRow.insertCell(0);
    var kanaHead = headRow.insertCell(1);
    var transliterationHead = headRow.insertCell(2);
    var translationHead = headRow.insertCell(3);

    typeHead.innerHTML = "Type";
    kanaHead.innerHTML = "Kana";
    transliterationHead.innerHTML = "Transliteration";
    translationHead.innerHTML = "Translation";
};

// Insert row of kana, transliteration, and translation values matching the into a new row within the table.
insert_valRow = (table_ID, type, kana, transliteration, translation) => {
    var table = document.getElementById(table_ID);
    var valRow = table.insertRow(-1);
    var typeVal = valRow.insertCell(0);
    var kanaVal = valRow.insertCell(1);
    var transliterationVal = valRow.insertCell(2);
    var translationVal = valRow.insertCell(3);

    typeVal.innerHTML = type;
    kanaVal.innerHTML = kana;
    transliterationVal.innerHTML = transliteration;
    translationVal.innerHTML = translation;
};

// Return true or false for whether a direct translation, transliteration, or kana symbol exists within the objects.
direct_match = (search_value) => {
    for (var i of hiragana) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase());
        var temp_kana = trimAll(i.kana.toLowerCase());

        if (search_value === temp_transliteration) {
            return true;
        }   
        else if (search_value === temp_kana) {
            return true;
        }
    }

    for (var i of katakana) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase());
        var temp_kana = trimAll(i.kana.toLowerCase());

        if (search_value === temp_transliteration) {
            return true;
        }   
        else if (search_value === temp_kana) {
            return true;
        }
    }

    for (var i of kanji) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase());
        var temp_kana = trimAll(i.kana.toLowerCase());
        var temp_translation = trimAll(i.translation.toLowerCase());

        if (search_value === temp_transliteration) {
            return true;
        }   
        else if (search_value === temp_kana) {
            return true;
        }
        else if (search_value === temp_translation) {
            return true;
        }
    }
    
    for (var i of general_hiragana) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase());
        var temp_kana = trimAll(i.kana.toLowerCase());
        var temp_translation = trimAll(i.translation.toLowerCase());

        if (search_value === temp_transliteration) {
            return true;
        }   
        else if (search_value === temp_kana) {
            return true;
        }
        else if (search_value === temp_translation) {
            return true;
        }
    }

    for (var i of general_katakana) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase());
        var temp_kana = trimAll(i.kana.toLowerCase());
        var temp_translation = trimAll(i.translation.toLowerCase());

        if (search_value === temp_transliteration) {
            return true;
        }   
        else if (search_value === temp_kana) {
            return true;
        }
        else if (search_value === temp_translation) {
            return true;
        }
    }

    return false;
};

// Output search match to empty table.
search_out = (search_value, table_ID) => {
    var trimmed_value = trimAll(search_value.toLowerCase());
    var search_array = search_value.split(" ");

    if (search_value.length < 1) {
        clear_table(); tableBGColor_black();
    }
    else if (direct_match(trimmed_value) === true) {
        insert_headRow(table_ID);

        for (var i of hiragana) {
            var temp_transliteration = trimAll(i.transliteration.toLowerCase());
            var temp_kana = trimAll(i.kana.toLowerCase());

            if (trimmed_value === temp_transliteration) {
                insert_valRow(table_ID, "Hiragana", i.kana, i.transliteration, "N/A");
            }   
            else if (trimmed_value === temp_kana) {
                insert_valRow(table_ID, "Hiragana", i.kana, i.transliteration, "N/A");
            }
        }

        for (var i of katakana) {
            var temp_transliteration = trimAll(i.transliteration.toLowerCase());
            var temp_kana = trimAll(i.kana.toLowerCase());

            if (trimmed_value === temp_transliteration) {
                insert_valRow(table_ID, "Katakana", i.kana, i.transliteration, "N/A");
            }   
            else if (trimmed_value === temp_kana) {
                insert_valRow(table_ID, "Katakana", i.kana, i.transliteration, "N/A");
            }
        }

        for (var i of kanji) {
            var temp_transliteration = trimAll(i.transliteration.toLowerCase());
            var temp_kana = trimAll(i.kana.toLowerCase());
            var temp_translation = trimAll(i.translation.toLowerCase());

            if (trimmed_value === temp_transliteration) {
                insert_valRow(table_ID, "Kanji", i.kana, i.transliteration, i.translation);
            }   
            else if (trimmed_value === temp_kana) {
                insert_valRow(table_ID, "Kanji", i.kana, i.transliteration, i.translation);
            }
            else if (trimmed_value === temp_translation) {
                insert_valRow(table_ID, "Kanji", i.kana, i.transliteration, i.translation);
            }
        }
        
        for (var i of general_hiragana) {
            var temp_transliteration = trimAll(i.transliteration.toLowerCase());
            var temp_kana = trimAll(i.kana.toLowerCase());
            var temp_translation = trimAll(i.translation.toLowerCase());

            if (trimmed_value === temp_transliteration) {
                insert_valRow(table_ID, "General <br/> Hiragana", i.kana, i.transliteration, i.translation);
            }   
            else if (trimmed_value === temp_kana) {
                insert_valRow(table_ID, "General <br/> Hiragana", i.kana, i.transliteration, i.translation);
            }
            else if (trimmed_value === temp_translation) {
                insert_valRow(table_ID, "General <br/> Hiragana", i.kana, i.transliteration, i.translation);
            }
        }

        for (var i of general_katakana) {
            var temp_transliteration = trimAll(i.transliteration.toLowerCase());
            var temp_kana = trimAll(i.kana.toLowerCase());
            var temp_translation = trimAll(i.translation.toLowerCase());

            if (trimmed_value === temp_transliteration) {
                insert_valRow(table_ID, "General <br/> Katakana", i.kana, i.transliteration, i.translation);
            }   
            else if (trimmed_value === temp_kana) {
                insert_valRow(table_ID, "General <br/> Katakana", i.kana, i.transliteration, i.translation);
            }
            else if (trimmed_value === temp_translation) {
                insert_valRow(table_ID, "General <br/> Katakana", i.kana, i.transliteration, i.translation);
            }
        }
    }
    else {
        insert_headRow(table_ID);

        for (var j of search_array) {
            j = trimAll(j.toLowerCase());
                
            
            for (var i of hiragana) {
                var temp_transliteration = trimAll(i.transliteration.toLowerCase());
                var temp_kana = trimAll(i.kana.toLowerCase());
            
                if (j === temp_transliteration) {
                    insert_valRow(table_ID, "Hiragana", i.kana, i.transliteration, "N/A");
                }   
                else if (j === temp_kana) {
                    insert_valRow(table_ID, "Hiragana", i.kana, i.transliteration, "N/A");
                }
            }
            
            for (var i of katakana) {
                var temp_transliteration = trimAll(i.transliteration.toLowerCase());
                var temp_kana = trimAll(i.kana.toLowerCase());
            
                if (j === temp_transliteration) {
                    insert_valRow(table_ID, "Katakana", i.kana, i.transliteration, "N/A");
                }   
                else if (j === temp_kana) {
                    insert_valRow(table_ID, "Katakana", i.kana, i.transliteration, "N/A");
                }
            }
            
            for (var i of kanji) {
                var temp_transliteration = trimAll(i.transliteration.toLowerCase());
                var temp_kana = trimAll(i.kana.toLowerCase());
                var temp_translation = trimAll(i.translation.toLowerCase());
            
                if (j === temp_transliteration) {
                    insert_valRow(table_ID, "Kanji", i.kana, i.transliteration, i.translation);
                }   
                else if (j === temp_kana) {
                    insert_valRow(table_ID, "Kanji", i.kana, i.transliteration, i.translation);
                }
                else if (j === temp_translation) {
                    insert_valRow(table_ID, "Kanji", i.kana, i.transliteration, i.translation);
                }
            }
                    
            for (var i of general_hiragana) {
                var temp_transliteration = trimAll(i.transliteration.toLowerCase());
                var temp_kana = trimAll(i.kana.toLowerCase());
                var temp_translation = trimAll(i.translation.toLowerCase());
            
                if (j === temp_transliteration) {
                    insert_valRow(table_ID, "General <br/> Hiragana", i.kana, i.transliteration, i.translation);
                }   
                else if (j === temp_kana) {
                    insert_valRow(table_ID, "General <br/> Hiragana", i.kana, i.transliteration, i.translation);
                }
                else if (j === temp_translation) {
                    insert_valRow(table_ID, "General <br/> Hiragana", i.kana, i.transliteration, i.translation);
                }
            }
            
            for (var i of general_katakana) {
                var temp_transliteration = trimAll(i.transliteration.toLowerCase());
                var temp_kana = trimAll(i.kana.toLowerCase());
                var temp_translation = trimAll(i.translation.toLowerCase());
            
                if (j === temp_transliteration) {
                    insert_valRow(table_ID, "General <br/> Katakana", i.kana, i.transliteration, i.translation);
                }   
                else if (j === temp_kana) {
                    insert_valRow(table_ID, "General <br/> Katakana", i.kana, i.transliteration, i.translation);
                }
                else if (j === temp_translation) {
                    insert_valRow(table_ID, "General <br/> Katakana", i.kana, i.transliteration, i.translation);
                }
            }
        }
    }    
};

// Delete table interior HTML.
clear_table = () => {
    var table = document.getElementById("search-output"); table.innerHTML = "";
};

// Reset value of input.
reset = () => {
    document.getElementById("search-box").value = "";
};

// Change table background color to black.
tableBGColor_black = () => {
    document.getElementById("search-output").style.backgroundColor = "black";
};

// Change table background color to whitesmoke.
tableBGColor_smoke = () => {
    document.getElementById("search-output").style.backgroundColor = "whitesmoke";
};

// Handle the search submission.
search_handler = () => {
    var search_value = document.getElementById("search-box").value;
    tableBGColor_smoke(); clear_table();
    search_out(search_value, "search-output"); 
    search_log(search_value);
};