<%-- 
    Document   : gestion_du_personnel
    Created on : 2 juin 2023, 08:18:11
    Author     : kevin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <!--<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>-->
        <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
        <script src="assets/js/adminjs.js"></script>

        <link rel="stylesheet" href="assets/css/header.css" />
        <link rel="stylesheet" href="assets/css/module.adminJSP.css" />
        <link rel="stylesheet" href="assets/css/global.css" />
        <link rel="stylesheet" href="assets/css/table.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
        <title>JSP Page</title>
    </head>
    <body class="body">
        <div id="section">

            <jsp:include page ='header.jsp'></jsp:include>
            </div>
            <div id="section1">

                <div id="container">
                    <p id="title">Gestion du personnel</p>
                    <div id="vue_liste_personnel">
                    
                    <button id="personnelFormButton" onclick="showPersonnelForm()">Ajouter du personnel</button></br>
                    <div id="personnelFormContainer" style="display: none;">

                    <form action="ServletAddPersonnel" method="get">
                        <fieldset>
                            <label class="label_form" for="niss" >N°Registre National : </label>
                            <input class="input_form" type="text"  name="niss" placeholder="..." id="niss">

                            <label class="label_form" for="nom" >Nom : </label>
                            <input class="input_form" type="text"  name="nom" placeholder="..." id="nom" aria-describedby="emailHelp">

                            <label class="label_form" for="prenom" >Prénom : </label>
                            <input class="input_form" type="text" name="prenom" placeholder="..." id="prenom">

                            <label class="label_form" for="role" >Role : </label>
                            <select class="select" name="role">
                                <option selected disabled>...</option>
                                <option value="3" name="role">Infirmier</option>
                                <option value="2" name="role">Médecin</option>
                                <option value="6" name="role">Opérateur d'entrée</option>
                                <option value="5" name="role">Opérateur de sortie</option>                                
                                <option value="7" name="role">Gérant</option> 
                            </select>

                            <select id="listeCentreVac" class="select" name="centre_attribue">
                            </select>

                            <button class="button_form" type="submit" onclick="window.location.reload()" >Enregistrer</button>

                        </fieldset>
                    </form>

                </div>
                
                    <div class="tableFixHead">
                        <p id="success"></p>
                        <table id="table_listePersonnel" class="table_default">
                            <thead>
                                <tr>
                                    <th class="th_table">Nom</th>
                                    <th class="th_table">Prénom</th>
                                    <th class="th_table">Role</th>
                                    <th class="th_table">N°Registre National</th>
                                    <th class="th_table">Centre attribué</th>
                                    <th class="th_table">Editer</th>
                                </tr>
                            </thead>
                            <tbody id="infoPersonnel" class="tb_table">

                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
         
            <div id="section2">
                 <div id="container">
                     
                     <p id="title">Pointages des employés</p>

            <jsp:include page ='horaire_pointage_personnel.jsp'></jsp:include>
            </div>
            </div>
