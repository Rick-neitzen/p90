function Back()
{
    window.location = "activity_1.html";
}

function GetScore()
{
    score = localStorage.getItem("score");
    document.getElementById("Update").innerHTML = "<h1>score;" + score + "</h1>";
}