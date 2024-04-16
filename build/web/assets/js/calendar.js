
let jsonResp;
let ele;
let dataRdv;
let date;

function getRdvDisponible(dataRdv, json) {
    let i;
    for (i = 0; i < dataRdv.length; i++) {
        const myData = JSON.parse(JSON.stringify(dataRdv[i]))
        const heureData = myData.heure
        const nbrLigneData = myData.nbrLigne
        for (let j = 0; j < json.length; j++) {
            const myJson = JSON.parse(JSON.stringify(json[j]))
            const heureJson = myJson.heure
            const nbrLigneJson = myJson.nbrLigne
            if (heureData == heureJson) {
                console.log(heureData)
                dataRdv[i]['nbrLigne'] = 1
            }
        }

    }
}


function validationVaccination() {
    date = document.getElementById("date").value;
    console.log(date)
    $.ajax({
        url: 'ServletGetdateForRdv',
        type: 'POST',
        data: JSON.stringify({date: date, centre_attribue:sessionCentreAttribue}),
        contentType: 'application/json',
        dataType: 'json',
        success: function (jsonResp)
        {
            console.log(jsonResp)


            dataRdv = [
                {"ID": "0", "heure": "10:00", "nbrLigne": "0"},
                {"ID": "1", "heure": "10:05", "nbrLigne": "0"},
                {"ID": "2", "heure": "10:10", "nbrLigne": "0"},
                {"ID": "3", "heure": "10:15", "nbrLigne": "0"},
                {"ID": "4", "heure": "10:20", "nbrLigne": "0"},
                {"ID": "5", "heure": "10:25", "nbrLigne": "0"},
                {"ID": "6", "heure": "10:30", "nbrLigne": "0"},
                {"ID": "7", "heure": "10:35", "nbrLigne": "0"},
                {"ID": "8", "heure": "10:40", "nbrLigne": "0"},
                {"ID": "9", "heure": "10:45", "nbrLigne": "0"},
                {"ID": "10", "heure": "10:50", "nbrLigne": "0"},
                {"ID": "11", "heure": "10:55", "nbrLigne": "0"},
                {"ID": "12", "heure": "11:00", "nbrLigne": "0"},
                {"ID": "13", "heure": "11:05", "nbrLigne": "0"},
                {"ID": "14", "heure": "11:10", "nbrLigne": "0"},
                {"ID": "15", "heure": "11:15", "nbrLigne": "0"},
                {"ID": "16", "heure": "11:20", "nbrLigne": "0"},
                {"ID": "17", "heure": "11:25", "nbrLigne": "0"},
                {"ID": "18", "heure": "11:30", "nbrLigne": "0"},
                {"ID": "19", "heure": "11:35", "nbrLigne": "0"},
                {"ID": "20", "heure": "11:40", "nbrLigne": "0"},
                {"ID": "21", "heure": "11:45", "nbrLigne": "0"},
                {"ID": "22", "heure": "11:50", "nbrLigne": "0"},
                {"ID": "23", "heure": "11:55", "nbrLigne": "0"},
                {"ID": "24", "heure": "12:00", "nbrLigne": "0"},
                {"ID": "25", "heure": "12:05", "nbrLigne": "0"},
                {"ID": "26", "heure": "12:10", "nbrLigne": "0"},
                {"ID": "27", "heure": "12:15", "nbrLigne": "0"},
                {"ID": "28", "heure": "12:20", "nbrLigne": "0"},
                {"ID": "29", "heure": "12:25", "nbrLigne": "0"},
                {"ID": "30", "heure": "12:30", "nbrLigne": "0"},
                {"ID": "31", "heure": "12:35", "nbrLigne": "0"},
                {"ID": "32", "heure": "12:40", "nbrLigne": "0"},
                {"ID": "33", "heure": "12:45", "nbrLigne": "0"},
                {"ID": "34", "heure": "12:50", "nbrLigne": "0"},
                {"ID": "35", "heure": "12:55", "nbrLigne": "0"},
                {"ID": "36", "heure": "13:00", "nbrLigne": "0"},
                {"ID": "37", "heure": "13:05", "nbrLigne": "0"},
                {"ID": "38", "heure": "13:10", "nbrLigne": "0"},
                {"ID": "39", "heure": "13:15", "nbrLigne": "0"},
                {"ID": "40", "heure": "13:20", "nbrLigne": "0"},
                {"ID": "41", "heure": "13:25", "nbrLigne": "0"},
                {"ID": "42", "heure": "13:30", "nbrLigne": "0"},
                {"ID": "43", "heure": "13:35", "nbrLigne": "0"},
                {"ID": "44", "heure": "13:40", "nbrLigne": "0"},
                {"ID": "45", "heure": "13:45", "nbrLigne": "0"},
                {"ID": "46", "heure": "13:50", "nbrLigne": "0"},
                {"ID": "47", "heure": "13:55", "nbrLigne": "0"},
                {"ID": "48", "heure": "14:00", "nbrLigne": "0"},
                {"ID": "49", "heure": "14:05", "nbrLigne": "0"},
                {"ID": "50", "heure": "14:10", "nbrLigne": "0"},
                {"ID": "51", "heure": "14:15", "nbrLigne": "0"},
                {"ID": "52", "heure": "14:20", "nbrLigne": "0"},
                {"ID": "53", "heure": "14:25", "nbrLigne": "0"},
                {"ID": "54", "heure": "14:30", "nbrLigne": "0"},
                {"ID": "55", "heure": "14:35", "nbrLigne": "0"},
                {"ID": "56", "heure": "14:40", "nbrLigne": "0"},
                {"ID": "57", "heure": "14:45", "nbrLigne": "0"},
                {"ID": "58", "heure": "14:50", "nbrLigne": "0"},
                {"ID": "59", "heure": "14:55", "nbrLigne": "0"},
                {"ID": "60", "heure": "15:00", "nbrLigne": "0"},
                {"ID": "61", "heure": "15:05", "nbrLigne": "0"},
                {"ID": "62", "heure": "15:10", "nbrLigne": "0"},
                {"ID": "63", "heure": "15:15", "nbrLigne": "0"},
                {"ID": "64", "heure": "15:20", "nbrLigne": "0"},
                {"ID": "65", "heure": "15:25", "nbrLigne": "0"},
                {"ID": "66", "heure": "15:30", "nbrLigne": "0"},
                {"ID": "67", "heure": "15:35", "nbrLigne": "0"},
                {"ID": "68", "heure": "15:40", "nbrLigne": "0"},
                {"ID": "69", "heure": "15:45", "nbrLigne": "0"},
                {"ID": "70", "heure": "15:50", "nbrLigne": "0"},
                {"ID": "71", "heure": "15:55", "nbrLigne": "0"},
                {"ID": "72", "heure": "16:00", "nbrLigne": "0"},
                {"ID": "73", "heure": "16:05", "nbrLigne": "0"},
                {"ID": "74", "heure": "16:10", "nbrLigne": "0"},
                {"ID": "75", "heure": "16:15", "nbrLigne": "0"},
                {"ID": "76", "heure": "16:20", "nbrLigne": "0"},
                {"ID": "77", "heure": "16:25", "nbrLigne": "0"},
                {"ID": "78", "heure": "16:30", "nbrLigne": "0"},
                {"ID": "79", "heure": "16:35", "nbrLigne": "0"},
                {"ID": "80", "heure": "16:40", "nbrLigne": "0"},
                {"ID": "81", "heure": "16:45", "nbrLigne": "0"},
                {"ID": "82", "heure": "16:50", "nbrLigne": "0"},
                {"ID": "83", "heure": "16:55", "nbrLigne": "0"},
                {"ID": "84", "heure": "17:00", "nbrLigne": "0"},
                {"ID": "85", "heure": "17:05", "nbrLigne": "0"},
                {"ID": "86", "heure": "17:10", "nbrLigne": "0"},
                {"ID": "87", "heure": "17:15", "nbrLigne": "0"},
                {"ID": "88", "heure": "17:20", "nbrLigne": "0"},
                {"ID": "89", "heure": "17:25", "nbrLigne": "0"},
                {"ID": "90", "heure": "17:30", "nbrLigne": "0"},
                {"ID": "91", "heure": "17:35", "nbrLigne": "0"},
                {"ID": "92", "heure": "17:40", "nbrLigne": "0"},
                {"ID": "93", "heure": "17:45", "nbrLigne": "0"},
                {"ID": "94", "heure": "17:50", "nbrLigne": "0"},
                {"ID": "95", "heure": "17:55", "nbrLigne": "0"},
                {"ID": "96", "heure": "18:00", "nbrLigne": "0"},
                {"ID": "97", "heure": "18:05", "nbrLigne": "0"},
                {"ID": "98", "heure": "18:10", "nbrLigne": "0"},
                {"ID": "99", "heure": "18:15", "nbrLigne": "0"},
                {"ID": "100", "heure": "18:20", "nbrLigne": "0"},
                {"ID": "101", "heure": "18:25", "nbrLigne": "0"},
                {"ID": "102", "heure": "18:30", "nbrLigne": "0"},
                {"ID": "103", "heure": "18:35", "nbrLigne": "0"},
                {"ID": "104", "heure": "18:40", "nbrLigne": "0"},
                {"ID": "105", "heure": "18:45", "nbrLigne": "0"},
                {"ID": "106", "heure": "18:50", "nbrLigne": "0"},
                {"ID": "107", "heure": "18:55", "nbrLigne": "0"},
            ];


            getRdvDisponible(dataRdv, jsonResp);
            console.log(dataRdv);
            // console.log(json);
            ele = document.getElementById('sel');
            for (let i = 0; i < dataRdv.length; i++) {
                // 
                if (dataRdv[i] == undefined) {

                } else if(dataRdv[i]['nbrLigne'] == 1 ){
                    ele.innerHTML = ele.innerHTML +
                            '<button id="red" onclick="show(' + dataRdv[i]['ID'] + ')" style="" disabled><li value="' + dataRdv[i]['ID']
                            + '">' + dataRdv[i]['heure'] + '</li></button>';
                }else{
                    ele.innerHTML = ele.innerHTML +
                            '<button id="green" onclick="show(' + dataRdv[i]['ID'] + ')" ><li value="' + dataRdv[i]['ID']
                            + '">' + dataRdv[i]['heure'] + '</li></button>';
                }
            }

        },
        error: function (jsonResp)
        {
            alert("Vous avez choisi le : " + jsonResp)
            console.log('ERRORS:');
        }
    });


}

