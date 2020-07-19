
// Object containing Hiragana transliterations and kana.
var hiragana = [

    // Vowels
    {transliteration: "A", kana: "ぁ"},
    {transliteration: "E", kana: "ぇ"},
    {transliteration: "I", kana: "い"},
    {transliteration: "O", kana: "お"},
    {transliteration: "U", kana: "う"},

    // B Consonant
    {transliteration: "Ba", kana: "ば"},
    {transliteration: "Be", kana: "べ"},
    {transliteration: "Bi", kana: "び"},
    {transliteration: "Bo", kana: "ぼ"},
    {transliteration: "Bu", kana: "ぶ"},
   
    // D Consonant
    {transliteration: "Da", kana: "だ"},
    {transliteration: "De", kana: "で"},
    {transliteration: "Do", kana: "ど"},
    {transliteration: "Du", kana: "づ"},
    {transliteration: "Dzu", kana: "づ"},
    
    // G Consonant
    {transliteration: "Ga", kana: "が"},
    {transliteration: "Ge", kana: "げ"},
    {transliteration: "Gi", kana: "ぎ"},
    {transliteration: "Go", kana: "ご"},
    {transliteration: "Gu", kana: "ぐ"},
    
    // H Consonant
    {transliteration: "Ha", kana: "は"},
    {transliteration: "He", kana: "へ"},
    {transliteration: "Hi", kana: "ひ"},
    {transliteration: "Ho", kana: "ほ"},
    {transliteration: "Hu", kana: "ふ"},

    // J Consonant
    {transliteration: "Ji", kana: "じ"},
    
    // K Consonant
    {transliteration: "Ka", kana: "か"},
    {transliteration: "Ke", kana: "け"},
    {transliteration: "Ki", kana: "き"},
    {transliteration: "Ko", kana: "こ"},
    {transliteration: "Ku", kana: "く"},
    
    // M Consonant
    {transliteration: "Ma", kana: "ま"},
    {transliteration: "Me", kana: "め"},
    {transliteration: "Mi", kana: "み"},
    {transliteration: "Mo", kana: "も"},
    {transliteration: "Mu", kana: "む"},
    
    // N Consonant
    {transliteration: "N", kana: "ん"},
    {transliteration: "Na", kana: "な"},
    {transliteration: "Ne", kana: "ね"},
    {transliteration: "Ni", kana: "に"},
    {transliteration: "No", kana: "の"},
    {transliteration: "Nu", kana: "ぬ"},
    
    // P Consonant
    {transliteration: "Pa", kana: "ぱ"},
    {transliteration: "Pe", kana: "ぺ"},
    {transliteration: "Pi", kana: "ぴ"},
    {transliteration: "Po", kana: "ぽ"},
    {transliteration: "Pu", kana: "ぷ"},

    // R Consonant
    {transliteration: "Ra", kana: "ら"},
    {transliteration: "Re", kana: "れ"},
    {transliteration: "Ri", kana: "り"},
    {transliteration: "Ro", kana: "ろ"},
    {transliteration: "Ru", kana: "る"},
    
    // S Consonant
    {transliteration: "Sa", kana: "さ"},
    {transliteration: "Se", kana: "せ"},
    {transliteration: "Si", kana: "し"},
    {transliteration: "Shi", kana: "し"},
    {transliteration: "So", kana: "そ"},
    {transliteration: "Su", kana: "す"},
    {transliteration: "Shu", kana: "す"},

    // T Consonant
    {transliteration: "Ta", kana: "た"},
    {transliteration: "Te", kana: "て"},
    {transliteration: "Ti", kana: "ち"},
    {transliteration: "Chi", kana: "ち"},
    {transliteration: "To", kana: "と"},
    {transliteration: "Tu", kana: "っ"},
    {transliteration: "Tsu", kana: "っ"},

    // W Consonant
    {transliteration: "Wa", kana: "わ"},
    {transliteration: "We", kana: "ゑ"},
    {transliteration: "Wi", kana: "ゐ"},
    {transliteration: "Wo", kana: "を"},

    // Y Consonant
    {transliteration: "Ya", kana: "や"},
    {transliteration: "Yo", kana: "よ"},
    {transliteration: "Yu", kana: "ゆ"},

    // Z Consonant
    {transliteration: "Za", kana: "ざ"},
    {transliteration: "Ze", kana: "ぜ"},
    {transliteration: "Zi", kana: "じ"},
    {transliteration: "Zo", kana: "ぞ"},
    {transliteration: "Zu", kana: "ず"}
];

