new Chart(document.getElementById("chart-line"), {
  type: 'line',
  data: [75, 100, 175, 125, 225, 200, 100]
});























new Chart(document.getElementById("chart-doughnut"), {
  type: 'doughnut',
  data: {
    labels: [
      "Desctops",
      "Tablets",
      "Phone",
     ],
    datasets: [{
      borderWidth: 0,
      hoverBorderWidth: 2,
      data: [
        70,
        15,
        15,
      ],
      backgroundColor: [
        '#7377BD',
        '#82C890',
        '#75B0BE',
        ],
    }]
  },
  options: {
    rotation: 0.06,
    legend: {
      labels: {
          boxWidth: 13,
          padding: 40,
      },
        position: 'right',
        reverse: true,
        display: true,
      }
    }
});



new Chart(document.getElementById("chart-bar"), {
  type: 'bar',
  data: {
    labels: ["S","M","T","W","T","F","S"],
    datasets: [{
      label: "DAILY TRAFFIC",
      backgroundColor: '#7377BD',
      // borderColor: '#000000',
      data: [75, 100, 175, 125, 225, 200, 100],
    }]
  },



  options: {



    cornerRadius: 7,
    fullCornerRadius: false,

    legend: {
      display: false
    },


    scales: {

      yAxes: [{
        gridLines: {
          drawTicks: false,
          offsetGridLines: true,
        },


        ticks: {
          // Min: 0,
          stepSize: 50,
          beginAtZero: true,
        },



      }],

      xAxes: [{
        gridLines: {
          drawTicks: false,
        },
        barPercentage: 0.5,
      }]


    } //scales
  } //options

});















