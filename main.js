var frases=["Ganar no lo es todo, sino querer ganar. – Vince Lombardi.",
            "Vic es una SUPER rronttiita. loviu",
            "No prometas nada cuando te sientas eufórico."];



$(document).ready(function () {
    $(".youtube").hide();
    $(".weather").hide();

    var random=Math.floor(Math.random()*3);
    $("#frase").text(frases[random]);
    random=Math.floor(Math.random()*3);
    $("#frase").attr("class", "frase"+random);
    $("#frase").css("visibility","visible");

    $("#youtubeBtn").on("click",function(){
        $(".youtube").slideToggle();
        $(".youtube").show();
    })

    $("#climaBtn").on("click",function(){
        $(".weather").slideToggle();
        $(".weather").show();
    })   
    
  

    $("#buscarCanal").on("click",function(){
        var canalID=$("#canalID").val();
        canalID=canalID.replace(/ /g,"%20");
        console.log(canalID);
        $.ajax({
            type: "get",
            url: "https://www.googleapis.com/youtube/v3/search?part=id&maxResults=1&q="+canalID+"&type=channel&key=AIzaSyCpnQsX98TEFc48-anVmCGuMSln-TlmyFM",
            dataType: "json",
            success: function (response) {
                
                if(!Object.keys(response.items).length==0){
                    var id=response.items[0].id.channelId;

                    $.ajax({
                        type: "get",
                        url: "https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id="+id+"&maxResults=1&key=AIzaSyCpnQsX98TEFc48-anVmCGuMSln-TlmyFM",
                        dataType: "json",
                        success: function (response) {
                            console.log(response);
                            var data=response.items[0];
                            $("#ytName").html(data.snippet.title);
                            $("#ytDesc").html(data.snippet.description);
                            $("#ytVideoCount").html(data.statistics.videoCount);
                            $("#ytVideoViews").html(data.statistics.viewCount);
                            $("#ytSus").html(data.statistics.subscriberCount);
                        }, error: function(req,status,err){
                            alert("Hubo un error al buscar el canal solicitado");
                            console.log(err);
                        }
                    });
                }else  {
                    alert("Hubo un error al realizar la busqueda, el canal puede no existir")
                    $("#canalID").val("");
                }

              //  alert("Hubo un error al buscar el canal solicitado");

            },
            error: function(req,status,err){
                console.log(err);
            }
        });
    })

    $("#buscarClima").on("click",function(){
        var localidad=$("#localidadName").val();
        localidad=localidad.replace(/ /g,"%20");
        console.log(localidad);
        $.ajax({
            type: "get",
            url: "https://api.openweathermap.org/data/2.5/weather?q="+localidad+"&units=metric&appid=76eeb2c2fa7256edae0d43e7426f5644",
            dataType: "json",
            success: function (data) {
                console.log(data);
                $("#localTable").html(data.name+",  "+data.sys.country);
                $("#tempTable").html(data.main.temp+"°C");
                $("#humTable").html(data.main.humidity+"%");
                $("#sensTable").html(data.main.feels_like+"°C");
                $("#descTable").html(data.weather[0].description+"°C "+`<img id="descIcon" src="http://openweathermap.org/img/wn/`+data.weather[0].icon+`@2x.png"></img>`);

            },
            error: function(req,status,err){
                alert("El País, Provincia o localidad no se ha encontrado por la API, atienda a posibles errores ortográficos");
                console.log(err);
            }
        });
    })
})
