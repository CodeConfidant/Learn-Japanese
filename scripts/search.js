
// Object containing Hiragana transliterations and kana.
var hiragana = [

    // Vowels
    {transliteration: "a", kana: "ぁ"},
    {transliteration: "e", kana: "ぇ"},
    {transliteration: "i", kana: "い"},
    {transliteration: "o", kana: "お"},
    {transliteration: "u", kana: "う"},

    // D Consonant
    {transliteration: "da", kana: "だ"},
    {transliteration: "de", kana: "で"},
    {transliteration: "do", kana: "ど"},
    {transliteration: "du", kana: "づ"},
    
    // G Consonant
    {transliteration: "ga", kana: "が"},
    {transliteration: "ge", kana: "げ"},
    {transliteration: "gi", kana: "ぎ"},
    {transliteration: "go", kana: "ご"},
    {transliteration: "gu", kana: "ぐ"},
    
    // H Consonant
    {transliteration: "ha", kana: "は"},
    {transliteration: "he", kana: "へ"},
    {transliteration: "hi", kana: "ひ"},
    {transliteration: "ho", kana: "ほ"},
    {transliteration: "hu", kana: "ふ"},
    
    // K Consonant
    {transliteration: "ka", kana: "か"},
    {transliteration: "ke", kana: "け"},
    {transliteration: "ki", kana: "き"},
    {transliteration: "ko", kana: "こ"},
    {transliteration: "ku", kana: "く"},
    
    // M Consonant
    {transliteration: "ma", kana: "ま"},
    {transliteration: "me", kana: "め"},
    {transliteration: "mi", kana: "み"},
    {transliteration: "mo", kana: "も"},
    {transliteration: "mu", kana: "む"},
    
    // N Consonant
    {transliteration: "n", kana: "ん"},
    {transliteration: "na", kana: "な"},
    {transliteration: "ne", kana: "ね"},
    {transliteration: "ni", kana: "に"},
    {transliteration: "no", kana: "の"},
    {transliteration: "nu", kana: "ぬ"},
    
    // P Consonant
    {transliteration: "pa", kana: "ぱ"},
    {transliteration: "pe", kana: "ぺ"},
    {transliteration: "pi", kana: "ぴ"},
    {transliteration: "po", kana: "ぽ"},
    {transliteration: "pu", kana: "ぷ"},

    // R Consonant
    {transliteration: "ra", kana: "ら"},
    {transliteration: "re", kana: "れ"},
    {transliteration: "ri", kana: "り"},
    {transliteration: "ro", kana: "ろ"},
    {transliteration: "ru", kana: "る"},
    
    // S Consonant
    {transliteration: "sa", kana: "さ"},
    {transliteration: "se", kana: "せ"},
    {transliteration: "si", kana: "し"},
    {transliteration: "shi", kana: "し"},
    {transliteration: "so", kana: "そ"},
    {transliteration: "su", kana: "す"},
    {transliteration: "shu", kana: "す"},

    // T Consonant
    {transliteration: "ta", kana: "た"},
    {transliteration: "te", kana: "て"},
    {transliteration: "ti", kana: "ち"},
    {transliteration: "chi", kana: "ち"},
    {transliteration: "to", kana: "と"},
    {transliteration: "tu", kana: "っ"},
    {transliteration: "tsu", kana: "っ"},

    // W Consonant
    {transliteration: "wa", kana: "わ"},
    {transliteration: "wo", kana: "を"},

    // Y Consonant
    {transliteration: "ya", kana: "や"},
    {transliteration: "yo", kana: "よ"},
    {transliteration: "yu", kana: "ゆ"},

    // Z Consonant
    {transliteration: "za", kana: "ざ"},
    {transliteration: "ze", kana: "ぜ"},
    {transliteration: "zi", kana: "じ"},
    {transliteration: "zo", kana: "ぞ"},
    {transliteration: "zu", kana: "ず"}
];