let dateRdv;

function show(ele) {
    // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
    let msg = document.getElementById('msg');
    msg.innerHTML = 'Votre rendez vous sera fixé le : <b>' + date + " à " + dataRdv[ele]['heure'] + '</b> </br>';
    dateRdv = JSON.stringify({date: date, heure: dataRdv[ele]['heure']})
    console.log(dateRdv)
}

function sendData() {
    
    dateRdvWithCentre = dateRdv['centre_attribue'] = sessionCentreAttribue
    console.log(dateRdv)
    $.ajax({
        url: 'ServletGetRdvVaccin',
        type: 'POST',
        data: dateRdv,
        contentType: 'application/json',
        dataType: 'json',
        success: function (jsonResp)
        {
            console.log("success")
            location.window.href = "home.jsp";
        },
        error: function () {
            console.log("error")

        }
    });
}

var dateFormat;

function datePicker() {

    const date = new Date()
    var dateString
    var monthString
    var dateLength = date.getDate().toString().length
    var monthLength =date.getMonth().toString().length
    if (dateLength == 2){
        dateString = date.getDate().toString()
    }else{
        dateString = "0" + date.getDate().toString()
    }

    if (monthLength == 2){
        monthString = date.getMonth().toString()
    }else{
        monthString = "0" + (date.getMonth()+1).toString()
    }

        dateFormat = date.getFullYear() + "-" + monthString + "-" + dateString
}


