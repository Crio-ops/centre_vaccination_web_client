
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
        <!--        <script src="https://cdn.datatables.net/v/dt/dt-1.13.2/b-2.3.4/sl-1.6.0/datatables.min.js"></script> 
                <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>-->
        <!--<script src="assets/js/datatableAdmin.js"></script>-->
        <script src="assets/js/adminjs.js"></script>


        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.2/css/jquery.dataTables.css">
        <link rel="stylesheet" href="assets/css/header.css" />
        <link rel="stylesheet" href="assets/css/global.css" />
        <link rel="stylesheet" href="assets/css/table.css" />
        <link rel="stylesheet" href="assets/css/module.adminJSP.css" />
        <title>Panneau de configuration</title>
        <jsp:useBean id="login" class="bac.hermant.model.bean.Login" scope="session"></jsp:useBean>

        </head>
        <body class="body">
            <div id="section">

            <jsp:include page ='header.jsp'></jsp:include>
            </div>
            <!--la page est divisée en section-->

            <div id="section1">
                <div id="container">

                    <h1 id="title">Bienvenue sur votre panneau d'administration des centres de vaccination</h1>
 <%  String userRole = session.getAttribute("role").toString();
                        if (userRole.equals("7")) {
                    %>
                    <div id="pointageContainer">
                        <a class="pointageEntre" href="ServletRedirect_Pointage_Personnel">Pointage d'entrée</a>
                        <a class="pointageSortie" href="ServletRedirect_Pointage_Sortie">Pointage de sortie</a>
                    </div>
                    <% } %>
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
