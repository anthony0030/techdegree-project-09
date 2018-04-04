new Chart(document.getElementById("chart-bar"), {
  type: "bar",
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      label: "DAILY TRAFFIC",
      backgroundColor: "#7377BD",
      data: [75, 100, 175, 125, 225, 200, 100]
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
          drawTicks: false
        },


        ticks: {
          // Min: 0,
          stepSize: 50,
          beginAtZero: true,
          callback: function(value) {

            if(value !== 0){ return value; }
          }
        }



      }],

      xAxes: [{
        gridLines: {
          drawTicks: false
        },
        barPercentage: 0.5,
        
        ticks: {
          callback: function(value) {
            return value.split("")[0];
          }
        }
      }]


    } //scales
  } //options

});