//4Chan: 4;board
addSearchHandler("4", {
    icon: "img/4chan.png",
    callback: function (arguments) {
    if (arguments.length < 2)
        location.href = "http://www.4chan.org";
    else
        location.href = "http://boards.4chan.org/" + arguments[1];
}});


//Music: m
addSearchHandler("m", {
    icon: "img/music.png",
    callback: function () {
    location.href = "https://www.youtube.com/watch?v=2f4ztyFMot4"
}});


//Youtube: y;query
addSearchHandler("y", {
    icon: "img/youtube.png",
    callback: function (arguments) {
    if (arguments.length < 2)
        location.href = "https://www.youtube.com";
    else
        location.href = "https://www.youtube.com/results?search_query=" + arguments[1];
}});


//Reddit: r;subreddit
addSearchHandler("r", {
    icon: "img/reddit.png",
    callback: function (arguments) {
    if (arguments.length < 2)
        location.href = "https://www.reddit.com";
    else
        location.href = "https://www.reddit.com/r/" + arguments[1];
}});


//GBATemp Switch Hacking board: gba
addSearchHandler("gba", {
    icon: "img/gbatemp.png",
    callback: function () {
    location.href = "http://www.gbatemp.net/forums/switch-hacking-homebrew.285/";
}});


//Pornhub ph;query
addSearchHandler("ph", {
    icon: "img/pornhub.png",
    callback: function (arguments) {
        if (arguments.length < 2)
            location.href = "http://www.pornhub.com";
        else
            location.href = "http://www.pornhub.com/video/search?search=" + arguments[1];
    }
});