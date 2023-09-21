var demo = document.getElementById("scoreboard"); // reference the HTML
var xhr = new XMLHttpRequest();
xhr.addEventListener("load", function(){
    var xmlDoc = xhr.responseXML;
    demo.innerHTML = myFunction(xmlDoc);
});

xhr.responseType = "document"; // "text", json", "document" for XML
xhr.open("GET", "hockey.xml");
xhr.send();

function myFunction(xml) {
    console.log(xml);
    var table = "";
    var entries = xml.getElementsByTagName("team");
    for (var i = 0; i < entries.length; i++) {
        table += "<tr><td>" +
            entries[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
            "</td><td>" +
            entries[i].getElementsByTagName("score")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    return table;
}
