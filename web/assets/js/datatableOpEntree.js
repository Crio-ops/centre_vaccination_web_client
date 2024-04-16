/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Affichage et modification des citoyens dans la jsp operateurEntre_Home

let data;
let citoyenSelectionne;

$(document).ready(function () {
    var table = $('#tabCitoyens').DataTable({
//        responsive:true,
        select: false,
        paging: false,
        info: false,
        ajax: {
            url: 'ServletGetListCitoyens',
            dataSrc: '',
        },
        
        columns: [
            {data: 'niss'},
            {data: 'prenom'},
            {data: 'nom'},
            {data: 'vaccin_attribue', "defaultContent": '<img id="tabIcon" src="assets/image/redCross.png" alt="alt"/>'},
            {data: 'dateRdv_Dose1', "defaultContent": '<img id="tabIcon" src="assets/image/redCross.png" alt="alt"/>'},
            {data: 'heureRdv_Dose1', "defaultContent": '<img id="tabIcon" src="assets/image/redCross.png" alt="alt"/>'},
            {data: 'dateRdv_Dose2', "defaultContent": '<img id="tabIcon" src="assets/image/redCross.png" alt="alt"/>'},
            {data: 'heureRdv_Dose2', "defaultContent": '<img id="tabIcon" src="assets/image/redCross.png" alt="alt"/>'},
            {data: 'etatDeVaccination', "defaultContent": '<img id="tab-Cal-Icon" src="assets/image/injection.png" alt="alt"/>'},
            {data: 'Mise à jour', "defaultContent": '<a type="button" data-bs-toggle="modal" href="#modalD1"><img id="tab-Cal-Icon" src="assets/image/number-1.png" alt="alt"/></a>|'+
                                                    '<a type="button" data-bs-toggle="modal" href="#modalD2"><img id="tab-Cal-Icon" src="assets/image/number-2.png" alt="alt"/></a>'},
        ],
    });
 
    $('#tabCitoyens tbody ').on('click', 'a', function () {
        citoyenSelectionne = table.row($(this).parents('tr')).data();
        console.log(data)
        let citoyenD1 = document.getElementById('citoyenInfoD1');
        let citoyenD2 = document.getElementById('citoyenInfoD2');
        let rdv1 = document.getElementById('rdv1');
        let rdv2 = document.getElementById('rdv2');
        rdv1.innerHTML = 'Rendez-vous pris le : <b>' + citoyenSelectionne.dateRdv_Dose1 + " à " + citoyenSelectionne.heureRdv_Dose1 + '</b>';
        citoyenD1.innerHTML = 'Valider le rendez-vous de <b>' + citoyenSelectionne.nom + " " + citoyenSelectionne.prenom + '</b>';
        rdv2.innerHTML = 'Rendez-vous pris le : <b>' + citoyenSelectionne.dateRdv_Dose2 + " à " + citoyenSelectionne.heureRdv_Dose2 + '</b>';
        citoyenD2.innerHTML = 'Valider le rendez-vous de <b>' + citoyenSelectionne.nom + " " + citoyenSelectionne.prenom + '</b>';

//        $('#d1').attr("value", data.dateRdv_Dose1 + " à " + data.heureRdv_Dose1);
//        $('#d2').attr("value", data.dateRdv_Dose2 + " à " + data.heureRdv_Dose2);

    });
});

$(document).ready(function () {
    $('#sendChanged1').click(function () {

        console.log(citoyenSelectionne)
        $.ajax({
            url: 'ServletConfirmationArriveRdvPatientD1',
            type: 'POST',
            data: JSON.stringify(citoyenSelectionne),
            contentType: 'application/json',
            dataType: 'json',
            success: function (jsonResp)
            {
                alert();
            },
            error: function () {
                console.log('error')
            }
        });
    });
}); 

