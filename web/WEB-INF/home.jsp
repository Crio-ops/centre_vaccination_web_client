<%-- 
    Document   : home
    Created on : 5 déc. 2022, 20:52:45
    Author     : kevin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>CFWB - Vaccination</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


        <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
        <script src="https://cdn.datatables.net/v/dt/dt-1.13.2/b-2.3.4/sl-1.6.0/datatables.min.js"></script> 
        <script src="assets/js/calendar.js"></script>

        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.2/css/jquery.dataTables.css">
        <link href="https://cdn.datatables.net/v/dt/dt-1.13.2/b-2.3.4/sl-1.6.0/datatables.min.css"/>
        <link rel="stylesheet" href="assets/css/header.css" />
        <link rel="stylesheet" href="assets/css/global.css" />
        <link rel="stylesheet" href="assets/css/module.patientJSP.css" />

        <jsp:useBean id="login" class="bac.hermant.model.bean.Login" scope="session"></jsp:useBean>
        </head>
        <body class="body">
            <div id="section">
                <div id="nevbar">

                <jsp:include page ='header.jsp'></jsp:include>

                </div>
            </div>
            <div id="section1">
                <div id="container">

                <%  String etatDeVaccination = session.getAttribute("etatDeVaccination").toString();
                    if (etatDeVaccination.equals("2")) {%>
                <jsp:include page ='vue_vaccination.jsp'></jsp:include>
             <% } else {%>


                <%   String centre_attribue = session.getAttribute("centre_attribue").toString();
                    if (centre_attribue.equals("0")) {%>
                <jsp:include page ='choixDuCentre.jsp'></jsp:include>
                <% } else {%>
                <div id="priseDeRdv">   

                    <%  String etatVaccRdv = session.getAttribute("etatRdvVacc").toString();
                        if (etatVaccRdv.equals("1")) {
                    %>

                    <jsp:include page ='vuePriseRdvPatientD2.jsp'></jsp:include>
                        <p id="rendezVous-supplementaire">Votre vaccin nécéssite 2 doses afin d'avoir un schéma vaccinal complet, veuillez prendre un deuxième rendez-vous : </p>
                        <table id="infoCitoyen" class="cell-border hover">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>VACCIN</th>
                                    <th>DATE DE RDV D1</th>
                                    <th>HEURE DE RDV D1</th>
                                    <th>DATE DE RDV D2</th>
                                    <th>HEURE DE RDV D2</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Row 1 Data 1</td>
                                    <td>Row 1 Data 2</td>
                                    <td>Row 1 Data 3</td>
                                </tr>
                                <tr>
                                    <td>Row 2 Data 1</td>
                                    <td>Row 2 Data 2</td>
                                    <td>Row 2 Data 3</td>
                                </tr>

                            </tbody>
                        </table>  
                    <% } else if (etatVaccRdv.equals("2")) { %>

                    <p id="txt-rendezVousEffectue">Vous avez effectué toutes les démarches nécessaires afin de prendre rendez-vous pour votre vaccination et avoir un status vaccinal complet</p>
                    <table id="infoCitoyen" class="cell-border hover">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>VACCIN</th>
                                <th>DATE DE RDV D1</th>
                                <th>HEURE DE RDV D1</th>
                                <th>DATE DE RDV D2</th>
                                <th>HEURE DE RDV D2</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Row 1 Data 1</td>
                                <td>Row 1 Data 2</td>
                                <td>Row 1 Data 3</td>
                            </tr>
                            <tr>
                                <td>Row 2 Data 1</td>
                                <td>Row 2 Data 2</td>
                                <td>Row 2 Data 3</td>
                            </tr>

                        </tbody>
                    </table>  

                    <% } else { %>


                    <div  id="txt-rendezVous">
                        

                        <jsp:include page ='vuePriseRdvPatient.jsp'></jsp:include>  
                        </div>
                    <%          }
                            }
                        }
                    %>




                </div>
            </div>
        </div>
  
    </body>
    <script>
        $(".modal").on("hidden.bs.modal", function () {
            location.reload()
        });

        let data;

        $(document).ready(function () {
            var table = $('#infoCitoyen').DataTable({
                ordering: false,
                searching: false,
                select: true,
                paging: false,
                info: false,
                ajax: {
                    url: 'ServletInfoPatient',
                    dataSrc: '',
                },
                columns: [
                    {data: 'nom'},
                    {data: 'prenom'},
                    {data: 'vaccin_attribue', "defaultContent": " / "},
                    {data: 'dateRdv_Dose1', "defaultContent": " / "},
                    {data: 'heureRdv_Dose1', "defaultContent": " / "},
                    {data: 'dateRdv_Dose2', "defaultContent": " / "},
                    {data: 'heureRdv_Dose2', "defaultContent": " / "}

                ]
            });
        });


    </script>

</html> 


