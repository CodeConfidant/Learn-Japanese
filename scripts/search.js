// Remove all number characters from String.
trimNumbers = (arg) => {
    for (var i of arg){
        if (i === "0"){
            arg = arg.replace("0", "")
        }

        if (i === "1"){
            arg = arg.replace("1", "")
        }
        
        if (i === "2"){
            arg = arg.replace("2", "")
        }

        if (i === "3"){
            arg = arg.replace("3", "")
        }

        if (i === "4"){
            arg = arg.replace("4", "")
        }

        if (i === "5"){
            arg = arg.replace("5", "")
        }

        if (i === "6"){
            arg = arg.replace("6", "")
        }

        if (i === "7"){
            arg = arg.replace("7", "")
        }

        if (i === "8"){
            arg = arg.replace("8", "")
        }

        if (i === "9"){
            arg = arg.replace("9", "")
        }
    }

    return arg
};

trimSpace = (arg) => {
    arg = arg.replace(/ /g, "")
    return arg
};

// Handle the input & submission.
submit_handler = () => {
    var search_value = document.getElementById("search-box").value.toLowerCase().trim()
    search_value = trimNumbers(search_value)
    search_value = trimSpace(search_value)
    console.log(search_value)
    document.getElementById("search-box").value = ""
};