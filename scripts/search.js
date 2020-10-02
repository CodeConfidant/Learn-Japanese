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