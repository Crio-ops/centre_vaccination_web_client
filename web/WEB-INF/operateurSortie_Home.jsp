
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
        <!--<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>-->
        <script src="https://cdn.datatables.net/v/dt/dt-1.13.2/b-2.3.4/sl-1.6.0/datatables.min.js"></script> <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.2/css/jquery.dataTables.css">
        <!--<script src="assets/js/datatableOpEntree.js"></script>-->
        <script src="assets/js/operateur_sortieJS.js"></script>
        <script src="assets/js/momentJsAPI/moment.js"></script>        
        <!--<script src="assets/js/calendar.js"></script>-->   
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js"></script>

        <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
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
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="citoyenInfoD1"></h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p style="color:red" id="errorChamps"></p>  
                                <p id="rdv">Registre national du patient :</p>
                                <input id="niss" type="text" placeholder="registre nat." />

                                <p id="rdv">Numéro de lot du vaccin qui lui a été attribué :</p>
                                <input id="numLot" type="text" placeholder="N° de lot" />
                                <p>Le patient a t'il rencontré des effets indésirables :</p>
                                <label>Oui</label><input type="checkbox" id="checktrue" value="oui" name="Oui"></br>
                                <label>Non</label><input type="checkbox" id="checkfalse" value="non" name="Non">

                                <p style="color:red" id="error"></p>     

                                <p>Si oui, veuillez commenter :</p>
                                <textarea id="textarea" cols="60" rows="5" placeholder="commenter ici ..."></textarea>
                                <p style="color:red" id="commError"></p>
                                <button type="submit"  class="btn btn-primary" onclick="checkForm()">Enregistrer</button>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="location.reload()">Fermer</button>

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

                                <p id="rdv2"></p>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" id="sendChange" data-bs-dismiss="modal">Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="container">
                    
                    
                   

                    <table id="tableTicket" class="tableListePatients">
                        <thead>
                            <tr  id="tableTicketCounter">
                                <th class="th_table">N° du ticket</th>
                                <th class="th_table">Nom du patient</th>
                                <th class="th_table">Vaccin attribué</th>
                                <th class="th_table">Numéro de lot de vaccin</th>
                                <th class="th_table">Heure de départ prévue</th>
                                <th class="th_table"></th>
                            </tr>
                        </thead>
                        <tbody id="listeTicket" class="tb_table">

                        </tbody>
                    </table>
                    <div id="pointageContainer">
                    <a class="pointageEntre" href="ServletRedirect_Pointage_Personnel">Pointage d'entrée</a>
                    <a class="pointageSortie" href="ServletRedirect_Pointage_Sortie">Pointage de sortie</a>
                    </div>
                </div>
            </div>    
            
<!--        </div>-->
        <script>
            var sessionID = '<% out.print(session.getAttribute("niss"));%>'
            var sessionName = '<% out.print(session.getAttribute("nom"));%>' + " " + '<% out.print(session.getAttribute("prenom"));%>'
            var sessionCentreAttribue = '<% out.print(session.getAttribute("centre_attribue"));%>'
            var sessionRole = '<% out.print(session.getAttribute("role"));%>'
    </script>
</body>
</html>
