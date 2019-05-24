window.setInterval(function() {
    left_score = localStorage.getItem("left_score");
    document.getElementById("left_score").innerHTML = format(left_score);

    right_score = localStorage.getItem("right_score");
    document.getElementById("right_score").innerHTML = format(right_score);

    timer = localStorage.getItem("countdown");
    document.getElementById("timer").innerHTML = format_timer(timer);
   
}, 100);


//формат таймера в хх:хх
function format_timer(total) {
    var minutes = Math.trunc(total / 60);
    var seconds = Math.trunc(total % 60);
    return minutes + ":" + format(seconds);
};

//Формат счёта в два знакоместа
function format(val) {
    if (val < 10)
        val = "0" + val;
        return val;
}