// Object containing Katakana transliterations and kana.
var katakana = [

    // Vowels
    {transliteration: "A", kana: "ア"},
    {transliteration: "E", kana: "エ"},
    {transliteration: "I", kana: "イ"},
    {transliteration: "O", kana: "オ"},
    {transliteration: "U", kana: "ウ"},

    // B Consonant
    {transliteration: "Ba", kana: "バ"},
    {transliteration: "Be", kana: "ベ"},
    {transliteration: "Bi", kana: "ビ"},
    {transliteration: "Bo", kana: "ボ"},
    {transliteration: "Bu", kana: "ブ"},

    // D Consonant
    {transliteration: "Da", kana: "ダ"},
    {transliteration: "De", kana: "デ"},
    {transliteration: "Do", kana: "ド"},
    {transliteration: "Du", kana: "ヅ"},
    {transliteration: "Dzu", kana: "ヅ"},
    
    // G Consonant
    {transliteration: "Ga", kana: "ガ"},
    {transliteration: "Ge", kana: "ゲ"},
    {transliteration: "Gi", kana: "ギ"},
    {transliteration: "Go", kana: "ゴ"},
    {transliteration: "Gu", kana: "グ"},
    
    // H Consonant
    {transliteration: "Ha", kana: "ハ"},
    {transliteration: "He", kana: "ヘ"},
    {transliteration: "Hi", kana: "ヒ"},
    {transliteration: "Ho", kana: "ホ"},
    {transliteration: "Hu", kana: "フ"},

    // J Consonant
    {transliteration: "Ji", kana: "ジ"},
    
    // K Consonant
    {transliteration: "Ka", kana: "カ"},
    {transliteration: "Ke", kana: "ケ"},
    {transliteration: "Ki", kana: "キ"},
    {transliteration: "Ko", kana: "コ"},
    {transliteration: "Ku", kana: "ク"},
    
    // M Consonant
    {transliteration: "Ma", kana: "マ"},
    {transliteration: "Me", kana: "メ"},
    {transliteration: "Mi", kana: "ミ"},
    {transliteration: "Mo", kana: "モ"},
    {transliteration: "Mu", kana: "ム"},
    
    // N Consonant
    {transliteration: "N", kana: "ン"},
    {transliteration: "Na", kana: "ナ"},
    {transliteration: "Ne", kana: "ネ"},
    {transliteration: "Ni", kana: "ニ"},
    {transliteration: "No", kana: "ノ"},
    {transliteration: "Nu", kana: "ヌ"},
    
    // P Consonant
    {transliteration: "Pa", kana: "パ"},
    {transliteration: "Pe", kana: "ペ"},
    {transliteration: "Pi", kana: "ピ"},
    {transliteration: "Po", kana: "ポ"},
    {transliteration: "Pu", kana: "プ"},

    // R Consonant
    {transliteration: "Ra", kana: "ラ"},
    {transliteration: "Re", kana: "レ"},
    {transliteration: "Ri", kana: "リ"},
    {transliteration: "Ro", kana: "ロ"},
    {transliteration: "Ru", kana: "ル"},
    
    // S Consonant
    {transliteration: "Sa", kana: "サ"},
    {transliteration: "Se", kana: "セ"},
    {transliteration: "Si", kana: "シ"},
    {transliteration: "Shi", kana: "シ"},
    {transliteration: "So", kana: "ソ"},
    {transliteration: "Su", kana: "ス"},
    {transliteration: "Shu", kana: "ス"},

    // T Consonant
    {transliteration: "Ta", kana: "タ"},
    {transliteration: "Te", kana: "テ"},
    {transliteration: "Ti", kana: "チ"},
    {transliteration: "Chi", kana: "チ"},
    {transliteration: "To", kana: "ト"},
    {transliteration: "Tu", kana: "ツ"},
    {transliteration: "Tsu", kana: "ツ"},

    // W Consonant
    {transliteration: "Wa", kana: "ワ"},
    {transliteration: "We", kana: "ヱ"},
    {transliteration: "Wi", kana: "ヰ"},
    {transliteration: "Wo", kana: "ヲ"},

    // Y Consonant
    {transliteration: "Ya", kana: "ヤ"},
    {transliteration: "Yo", kana: "ヨ"},
    {transliteration: "Yu", kana: "ユ"},

    // Z Consonant
    {transliteration: "Za", kana: "ザ"},
    {transliteration: "Ze", kana: "ゼ"},
    {transliteration: "Zi", kana: "ジ"},
    {transliteration: "Zo", kana: "ゾ"},
    {transliteration: "Zu", kana: "ズ"}
];

