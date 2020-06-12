// Return true if the arg string contrains only alphabetical characters.
isAlpha = (arg) => {
    var alphabet = /^[a-z]+$/;
    if(arg.toLowerCase().match(alphabet)) {
        return true;
    }
    else {
        return false;
    }
};

// Return true if the arg string contrains only numbers.
isNumber = (arg) => {
    if (isNaN(arg) === true) {
        return false
    }
    else {
        return true
    }
};

// Return true if the arg string contrains only alphabetical or numerical characters.
isAlphaNumeric = (arg) => {
    var alphabet = /^[a-z]+$/;
    var char_check = false

    for (var i = 0; i < arg.length; i++){
        if(arg.charAt(i).toLowerCase().match(alphabet)) {
            char_check = true
        }
        else if (isNaN(arg.charAt(i)) === false) {
            char_check = true
        }
        else {
            char_check = false
        }
    }

    return char_check
};

// Handle the input & submission.
submit_handler = () => {
    var search_value = document.getElementById("search-box").value.toLowerCase()
    console.log(search_value)
    document.getElementById("search-box").value = ""
};