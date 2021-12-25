// Check search_value argument for matches in dictionary argument and log to console.
search_log = (search_value, dictionary, type) => {
    var trimmed_value = trimAll(search_value.toLowerCase());
    var search_array = search_value.split(" ");
    var type = type.toLowerCase();

    if (search_value.length > 0){
        if (isMatch(trimmed_value, dictionary, type) === true) {
            if (type === "hiragana" | type === "katakana") {
                for (var node of dictionary) {
                    var transliteration = trimAll(node.transliteration.toLowerCase());
                    var kana = trimAll(node.kana.toLowerCase());
            
                    if (trimmed_value === transliteration | trimmed_value === kana) {
                        console.log(`${type}:`, node);
                    }   
                }
            }
            else if (type === "kanji" | type === "general hiragana" | type === "general katakana") {
                for (var node of dictionary) {
                    var transliteration = trimAll(node.transliteration.toLowerCase());
                    var kana = trimAll(node.kana.toLowerCase());
                    var translation = trimAll(node.translation.toLowerCase());

                    if (trimmed_value === transliteration | trimmed_value === kana | trimmed_value === translation) {
                        console.log(`${type}:`, node);
                    }   
                }
            }
            else {
                console.log("There's no proper type designated within the type argument.")
            }
        }
        else {
            for (var value of search_array) {
                value = trimAll(value.toLowerCase());

                if (type === "hiragana" | type === "katakana") {
                    for (var node of dictionary) {
                        var transliteration = trimAll(node.transliteration.toLowerCase());
                        var kana = trimAll(node.kana.toLowerCase());
                
                        if (value === transliteration | value === kana) {
                            console.log(`${type}:`, node);
                        }   
                    }
                }
                else if (type === "kanji" | type === "general hiragana" | type === "general katakana") {
                    for (var node of dictionary) {
                        var transliteration = trimAll(node.transliteration.toLowerCase());
                        var kana = trimAll(node.kana.toLowerCase());
                        var translation = trimAll(node.translation.toLowerCase());
    
                        if (value === transliteration | value === kana | value === translation) {
                            console.log(`${type}:`, node);
                        }   
                    }
                }
                else {
                    console.log("There's no proper type designated within the type argument.")
                }
            }
        }
    }
    else {
        console.log("Search query is empty.");
    }
};

// Return true or false for whether a direct translation, transliteration, or kana symbol exists within the objects.
isMatch = (search_value, dictionary, type) => {
    var type = type.toLowerCase();

    if (type === "hiragana" | type === "katakana") { 
        for (var node of dictionary) {
            var transliteration = trimAll(node.transliteration.toLowerCase());
            var kana = trimAll(node.kana.toLowerCase());
    
            if (search_value === transliteration | search_value === kana) {
                return true
            }   
        } 
    }
    else if (type === "kanji" | type === "general hiragana" | type === "general katakana") {
        for (var node of dictionary) {
            var transliteration = trimAll(node.transliteration.toLowerCase());
            var kana = trimAll(node.kana.toLowerCase());
            var translation = trimAll(node.translation.toLowerCase());

            if (search_value === transliteration | search_value === kana | search_value === translation) {
                return true
            }   
        }
    }
    else {
        console.log("There's no proper type designated within the type argument.")
    }

    return false
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

// Check search_value argument for matches in dictionary argument and output to table.
search_out = (search_value, dictionary, type, table_ID) => {
    var trimmed_value = trimAll(search_value.toLowerCase());
    var search_array = search_value.split(" ");
    var type = type.toLowerCase();

    if (search_value.length > 0){
        if (isMatch(trimmed_value, dictionary, type) === true) {
            if (type === "hiragana" | type === "katakana") {
                for (var node of dictionary) {
                    var transliteration = trimAll(node.transliteration.toLowerCase());
                    var kana = trimAll(node.kana.toLowerCase());
            
                    if (trimmed_value === transliteration | trimmed_value === kana) {
                        insert_valRow(table_ID, type, node.kana, node.transliteration, "N/A");
                    }   
                }
            }
            else if (type === "kanji" | type === "general hiragana" | type === "general katakana") {
                for (var node of dictionary) {
                    var transliteration = trimAll(node.transliteration.toLowerCase());
                    var kana = trimAll(node.kana.toLowerCase());
                    var translation = trimAll(node.translation.toLowerCase());

                    if (trimmed_value === transliteration | trimmed_value === kana | trimmed_value === translation) {
                        insert_valRow(table_ID, type, node.kana, node.transliteration, node.translation);
                    }   
                }  
            }
            else {
                console.log("There's no proper type designated within the type argument.")
            }
        }
        else {
            for (var value of search_array) {
                value = trimAll(value.toLowerCase());

                if (type === "hiragana" | type === "katakana") {
                    for (var node of dictionary) {
                        var transliteration = trimAll(node.transliteration.toLowerCase());
                        var kana = trimAll(node.kana.toLowerCase());
                
                        if (value === transliteration | value === kana) {
                            insert_valRow(table_ID, type, node.kana, node.transliteration, "N/A");
                        }   
                    } 
                }
                else if (type === "kanji" | type === "general hiragana" | type === "general katakana") {
                    for (var node of dictionary) {
                        var transliteration = trimAll(node.transliteration.toLowerCase());
                        var kana = trimAll(node.kana.toLowerCase());
                        var translation = trimAll(node.translation.toLowerCase());
    
                        if (value === transliteration | value === kana | value === translation) {
                            insert_valRow(table_ID, type, node.kana, node.transliteration, node.translation);
                        }   
                    }
                }
                else {
                    console.log("There's no proper type designated within the type argument.")
                }
            }
        }
    }
    else {
        clear_table(); tableBGColor_black();
        console.log("Search query is empty.");
    }
};

// Handle the search submission.
search_handler = () => {
    var search_value = document.getElementById("search-box").value;
    
    insert_headRow("search-output")

    search_out(search_value, hiragana, "hiragana", "search-output");
    search_out(search_value, katakana, "katakana", "search-output"); 
    search_out(search_value, kanji, "kanji", "search-output");
    search_out(search_value, general_hiragana, "general hiragana", "search-output");
    search_out(search_value, general_katakana, "general katakana", "search-output"); 

    search_log(search_value, hiragana, "hiragana");
    search_log(search_value, katakana, "katakana");
    search_log(search_value, kanji, "kanji");
    search_log(search_value, general_hiragana, "general hiragana");
    search_log(search_value, general_katakana, "general katakana");
};