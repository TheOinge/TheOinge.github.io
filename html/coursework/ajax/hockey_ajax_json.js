var demo = document.getElementById("scoreboard"); // reference the HTML
var xhr = new XMLHttpRequest();
xhr.addEventListener("load", function(){
    var jsonDoc = xhr.response;
    demo.innerHTML = myFunction(jsonDoc);
});

xhr.responseType = "json"; // "text", json", "document" for XML
xhr.open("GET", "hockey.json");
xhr.send();

function myFunction(jdoc) {
    console.log(jdoc);
    var table = "";
    for (var i = 0; i < jdoc.hockey.length; i++) {
        table += 
            "<tr><td>" + jdoc.hockey[i].team + 
            "</td><td>" + jdoc.hockey[i].score  +
            "</td></tr>";
    }
    return table;
}
