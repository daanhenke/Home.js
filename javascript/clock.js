var clockElement = document.getElementById("clock");
var inputElement = document.getElementById("searchInput");

function updateTime() {
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();

    if (hours > 12 && settings.hours24 != true)
        hours = (hours -= 12).toString();
    else
        hours = hours.toString();

    if (minutes < 10)
        minutes = "0" + minutes.toString();
    else
        minutes = minutes.toString();

    clockElement.innerText = hours + ":" + minutes;

    var placeholder = "Oh noes!";
    switch(date.getHours()) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            placeholder = "Goodnight";
            break;

        case 7:
        case 8:
        case 9:
        case 10:
        case 11:

            placeholder = "Goodmorning";
            break;

        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
            placeholder = "Good afternoon";
            break;

        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
            placeholder = "Good evening";
            break;
    }

    inputElement.placeholder = placeholder;
}

setInterval(updateTime, 1000);
updateTime();