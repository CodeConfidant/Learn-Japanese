// Remove all number characters from String.
trimNumbers = (arg) => {
    for (var i = 0; i < arg.length; i++){
        if (arg.charAt(i) === "0"){
            arg = arg.replace("0", "")
        }

        if (arg.charAt(i) === "1"){
            arg = arg.replace("1", "")
        }
        
        if (arg.charAt(i) === "2"){
            arg = arg.replace("2", "")
        }

        if (arg.charAt(i) === "3"){
            arg = arg.replace("3", "")
        }

        if (arg.charAt(i) === "4"){
            arg = arg.replace("4", "")
        }

        if (arg.charAt(i) === "5"){
            arg = arg.replace("5", "")
        }

        if (arg.charAt(i) === "6"){
            arg = arg.replace("6", "")
        }

        if (arg.charAt(i) === "7"){
            arg = arg.replace("7", "")
        }

        if (arg.charAt(i) === "8"){
            arg = arg.replace("8", "")
        }

        if (arg.charAt(i) === "9"){
            arg = arg.replace("9", "")
        }
    }

    return arg
};

// Handle the input & submission.
submit_handler = () => {
    var search_value = document.getElementById("search-box").value.toLowerCase().trim();
    search_value = trimNumbers(search_value);
    console.log(search_value);
    document.getElementById("search-box").value = "";
};