
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <title>CFWB - Vaccination</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="assets/css/header.css" />
        <link rel="stylesheet" href="assets/css/home.css" />
        <link rel=”stylesheet” href=”//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css”>
        

        <script src="assets/js/calendar.js"></script>
        <jsp:useBean id="login" class="bac.hermant.model.bean.Login" scope="session"></jsp:useBean>
        
        <script>

          
        </script>
	</head>
<body>

    <div id="datepicker-div">
        <div id="datepicker">
         
    <!--Affiche un datapicker et un boutton de validation-->
            <button onclick="ajaxShowDateForD2()">Prendre un rendez-vous</button>
            <input id="dateForD2" hidden> 
            
    </div>
    </div>
    
    <!-- Modal -->
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Choisissez une heure de rendez vous : </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
    <!--affichage de la liste des heures disponibles-->
            <ul id="sel" onchange="show(this)">
                  <li value=""></li>
            </ul> 
    <!--affiche l'heure du rendez-vous selectionné-->
             <p id="msg"></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            <button type="button" class="btn btn-primary" onclick="sendDataD2()" data-bs-dismiss="modal">Enregister</button>
          </div>
        </div>
      </div>
    </div>

<script>
//    fermeture du modal et reinitialisation des données injectées dans celui-ci
$(".modal").on("hidden.bs.modal", function(){
    location.reload()
});

                var sessionID = '<% out.print(session.getAttribute("niss"));%>'
                var sessionName = '<% out.print(session.getAttribute("nom"));%>' + " " + '<% out.print(session.getAttribute("prenom"));%>'
                var sessionCentreAttribue = '<% out.print(session.getAttribute("centre_attribue"));%>'
                var sessionRole = '<% out.print(session.getAttribute("role"));%>'


</script>
</html> 
 
