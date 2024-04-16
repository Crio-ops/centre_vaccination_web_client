<%-- 
    Document   : creationDeCentre
    Created on : 24 avr. 2023, 10:48:28
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
        <link rel="stylesheet" href="assets/css/map_view_admin.css">

        <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
        <script src="https://cdn.datatables.net/v/dt/dt-1.13.2/b-2.3.4/sl-1.6.0/datatables.min.js"></script> 
        <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
        <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>

        <title>JSP Page</title>
    </head>
            <body class="body">
            <div id="section">

            <jsp:include page ='header.jsp'></jsp:include>
            </div>

            <div id="section1">
                <div id="container">
       

        <div id="map_container">
            
            <div id="map_display_container">
                <h1 id="title">Gestion des centres :</h1>

                <!--affichage de la map leaflet-->
                <div id="map" onload="getCentreOnMap()"></div>
            </div>
            
             <div id="create_vaccCenter_form">
          
                 <table>
                     <thead>
                         <tr>
                             <th colspan="5"><p class="label_form" style="font-size: x-large; text-align: left">Créer un centre de vaccination</p></th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr>
                             <td colspan="5" style="font-style: italic ; padding-bottom: 30px;">
                                 <img id="tab-Cal-Icon" alt="rechercher une adresse" style="height: 25px; width: 25px" src="assets/image/right-arrow.png" >
                                 L'encodage peut se faire manuellement ou en entrant le nom de la rue recherchée et son numéro correspondant puis cliquer sur le 
                                 <img id="tab-Cal-Icon" alt="curseur rouge" style="height: 20px; width: 20px" src="assets/image/location-pin.png" > 
                                 . Votre adresse devrait apparaitre sur la carte. <br>
                                 <img id="tab-Cal-Icon" alt="rechercher une adresse" style="height: 25px; width: 25px" src="assets/image/right-arrow.png" >Pour enregistrer, appuyer sur la  
                                 <img id="tab-Cal-Icon" alt="rechercher une adresse" style="height: 15px; width: 15px" src="assets/image/save.png"></td>
                             
                         </tr>
                         <tr>
                             <td><label class="label_form">Nom du centre :</label></td>
                             <td><input class="input_form" type="text" id="nom_du_centre" value=""></td>
                         </tr>
                         <tr>
                             <td><label class="label_form" for="rue">Rue :</label></td>
                             <td><input class="input_form" type="text" id="rue" value=""></td>
                             <td><label class="label_form" for="rue">N°:</label></td>
                             <td><input class="input_form" type="text" id="numero"  value=""></td>
                             <td></td>
                         </tr>
                         
                         <tr>
                             <td><label class="label_form" for="ville">localité :</label></td>
                             <td><input class="input_form" type="text" id="ville" name="adresse_du_centre" value=""></td>
                             <td><label class="label_form" for="postCode">Code postal :</label></td>
                             <td><input class="input_form" type="text" id="postCode" value=""></td>                             
                         </tr>
                         <tr>
                             <td><label class="label_form" for="county">Région :</label></td>
                             <td><input class="input_form" type="text" id="county" value=""></td>
                         </tr>
                         <tr>
                             <td colspan="5" style="text-align: center">
                                 <button class="button_form" type="submit" onclick="getmapping()"><img id="tab-Cal-Icon" alt="rechercher une adresse" style="height:4.5vh; width: 4.5vh;" title="Rechercher mon adresse" src="assets/image/location-pin.png" ></button>
                                 <button class="button_form" type="submit" onclick="createCentre()"><img id="tab-Cal-Icon" alt="rechercher une adresse" title="Créer le centre" src="assets/image/save.png"></button>
                             </td>
                         </tr>
                     </tbody>
                 </table>
                 
            </div>
        </div>

        <script src="assets/js/mapping/APILeafletMapping.js"></script>

    </body>
</html>
 