function showDateMinPicker() {

    datePicker()
    let dateMin = document.getElementById('datepicker');
    dateMin.innerHTML = '<input id="date" type="date" min="' + dateFormat + '" step="1" ><button type="button" onclick="validationVaccination()" id="modalButton" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" visible>' +
            "Valider" +
            '</button>';
}

function ajaxShowDateForD2() {
    
    $.ajax({
        url: 'ServletRdvPatientForD2',
        type: 'POST',
        data: "",
        contentType: 'application/json',
        dataType: 'json',
        success: function (response)
        { 

            console.log(JSON.stringify(response))

            
            
            var dateMinD2 = "";
            dateMinD2 = response['dateMin']
            var dateMaxD2 = "";
            dateMaxD2 = response['dateMax']

            console.log(dateMinD2)
            console.log(dateMaxD2)

            let dateForD2 = document.getElementById('datepicker');
            dateForD2.innerHTML = '<input id="date" type="date" min="' + response['dateMin'] + '" max="' + response['dateMax'] + '" step="1" ><button type="button" onclick="validationVaccination()" id="modalButton" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" visible>' +
                    "Valider" +
                    '</button>';
            
        },
        error: function () {
            console.log("error")

        }
    });
    
}

function sendDataD2() {
    $.ajax({
        url: 'ServletGetRdvVaccinD2',
        type: 'POST',
        data: dateRdv,
        contentType: 'application/json',
        dataType: 'json',
        success: function (jsonResp)
        {
            console.log("success")
            location.window.href = "home.jsp";
        },
        error: function () {
            console.log("error")

        }
    });
}