var lat, long
function consulta() { 
    cidade = document.getElementById('cidade');       
    $.ajax({
        type: 'GET',
        url: "http://api.openweathermap.org/data/2.5/weather?q="+ cidade.value + "&appid=KEY",
        success: function(resposta) {  
            $("#tempAtual").html(resposta.main.temp - 273.15),  
            $("#tempMax").html(resposta.main.temp_max - 273.15),
            $("#tempMin").html(resposta.main.temp_min - 273.15),
            date1 = new Date(resposta.sys.sunrise * 1000)
            $("#nascerSol").html(date1.getHours() + ":" + date1.getMinutes()),
            date2 = new Date(resposta.sys.sunset * 1000)
            $("#porSol").html(date2.getHours() + ":" + date2.getMinutes()),
            $("#long").html(resposta.coord.lon),
            long = resposta.coord.lon
            $("#latitude").html(resposta.coord.lat),
            lat = resposta.coord.lat
            initMap();
             
        }
    });
}  

let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: Number(lat), lng: Number(long) },
        zoom: 8,
    });
}