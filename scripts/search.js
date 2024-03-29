// Check search_value argument for matches in nodeContainer argument and log to console.
search_log = (search_value, nodeContainer) => {
    var trimmed_value = trimAll(search_value.toLowerCase());
    var search_array = search_value.split(" ");

    if (search_value.length > 0){
        if (isMatch(trimmed_value, nodeContainer) === true) {
            
            for (var node of nodeContainer) {
                var transliteration = trimAll(node.transliteration.toLowerCase());
                var kana = trimAll(node.kana.toLowerCase());
                var translation = trimAll(node.translation.toLowerCase());

                if (trimmed_value === transliteration | trimmed_value === kana | trimmed_value === translation) {
                    console.log(node);
                }   
            }
        }
        else {
            for (var value of search_array) {
                value = trimAll(value.toLowerCase());

                for (var node of nodeContainer) {
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
    else {
        console.log("Search query is empty.");
    }
};

// Return true or false for whether a translation, transliteration, or kana symbol exists within the nodeContainer argument.
isMatch = (search_value, nodeContainer) => {
    for (var node of nodeContainer) {
        var transliteration = trimAll(node.transliteration.toLowerCase());
        var kana = trimAll(node.kana.toLowerCase());
        var translation = trimAll(node.translation.toLowerCase());

        if (search_value === transliteration | search_value === kana | search_value === translation) {
            return true
        }   
    }
   
    return false
};

// Insert head row into table and add values.
insert_headRow = (table_ID) => {
    var table = document.getElementById(table_ID);
    var headRow = table.insertRow(0);
    var typeHead = headRow.insertCell(0);
    var kanaHead = headRow.insertCell(1);
    var transliterationHead = headRow.insertCell(2);
    var translationHead = headRow.insertCell(3);

    typeHead.innerHTML = "<b>Type</b>";
    kanaHead.innerHTML = "<b>Kana</b>";
    transliterationHead.innerHTML = "<b>Transliteration</b>";
    translationHead.innerHTML = "<b>Translation</b>";
};

// Insert value row into table and add values.
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

// Check search_value argument for matches in nodeContainer argument and output to table.
search_out = (search_value, nodeContainer, table_ID) => {
    var trimmed_value = trimAll(search_value.toLowerCase());
    var search_array = search_value.split(" ");

    if (search_value.length > 0){
        if (isMatch(trimmed_value, nodeContainer) === true) {
            for (var node of nodeContainer) {
                var transliteration = trimAll(node.transliteration.toLowerCase());
                var kana = trimAll(node.kana.toLowerCase());
                var translation = trimAll(node.translation.toLowerCase());

                if (trimmed_value === transliteration | trimmed_value === kana | trimmed_value === translation) {
                    insert_valueRow(table_ID, node.type, node.kana, node.transliteration, node.translation);
                }   
            }  
        }
        else {
            for (var value of search_array) {
                value = trimAll(value.toLowerCase());
               
                for (var node of nodeContainer) {
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

    search_log(search_value, hiragana);
    search_log(search_value, katakana);
    search_log(search_value, kanji);
};