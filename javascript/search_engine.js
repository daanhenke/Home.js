var inputElement = document.getElementById("searchInput");
var iconElement = document.getElementById("searchIcon");

var commands = {};


//Parse input when ENTER is pressed, else update icon.
inputElement.onkeyup = function (event) {
    //The keyCode of ENTER is 13
    if (event.keyCode == 13)
        parseSearch(inputElement.value);
    else
        updateSearch(inputElement.value);
};


//Parse input when icon is clicked
iconElement.onclick = function () {
    parseSearch(inputElement.value);
};


//Update icon once a second
setInterval(function () {
    updateSearch(inputElement.value);
}, 1000);


//Updates the icon based on the handler that would currently be activated by the parser
function updateSearch(search) {
    var arguments = search.split(settings.separator);

    if (commands.hasOwnProperty(arguments[0]))
        iconElement.src = commands[arguments[0]].icon;
    else {
        if (settings.search_engines.hasOwnProperty(settings.search_engine)) {
            iconElement.src = settings.search_engines[settings.search_engine].icon;
        }
        else
        {
            alert("UNKNOWN SEARCH ENGINE")
        }
    }
}


//Parses input and decides which handler to use or to use the search engine
function parseSearch(search) {
    var arguments = search.split(settings.separator);

    if (commands.hasOwnProperty(arguments[0]))
        commands[arguments[0]].callback(arguments);
    else {
        if (settings.search_engines.hasOwnProperty(settings.search_engine)) {
            location.href = settings.search_engines[settings.search_engine].url + search;
        }
    }
}


//Adds a new handler
function addSearchHandler(name, options) {
    if (!commands.hasOwnProperty(name))
        commands[name] = options;
    else
        alert("TRIED TO APPEND " + name + " WHILE IT WAS ALREADY APPENDED");
}