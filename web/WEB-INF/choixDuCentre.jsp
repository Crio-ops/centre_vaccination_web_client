<%-- 
    Document   : choixDuCentre
    Created on : 8 mai 2023, 16:04:07
    Author     : kevin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin=""/>
        <link rel="stylesheet" href="assets/css/global.css">
        <link rel="stylesheet" href="assets/css/header.css">
        <link rel="stylesheet" href="assets/css/choixDuCentre.css">

        <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>

        <title>Choix Du Centre</title>
    </head>
    <body>


        <div id="map_container">


            <div id="choix_vaccCenter_form">

                <p>Bienvenue sur votre tableau de bord de vaccination COVID de la Communauté Française, vous n'avez pas encore effectué de rendez-vous pour votre vaccination.</p>
                <p>Ceci ne vous prendra pas plus de 5 minutes.</p>

                <table>
                    <thead>
                        <tr>
                            <th colspan="5"><p class="label_form" style="font-size: x-large; text-align: left">Choisir sont centre de vaccination</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="5" style="font-style: italic ; padding-bottom: 30px;">
                                <img id="tab-Cal-Icon" alt="rechercher une adresse" style="height: 25px; width: 25px" src="assets/image/right-arrow.png" >
                                Veuillez selectionner le centre de votre choix sur la carte, un boutton est disponible afin de valider votre choix 

                        </tr>
                        <tr>
                            <td ><label class="label_form">Nom du centre :</label></td>
                            <td ><p id="nom_du_centre"></p></td>
                        </tr>
                        <tr>
                            <td><label class="label_form" for="rue">Rue :</label></td>
                            <td><p id="rue"></p></td>
                            <td ><p id="valider"></p></td>
                        </tr>
                </table>


            </div>

            <div id="map_display_container">
                <!--affichage de la map leaflet-->
                <div id="map" onload="choisirCentreMap()"></div>
            </div>
        </div>

        <script src="assets/js/mapping/module.patient.LeafletMapping.js"></script>

    </body>
</html>

