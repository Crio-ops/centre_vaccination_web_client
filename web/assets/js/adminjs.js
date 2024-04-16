/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function showPersonnelForm() {
    var form = document.getElementById("personnelFormContainer");
    if (form.style.display === "none") {
        form.style.display = "inline";
    } else {
        form.style.display = "none";
    }
}

window.onload = function () {

    getListeDesCentres()
    getListeDuPersonnel()
    getListeDesCitoyens()
}


function getListeDesCentres() {

    $.ajax({
        url: 'ServletAfficherLesCentres',
        type: 'POST',
        data: '',
        contentType: 'application/json',
        dataType: 'json',
        success: function (reponse)
        {
            console.log(reponse)
            afficherLesCentres(reponse);
        },
        error: function ()
        {

        }
    });
}

//afficher le select - option des centres pour la création d'employés d'un centre

function afficherLesCentres(listeCentreVaccination) {
    ele = document.getElementById('listeCentreVac');
    if (sessionRole == 1) {

        for (let i = 0; i < listeCentreVaccination.length; i++) {
            ele.innerHTML = ele.innerHTML +
                    '<option  value="' + listeCentreVaccination[i]['num_centre'] + '">' + listeCentreVaccination[i]['nomDuCentre'] + '</option>';
        }



    } else {
        for (let i = 0; i < listeCentreVaccination.length; i++) {
            if (listeCentreVaccination[i]['num_centre'] === sessionCentreAttribue)
                var centre = listeCentreVaccination[i]['nomDuCentre']
        }
        ele.innerHTML = ele.innerHTML +
                '<option  value="' + sessionCentreAttribue + '">' + centre + '</option>';
    }
}

function getListeDuPersonnel() {

    var data = JSON.stringify({
        id_Role: sessionRole,
        centre_attribue: sessionCentreAttribue
    })

    console.log(data)

    $.ajax({
        url: 'ServletGetListPersonnel',
        type: 'POST',
        data: data,
        contentType: 'application/json',
        dataType: 'json',
        success: function (reponse)
        {
            console.log(reponse)
            infoPersonnel = reponse
            personnel = document.getElementById('infoPersonnel');
            personnel.innerHTML = " ";
            afficherPersonnel(reponse);
        },
        error: function ()
        {

        }
    });
}

//table pour visualisation des patients du jour

let infoPersonnel



function afficherPersonnel(infoPersonnel) {
    personnel = document.getElementById('infoPersonnel');
    for (let i = 0; i < infoPersonnel.length; i++) {


        personnel.innerHTML = personnel.innerHTML +
                '<tr class="tr_table">\n\
                        <td class="td_table">' + infoPersonnel[i]['nom'] + '</td>\n\
                        <td class="td_table">' + infoPersonnel[i]['prenom'] + ' </td>\n\
                        <td class="td_table">' + infoPersonnel[i]['role'] + '</td>\n\
                        <td class="td_table">' + infoPersonnel[i]['niss'] + '</td>\n\
                        <td class="td_table">' + infoPersonnel[i]['centre_attribue'] + '</td>\n\
                        <td class="td_table"><button type="button" class="button_form" id="' + infoPersonnel[i]['niss'] + '" onclick="deletePersonnel(this.id)">supprimer</button></td>\n\
                    <tr>';
    }
}


function deletePersonnel(id) {

    let nom;
    for (i = 0; i < infoPersonnel.length; i++) {
        if (infoPersonnel[i]['niss'] == id) {
            var dataToSend = JSON.stringify({niss: infoPersonnel[i]['niss'], nom: infoPersonnel[i]['nom']})
            nom = infoPersonnel[i]['prenom'] + " " + infoPersonnel[i]['nom'] + ' - ' + infoPersonnel[i]['role']
        }
    }

    if (confirm('Etes-vous sûr de vouloir supprimer ' + nom + ' ?') == true) {


        $.ajax({
            url: 'ServletDeletePersonnel',
            type: 'POST',
            data: dataToSend,
            contentType: 'application/json',
            dataType: 'json',
            success: function (json)
            {
                success = document.getElementById('success');
                success.innerHTML = json
                getListeDuPersonnel()
            },
            error: function () {

            }

        });
    } else {

    }
}


function getListeDesCitoyens() {


    var data = JSON.stringify({
        id_Role: sessionRole,
        centre_attribue: sessionCentreAttribue
    })

    console.log(data)

    $.ajax({
        url: 'ServletGetListCitoyens',
        type: 'POST',
        data: data,
        contentType: 'application/json',
        dataType: 'json',
        success: function (reponse)
        {
            console.log(reponse)
            infoCitoyens = reponse
            citoyens = document.getElementById('infoCitoyens');
            citoyens.innerHTML = " ";
            afficherCitoyens(reponse);
        },
        error: function ()
        {

        }
    });
}

