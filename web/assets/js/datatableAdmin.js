/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Affichage et modification des citoyens dans la jsp ADMIN

let data;

$(document).ready(function () {
    var table = $('#tabCitoyens').DataTable({
        select: true,
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
            {data: 'vaccin_attribue', "defaultContent": " / "},
            {data: 'dateRdv_Dose1', "defaultContent": " / "},
            {data: 'heureRdv_Dose1', "defaultContent": " / "},
            {data: 'dateRdv_Dose2', "defaultContent": " / "},
            {data: 'heureRdv_Dose2', "defaultContent": " / "},
            {data: 'etatDeVaccination', "defaultContent": "Non Vacciné"},
            {data: 'Mise à jour', "defaultContent": '<button type="button" id="editTabCitoyens">click</buttonn>'},
        ],
    });

    $('#tabCitoyens tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });

    $('#editTabCitoyens').click(function () {
        data = table.row('.selected').data();
        console.log(data)
        $('#niss').attr("value", data.enss);
        $('#nom').attr("value", data.nom);
        $('#prenom').attr("value", data.prenom);
        $('#vaccin').attr("value", data.vaccin_attribue);
        $('#vaccination').attr("value", data.etatDeVaccination);
    });
});

$(document).ready(function () {
    $('#sendChange').click(function () {
        var niss = $('#niss').val();
        var nom = $('#nom').val();
        var prenom = $('#prenom').val();
        var vaccination = $('#vaccination').val();

        let citoyen = JSON.stringify(
                {
                    niss: niss,
                    nom: nom,
                    prenom: prenom,
                    etatDeVaccination: vaccination
                })


        console.log(citoyen)
        $.ajax({
            url: 'ServletConfirmationDeVaccination',
            type: 'POST',
            data: citoyen,
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


//Affichage et modification du personnel dans la jsp ADMIN

$(document).ready(function () {
    var table = $('#tabEmploye').DataTable({
        select: false,
        paging: false,
        info: false,
        searching: false,
        ajax: {
            url: 'ServletGetListPersonnel',
            dataSrc: '',
        },
        columns: [           
            {data: 'nom'},
            {data: 'prenom'},
            {data: 'role'},
            {data: 'niss'},
            {data: 'centre_attribue'},
            {data: 'Editer', "defaultContent": '<button id="buttonPersonnel">-</buttonn>'},
            
        ],
    });

    $('#tabEmploye tbody').on('click', 'button', function () {
        var data = table.row($(this).parents('tr')).data();
    //        alert(data['nom'] + data['enss']);
        let json = JSON.stringify(data);
        alert(json);

        $.ajax({
            url: 'ServletDeletePersonnel',
            type: 'POST',
            data: json,
            contentType: 'application/json',
            dataType: 'json',
            success: function (jsonResp)
            {
                alert(jsonResp);
            },
            error: function () {
                console.log('error')
            }
            
        });
});

});
