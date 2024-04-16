
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
        <!--<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>-->
        <script src="https://cdn.datatables.net/v/dt/dt-1.13.2/b-2.3.4/sl-1.6.0/datatables.min.js"></script> <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.2/css/jquery.dataTables.css">
<!--        <script src="assets/js/datatableOpEntree.js"></script>-->
        <script src="assets/js/operateurJs.js"></script>
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
                                <h1 class="modal-title fs-5" id="citoyenInfoD1"></h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <p id="rdv"></p>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="location.reload()">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="ValiderPresenceRdvPatient()">Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="container">

                    <div id="rendezVousParIDContainer">
                        <div id="formEnssContainer">
                            <label id="label" class="label_form">Indiquer le numéro de registre national du patient: </label></br>
                            <input id="niss" class="input_form" type="text"/>
                            <button type="button" onclick="getRdvPatientViaEnss()" class="button_form" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Valider
                            </button> 
                            <p id="errorText"></p>
                        </div>
                        <div id="divTabPatient">
                        <table id="tabPatient" class="tableListePatients">
                            <thead>
                                <tr>
                                    <th class="th_table">N°</th>
                                    <th class="th_table">1er Rendez-vous</th>
                                    <th class="th_table">Etat du rendez-vous</th>
                                    <th class="th_table">2eme Rendez-vous</th>
                                    <th class="th_table">Etat du rendez-vous</th>
                                    <th class="th_table">Centre attribué</th>

                                </tr>
                            </thead>
                            <tbody id="sel">

                            </tbody>
                        </table>
                        </div>
                    </div>
                      <div id="pointageContainer">
                    <a class="pointageEntre" href="ServletRedirect_Pointage_Personnel">Pointage d'entrée</a>
                    <a class="pointageSortie" href="ServletRedirect_Pointage_Sortie">Pointage de sortie</a>
                    </div>
                </div>                          
            </div>

<!--            <div id="section2" >
                <div id="container">
                    
                    <div id="affichierTousLesRdvContainer">
                        <div id="datepicker">
                            <label>Selectionner une date : </label>
                            <input id="date" class="form-control" type="date" step="1" >
                            <label>Selectionner une heure : </label>
                            <input id="datetime" class="form-control" type="text" />
                            <button type="button" onclick="getDateRdvDuJour()" id="modalButton" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Valider
                            </button>  
                        </div>

                        <table class="tableListeRdv">
                            <thead>
                                <tr id="tableListeRdv">
                                    <th class="th_table">N°</th>
                                    <th class="th_table">1er Rendez-vous</th>
                                    <th class="th_table">2eme Rendez-vous</th>
                                </tr>
                            </thead>
                            <tbody id="sel">

                            </tbody>
                        </table>
                    </div>



                </div>                          
            </div>-->

<!--<p><% out.print(session.getAttribute("nom"));%>  <% out.print(session.getAttribute("prenom")); %> <% out.print(session.getAttribute("role"));%></p>-->              


        <!--                     Button trigger modal 
                                                <button type="button" id="editTabCitoyens" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    Mettre à jour la vaccination
                                                </button>-->



        <script>

            var sessionID = '<% out.print(session.getAttribute("niss"));%>'
            var sessionName = '<% out.print(session.getAttribute("nom"));%>' + " " + '<% out.print(session.getAttribute("prenom"));%>'
            var sessionCentreAttribue = '<% out.print(session.getAttribute("centre_attribue"));%>'
            var sessionRole = '<% out.print(session.getAttribute("role"));%>'

            // Below code sets format to the
            // datetimepicker having id as
            // datetime
            $('#datetime').datetimepicker({
                format: 'HH:mm',
                defaultDate: moment('10:00', 'HH:mm'),
                minDate: moment('10:00', 'HH:mm'),
                maxDate: moment('18:55', 'HH:mm'),
                keepInvalid: true

            });

            $('#kt_datetimepicker_1').datetimepicker();


        </script>
    </body>
</html>
