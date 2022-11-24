Chart.defaults.global.elements.line.tension = 0;
Chart.defaults.global.elements.line.borderColor = "rgb(115, 119, 189)";
Chart.defaults.global.elements.line.backgroundColor = "rgba(115, 119, 189, 0.2)";
Chart.defaults.global.elements.point.borderColor = "#7377bd";
Chart.defaults.global.elements.point.style = "circle";
Chart.defaults.global.elements.point.radius = 4;
Chart.defaults.global.elements.point.borderWidth = 4;
Chart.defaults.global.elements.point.backgroundColor = "#fff";
Chart.defaults.global.legend.display = false;


const options = {
  scales: {
    yAxes: [{
      gridLines: {
        drawTicks: false
      }, //gridLines
      ticks: {
        beginAtZero: true,
        callback: function(value, index, values) {
          if (value !== 0) {return value;}
        } //callback
      } //ticks
    }], //yAxes
    xAxes: [{
      gridLines: {
        drawTicks: false
      } //gridLines
    }] //xAxes
  } //scales
}; //options


function drawLineChartHourly() {
  localStorage.setItem("dailyTrafficView", "hourly");
  new Chart(document.getElementById("chart-line"), {
    type: "line",
    data: {
      labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
      datasets: [{
        label: "Users",
        data: [0, 75, 125, 100, 150, 200, 150, 175, 125, 175, 200, 175, 200, 75, 125, 100, 150, 200, 150, 175, 125, 175, 200, 175]
      }]
    },
    options: options
  });
}

function drawLineChartDaily() {
  localStorage.setItem("dailyTrafficView", "daily");
  new Chart(document.getElementById("chart-line"), {
    type: "line",
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [{
        label: "Users",
        data: [0, 200, 500, 50, 300, 800, 1000]
      }]
    },
    options: options
  });
}

function drawLineChartWeekly() {
  localStorage.setItem("dailyTrafficView", "weekly");
  new Chart(document.getElementById("chart-line"), {
    type: "line",
    data: {
      labels: ["01-07", "08-15", "16-24", "25-31"],
      datasets: [{
        label: "Users",
        data: [0, 750, 1250, 1000]
      }]
    },
    options: options
  });
}

function drawLineChartMonthly() {
  localStorage.setItem("dailyTrafficView", "monthly");
  new Chart(document.getElementById("chart-line"), {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [{
        label: "Users",
        data: [0, 75, 125, 100, 150, 200, 150, 175, 125, 175, 200, 175]
      }]
    },
    options: options
  });
}