// Object containing Kanji transliterations, kana, and translations.
var kanji = [
    {translation: "Ground", kana:"地", transliteration:"Ji"},
    {translation: "Water", kana:"水", transliteration:"Mizu"},
    {translation: "Wind", kana:"風", transliteration:"Kaze"},
    {translation: "Rain", kana:"雨", transliteration:"Ame"},
    {translation: "Fire", kana:"火", transliteration:"Hi"},
    {translation: "Thunder", kana:"雷", transliteration:"Kaminari"},
    {translation: "Lake", kana:"湖", transliteration:"Mizumi"},
    {translation: "Island", kana:"島", transliteration:"Shima"},
    {translation: "Mountain", kana:"山", transliteration:"Yama"}
];

// Object containing General Hiragana transliterations, kana, and translations.
var general_hiragana = [
    {translation: "Hello", kana:"こにちわ", transliteration:"Konichiwa"},
    {translation: "Goodbye", kana:"さよむら", transliteration:"Sayonara"},
    {translation: "Thanks", kana:"ありがと", transliteration:"Arigato"}
];

// Object containing General Katakana transliterations, kana, and translations.
var general_katakana = [
    {translation: "Hello", kana:"コニチワ", transliteration:"Konichiwa"},
    {translation: "Goodbye", kana:"サヨナラ", transliteration:"Sayonara"},
    {translation: "Thanks", kana:"アリガト", transliteration:"Arigato"}
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

    return arg
};

// Remove whitespace characters from argument string and return.
trimSpace = (arg) => {
    arg = arg.replace(/ /g, "")
    return arg
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

    return arg
};

// Remove line-break characters from argument string and return.
trimLineBreak = (arg) => {
    arg = arg.replace(/\\/g, "")
    return arg
};

// Remove numbers, whitespace, special, and line break characters from argument string and return.
trimAll = (arg) => {
    arg = trimNumbers(arg)
    arg = trimSpace(arg)
    arg = trimSpec(arg)
    arg = trimLineBreak(arg)
    return arg
};

// Check argument for matches in Hiragana object and log to console.
searchlog_hiragana = (arg) => {
    for (var i of hiragana) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase())
        var temp_kana = trimAll(i.kana.toLowerCase())

        if (arg === temp_transliteration) {
            console.log("Hiragana: { Transliteration:", i.transliteration, ", Kana:", i.kana, "}")
        }   
        else if (arg === temp_kana) {
            console.log("Hiragana: { Transliteration:", i.transliteration, ", Kana:", i.kana, "}")
        }
    }
};