//table pour visualisation des patients du jour

let infoCitoyens



function afficherCitoyens(infoCitoyens) {
    citoyens = document.getElementById('infoCitoyens');
    for (let i = 0; i < infoCitoyens.length; i++) {
        if (infoCitoyens[i]['vaccin_attribue'] == null) {
            infoCitoyens[i]['vaccin_attribue'] = 'non attribue'
        }
        if (infoCitoyens[i]['etatDeVaccination'] == null || infoCitoyens[i]['etatDeVaccination'] == "0") {
            infoCitoyens[i]['etatDeVaccination'] = '<img id="tab-Cal-Icon" src="assets/image/injection.png">'
        }

        if (infoCitoyens[i]['etatDeVaccination'] == "1") {
            infoCitoyens[i]['etatDeVaccination'] = '<img id="tab-Cal-Icon" src="assets/image/syringe.png">'
        }

        if (infoCitoyens[i]['etatDeVaccination'] == "2") {
            infoCitoyens[i]['etatDeVaccination'] = '<img id="tab-Cal-Icon" src="assets/image/syringe.png"><img id="tab-Cal-Icon" src="assets/image/syringe.png">'
        }

        citoyens.innerHTML = citoyens.innerHTML +
                '<tr class="tr_table">\n\
                        <td class="td_table">' + infoCitoyens[i]['niss'] + '</td>\n\
                        <td class="td_table">' + infoCitoyens[i]['nom'] + '</td>\n\
                        <td class="td_table">' + infoCitoyens[i]['prenom'] + ' </td>\n\
                        <td class="td_table">' + infoCitoyens[i]['vaccin_attribue'] + '</td>\n\
                        <td class="td_table">' + infoCitoyens[i]['etatDeVaccination'] + '</td>\n\
                    <tr>';
    }
}

function showListeHorairePointageEntree() {
    var type = document.getElementById('select')
    var value = type.options[type.selectedIndex].value;
    var date = document.getElementById('date').value;
    var dateFormat = moment(date, 'YYYY-MM-DD').locale('fr').format('DD-MM-YYYY');
    console.log(value)

    $.ajax({
        url: 'ServletGetListePointage',
        type: 'POST',
        data: JSON.stringify({centre_attribue: sessionCentreAttribue, date: dateFormat, type: value}),
        contentType: 'application/json',
        dataType: 'json',
        success: function (horairePointage)
        {
            if (horairePointage[0]['nom'] == null) {
                alert('Aucuns pointages disponibles à cette date')
            } else {

                horaire = document.getElementById('horairePointage');
                horaire.innerHTML = " ";
                afficherHorairePointageEntre(horairePointage)
            }
        },
        error: function ()
        {

        }
    });

}

function afficherHorairePointageEntre(horairePointage) {
    horaire = document.getElementById('horairePointage');
    for (let i = 0; i < horairePointage.length; i++) {

        horaire.innerHTML = horaire.innerHTML +
                '<tr class="tr_table">\n\
                        <td class="td_table">' + horairePointage[i]['niss'] + '</td>\n\
                        <td class="td_table">' + horairePointage[i]['nom'] + '</td>\n\
                        <td class="td_table">' + horairePointage[i]['prenom'] + ' </td>\n\
                        <td class="td_table">' + horairePointage[i]['date'] + '</td>\n\
                        <td class="td_table">' + horairePointage[i]['heure'] + '</td>\n\
                    <tr>';
    }
}


//création d'horaire - PAS TERMINE


