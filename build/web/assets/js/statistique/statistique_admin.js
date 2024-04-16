window.onload = function () {
    getStatistiqueEtatVaccinalPatient()
}



function getStatistiqueEtatVaccinalPatient() {


    $.ajax({
        url: 'ServletStatistiqueEtatVaccinalPatient',
        type: 'POST',
        data: '',
        contentType: 'application/json',
        dataType: 'json',
        success: function (reponse)
        {
            console.log(reponse)
           vac = reponse['vac'];
           nonvac = reponse['nonVac'];
           total = reponse['total'];
           partiel = reponse['partiellementVac'];
           console.log(nonvac)
           getStat()
        },
        error: function ()
        {

        }
    });
}

let vac;
var nonvac;
var partiel;
var total;

console.log(vac)
function getStat(){
    
    const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Non Vacciné', 'Vacciné', 'Partiellement vacciné'],
    datasets: [{
      label: '# de personnes non vaccinées',
      data: [nonvac,vac, partiel],
      backgroundColor: ['rgba(255, 99, 132, 0.2)','rgba(255, 159, 64, 0.2)',],
      borderColor: ['rgb(255, 99, 132)','rgb(255, 159, 64)',],
      borderWidth: 3
    }]
  },
  options: {
    scales: {
      y: {
//        beginAtZero: true,
        max : total,
      }
    }
  }
});
    
    
}


