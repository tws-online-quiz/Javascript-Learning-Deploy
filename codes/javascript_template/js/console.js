var count = 0;
var logs = [];


console.log = function (arg) {
    var color;
    switch (typeof(arg)) {
        case "undefined":
            color = "dimgray";
            break;
        case "object":
            arg === null ? color = "dimgray" : color = "#000000";
            break;
        case "number":
            color = "darkblue";
            break;
        case "string":
            color = "#000000";
            break;
        case "boolean":
            color = "#000000";
            break;
        case "function":
            color = "#000000";
            break;
    }
    logs[count] = arg;
    count++;
    document.write("<h4 style='padding:15px;color: " + color + "'>" + arg + "</h4>");
};