//function afficherPersonnelTableauHoraire() {
//    lundi_med = document.getElementById('lundi_med');
//    lundi_inf = document.getElementById('lundi_inf');
//    lundi_ope = document.getElementById('lundi_ope');
//    lundi_ops = document.getElementById('lundi_ops');
//    lundi_grt = document.getElementById('lundi_grt');
//   
//    mardi_med = document.getElementById('mardi_med');
//    mardi_inf = document.getElementById('mardi_inf');
//    mardi_ope = document.getElementById('mardi_ope');
//    mardi_ops = document.getElementById('mardi_ops');
//    mardi_grt = document.getElementById('mardi_grt');
//    
//    mer_med = document.getElementById('mer_med');
//    mer_inf = document.getElementById('mer_inf');
//    mer_ope = document.getElementById('mer_ope');
//    mer_ops = document.getElementById('mer_ops');
//    mer_grt = document.getElementById('mer_grt');
//    
//    jeudi_med = document.getElementById('jeudi_med');
//    jeudi_inf = document.getElementById('jeudi_inf');
//    jeudi_ope = document.getElementById('jeudi_ope');
//    jeudi_ops = document.getElementById('jeudi_ops');
//    jeudi_grt = document.getElementById('jeudi_grt');
//    
//    vdd_med = document.getElementById('vdd_med');
//    vdd_inf = document.getElementById('vdd_inf');
//    vdd_ope = document.getElementById('vdd_ope');
//    vdd_ops = document.getElementById('vdd_ops');
//    vdd_grt = document.getElementById('vdd_grt');
//    
//    sam_med = document.getElementById('sam_med');
//    sam_inf = document.getElementById('sam_inf');
//    sam_ope = document.getElementById('sam_ope');
//    sam_ops = document.getElementById('sam_ops');
//    sam_grt = document.getElementById('sam_grt');
//    
//       
//
//    
//   
//
//        if (infoPersonnel[i]['role'] == 'Médecin') {
//
//            console.log(infoPersonnel[i]['prenom'])
//            lundi_med.innerHTML = lundi_med.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            mardi_med.innerHTML = mardi_med.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            mer_med.innerHTML = mer_med.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            jeudi_med.innerHTML = jeudi_med.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            vdd_med.innerHTML = vdd_med.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            sam_med.innerHTML = sam_med.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//        }
//
//        if (infoPersonnel[i]['role'] == 'Infirmier') {
//
//            console.log(infoPersonnel[i]['prenom'])
//            lundi_inf.innerHTML = lundi_inf.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            mardi_inf.innerHTML = mardi_inf.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            mer_inf.innerHTML = mer_inf.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            jeudi_inf.innerHTML = jeudi_inf.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            vdd_inf.innerHTML = vdd_inf.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            sam_inf.innerHTML = sam_inf.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//        }
//
//        if (infoPersonnel[i]['role'] == "Opérateur d'entrée"){
//
//            console.log(infoPersonnel[i]['prenom'])
//            lundi_ope.innerHTML = lundi_ope.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            mardi_ope.innerHTML = mardi_ope.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            mer_ope.innerHTML = mer_ope.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            jeudi_ope.innerHTML = jeudi_ope.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            vdd_ope.innerHTML = vdd_ope.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            sam_ope.innerHTML = sam_ope.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//        }
//
//        if (infoPersonnel[i]['role'] == 'Opérateur de sortie') {
//
//            console.log(infoPersonnel[i]['prenom'])
//            lundi_ops.innerHTML = lundi_ops.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            mardi_ops.innerHTML = mardi_ops.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            mer_ops.innerHTML = mer_ops.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            jeudi_ops.innerHTML = jeudi_ops.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            vdd_ops.innerHTML = vdd_ops.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            sam_ops.innerHTML = sam_ops.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//        }
//
//        if (infoPersonnel[i]['role'] == 'Gérant') {
//
//            console.log(infoPersonnel[i]['Gérant'])
//            lundi_grt.innerHTML = lundi_grt.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            mardi_grt.innerHTML = mardi_grt.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            mer_grt.innerHTML = mer_grt.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            jeudi_grt.innerHTML = jeudi_grt.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            vdd_grt.innerHTML = vdd_grt.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//            sam_grt.innerHTML = sam_grt.innerHTML +
//                    '<option  value="' + infoPersonnel[i]['niss'] + '">' + infoPersonnel[i]['prenom'] + ' ' + infoPersonnel[i]['nom'] + '</option>'
//        }
//
//    $("#creation_horaire_inf> tbody").append("<tr><td>row content</td></tr>");
//    
//
//    }

//$(document).ready(function () {
//    var rowIdx = 0;
//
//    // jQuery button click event to add a row
//    $('#addBtn').on('click', function () {
//
//        // Adding a row inside the tbody.
//        $('#tbody').append(`<tr id="R${++rowIdx}">
//                        <td>
//                        <p>Row ${rowIdx}</p>
//                        </td>
//                         <td >
//                           <button class="btn btn-danger remove"
//                             type="button">Remove</button>
//                           </td>
//                         </tr>`);
//    });
//});


//$(document).ready(function () {
//    var rowIdx = 0;
//
//    // jQuery button click event to add a row
//    $('#addBtn').on('click', function () {
//
//        // Adding a row inside the tbody.
//        $('#tbody').append(
//                function() {
//             for (i = 0; i < infoPersonnel.length; i++) {
//                 if(infoPersonnel[i]['role'] == 'Infirmier') {
//                `<tr id="R${++rowIdx}">
//                        <td>
//                        <p>Row ${rowIdx}</p>
//                        </td>
//                         <td >
//                           <button class="btn btn-danger remove"
//                             type="button">Remove</button>
//                           </td>
//                         </tr>`
//                            }
//                        }
//             });
//                
//                
//                
//                
//               
//    });
//});