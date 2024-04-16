/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function validationPointage() {
    
    $.ajax({
        url: 'Servlet_Pointage_Personnel',
        type: 'POST',
        data: '',
        contentType: 'application/json',
        dataType: 'json',
        success: function (reponse)
        {
            infoPointage = reponse
            afficherInfoPointage(infoPointage)
            
        },
        error: function ()
        {

        }
    });
}

let infoPointage;

function afficherInfoPointage(data) {

    ele = document.getElementById('info_pointage');

    ele.innerHTML = ele.innerHTML +
            "<p><h5>" + data['nom'] + " " + data['prenom'] + "</h5></p>\n\
                <p>pointage d'entrée du : " + data['date'] + " à " + data['heure'] + "</p>"
    
}

function redirect(){
    console.log(sessionRole)
    
    if(sessionRole == "2"){
        
        window.location.href = "ServletRedirect_Medecin_Infirmier"
        
    }else if(sessionRole == "3"){
        
        window.location.href = "ServletRedirect_Medecin_Infirmier"
        
     }else if(sessionRole == "5"){
        
        window.location.href = "ServletRedirect_operateur_sortie"
           
    }else if(sessionRole == "6"){
        
        window.location.href = "ServletRedirect_operateur_entree"
        
    }else{
        
        window.location.href = "ServletRedirect_AdminHome"
        
    }
    
}


function validationPointageSortie() {
    
    $.ajax({
        url: 'Servlet_Pointage_Sortie',
        type: 'POST',
        data: '',
        contentType: 'application/json',
        dataType: 'json',
        success: function (reponse)
        {
            infoPointageSortie = reponse
            afficherInfoPointageSortie(infoPointageSortie)
            
        },
        error: function ()
        {

        }
    });
}

let infoPointageSortie;

function afficherInfoPointageSortie(infoPointageSortie) {

    ele = document.getElementById('info_pointage_sortie');

    ele.innerHTML = ele.innerHTML +
            "<p><h5>" + infoPointageSortie['nom'] + " " + infoPointageSortie['prenom'] + "</h5></p>\n\
                <p>pointage de sortie du : " + infoPointageSortie['date'] + " à " + infoPointageSortie['heure'] + "</p>"
    
}