<%-- 
    Document   : header.jsp
    Created on : 9 nov. 2022, 08:41:15
    Author     : kevin
--%>
<%@page contentType="text/html" session="true" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <!--        <link rel="stylesheet" href="assets/css/header.css" />
                <title>JSP Page</title>
        -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>

    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color:#293D46;">
            <div class="container-fluid">
                <a><img id="imgHeader" src="assets/image/FedBelge.png" alt="alt"/></a>
                    <%  String userRole = session.getAttribute("role").toString();
                        if (userRole.equals("4")) {
                    %>
                <a class="navbar-brand" id="titleNav" href="#">Panneau <br>de controle</a>
                    <% } else { %>
                <a class="navbar-brand" id="titleNav" href="#">Panneau <br>Administrateur</a>
                    <% } %>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="menu">
                    <% if (userRole.equals("4")) {
                    %>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#section1">Accueil</a>
                            <a class="nav-link active" href="#section3">Voir mon status vaccinal</a>
                        </div>
                    </div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li class="nav-link dropdown "> <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Compte</a>

                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="ServletLogOut">Se déconnecter</a></li>
                            </ul>
                        </li>
                    </ul>
                    <% } else if (userRole.equals("1") || userRole.equals("7")) {
                    %>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="ServletRedirect_AdminHome">Accueil</a>
                        </div>
                    </div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li class="nav-link dropdown "> <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</a>

                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="ServletRedirect_gestion_citoyens">Gestion des citoyens</a></li>
                                <li><a class="dropdown-item" href="ServletRedirect_Gestion_Personnel">Gestion du personnel</a></li>
                                

                                <% if (userRole.equals("1")) {
                                %>
                                <li><a class="dropdown-item" href="ServletRedirect_Gestion_CentreVaccination">Gestion des centres de vaccination</a></li>
                                <li><a class="dropdown-item" href="ServletRedirect_Statistique">Statistique des centres</a></li>

                                <% } %>

                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li class="nav-link dropdown "> <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Compte</a>

                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="ServletRedirectPersonnelOnHomeVaccination">Ma Vaccination</a></li>
                                <li><a class="dropdown-item" href="ServletLogOut">Se déconnecter</a></li>
                            </ul>
                        </li>
                    </ul>

                    <% } else if(userRole.equals("6")) { %>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="ServletRedirect_operateur_entee">Accueil</a>
<!--                            <a class="nav-link active" href="#section1">Gestion des citoyens</a>-->
                            <!--<a class="nav-link active" href="ServletRedirectPersonnelOnHomeVaccination">Vers sa vaccination</a>-->

                        </div>
                    </div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li class="nav-link dropdown "> <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Compte</a>

                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="ServletRedirectPersonnelOnHomeVaccination">Ma Vaccination</a></li>
                                <li><a class="dropdown-item" href="ServletLogOut">Se déconnecter</a></li>
                            </ul>
                        </li>
                    </ul>

                    
                    <% } else if(userRole.equals("5")) { %>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="ServletRedirect_operateur_sortie">Accueil</a>
<!--                            <a class="nav-link active" href="#section1">Gestion des citoyens</a>-->
                            <!--<a class="nav-link active" href="ServletRedirectPersonnelOnHomeVaccination">Vers sa vaccination</a>-->

                        </div>
                    </div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li class="nav-link dropdown "> <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Compte</a>

                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="ServletRedirectPersonnelOnHomeVaccination">Ma Vaccination</a></li>
                                <li><a class="dropdown-item" href="ServletLogOut">Se déconnecter</a></li>
                            </ul>
                        </li>
                    </ul>

                    <% } else if(userRole.equals("3")||(userRole.equals("2"))) { %>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="ServletRedirect_Medecin_Infirmier">Accueil</a>
<!--                            <a class="nav-link active" href="#section1">Gestion des citoyens</a>-->
                            <!--<a class="nav-link active" href="ServletRedirectPersonnelOnHomeVaccination">Vers sa vaccination</a>-->

                        </div>
                    </div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li class="nav-link dropdown "> <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Compte</a>

                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="ServletRedirectPersonnelOnHomeVaccination">Ma Vaccination</a></li>
                                <li><a class="dropdown-item" href="ServletLogOut">Se déconnecter</a></li>
                            </ul>
                        </li>
                    </ul>

                    <% }%>


                </div>
            </div>
        </nav>
    </body>