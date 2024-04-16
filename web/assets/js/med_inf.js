let ticketPatient = []

window.onload = function () {
    getListeDesTickets()
    getLeTicketDuPatient()
}


function getListeDesTickets() {
    setInterval(function(){
    $.ajax({
        url: 'ServletListeTicket',
        type: 'POST',
        data: JSON.stringify({centre_attribue: sessionCentreAttribue, gestionnaire : sessionRole}),
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
}, 2000); 
}

function getLeTicketDuPatient() {
    setInterval(function(){
    $.ajax({
        url: 'ServletAfficherTicketPatient',
        type: 'POST',
        data: JSON.stringify({centre_attribue: sessionCentreAttribue, gestionnaire: sessionID}),
        contentType: 'application/json',
        dataType: 'json',
        success: function (reponse)
        {
            ele = document.getElementById('ticket');
            ele.innerHTML = " ";
            ticket = reponse
            afficherPatientPrisEnCharge(reponse)

        },
        error: function ()
        {

        }
    });
}, 2000);
}


function afficherListePatients(ticketPatient) {

    ele = document.getElementById('listeTicket');

    for (let i = 0; i < ticketPatient.length; i++) {

        if (ticketPatient[i]['gestionnaire'] == null) {

            ticketPatient[i]['gestionnaire'] = '<button id="' + ticketPatient[i]['niss'] + '" class="button_form" onclick="confirmationPriseEnCharge(this.id)" data-bs-toggle="modal" href="#modalD1">prendre en charge</button>'

        } 

        ele.innerHTML = ele.innerHTML +
                '<tr class="tr_table">\n\
                        <td class="td_table">' + ticketPatient[i]['id'] + '</td>\n\
                        <td class="td_table">' + ticketPatient[i]['nom'] + "  " + ticketPatient[i]['prenom'] + '</td>\n\
                        <td id="stateRdv" class="td_table">' + ticketPatient[i]['vaccin_attribue'] + '</td>\n\
                        <td class="td_table">' + ticketPatient[i]['gestionnaire'] + '</td>\n\
                    <tr>';

    }

}




let ticket = []
let nissPatientPrisEnCharge;

function confirmationPriseEnCharge(niss) {
    var nom, prenom
    nissPatientPrisEnCharge = niss
    rdv.innerHTML = " "

    for (let i = 0; i < ticketPatient.length; i++) {
        if (ticketPatient[i]['niss'] == niss) { 
            nom = ticketPatient[i]['nom']
            prenom = ticketPatient[i]['prenom']
        } else {

        }

    }

    rdv = document.getElementById('rdv')
    rdv.innerHTML = rdv.innerHTML + '<b>' + nom + " " + prenom + '</b>'
}


function afficherInfoPatient() {

            nom = ticket['nom']
            document.getElementById('nom').value = nom

            prenom = ticket['prenom']
            document.getElementById('prenom').value = prenom

            niss = ticket['niss']
            document.getElementById('niss').value = niss

            etatDeVaccination = ticket['etatDeVaccination']
            document.getElementById('etatDeVaccination').value = etatDeVaccination

            vaccin_attribue = ticket['vaccin_attribue']
            document.getElementById('vaccin_attribue').value = vaccin_attribue




}

function afficherPatientPrisEnCharge(ticket) {

    ele = document.getElementById('ticket');
    console.log(ticket)
     if(ticket['niss'] != null ){
        
        ticket['gestionnaire'] = '<button class="button_form" id="' + ticket['niss'] + '" onclick="afficherInfoPatient(this.id)" data-bs-toggle="modal" href="#modalD2">Cloturer la prise en charge</button>'


            ele.innerHTML = ele.innerHTML +
                    '<tr class="tr_table">\n\
                        <td class="td_table">' + ticket['id'] + '</td>\n\
                        <td class="td_table">' + ticket['nom'] + "  " + ticket['prenom'] + '</td>\n\
                        <td id="stateRdv" class="td_table">' + ticket['vaccin_attribue'] + '</td>\n\
                        <td class="td_table">' + ticket['gestionnaire'] + '</td>\n\
                    <tr>';
        
     }else{

            
        }
}

function validerLaPriseEnCharge() {

    console.log(sessionID)

    $.ajax({
        url: 'ServletValiderLaPriseEnCharge',
        type: 'POST',
        data: JSON.stringify({
            niss: nissPatientPrisEnCharge,
            gestionnaire: sessionID
        }),

        contentType: 'application/json',
        dataType: 'json',
        success: function (reponse)
        {

        },
        error: function ()
        {

        }
    });
    window.location.href = "ServletRedirect_Medecin_Infirmier";
}

function cloturerLeTicket() {

    var niss = document.getElementById('niss').value
    var numLot = document.getElementById('numLot').value
    console.log(sessionID)

    $.ajax({
        url: 'ServletCloturerLeTicket',
        type: 'POST',
        data: JSON.stringify({
            niss: niss,
            numLot: numLot,
            gestionnaire: sessionID
        }),

        contentType: 'application/json',
        dataType: 'json',
        success: function (reponse)
        {

        },
        error: function ()
        {

        }
    });
}