// Check argument for matches in Katakana object and log to console.
searchlog_katakana = (arg) => {
    for (var i of katakana) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase())
        var temp_kana = trimAll(i.kana.toLowerCase())

        if (arg === temp_transliteration) {
            console.log("Katakana: { Transliteration:", i.transliteration, ", Kana:", i.kana, "}")
        }   
        else if (arg === temp_kana) {
            console.log("Katakana: { Transliteration:", i.transliteration, ", Kana:", i.kana, "}")
        }
    }
};

// Check argument for matches in Kanji object and log to console.
searchlog_kanji = (arg) => {
    for (var i of kanji) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase())
        var temp_kana = trimAll(i.kana.toLowerCase())
        var temp_translation = trimAll(i.translation.toLowerCase())

        if (arg === temp_transliteration) {
            console.log("Kanji: { Transliteration:", i.transliteration, ", Kana:", i.kana, ", Translation:", i.translation, "}")
        }   
        else if (arg === temp_kana) {
            console.log("Kanji: { Transliteration:", i.transliteration, ", Kana:", i.kana, ", Translation:", i.translation, "}")
        }
        else if (arg === temp_translation) {
            console.log("Kanji: { Transliteration:", i.transliteration, ", Kana:", i.kana, ", Translation:", i.translation, "}")
        }
    }
};

// Check argument for matches in General Hiragana object and log to console.
searchlog_general_hiragana = (arg) => {
    for (var i of general_hiragana) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase())
        var temp_kana = trimAll(i.kana.toLowerCase())
        var temp_translation = trimAll(i.translation.toLowerCase())

        if (arg === temp_transliteration) {
            console.log("General Hiragana: { Transliteration:", i.transliteration, ", Kana:", i.kana, ", Translation:", i.translation, "}")
        }   
        else if (arg === temp_kana) {
            console.log("General Hiragana: { Transliteration:", i.transliteration, ", Kana:", i.kana, ", Translation:", i.translation, "}")
        }
        else if (arg === temp_translation) {
            console.log("General Hiragana: { Transliteration:", i.transliteration, ", Kana:", i.kana, ", Translation:", i.translation, "}")
        }
    }
};

// Check argument for matches in General Katakana object and log to console.
searchlog_general_katakana = (arg) => {
    for (var i of general_katakana) {
        var temp_transliteration = trimAll(i.transliteration.toLowerCase())
        var temp_kana = trimAll(i.kana.toLowerCase())
        var temp_translation = trimAll(i.translation.toLowerCase())

        if (arg === temp_transliteration) {
            console.log("General Katakana: { Transliteration:", i.transliteration, ", Kana:", i.kana, ", Translation:", i.translation, "}")
        }   
        else if (arg === temp_kana) {
            console.log("General Katakana: { Transliteration:", i.transliteration, ", Kana:", i.kana, ", Translation:", i.translation, "}")
        }
        else if (arg === temp_translation) {
            console.log("General Katakana: { Transliteration:", i.transliteration, ", Kana:", i.kana, ", Translation:", i.translation, "}")
        }
    }
};

// Log search match to console.
search_log = (arg) => {
    searchlog_hiragana(arg);
    searchlog_katakana(arg);
    searchlog_kanji(arg);
    searchlog_general_hiragana(arg);
    searchlog_general_katakana(arg);
};