// Object containing Katakana transliterations and kana.
var katakana = [

    // Vowels
    {transliteration: "a", kana: "ア"},
    {transliteration: "e", kana: "エ"},
    {transliteration: "i", kana: "イ"},
    {transliteration: "o", kana: "オ"},
    {transliteration: "u", kana: "ウ"},

    // D Consonant
    {transliteration: "da", kana: "ダ"},
    {transliteration: "de", kana: "デ"},
    {transliteration: "do", kana: "ド"},
    {transliteration: "du", kana: "ヅ"},
    
    // G Consonant
    {transliteration: "ga", kana: "ガ"},
    {transliteration: "ge", kana: "ゲ"},
    {transliteration: "gi", kana: "ギ"},
    {transliteration: "go", kana: "ゴ"},
    {transliteration: "gu", kana: "グ"},
    
    // H Consonant
    {transliteration: "ha", kana: "ハ"},
    {transliteration: "he", kana: "ヘ"},
    {transliteration: "hi", kana: "ヒ"},
    {transliteration: "ho", kana: "ホ"},
    {transliteration: "hu", kana: "フ"},
    
    // K Consonant
    {transliteration: "ka", kana: "カ"},
    {transliteration: "ke", kana: "ケ"},
    {transliteration: "ki", kana: "キ"},
    {transliteration: "ko", kana: "コ"},
    {transliteration: "ku", kana: "ク"},
    
    // M Consonant
    {transliteration: "ma", kana: "マ"},
    {transliteration: "me", kana: "メ"},
    {transliteration: "mi", kana: "ミ"},
    {transliteration: "mo", kana: "モ"},
    {transliteration: "mu", kana: "ム"},
    
    // N Consonant
    {transliteration: "n", kana: "ン"},
    {transliteration: "na", kana: "ナ"},
    {transliteration: "ne", kana: "ネ"},
    {transliteration: "ni", kana: "ニ"},
    {transliteration: "no", kana: "ノ"},
    {transliteration: "nu", kana: "ヌ"},
    
    // P Consonant
    {transliteration: "pa", kana: "パ"},
    {transliteration: "pe", kana: "ペ"},
    {transliteration: "pi", kana: "ピ"},
    {transliteration: "po", kana: "ポ"},
    {transliteration: "pu", kana: "プ"},

    // R Consonant
    {transliteration: "ra", kana: "ラ"},
    {transliteration: "re", kana: "レ"},
    {transliteration: "ri", kana: "リ"},
    {transliteration: "ro", kana: "ロ"},
    {transliteration: "ru", kana: "ル"},
    
    // S Consonant
    {transliteration: "sa", kana: "サ"},
    {transliteration: "se", kana: "セ"},
    {transliteration: "si", kana: "シ"},
    {transliteration: "shi", kana: "シ"},
    {transliteration: "so", kana: "ソ"},
    {transliteration: "su", kana: "ス"},
    {transliteration: "shu", kana: "ス"},

    // T Consonant
    {transliteration: "ta", kana: "タ"},
    {transliteration: "te", kana: "テ"},
    {transliteration: "ti", kana: "チ"},
    {transliteration: "chi", kana: "チ"},
    {transliteration: "to", kana: "ト"},
    {transliteration: "tu", kana: "ツ"},
    {transliteration: "tsu", kana: "ツ"},

    // W Consonant
    {transliteration: "wa", kana: "ワ"},
    {transliteration: "we", kana: "ヱ"},
    {transliteration: "wi", kana: "ヰ"},
    {transliteration: "wo", kana: "ヲ"},

    // Y Consonant
    {transliteration: "ya", kana: "ヤ"},
    {transliteration: "yo", kana: "ヨ"},
    {transliteration: "yu", kana: "ユ"},

    // Z Consonant
    {transliteration: "za", kana: "ザ"},
    {transliteration: "ze", kana: "ゼ"},
    {transliteration: "zi", kana: "ジ"},
    {transliteration: "zo", kana: "ゾ"},
    {transliteration: "zu", kana: "ズ"}
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

// Object containing General transliterations, kana, and translations.
var general = [
    {translation: "Hello", kana:"こにちわ", transliteration:"Konichiwa"},
    {translation: "Goodbye", kana:"さよむら", transliteration:"Sayonara"},
    {translation: "Thank-you", kana:"ありがと", transliteration:"Arigato"}
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

// Log search match to console.
search_log = (arg) => {
    for (var i of hiragana) {
        temp_transliteration = trimAll(i.transliteration.toLowerCase())
        temp_kana = trimAll(i.kana.toLowerCase())

        if (arg === temp_transliteration) {
            console.log("Hiragana: { Transliteration:", i.transliteration, ", Kana:", i.kana, "}")
        }   
        else if (arg === temp_kana) {
            console.log("Hiragana: { Transliteration:", i.transliteration, ", Kana:", i.kana, "}")
        }
    }

    for (var i of katakana) {
        temp_transliteration = trimAll(i.transliteration.toLowerCase())
        temp_kana = trimAll(i.kana.toLowerCase())

        if (arg === temp_transliteration) {
            console.log("Katakana: { Transliteration:", i.transliteration, ", Kana:", i.kana, "}")
        }   
        else if (arg === temp_kana) {
            console.log("Katakana: { Transliteration:", i.transliteration, ", Kana:", i.kana, "}")
        }
    }

    for (var i of kanji) {
        temp_transliteration = trimAll(i.transliteration.toLowerCase())
        temp_kana = trimAll(i.kana.toLowerCase())
        temp_translation = trimAll(i.translation.toLowerCase())

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

    for (var i of general) {
        temp_transliteration = trimAll(i.transliteration.toLowerCase())
        temp_kana = trimAll(i.kana.toLowerCase())
        temp_translation = trimAll(i.translation.toLowerCase())

        if (arg === temp_transliteration) {
            console.log("General: { Transliteration:", i.transliteration, ", Kana:", i.kana, ", Translation:", i.translation, "}")
        }   
        else if (arg === temp_kana) {
            console.log("General: { Transliteration:", i.transliteration, ", Kana:", i.kana, ", Translation:", i.translation, "}")
        }
        else if (arg === temp_translation) {
            console.log("General: { Transliteration:", i.transliteration, ", Kana:", i.kana, ", Translation:", i.translation, "}")
        }
    }
};

// Output search match to empty table.
search_out = (arg) => {
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
        temp_transliteration = trimAll(i.transliteration.toLowerCase())
        temp_kana = trimAll(i.kana.toLowerCase())

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
        temp_transliteration = trimAll(i.transliteration.toLowerCase())
        temp_kana = trimAll(i.kana.toLowerCase())

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
        temp_transliteration = trimAll(i.transliteration.toLowerCase())
        temp_kana = trimAll(i.kana.toLowerCase())
        temp_translation = trimAll(i.translation.toLowerCase())

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
    
    for (var i of general) {
        temp_transliteration = trimAll(i.transliteration.toLowerCase())
        temp_kana = trimAll(i.kana.toLowerCase())
        temp_translation = trimAll(i.translation.toLowerCase())

        if (arg === temp_transliteration) {
            var valRow = table.insertRow(1);
            var typeVal = valRow.insertCell(0);
            var kanaVal = valRow.insertCell(1);
            var transliterationVal = valRow.insertCell(2);
            var translationVal = valRow.insertCell(3);

            typeVal.innerHTML = "General";
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

            typeVal.innerHTML = "General";
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

            typeVal.innerHTML = "General";
            kanaVal.innerHTML = i.kana;
            transliterationVal.innerHTML = i.transliteration;
            translationVal.innerHTML = i.translation;
        }
    }
};

// Delete element interior HTML.
clear_element = (elementID) => {
    var element = document.getElementById(elementID); element.innerHTML = "";
};

// Reset value of input.
reset = () => {
    document.getElementById("search-box").value = "";
};

// Handle the search submission.
search_handler = () => {
    var search_value = trimAll(document.getElementById("search-box").value.toLowerCase());
    document.getElementById("search-output").style.backgroundColor = "whitesmoke";
    
    clear_element("search-output")
    search_log(search_value)
    search_out(search_value)
};