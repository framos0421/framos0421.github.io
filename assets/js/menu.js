function moveNotes() {
    let className = document.getElementsByClassName("music-notes");
    for(var index=0;index < className.length;index++){
        className[index].style.visibility = "visible";
     }
}
let button = document.getElementById("play-music");
button.onclick = moveNotes;