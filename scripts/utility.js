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

    return arg;
};

// Remove whitespace characters from argument string and return.
trimSpace = (arg) => {
    arg = arg.replace(/ /g, "");
    return arg;
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

    return arg;
};

// Remove line-break characters from argument string and return.
trimLineBreak = (arg) => {
    arg = arg.replace(/\\/g, "");
    return arg;
};

// Remove numbers, whitespace, special, and line break characters from argument string and return.
trimAll = (arg) => {
    arg = trimNumbers(arg);
    arg = trimSpace(arg);
    arg = trimSpec(arg);
    arg = trimLineBreak(arg);
    return arg;
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