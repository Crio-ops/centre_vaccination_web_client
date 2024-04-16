<%-- 
    Document   : adminHome
    Created on : 30 sept. 2022, 14:32:35
    Author     : kevin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
        <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js">"></script>-->
        <script src="https://cdn.datatables.net/v/dt/dt-1.13.2/b-2.3.4/sl-1.6.0/datatables.min.js"></script> <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.2/css/jquery.dataTables.css">
        <!--        <script src="assets/js/datatableOpEntree.js"></script>-->
        <!--<script src="assets/js/operateurJs.js"></script>-->
        <script src="assets/js/med_inf.js"></script>
        <!--<script src="assets/js/calendar.js"></script>-->   
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js"></script>

        <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
        <!--<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">-->
        <!--<link href="https://cdn.datatables.net/v/dt/dt-1.13.2/b-2.3.4/sl-1.6.0/datatables.min.css"/>-->
        <link rel="stylesheet" href="assets/css/header.css" />
        <link rel="stylesheet" href="assets/css/global.css" />
        <link rel="stylesheet" href="assets/css/module.operateurJSP.css" />
        <link rel="stylesheet" href="assets/css/table.css" />

        <title>Panneau de configuration</title>


    </head>
    <body class="body">

        <div id="section">
            <jsp:include page ='header.jsp'></jsp:include>
            </div>
            <div id="section1">

                <div class="modal fade" id="modalD1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="citoyenInfoD1">Voulez-vous prendre en charge le patient :</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <p id="rdv"></p>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="validerLaPriseEnCharge()">Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="modalD2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="citoyenInfoD2"></h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <label>N° Registre National</label>
                                <input type="text" id="niss" value="niss" disabled></br>
                                <label>Nom</label>
                                <input type="text" id="nom" value="nom" disabled></br>
                                <label>Prenom</label>
                                <input type="text" id="prenom" value="prenom" disabled></br>
                                <label>Vaccin attribué</label>
                                <input type="text" id="vaccin_attribue" value="vaccin_attribue" disabled></br>
                                <label>Etat de vaccination</label>
                                <input type="text" id="etatDeVaccination" value="etatDeVaccination" disabled></br>
                                <label>Numéro de lot du vaccin administré</label>
                                <input type="text" id="numLot" value="">


                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" id="sendChange" data-bs-dismiss="modal" onclick="cloturerLeTicket()">Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="container">

                    <!--                <div id="rendezVousParIDContainer">
                                        <div id="formEnssContainer">
                                            <label>Indiquer le numéro de registre national du patient: </label>
                                            <input id="enss" class="form-control" type="text" />
                                            <button type="button" onload="" id="modalButton" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Valider
                                            </button> 
                                        </div>-->


                    <table id="tableTicket" class="tableListePatients">
                        <thead>
                            <tr id="tableTicketCounter">
                                <th class="th_table">N° du ticket</th>
                                <th class="th_table">Nom du patient</th>
                                <th class="th_table">Vaccin attribué</th>
                                <th class="th_table">Prise en charge</th>
                            </tr>
                        </thead>
                        <tbody id="listeTicket">

                        </tbody>
                    </table>
                    <table id="tableTicketPatient" class="tablePourPatientViaEnss">
                        <thead>
                            <tr>
                                <th class="th_table">N° du ticket</th>
                                <th class="th_table">Nom du patient</th>
                                <th class="th_table">Vaccin attribué</th>
                                <th class="th_table">Prise en charge</th>
                            </tr>
                        </thead>
                        <tbody id="ticket">

                        </tbody>
                    </table>
                      <div id="pointageContainer">
                    <a class="pointageEntre" href="ServletRedirect_Pointage_Personnel">Pointage d'entrée</a>
                    <a class="pointageSortie" href="ServletRedirect_Pointage_Sortie">Pointage de sortie</a>
                    </div>
                </div>
            </div>


            <script>
                var sessionID = '<% out.print(session.getAttribute("niss"));%>'
                var sessionName = '<% out.print(session.getAttribute("nom"));%>' + " " + '<% out.print(session.getAttribute("prenom"));%>'
                var sessionCentreAttribue = '<% out.print(session.getAttribute("centre_attribue"));%>'
                var sessionRole = '<% out.print(session.getAttribute("role"));%>'
        </script>
    </body>
</html>
