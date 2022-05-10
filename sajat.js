var tomb = [];

const xmlHttp = new XMLHttpRequest();
xmlHttp.onload = function(){
    if (this.readyState == 4 && this.status == 200) {
        tomb = JSON.parse(this.responseText);
        let kiirando = "";
        for (let i = 0; i < tomb.length; i++){
            kiirando += "<li id=" + i + ">" + tomb[i].nev + "</li>";
        }
        document.getElementById("talalmanyok").innerHTML = kiirando;
    }
}
xmlHttp.open("GET", "talalmanyok.json");
xmlHttp.send();

$(document).ready(function(){
    $("#kepek").click(function(){
        for (let i = 0; i < tomb.length; i++){
            $("#" + i).append("<br><img src='" + (i + 1) + ".jpg' class='rounded img-fluid'></href>");
        } 
    });
});

$(document).ready(function(){
    $("#elrejt").click(function(){
        $("img").remove(); 
    });
});

$(document).ready(function(){
    $(".aloldalkep").slideDown("slow");
});