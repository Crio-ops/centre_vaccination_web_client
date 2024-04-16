var dateFormat

function showHeureSelection() {

    let selectRdv = document.getElementById('selectRdv').value;
    console.log(selectRdv);
    if (selectRdv == 2) {

        for (let i = 0; i < 19; i++) {
            // 
            ele.innerHTML = ele.innerHTML +
                    '<button id="tab" onclick="show(' + dataRdv[i]['ID'] + ')" ><li value="' + dataRdv[i]['ID']
                    + '">' + dataRdv[i]['heure'] + '</li></button>';
        }
    }
}


function getRdvPatientViaEnss() {

    niss = document.getElementById("niss").value;


    var rendez_vous = []
    rendez_vous = JSON.stringify({niss: niss})

    $.ajax({
        url: 'ServletGetRdvPatientViaEnss',
        type: 'POST',
        data: rendez_vous,
        contentType: 'application/json',
        dataType: 'json',
        success: function (reponse)
        {
            console.log(reponse)
            infoPatient = reponse
            ele = document.getElementById('sel');
            ele.innerHTML = " ";
            afficherPatient(reponse);
        },
        error: function ()
        {

        }
    });
}

//table pour visualisation des patients du jour

let infoPatient



function afficherPatient(infoPatient) {
    console.log(infoPatient)
    if (infoPatient['nom'] == null) {
        ele = document.getElementById('errorText');
        ele.innerHTML = ele.innerHTML +
                "<p>Le patient n'existe pas</p>"
    } else if (infoPatient['dateRdv_Dose2'] == null) {

        ele = document.getElementById('sel');

        ele.innerHTML = ele.innerHTML +
                '<tr class="tr_table">\n\
                        <td class="td_table">' + infoPatient['niss'] + '</td>\n\
                        <td class="td_table">' + infoPatient['dateRdv_Dose1'] + " à " + infoPatient['heureRdv_Dose1'] + '<a type="button" id="rdv1" onclick="confirmRdv(this.id)" data-bs-toggle="modal" href="#modalD1"><img id="tab-Cal-Icon" src="assets/image/number-1.png" alt="alt"/></a></td>\n\
                        <td id="stateRdv" class="td_table">' + infoPatient['presenceRdv1'] + '</td>\n\
                        <td class="td_table"> / </td>\n\
                        <td id="stateRdv" class="td_table">' + infoPatient['presenceRdv2'] + '</td>\n\
                        <td id="centre" class="td_table">' + infoPatient['centre_attribue'] + '</td>\n\
                    <tr>';
    } else {


        ele = document.getElementById('sel');

        ele.innerHTML = ele.innerHTML +
                '<tr class="tr_table">\n\
                        <td class="td_table">' + infoPatient['niss'] + '</td>\n\
                        <td class="td_table">' + infoPatient['dateRdv_Dose1'] + " à " + infoPatient['heureRdv_Dose1'] + '<a type="button" id="rdv1" onclick="confirmRdv(this.id)" data-bs-toggle="modal" href="#modalD1"><img id="tab-Cal-Icon" src="assets/image/number-1.png" alt="alt"/></a></td>\n\
                        <td id="stateRdv" class="td_table">' + infoPatient['presenceRdv1'] + '</td>\n\
                        <td class="td_table">' + infoPatient['dateRdv_Dose2'] + " à " + infoPatient['heureRdv_Dose2'] + '<a type="button" id="rdv2" onclick="confirmRdv(this.id)" data-bs-toggle="modal" href="#modalD1"><img id="tab-Cal-Icon" src="assets/image/number-2.png" alt="alt"/></a></td>\n\
                        <td id="stateRdv" class="td_table">' + infoPatient['presenceRdv2'] + '</td>\n\
                        <td id="centre" class="td_table">' + infoPatient['centre_attribue'] + '</td>\n\
                    <tr>';
    }

}


function confirmRdv(clicked_Id) {
    rdv = document.getElementById('rdv')
    rdv.innerHTML = " ";
    if (clicked_Id == 'rdv1') {

        rdv.innerHTML = rdv.innerHTML + '<label id="labelEnssPatient"> Valider le rendez-vous du ' + infoPatient['dateRdv_Dose1'] + " à " + infoPatient['heureRdv_Dose1'] + '</label></br></br>\n\
                                            <p><b>Oui  </b><input type="checkbox" id="check" value="d1"></input>'

    } else if (clicked_Id == 'rdv2') {
        rdv.innerHTML = rdv.innerHTML + '<label id="labelEnssPatient">' + infoPatient['niss'] + '</label>\n\
                                            <input type="checkbox" id="check" value="d2"> Valider le rendre vous du' + infoPatient['dateRdv_Dose2'] + " à " + infoPatient['heureRdv_Dose2'] + '</input>'

    } else {

        alert('Il y a une erreurdans votre demande, veuillez recommencer')

    }

}

