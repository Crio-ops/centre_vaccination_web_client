<%-- 
    Document   : Servlet_Pointage_Personnel
    Created on : 4 juin 2023, 19:10:27
    Author     : kevin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js">
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="assets/js/pointage.js"></script>  
        <title>JSP Page</title>
    </head>
    <body class="body">
        <div id="simpleModal" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                   <button type="button" class="close" data-dismiss="modal" onclick="redirect()" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        
                            <p id="info_pointage"><p>
                       
                    </div>
                    <div class="modal-footer">
                        <button type="button" onclick="redirect()" class="btn btn-primary" data-dismiss="modal">Valider</button>
                    </div>
                </div>
            </div>
        </div>
        <script>
            
             var sessionRole = '<% out.print(session.getAttribute("role"));%>'
            
            window.onload = function () {
                OpenBootstrapPopup()
                validationPointage();
            }
            
            function OpenBootstrapPopup() {
                $("#simpleModal").modal('show');
            }
            
            
        </script>
    </body>

</html>
