new Chart(document.getElementById("chart-bar"),{type:"bar",data:{labels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],datasets:[{label:"DAILY TRAFFIC",backgroundColor:"#7377BD",data:[75,100,175,125,225,200,100]}]},options:{cornerRadius:7,fullCornerRadius:!1,legend:{display:!1},scales:{yAxes:[{gridLines:{drawTicks:!1},ticks:{
// Min: 0,
stepSize:50,beginAtZero:!0,callback:function(a){if(0!==a)return a}}}],xAxes:[{gridLines:{drawTicks:!1},barPercentage:.5,ticks:{callback:function(a){return a.split("")[0]}}}]}}});
//# sourceMappingURL=chart-bar.js.map