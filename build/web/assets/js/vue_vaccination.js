/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function () {
   validationDuCentre()
}

function validationDuCentre() {


    $.ajax({
        url: 'ServletVueVaccinationPatient',
        type: 'POST',
        data: '',
        contentType: 'application/json',
        dataType: 'json',
        success: function (jsonResp)
        {
            afficherVaccinationPatient(jsonResp);
        },
        error: function () {

        }
    });
}

function afficherVaccinationPatient(jsonResp){
    var nom = document.getElementById('nom')
    var prenom = document.getElementById('prenom')
    var nomVaccin = document.getElementById('nomVaccin')
    var dateRdv_d1 = document.getElementById('dateRdv_d1')
    var dateRdv_d2 = document.getElementById('dateRdv_d2')
    
    nom.innerHTML = '' + jsonResp['nom'] + ''
    prenom.innerHTML = '' + jsonResp['prenom'] + ''
    nomVaccin.innerHTML = '' + jsonResp['nomVaccin'] + ''
    dateRdv_d1.innerHTML = '' + jsonResp['dateRdv_d1'] + ''
    
    if(jsonResp['nomVaccin'] == 'Johnson_Johnson'){
        
        dateRdv_d2.innerHTML = 'Non nécessaire pour ce vaccin'
        
    }else{
        dateRdv_d2.innerHTML = '' + jsonResp['dateRdv_d2'] + ''
    }
    
    
    
}