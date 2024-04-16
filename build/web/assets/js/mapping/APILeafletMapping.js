/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let addressCentre = []
let jsonCreateCentre = []

var map = L.map('map');
    map.on('load', getCentreOnMap())
    map.setView([50.6402809, 4.6667145], 7);
    
var centrePin = L.icon({
    iconUrl: 'assets/image/protection.png',
    iconSize: [45, 45],
    iconAnchor: [22, 45],
    popupAnchor: [0, -50],
});

var pin_location = L.icon({
    iconUrl: 'assets/image/location-pin.png',
    iconSize: [45, 45],
    iconAnchor: [22, 45],
    popupAnchor: [0, -50],
});

var popup = L.popup({
    className: 'leafletPopup'
});

var marker = L.marker()
var pin = L.marker()

function getCentreOnMap() {

    $.ajax({
        url: 'ServletAfficherLesCentres',
        type: 'POST',
        data: "",
        contentType: 'application/json',
        dataType: 'json',
        success: function (jsonResp)
        {
            for (var i = 0; i < jsonResp.length; i++) { 
              L.marker([jsonResp[i]['lat'], jsonResp[i]['lng']],{icon: centrePin})
                .bindPopup('<p><b><u>Centre de vaccination</u> : '+ jsonResp[i]['nomDuCentre'] +'</b></br><u>Adresse</u> : '+ jsonResp[i]['adresse'] + '</p>')
                .addTo(map);
            }
        },
        error: function () {

        }
    });
}

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function getmapping() {
    var numero  = document.getElementById("numero").value;
    var rue = document.getElementById("rue").value;
    $.ajax({
        url: 'https://nominatim.openstreetmap.org/search?q=' + numero + " "+ rue +  '&format=json',
        type: 'POST',
        data: "",
        contentType: 'application/json',
        dataType: 'json',
        success: function (jsonResp)
        {
            console.log(jsonResp)
            var flyToBounds = L.latLng([jsonResp[0]['lat'], jsonResp[0]['lon']]);
            map.flyTo(flyToBounds, 19)
            
           var marker = new L.marker
                    .setLatLng([jsonResp[0]['lat'], jsonResp[0]['lon']])
                    .addTo(map);

            marker.bindPopup(jsonResp[0]['display_name'] + '<br><button class="button_form_popup" onclick="fillCreateCentreForm()">Utiliser cette adresse</button>').openPopup();

        },
        error: function () {
            alert("l'adresse n'a pas été trouvée")

        }
    });
}

//boutton du popup de la carte
//
//function fillCreateCentreForm() {
//    let createCentreForm = document.getElementById('popup_display_address').innerHTML;
//    console.log(JSON.stringify(createCentreForm))
//    var input = $('#adresse_du_centre');
//    input.val(createCentreForm);
//    return false;
//} 

//clicker sur la carte permet d'afficher l'adresse correspondant à l'emplacement


function onMapClick(e) {
    var mapLatLng = popup.setLatLng(e.latlng)
    var mapLng = mapLatLng['_latlng'].lng
    var mapLat = mapLatLng['_latlng'].lat
    $.ajax({
        url: 'https://nominatim.openstreetmap.org/reverse?lat=' + mapLat + '&lon=' + mapLng + '&format=json',
        type: 'POST',
        data: "",
        contentType: 'application/json',
        dataType: 'json',
        success: function (jsonResp)
        {
            console.log(jsonResp.address)
                var rue = $('#rue');
                rue.val(jsonResp.address.road); 
                var numero = $('#numero');
                numero.val(jsonResp.address.house_number); 
                var ville = $('#ville');
                ville.val(jsonResp.address.town);
                var postCode = $('#postCode');
                postCode.val(jsonResp.address.postcode);
                var county = $('#county');
                county.val(jsonResp.address.county);
            pin
                    .setLatLng([jsonResp.lat, jsonResp.lon])
                    .addTo(map);

            pin.bindPopup('<div id="popup_display_address">' + jsonResp.display_name +'</div>').openPopup();
            
        },
        error: function () {
            alert("l'adresse n'a pas été trouvée")

        }
    });

}

map.on('click', onMapClick);


function createCentre() {
    var position = pin.getLatLng()
    var lng = position.lng
    var lat = position.lat
    var nomDuCentre =  document.getElementById('nom_du_centre').value
    var rue =  document.getElementById('rue').value
    var numero =  document.getElementById('numero').value
    var county =  document.getElementById('county').value
    var postCode =  document.getElementById('postCode').value
    var ville =  document.getElementById('ville').value
    
    var centreDeVaccination = JSON.stringify({   
                                            nomDuCentre:nomDuCentre,
                                            rue:rue ,
                                            ville:ville ,
                                            numero:numero ,
                                            postCode:postCode,
                                            county:county,
                                            lat:lat,
                                            lng:lng
                                        })
                              

    
    $.ajax({
        url: 'ServletCreateCentre',
        type: 'POST',
        data: centreDeVaccination,
        contentType: 'application/json',
        dataType: 'json',
        success: function (message)
        {
        alert(JSON.stringify(message))
        location.reload() 
        },
        error: function () {
           

        }
    });

}