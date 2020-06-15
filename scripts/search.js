// Remove number characters from argument string and return.
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

// Remove whitespace characters from argument string and return.
trimSpace = (arg) => {
    arg = arg.replace(/ /g, "")
    return arg
};

// Remove special characters from argument string and return.
trimSpec = (arg) => {
    for (var i of arg){
        if (i === "`"){
            arg = arg.replace("`", "")
        }

        if (i === "~"){
            arg = arg.replace("~", "")
        }

        if (i === "!"){
            arg = arg.replace("!", "")
        }

        if (i === "@"){
            arg = arg.replace("@", "")
        }

        if (i === "#"){
            arg = arg.replace("#", "")
        }

        if (i === "$"){
            arg = arg.replace("$", "")
        }

        if (i === "%"){
            arg = arg.replace("%", "")
        }

        if (i === "^"){
            arg = arg.replace("^", "")
        }

        if (i === "&"){
            arg = arg.replace("&", "")
        }

        if (i === "*"){
            arg = arg.replace("*", "")
        }

        if (i === "("){
            arg = arg.replace("(", "")
        }

        if (i === ")"){
            arg = arg.replace(")", "")
        }

        if (i === "_"){
            arg = arg.replace("_", "")
        }

        if (i === "-"){
            arg = arg.replace("-", "")
        }

        if (i === "+"){
            arg = arg.replace("+", "")
        }

        if (i === "="){
            arg = arg.replace("=", "")
        }

        if (i === "|"){
            arg = arg.replace("|", "")
        }

        if (i === "}"){
            arg = arg.replace("}", "")
        }

        if (i === "{"){
            arg = arg.replace("{", "")
        }

        if (i === "]"){
            arg = arg.replace("]", "")
        }

        if (i === "["){
            arg = arg.replace("[", "")
        }

        if (i === "'"){
            arg = arg.replace("'", "")
        }

        if (i === ":"){
            arg = arg.replace(":", "")
        }

        if (i === ";"){
            arg = arg.replace(";", "")
        }

        if (i === "/"){
            arg = arg.replace("/", "")
        }

        if (i === "?"){
            arg = arg.replace("?", "")
        }

        if (i === ">"){
            arg = arg.replace(">", "")
        }

        if (i === "<"){
            arg = arg.replace("<", "")
        }

        if (i === "."){
            arg = arg.replace(".", "")
        }

        if (i === ","){
            arg = arg.replace(",", "")
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

// Reset value of input.
reset = () => {
    document.getElementById("search-box").value = ""
};

// Handle the input & submission.
submit_handler = () => {
    var search_value = trimAll(document.getElementById("search-box").value.toLowerCase())
    console.log(search_value)
};