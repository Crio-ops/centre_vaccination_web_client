<%-- 
    Document   : gestion_des_citoyens
    Created on : 4 juin 2023, 07:59:57
    Author     : kevin
--%>

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
        <title>JSP Page</title>
    </head>
    <body class="body">
            <div id="section">

            <jsp:include page ='header.jsp'></jsp:include>
            </div>
            <!--la page est divisée en section-->

            <div id="section1">
        
            <div id="container">

                    <form id="fileUpload" action="servletAddCitoyens" method="post" enctype="multipart/form-data">
                        <label id="label_form" style="font-size: large" for="file"><b>Ajouter des citoyens</b></label></br>
                        <input id="file" class="button_form" name="fileToUpload" type="file"  />
                        <input id="button_form" name="submit"  type="submit" />
                    </form>

                <%  if (session.getAttribute("result") != null) {
                        out.print("Enregistrement effectué");
                    };
                %>

                <!--<div id="tabContainer">-->
                <div class="tableFixHead">
                    <table >
                        <thead>
                            <tr>
                                <th class="th_table" style="text-align: center;">N°Registre National</th>
                                <th class="th_table" style="text-align: center;">Nom</th>
                                <th class="th_table" style="text-align: center;">Prénom</th>
                                <th class="th_table" style="text-align: center;">Vaccin</th>
                                <th class="th_table" style="text-align: center;">Status vaccinal</th>
                            </tr>
                        </thead>
                        <tbody id="infoCitoyens">

                        </tbody>

                    </table>
                </div>
            </div>
         </div>
        <script>
                var sessionID = '<% out.print(session.getAttribute("niss"));%>'
                var sessionCentreAttribue = '<% out.print(session.getAttribute("centre_attribue"));%>'
                var sessionRole = '<% out.print(session.getAttribute("role"));%>'


            </script>
        
    </body>
</html>
