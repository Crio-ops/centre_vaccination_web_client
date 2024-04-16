

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <script src="assets/js/vue_vaccination.js"></script>
        
        <link rel="stylesheet" href="assets/css/global.css">
        <link rel="stylesheet" href="assets/css/header.css">
        <link rel="stylesheet" href="assets/css/table.css">
        <title>Ma Vaccination</title>
    </head>
    <body>


        <div id="vue_vaccination">
            
            <p>Ma vaccination :</p>
            
            <table>
                            <thead>
                                <tr>
                                    <th class="th_table">Nom</th>
                                    <th class="th_table">Prénom</th>
                                    <th class="th_table">Vaccin reçu</th>
                                    <th class="th_table">Première dose reçue le</th> 
                                    <th class="th_table">Deuxième dose reçue le</th> 
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="td_table"><p id="nom"></p></td>
                                    <td class="td_table"><p id="prenom"></p></td>
                                    <td class="td_table"><p id="nomVaccin"></p></td>
                                    <td class="td_table"><p id="dateRdv_d1"></p></td>
                                    <td class="td_table"><p id="dateRdv_d2"></p></td>
                                </tr>
                                <tr>
                                    <td><p></p></td>
                                    <td><p></p></td>
                                    <td><p></p></td>
                                </tr>

                            </tbody>
                        </table>
             <p>Besoin d'une attestation papier ? <a href="ServletDownloadQRCode">Cliquer ici !</a></p> 
        </div>
        
       

            
    </body>
</html>