// Output search match to empty table.
search_out = (arg) => {
    if (arg.length === 0){
        clear_table();
        tableBGColor_black();
    }
    else {
        var table = document.getElementById("search-output");
        var headRow = table.insertRow(0);
        var typeHead = headRow.insertCell(0);
        var kanaHead = headRow.insertCell(1);
        var transliterationHead = headRow.insertCell(2);
        var translationHead = headRow.insertCell(3);

        typeHead.innerHTML = "Type";
        kanaHead.innerHTML = "Kana";
        transliterationHead.innerHTML = "Transliteration";
        translationHead.innerHTML = "Translation";

        for (var i of hiragana) {
            var temp_transliteration = trimAll(i.transliteration.toLowerCase())
            var temp_kana = trimAll(i.kana.toLowerCase())

            if (arg === temp_transliteration) {
                var valRow = table.insertRow(1);
                var typeVal = valRow.insertCell(0);
                var kanaVal = valRow.insertCell(1);
                var transliterationVal = valRow.insertCell(2);
                var translationVal = valRow.insertCell(3);

                typeVal.innerHTML = "Hiragana";
                kanaVal.innerHTML = i.kana;
                transliterationVal.innerHTML = i.transliteration;
                translationVal.innerHTML = "N/A"

            }   
            else if (arg === temp_kana) {
                var valRow = table.insertRow(1);
                var typeVal = valRow.insertCell(0);
                var kanaVal = valRow.insertCell(1);
                var transliterationVal = valRow.insertCell(2);
                var translationVal = valRow.insertCell(3);

                typeVal.innerHTML = "Hiragana";
                kanaVal.innerHTML = i.kana;
                transliterationVal.innerHTML = i.transliteration;
                translationVal.innerHTML = "N/A"
            }
        }

        for (var i of katakana) {
            var temp_transliteration = trimAll(i.transliteration.toLowerCase())
            var temp_kana = trimAll(i.kana.toLowerCase())

            if (arg === temp_transliteration) {
                var valRow = table.insertRow(1);
                var typeVal = valRow.insertCell(0);
                var kanaVal = valRow.insertCell(1);
                var transliterationVal = valRow.insertCell(2);
                var translationVal = valRow.insertCell(3);

                typeVal.innerHTML = "Katakana";
                kanaVal.innerHTML = i.kana;
                transliterationVal.innerHTML = i.transliteration;
                translationVal.innerHTML = "N/A"
            }   
            else if (arg === temp_kana) {
                var valRow = table.insertRow(1);
                var typeVal = valRow.insertCell(0);
                var kanaVal = valRow.insertCell(1);
                var transliterationVal = valRow.insertCell(2);
                var translationVal = valRow.insertCell(3);

                typeVal.innerHTML = "Katakana";
                kanaVal.innerHTML = i.kana;
                transliterationVal.innerHTML = i.transliteration;
                translationVal.innerHTML = "N/A"
            }
        }

        for (var i of kanji) {
            var temp_transliteration = trimAll(i.transliteration.toLowerCase())
            var temp_kana = trimAll(i.kana.toLowerCase())
            var temp_translation = trimAll(i.translation.toLowerCase())

            if (arg === temp_transliteration) {
                var valRow = table.insertRow(1);
                var typeVal = valRow.insertCell(0);
                var kanaVal = valRow.insertCell(1);
                var transliterationVal = valRow.insertCell(2);
                var translationVal = valRow.insertCell(3);

                typeVal.innerHTML = "Kanji";
                kanaVal.innerHTML = i.kana;
                transliterationVal.innerHTML = i.transliteration;
                translationVal.innerHTML = i.translation;
            }   
            else if (arg === temp_kana) {
                var valRow = table.insertRow(1);
                var typeVal = valRow.insertCell(0);
                var kanaVal = valRow.insertCell(1);
                var transliterationVal = valRow.insertCell(2);
                var translationVal = valRow.insertCell(3);

                typeVal.innerHTML = "Kanji";
                kanaVal.innerHTML = i.kana;
                transliterationVal.innerHTML = i.transliteration;
                translationVal.innerHTML = i.translation;
            }
            else if (arg === temp_translation) {
                var valRow = table.insertRow(1);
                var typeVal = valRow.insertCell(0);
                var kanaVal = valRow.insertCell(1);
                var transliterationVal = valRow.insertCell(2);
                var translationVal = valRow.insertCell(3);

                typeVal.innerHTML = "Kanji";
                kanaVal.innerHTML = i.kana;
                transliterationVal.innerHTML = i.transliteration;
                translationVal.innerHTML = i.translation;
            }
        }
        
        for (var i of general_hiragana) {
            var temp_transliteration = trimAll(i.transliteration.toLowerCase())
            var temp_kana = trimAll(i.kana.toLowerCase())
            var temp_translation = trimAll(i.translation.toLowerCase())

            if (arg === temp_transliteration) {
                var valRow = table.insertRow(1);
                var typeVal = valRow.insertCell(0);
                var kanaVal = valRow.insertCell(1);
                var transliterationVal = valRow.insertCell(2);
                var translationVal = valRow.insertCell(3);

                typeVal.innerHTML = "General <br/> Hiragana";
                kanaVal.innerHTML = i.kana;
                transliterationVal.innerHTML = i.transliteration;
                translationVal.innerHTML = i.translation;
            }   
            else if (arg === temp_kana) {
                var valRow = table.insertRow(1);
                var typeVal = valRow.insertCell(0);
                var kanaVal = valRow.insertCell(1);
                var transliterationVal = valRow.insertCell(2);
                var translationVal = valRow.insertCell(3);

                typeVal.innerHTML = "General <br/> Hiragana";
                kanaVal.innerHTML = i.kana;
                transliterationVal.innerHTML = i.transliteration;
                translationVal.innerHTML = i.translation;
            }
            else if (arg === temp_translation) {
                var valRow = table.insertRow(1);
                var typeVal = valRow.insertCell(0);
                var kanaVal = valRow.insertCell(1);
                var transliterationVal = valRow.insertCell(2);
                var translationVal = valRow.insertCell(3);

                typeVal.innerHTML = "General <br/> Hiragana";
                kanaVal.innerHTML = i.kana;
                transliterationVal.innerHTML = i.transliteration;
                translationVal.innerHTML = i.translation;
            }
        }

        for (var i of general_katakana) {
            var temp_transliteration = trimAll(i.transliteration.toLowerCase())
            var temp_kana = trimAll(i.kana.toLowerCase())
            var temp_translation = trimAll(i.translation.toLowerCase())

            if (arg === temp_transliteration) {
                var valRow = table.insertRow(1);
                var typeVal = valRow.insertCell(0);
                var kanaVal = valRow.insertCell(1);
                var transliterationVal = valRow.insertCell(2);
                var translationVal = valRow.insertCell(3);

                typeVal.innerHTML = "General <br/> Katakana";
                kanaVal.innerHTML = i.kana;
                transliterationVal.innerHTML = i.transliteration;
                translationVal.innerHTML = i.translation;
            }   
            else if (arg === temp_kana) {
                var valRow = table.insertRow(1);
                var typeVal = valRow.insertCell(0);
                var kanaVal = valRow.insertCell(1);
                var transliterationVal = valRow.insertCell(2);
                var translationVal = valRow.insertCell(3);

                typeVal.innerHTML = "General <br/> Katakana";
                kanaVal.innerHTML = i.kana;
                transliterationVal.innerHTML = i.transliteration;
                translationVal.innerHTML = i.translation;
            }
            else if (arg === temp_translation) {
                var valRow = table.insertRow(1);
                var typeVal = valRow.insertCell(0);
                var kanaVal = valRow.insertCell(1);
                var transliterationVal = valRow.insertCell(2);
                var translationVal = valRow.insertCell(3);

                typeVal.innerHTML = "General <br/> Katakana";
                kanaVal.innerHTML = i.kana;
                transliterationVal.innerHTML = i.transliteration;
                translationVal.innerHTML = i.translation;
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
    var search_value = trimAll(document.getElementById("search-box").value.toLowerCase());
    tableBGColor_smoke(); 
    clear_table();
    search_out(search_value);
    search_log(search_value);
};