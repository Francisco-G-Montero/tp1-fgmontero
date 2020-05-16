var frases=["La exploración espacial designa los esfuerzos del ser humano en estudiar el espacio",
            "y sus astros desde el punto de vista científico y de su explotación económica. Estos",
            "esfuerzos pueden involucrar tanto seres humanos viajando en naves espaciales como"];



$(document).ready(function () {
    var random=Math.floor(Math.random()*3);
    $("#frase").text(frases[random]);
    random=Math.floor(Math.random()*3);
    $("#frase").attr("class", "frase"+random);
    $("#frase").css("visibility","visible");
});


//CREDENCIAL YT API CLAVE AIzaSyCpnQsX98TEFc48-anVmCGuMSln-TlmyFM