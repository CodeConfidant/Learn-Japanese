// Check search_value argument for matches in dictionary argument and log to console.
search_log = (search_value, dictionary) => {
    var trimmed_value = trimAll(search_value.toLowerCase());
    var search_array = search_value.split(" ");
    var type = dictionary[0].type.toLowerCase();

    if (search_value.length > 0){
        if (isMatch(trimmed_value, dictionary) === true) {
            if (type === "hiragana" | type === "katakana") {
                for (var node of dictionary) {
                    var transliteration = trimAll(node.transliteration.toLowerCase());
                    var kana = trimAll(node.kana.toLowerCase());
            
                    if (trimmed_value === transliteration | trimmed_value === kana) {
                        console.log(node);
                    }   
                }
            }

            if (type === "kanji" | type === "general hiragana" | type === "general katakana") {
                for (var node of dictionary) {
                    var transliteration = trimAll(node.transliteration.toLowerCase());
                    var kana = trimAll(node.kana.toLowerCase());
                    var translation = trimAll(node.translation.toLowerCase());

                    if (trimmed_value === transliteration | trimmed_value === kana | trimmed_value === translation) {
                        console.log(node);
                    }   
                }
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
                            console.log(node);
                        }   
                    }
                }

                if (type === "kanji" | type === "general hiragana" | type === "general katakana") {
                    for (var node of dictionary) {
                        var transliteration = trimAll(node.transliteration.toLowerCase());
                        var kana = trimAll(node.kana.toLowerCase());
                        var translation = trimAll(node.translation.toLowerCase());
    
                        if (value === transliteration | value === kana | value === translation) {
                            console.log(node);
                        }   
                    }
                }  
            }
        }
    }
    else {
        console.log("Search query is empty.");
    }
};

// Return true or false for whether a direct translation, transliteration, or kana symbol exists within the objects.
isMatch = (search_value, dictionary) => {
    var type = dictionary[0].type.toLowerCase();

    if (type === "hiragana" | type === "katakana") { 
        for (var node of dictionary) {
            var transliteration = trimAll(node.transliteration.toLowerCase());
            var kana = trimAll(node.kana.toLowerCase());
    
            if (search_value === transliteration | search_value === kana) {
                return true
            }   
        } 
    }

    if (type === "kanji" | type === "general hiragana" | type === "general katakana") {
        for (var node of dictionary) {
            var transliteration = trimAll(node.transliteration.toLowerCase());
            var kana = trimAll(node.kana.toLowerCase());
            var translation = trimAll(node.translation.toLowerCase());

            if (search_value === transliteration | search_value === kana | search_value === translation) {
                return true
            }   
        }
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
insert_valueRow = (table_ID, type, kana, transliteration, translation) => {
    var table = document.getElementById(table_ID);
    var valueRow = table.insertRow(-1);
    var typeValue = valueRow.insertCell(0);
    var kanaValue = valueRow.insertCell(1);
    var transliterationValue = valueRow.insertCell(2);
    var translationValue = valueRow.insertCell(3);

    typeValue.innerHTML = type;
    kanaValue.innerHTML = kana;
    transliterationValue.innerHTML = transliteration;
    translationValue.innerHTML = translation;
};

// Check search_value argument for matches in dictionary argument and output to table.
search_out = (search_value, dictionary, table_ID) => {
    var trimmed_value = trimAll(search_value.toLowerCase());
    var search_array = search_value.split(" ");
    var type = dictionary[0].type.toLowerCase();

    if (search_value.length > 0){
        if (isMatch(trimmed_value, dictionary) === true) {
            if (type === "hiragana" | type === "katakana") {
                for (var node of dictionary) {
                    var transliteration = trimAll(node.transliteration.toLowerCase());
                    var kana = trimAll(node.kana.toLowerCase());
            
                    if (trimmed_value === transliteration | trimmed_value === kana) {
                        insert_valueRow(table_ID, node.type, node.kana, node.transliteration, "N/A");
                    }   
                }
            }

            if (type === "kanji" | type === "general hiragana" | type === "general katakana") {
                for (var node of dictionary) {
                    var transliteration = trimAll(node.transliteration.toLowerCase());
                    var kana = trimAll(node.kana.toLowerCase());
                    var translation = trimAll(node.translation.toLowerCase());

                    if (trimmed_value === transliteration | trimmed_value === kana | trimmed_value === translation) {
                        insert_valueRow(table_ID, node.type, node.kana, node.transliteration, node.translation);
                    }   
                }  
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
                            insert_valueRow(table_ID, node.type, node.kana, node.transliteration, "N/A");
                        }   
                    } 
                }
                
                if (type === "kanji" | type === "general hiragana" | type === "general katakana") {
                    for (var node of dictionary) {
                        var transliteration = trimAll(node.transliteration.toLowerCase());
                        var kana = trimAll(node.kana.toLowerCase());
                        var translation = trimAll(node.translation.toLowerCase());
    
                        if (value === transliteration | value === kana | value === translation) {
                            insert_valueRow(table_ID, node.type, node.kana, node.transliteration, node.translation);
                        }   
                    }
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
    var table_ID = "search-output"

    insert_headRow(table_ID)

    search_out(search_value, hiragana, table_ID);
    search_out(search_value, katakana, table_ID); 
    search_out(search_value, kanji, table_ID);
    search_out(search_value, general_hiragana, table_ID);
    search_out(search_value, general_katakana, table_ID); 

    search_log(search_value, hiragana);
    search_log(search_value, katakana);
    search_log(search_value, kanji);
    search_log(search_value, general_hiragana);
    search_log(search_value, general_katakana);
};