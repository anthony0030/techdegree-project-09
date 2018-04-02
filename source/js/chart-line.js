document.getElementById("all-options").addEventListener("click", function(event){
  if(event.target.tagName.toLowerCase() === 'li'){
    clickedLi = event.target;
    var ul = document.getElementById("all-options");
    var curentActive = ul.getElementsByClassName("visits__option--active")[0];
    curentActive.className = "visits__option";
    clickedLi.className = "visits__option--active";
    console.log(curentActive);
  }
});


if(localStorage.dailyTraficView === undefined) localStorage.setItem("SendEmailNotifications", "weekly")


function drawLineChartHourly() {
  localStorage.setItem("dailyTraficView", "hourly")
  new Chart(document.getElementById("chart-line"), {
    type: "line",
    data: {
      labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
      datasets: [{
        label: "Users",
        data: [0, 75, 125, 100, 150, 200, 150, 175, 125, 175, 200, 175, 200, 75, 125, 100, 150, 200, 150, 175, 125, 175, 200, 175],
        fill: true,
        borderColor: "rgb(115, 119, 189)",
        backgroundColor: "rgba(115, 119, 189, 0.2)",
        lineTension: 0,
        pointRadius: 4,
        pointStyle: "circle",
        pointBorderColor: "#7377bd",
        pointBorderWidth: 4,
        pointBackgroundColor: "#fff"
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
            // offsetGridLines: true,
          },
          ticks: {
            Min: 0,
            suggestedMax: 250,
            stepSize: 50,
            beginAtZero: true,
            callback: function(value, index, values) {
              if (value != 0) return value
            }
          },
        }],
        xAxes: [{
          gridLines: {
            drawTicks: false,
            // offsetGridLines: true,
          },
          barPercentage: 0.5,
        }]
      } //scales
    } //options
  });
}

function drawLineChartDaily() {
  localStorage.setItem("dailyTraficView", "daily")
  new Chart(document.getElementById("chart-line"), {
    type: "line",
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [{
        label: "Users",
        data: [0, 200, 500, 50, 300, 800, 1000],
        fill: true,
        borderColor: "rgb(115, 119, 189)",
        backgroundColor: "rgba(115, 119, 189, 0.2)",
        lineTension: 0,
        pointRadius: 4,
        pointStyle: "circle",
        pointBorderColor: "#7377bd",
        pointBorderWidth: 4,
        pointBackgroundColor: "#fff"
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
            // offsetGridLines: true,
          },
          ticks: {
            Min: 0,
            suggestedMax: 250,
            stepSize: 50,
            beginAtZero: true,
            callback: function(value, index, values) {
              if (value != 0) return value
            }
          },
        }],
        xAxes: [{
          gridLines: {
            drawTicks: false,
            // offsetGridLines: true,
          },
          barPercentage: 0.5,
        }]
      } //scales
    } //options
  });
}



function drawLineChartWeekly() {
  localStorage.setItem("dailyTraficView", "weekly")
  new Chart(document.getElementById("chart-line"), {
    type: "line",
    data: {
      labels: [" ", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
        label: "Users",
        data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2000, 1750, 2000],
        fill: true,
        borderColor: "rgb(115, 119, 189)",
        backgroundColor: "rgba(115, 119, 189, 0.2)",
        lineTension: 0,
        pointRadius: 4,
        pointStyle: "circle",
        pointBorderColor: "#7377bd",
        pointBorderWidth: 4,
        pointBackgroundColor: "#fff"
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
            // offsetGridLines: true,
          },
          ticks: {
            Min: 0,
            suggestedMax: 2500,
            stepSize: 500,
            beginAtZero: true,
            callback: function(value, index, values) {
              if (value != 0) return value
            }
          },
        }],
        xAxes: [{
          gridLines: {
            drawTicks: false,
            // offsetGridLines: true,
          },
          barPercentage: 0.5,
        }]
      } //scales
    } //options
  });
}



function drawLineChartMonthly() {
  localStorage.setItem("dailyTraficView", "monthly")
  new Chart(document.getElementById("chart-line"), {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",],
      datasets: [{
        label: "Users",
        data: [0, 75, 125, 100, 150, 200, 150, 175, 125, 175, 200, 175],
        fill: true,
        borderColor: "rgb(115, 119, 189)",
        backgroundColor: "rgba(115, 119, 189, 0.2)",
        lineTension: 0,
        pointRadius: 4,
        pointStyle: "circle",
        pointBorderColor: "#7377bd",
        pointBorderWidth: 4,
        pointBackgroundColor: "#fff"
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
            // offsetGridLines: true,
          },
          ticks: {
            Min: 0,
            suggestedMax: 250,
            stepSize: 50,
            beginAtZero: true,
            callback: function(value, index, values) {
              if (value != 0) return value
            }
          },
        }],
        xAxes: [{
          gridLines: {
            drawTicks: false,
            // offsetGridLines: true,
          },
          barPercentage: 0.5,
        }]
      } //scales
    } //options
  });
}