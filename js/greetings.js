var d = new Date();
var hour = d.getHours();

if (hour>=24 && hour<12) {
    document.getElementById("greetings").innerHTML = "Good Morning";
}
else if (hour>18 && hour<24) {
    document.getElementById("greetings").innerHTML = "Good Evening";
}
else {
    document.getElementById("greetings").innerHTML = "Good Afternoon";
}
