<%-- 
    Document   : horaire_pointage_personnel
    Created on : 5 juin 2023, 10:28:54
    Author     : kevin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
        <script src="https://cdn.datatables.net/v/dt/dt-1.13.2/b-2.3.4/sl-1.6.0/datatables.min.js"></script> 
        <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
        <script src="assets/js/calendar.js"></script>

        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.2/css/jquery.dataTables.css">
        <link href="https://cdn.datatables.net/v/dt/dt-1.13.2/b-2.3.4/sl-1.6.0/datatables.min.css"/>
        <link rel="stylesheet" href="assets/css/header.css" />
        <link rel="stylesheet" href="assets/css/global.css" />
        <link rel="stylesheet" href="assets/css/module.patientJSP.css" />
        <title>JSP Page</title>
    </head>
    <body>
   
        <div id="datepicker-div">
            <div id="datepicker">

                <!--Affiche un datapicker et un boutton de validation-->
                <input type="date" id="date">
                <select id="select" class="select" name="typeHoraire">
                    <option value="1">Entrée</option>
                    <option value="2">Sortie</option>
                </select>
                <button type="button" onclick="showListeHorairePointageEntree()" id="modalButton" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Valider</button>
                <div class="tableFixHead">
                    <p id="success"></p>
                    <table id="table_listePoitagePersonnel" class="table_default">
                        <thead>
                            <tr>
                                <th class="th_table">N°Reg.NaT</th>
                                <th class="th_table">Nom</th>
                                <th class="th_table">Prénom</th>
                                <th class="th_table">Date d'arrivée</th>
                                <th class="th_table">Heure d'arrivée</th>
                                <!--<th class="th_table">Centre attribué</th>-->
                                <!--<th class="th_table">Editer</th>-->
                            </tr>
                        </thead>
                        <tbody id="horairePointage" class="tb_table">

                        </tbody>
                    </table>
                </div>
               
                    <script>
                        var sessionID = '<% out.print(session.getAttribute("niss"));%>'
                        var sessionName = '<% out.print(session.getAttribute("nom"));%>' + " " + '<% out.print(session.getAttribute("prenom"));%>'
                        var sessionCentreAttribue = '<% out.print(session.getAttribute("centre_attribue"));%>'
                        var sessionRole = '<% out.print(session.getAttribute("role"));%>'
                    </script>

                    </body>
                    </html>
