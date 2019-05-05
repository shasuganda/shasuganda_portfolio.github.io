var d = new Date();
var hour = d.getHours();

if (hour>=6 && hour<12) {
    document.getElementById("greetings").innerHTML = "Good Morning";
}
else if (hour>12 && hour<18) {
    document.getElementById("greetings").innerHTML = "Good Afternoon";
}
else {
    document.getElementById("greetings").innerHTML = "Good Evening";
}
