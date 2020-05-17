var frases=["Ganar no lo es todo, sino querer ganar. – Vince Lombardi.",
            "El qusufrir ya sufre el temor.",
            "No prometas nada cuando te sientas eufórico."];



$(document).ready(function () {
    $(".youtube").hide();

    var random=Math.floor(Math.random()*3);
    $("#frase").text(frases[random]);
    random=Math.floor(Math.random()*3);
    $("#frase").attr("class", "frase"+random);
    $("#frase").css("visibility","visible");

    $("#youtubeBtn").on("click",function(){
        $(".youtube").slideToggle();
        $(".youtube").show();
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
                    }
                });
            },
            error: function(req,status,err){
                console.log(err);
            }
        });
    })
})
