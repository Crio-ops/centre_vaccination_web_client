/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 // */


window.onload = function () {
    getListeDesTickets()
}

let ticketPatient = []

function getListeDesTickets() {
//    setInterval(function(){
    $.ajax({
        url: 'ServletListeTicket',
        type: 'POST',
        data: JSON.stringify({centre_attribue: sessionCentreAttribue, gestionnaire: sessionRole}),
        contentType: 'application/json',
        dataType: 'json',
        success: function (reponse)
        {
            ticketPatient = reponse
            ele = document.getElementById('listeTicket');
            ele.innerHTML = " ";
            afficherListePatients(reponse)
        },
        error: function ()
        {

        }
    });
//}, 2000); 
}

function afficherListePatients(ticketPatient) {

    ele = document.getElementById('listeTicket');

    for (let i = 0; i < ticketPatient.length; i++) {

        if (ticketPatient[i]['gestionnaire'] == null) {

            ticketPatient[i]['gestionnaire'] = '<button id="' + ticketPatient[i]['niss'] + '" onclick="confirmationPriseEnCharge(this.id)" data-bs-toggle="modal" href="#modalD1">prendre en charge</button>'

        }

        ele.innerHTML = ele.innerHTML +
                '<tr class="tr_table">\n\
                        <td class="td_table">' + ticketPatient[i]['id'] + '</td>\n\
                        <td class="td_table">' + ticketPatient[i]['nom'] + "  " + ticketPatient[i]['prenom'] + '</td>\n\
                        <td id="stateRdv" class="td_table">' + ticketPatient[i]['vaccin_attribue'] + '</td>\n\
                        <td id="stateRdv" class="td_table">' + ticketPatient[i]['numLot'] + '</td>\n\
                        <td id="stateRdv" class="td_table">' + ticketPatient[i]['heure_de_depart'] + '</td>\n\
                        <td class="td_table"><button class="button_form" id="' + ticketPatient[i]['niss'] + '" onclick="checkCloture(this.id)">Cloturer le ticket</button></td>\n\
                    <tr>';

    }

}

function checkCloture(id_patient) {

    checkHeureSortiePatient(id_patient)

}

function checkHeureSortiePatient(id_patient) {

    var patient = document.getElementById('citoyenInfoD1')
    var heureDeDepart

    for (let i = 0; i < ticketPatient.length; i++) {

        if (ticketPatient[i]['niss'] == id_patient) {

            heureDeDepart = ticketPatient[i]['heure_de_depart']
            patient = ticketPatient[i]['nom'] + " " + ticketPatient[i]['prenom']
        }
    }

    let now = moment().format('h:mm:ss a');

    var startTime = moment(heureDeDepart, 'h:mm:ss a');
    var endTime = moment(now, 'h:mm:ss a');
    var minutesDiff = endTime.diff(startTime, 'minutes');

    if (minutesDiff <= 0) {

//permet d'obtenur la valeur positive de la différence en minute
        var minutePositive = minutesDiff * -1;

        if (confirm("Le patient doit encore attendre pendant : " + minutePositive + " minutes" + "\nDésirez-vous cloturer son ticket ?") == true) {

            $('#modalD1').modal('show');

        } else {

        }

    } else {
        $('#modalD1').modal('show');
    }

    document.getElementById('citoyenInfoD1').innerHTML = 'Cloture du ticket de ' + patient

}

function checkForm() {
    var niss = document.getElementById('niss').value;
    var numLot = document.getElementById('numLot').value;
    var oui = document.getElementById("checktrue");
    var non = document.getElementById("checkfalse");

    if (niss === '' || numLot === '') {
        return document.getElementById("errorChamps").innerHTML = "Veuillez compléter les champs ci-dessous";
    }

    if (oui.checked === true && non.checked === true) {

        return document.getElementById("error").innerHTML = "Erreur, vous avez selectionner oui & non !";

    } else if (oui.checked === true) {

        var o = document.getElementById("checktrue").value;
        var comm = document.getElementById("textarea").value;
        console.log(comm)
        if (comm === '') {

            return  document.getElementById("commError").innerHTML = "Veuillez commenter les effets indésirables rencontrés.";
        } else {
            console.log('verif comm')
            validerSortiePatient()
        }


    } else if (oui.checked === false && non.checked === false) {

        return document.getElementById("error").innerHTML = "Veuillez spécifié si le patient a rencontré des effets indésirables.";

    } else {
        console.log('verif comm')
        validerSortiePatient()
    }
}

function validerSortiePatient() {
    console.log("validerSortiePatient")
    
    var niss = document.getElementById('niss').value;
    var numLot = document.getElementById('numLot').value;
    var oui = document.getElementById("checktrue").value;
    var non = document.getElementById("checkfalse").value;
    var comm = document.getElementById("textarea").value;
   
    var dataVaccination = JSON.stringify({
        centre_attribue: sessionCentreAttribue, 
        niss:niss,
        numLot:numLot,
    })
    
        $.ajax({
        url: 'ServletValiderLaVaccination',
        type: 'POST',
        data: dataVaccination,
        contentType: 'application/json',
        dataType: 'json',
        success: function (reponse)
        {
           
        },
        error: function ()
        {

        }
    });
    $('#modalD1').modal('hide');
    location.reload();
    window.location.href = "ServletRedirect_operateur_sortie";
}