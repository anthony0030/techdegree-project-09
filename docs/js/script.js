new Chart(document.getElementById("chart-line"), {
  type: "line",
  data: {
    labels: [" ","16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      label: "Users",
      data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2000, 1750, 2000],
      fill: true,
      borderColor: "rgb(115, 119, 189)",
      backgroundColor: "rgba(115, 119, 189, 0.2)",
      lineTension: 0
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
          stepSize: 500,
          beginAtZero: true,
        },



      }],

      xAxes: [{
        gridLines: {
          drawTicks: false,
          offsetGridLines: true,
        },
        barPercentage: 0.5,
      }]


    } //scales
  } //options
});



new Chart(document.getElementById("chart-doughnut"), {
  type: "doughnut",
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
        "#7377BD",
        "#82C890",
        "#75B0BE",
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
        position: "right",
        reverse: true,
        display: true,
      }
    }
});



new Chart(document.getElementById("chart-bar"), {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      label: "DAILY TRAFFIC",
      backgroundColor: "#7377BD",
      borderColor: "rgb(75, 192, 192)",
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















