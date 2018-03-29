const alertContainer = document.getElementById("alerts");


// Close Button
const closeButton = document.createElement("SPAN");
const closeButtonText = document.createTextNode(String.fromCharCode(215));
closeButton.classList.add("closebtn");
closeButton.appendChild(closeButtonText);

// 
alertContainer.addEventListener("click", function(event){
  if(event.target.className === "closebtn"){
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
  }
});





document.addEventListener("DOMContentLoaded", function(event) { 

  // add the X button to the alerts
  var alerts = document.querySelectorAll("[class^='alert']");
  for (var i = 0; i < alerts.length; i++) {
    var newCloseButton = closeButton.cloneNode(true)
    alerts[i].appendChild(newCloseButton);
  }

// set the default view of the chart
document.getElementById("weekly-option").className = "visits__option--active";
drawLineChartWeekly()


}); // end of document reddy






function sendMessage(){
  var alert = document.createElement("DIV");
  var alertText = document.createTextNode("Mesage Sent Sucsesfully!");
  alert.appendChild(alertText);
  alert.appendChild(closeButton);
  alert.classList.add("alert--success");
  alertContainer.appendChild(alert)
}