<!--        <div id="section3">

            <div id="container">


                <div id="personnel_container">



                    <input id="daterangepicker"  type="text" name="datefilter" value="" />
                    <button onclick="remplirTableauHoraire()"> Valider les dates</button>

                    <button onclick="afficherPersonnelTableauHoraire()"> Créer les horaires de la semaine</button>
                    <button id="addBtn"> ajouter une ligne</button>
                    <table id="creation_horaire_inf" class="table_default">
                        <thead>
                            <tr>
                                <th colspan="6" style="text-align: center;">Horaire des infirmiers </th>
                            </tr>
                            <tr>
                                <th><p id="dateLundi">Lundi</p></th>
                                <th><p id="dateMardi">Mardi</p></th>
                                <th><p id="dateMercredi">Mercredi</p></th>
                                <th><p id="dateJeudi">Jeudi</p></th>
                                <th><p id="dateVendredi">Vendredi</p></th>
                                <th><p id="dateSamedi">Samedi</p></th>

                        </thead>
                        <tbody id="tbody">


                        </tbody>
                    </table>

                </div>
            </div>
        </div>-->

        <script>

            window.onload = function () {

                getListeDesCentres()
                getListeDuPersonnel()
            }



            var sessionCentreAttribue = '<% out.print(session.getAttribute("centre_attribue"));%>'
            var sessionRole = '<% out.print(session.getAttribute("role"));%>'

            $(function () {

                $('input[name="datefilter"]').daterangepicker({
                    autoUpdateInput: false,
                    minDate: moment(),
                    maxSpan: {"days": 5},
                    minSpan: {"days": 5},
                    locale: {
                        cancelLabel: 'Clear'
                    },
                    isInvalidDate: function (date) {
                        if (date.day() == 0)
                            return true;
                        return false;
                    }
                });
                $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
                    $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
                });
                $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
                    $(this).val('');
                });
            });


            function remplirTableauHoraire() {
                var dateRange = document.getElementById('daterangepicker').value
                const start_date = dateRange.substring(0, 10)
                var dateFormat = moment(start_date, 'DD/MM/YYYY').format('MM/DD/YYYY');
                var date_string = moment(dateFormat).format("dddd");
                console.log(start_date)
                console.log(dateFormat)
                console.log(date_string)

                if (date_string != 'Monday') {
                    alert('vous devez selectionner un lundi pour commencer la semaine !')
                }
                AfficherDateDeLaSemaineHoraire(dateFormat)
            }

            function AfficherDateDeLaSemaineHoraire(dateFormat) {

                var mardi = moment(moment(dateFormat, 'MM/DD/YYYY').add(1, 'd').format('MM/DD/YYYY'));
                var mardiFormat = moment(mardi, 'MM/DD/YYYY').format('DD/MM/YYYY');
                var mercredi = moment(moment(dateFormat, 'MM/DD/YYYY').add(2, 'd').format('MM/DD/YYYY'));
                var mercrediFormat = moment(mercredi, 'MM/DD/YYYY').format('DD/MM/YYYY');
                var jeudi = moment(moment(dateFormat, 'MM/DD/YYYY').add(3, 'd').format('MM/DD/YYYY'));
                var jeudiFormat = moment(jeudi, 'MM/DD/YYYY').format('DD/MM/YYYY');
                var vendredi = moment(moment(dateFormat, 'MM/DD/YYYY').add(4, 'd').format('MM/DD/YYYY'));
                var vendrediFormat = moment(vendredi, 'MM/DD/YYYY').format('DD/MM/YYYY');
                var samedi = moment(moment(dateFormat, 'MM/DD/YYYY').add(5, 'd').format('MM/DD/YYYY'));
                var samediFormat = moment(samedi, 'MM/DD/YYYY').format('DD/MM/YYYY');
                ;
                var lundiFormat = moment(dateFormat, 'MM/DD/YYYY').format('DD/MM/YYYY');
                console.log(mardi)
                console.log(mercredi)
                console.log(jeudi)
                console.log(vendredi)
                console.log(samedi)

                dateLundi = document.getElementById('dateLundi');
                dateLundi.innerHTML = dateLundi.innerHTML +
                        '<p>' + lundiFormat + '</p>'

                dateMardi = document.getElementById('dateMardi');
                dateMardi.innerHTML = dateMardi.innerHTML +
                        '<p>' + mardiFormat + '</p>'
                dateMercredi = document.getElementById('dateMercredi');
                dateMercredi.innerHTML = dateMercredi.innerHTML +
                        '<p>' + mercrediFormat + '</p>'

                dateJeudi = document.getElementById('dateJeudi');
                dateJeudi.innerHTML = dateJeudi.innerHTML +
                        '<p>' + jeudiFormat + '</p>'

                dateVendredi = document.getElementById('dateVendredi');
                dateVendredi.innerHTML = dateVendredi.innerHTML +
                        '<p>' + vendrediFormat + '</p>'

                dateSamedi = document.getElementById('dateSamedi');
                dateSamedi.innerHTML = dateSamedi.innerHTML +
                        '<p>' + samediFormat + '</p>'

            }


        </script>
    </body>
</html>
