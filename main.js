var frases=["La exploración espacial designa los esfuerzos del ser humano en estudiar el espacio",
            "y sus astros desde el punto de vista científico y de su explotación económica. Estos",
            "esfuerzos pueden involucrar tanto seres humanos viajando en naves espaciales como"];
$(document).ready(function () {
    var random=Math.floor(Math.random()*3);
    $("#frase").text(frases[random]);
    random=Math.floor(Math.random()*3);
    $("#frase").attr("class", "frase"+random);
    $("#frase").css("visibility","visible");

    /*
    $.ajax({
        url:"https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=5&mine=true&key=AIzaSyCpnQsX98TEFc48-anVmCGuMSln-TlmyFM",
        method:"GET",
        dataType:"json",
        success: function(response){
            console.log(response);
            https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=5&mine=true&key=[YOUR_API_KEY] HTTP/1.1

        },
        error: function(req,status,err){
            //
        }
    });
    */

});


//CREDENCIAL YT API CLAVE AIzaSyCpnQsX98TEFc48-anVmCGuMSln-TlmyFM