//Valider la venue du patient vaccination

function ValiderPresenceRdvPatient() {
    
    var id = document.getElementById('check').value
    console.log(id)
    if (!document.getElementById('check').checked) {
        alert('error')
        return false;
    } else {
        if (id == 'd1') {

            console.log('d1');
            var centre = document.getElementById('centre').innerHTML
            var enss = document.getElementById('labelEnssPatient').innerHTML
            var rendez_vous = JSON.stringify({niss: niss, presenceRdv1: 'present', centre_attribue: centre})
            console.log(rendez_vous)
            $.ajax({
                url: 'ServletValiderPresencePatient',
                type: 'POST',
                data: rendez_vous,
                contentType: 'application/json',
                dataType: 'json',
                success: function (reponse)
                {
                    
                },
                error: function (jsonResp)
                {

                }
            });
        } else if (id == 'd2') {

            console.log('d2');
            var centre = document.getElementById('centre').innerHTML
            var enss = document.getElementById('labelEnssPatient').innerHTML
            var rendez_vous = JSON.stringify({niss: niss, presenceRdv2: 'present', centre_attribue: centre})
            console.log(rendez_vous)
            $.ajax({
                url: 'ServletValiderPresencePatient',
                type: 'POST',
                data: rendez_vous,
                contentType: 'application/json',
                dataType: 'json',
                success: function (reponse)
                {
                  
                },
                error: function (jsonResp)
                {

                }
            });
        }
    }
    window.location.href = "ServletRedirect_operateur_entree"

}
;

//Valider la sortie du patient après vaccination

function ValiderSortieRdvPatient() {

    var id = document.getElementById('check').value
    console.log(id)
    if (!document.getElementById('check').checked) {
        alert('error')
        return false;
    } else {
        if (id == 'd1') {

            console.log('d1');
            var centre = document.getElementById('centre').innerHTML
            var enss = document.getElementById('labelEnssPatient').innerHTML
            var rendez_vous = JSON.stringify({enss: enss, presenceRdv1: 'accompli'})
            console.log(rendez_vous)
            $.ajax({
                url: 'ServletValiderSortiePatient',
                type: 'POST',
                data: rendez_vous,
                contentType: 'application/json',
                dataType: 'json',
                success: function (reponse)
                {

                },
                error: function (jsonResp)
                {

                }
            });
        } else if (id == 'd2') {

            console.log('d2');
            var centre = document.getElementById('centre').innerHTML
            var enss = document.getElementById('labelEnssPatient').innerHTML
            var rendez_vous = JSON.stringify({enss: enss, presenceRdv2: 'accompli'})
            console.log(rendez_vous)
            $.ajax({
                url: 'ServletValiderSortiePatient',
                type: 'POST',
                data: rendez_vous,
                contentType: 'application/json',
                dataType: 'json',
                success: function (reponse)
                {

                },
                error: function (jsonResp)
                {

                }
            });
        }
    }

}
;


function validerVaccinAdministre() {

    var id = document.getElementById('check').value
    console.log(id)
    if (!document.getElementById('check').checked) {
        alert('error')
        return false;
    } else {
        if (id == 'd1') {

            console.log('d1');
            var centre = document.getElementById('centre').innerHTML
            var enss = document.getElementById('labelEnssPatient').innerHTML
            var rendez_vous = JSON.stringify({enss: enss, presenceRdv1: 'accompli'})
            console.log(rendez_vous)
            $.ajax({
                url: 'ServletValiderSortiePatient',
                type: 'POST',
                data: rendez_vous,
                contentType: 'application/json',
                dataType: 'json',
                success: function (reponse)
                {

                },
                error: function (jsonResp)
                {

                }
            });
        } else if (id == 'd2') {

            console.log('d2');
            var centre = document.getElementById('centre').innerHTML
            var enss = document.getElementById('labelEnssPatient').innerHTML
            var rendez_vous = JSON.stringify({enss: enss, presenceRdv2: 'accompli'})
            console.log(rendez_vous)
            $.ajax({
                url: 'ServletValiderSortiePatient',
                type: 'POST',
                data: rendez_vous,
                contentType: 'application/json',
                dataType: 'json',
                success: function (reponse)
                {

                },
                error: function (jsonResp)
                {

                }
            });
        }
    }

}
;
function checkStateRdv() {

}



