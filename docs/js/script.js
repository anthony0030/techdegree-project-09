














document.addEventListener("DOMContentLoaded", function(event) { 

  // add the X button to the alerts
  var alerts = document.querySelectorAll("[class^='alert']");
  for (var i = 0; i < alerts.length; i++) {
    alerts[i].appendChild(closeButton.cloneNode(true));
  }

// set the default view of the chart
document.getElementById("weekly-option").className = "visits__option--active";
drawLineChartWeekly()


checkAlerts()
}); // end of document reddy


// this prints out alerts
function alertGen(say="Alert", style="default"){
  var alert = document.createElement("DIV");
  var alertText = document.createTextNode(say);
  alert.appendChild(alertText);
  alert.appendChild(closeButton.cloneNode(true));
  alert.classList.add("alert--" + style);
  alertContainer.appendChild(alert)
  checkAlerts()
}