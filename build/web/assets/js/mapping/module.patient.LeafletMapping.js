/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var dataCentre;

var map = L.map('map');
map.on('load', getCentreOnMap())
map.setView([50.6402809, 4.6667145], 7);

var centrePin = L.icon({
    iconUrl: 'assets/image/protection.png',
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
            dataCentre = jsonResp
            for (var i = 0; i < jsonResp.length; i++) {
                L.marker([jsonResp[i]['lat'], jsonResp[i]['lng']], {icon: centrePin})
                        .bindPopup('<p><b><u>Centre de vaccination</u> : ' + jsonResp[i]['nomDuCentre'] + '</b></br><u>Adresse</u> : ' + jsonResp[i]['adresse'] + '</p><button onclick="afficherLeCentre(' + i + ')">choisir</button>')
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

var centreChoisi;

function afficherLeCentre(data) {

    centreChoisi = " ";

    var nom = document.getElementById("nom_du_centre");
    var adresse = document.getElementById("rue");
    var valider = document.getElementById("valider")
    nom.innerHTML = '' + dataCentre[data]['nomDuCentre'] + '';
    adresse.innerHTML = '' + dataCentre[data]['adresse'] + ''
    valider.innerHTML = '<button onclick="validationDuCentre()">Choisir le centre</button>'

    centreChoisi = dataCentre[data];
}


function validationDuCentre() {


    $.ajax({
        url: 'ServletPatientChoisiUnCentre',
        type: 'POST',
        data: JSON.stringify(centreChoisi),
        contentType: 'application/json',
        dataType: 'json',
        success: function (jsonResp)
        {
            
            alert('Enregistrement réussi !');
            window.location.reload()

        },
        error: function () {
            alert("l'adresse n'a pas été trouvée")

        }
    });
}

