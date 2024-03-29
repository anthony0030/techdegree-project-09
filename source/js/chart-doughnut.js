new Chart(document.getElementById("chart-doughnut"), {
  type: "doughnut",
  data: {
    labels: [
      "Desktops",
      "Tablets",
      "Phone"
    ],
    datasets: [{
      borderWidth: 0,
      hoverBorderWidth: 2,
      data: [
        70,
        15,
        15
      ],
      backgroundColor: [
        "#7377BD",
        "#82C890",
        "#75B0BE"
        ]
    }]
  },
  options: {
    rotation: 0.06,
    legend: {
      labels: {
          padding: 25,
          boxWidth: 25,
          fontSize: 25
      },
        position: "right",
        reverse: true,
        display: true
      }
    }
});
