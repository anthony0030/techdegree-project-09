const alertContainer = document.getElementById("alerts");
const sendMessageButton = document.getElementById("sendMsg");
const saveButton = document.getElementById("saveBtn");
const cancelButton = document.getElementById("cancelBtn");
const notificationCircle = document.getElementsByClassName("notification-circle")[0]

const newMemberContainer = document.getElementById("new-members")
const newActivityContainer = document.getElementById("new-activity")
const userCurent = document.getElementById("user_curent");
const members = [];

const userName = document.getElementById("userName")
const userMsg = document.getElementById("userMsg")

const numberOfRandomusers = 5;
const $randomUsers = genRandUsers()
var $randomUserData;


//Close Button
const closeButton = document.createElement("SPAN");
const closeButtonText = document.createTextNode(String.fromCharCode(215));
closeButton.classList.add("closebtn");
closeButton.appendChild(closeButtonText);


// Event listener to remove the alerts when the closebutton is pressed
alertContainer.addEventListener("click", function(event){
  if(event.target.className === "closebtn"){
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
    checkAlerts()
  }
});





// if there are alerts make the green circle aprire on the bell
function checkAlerts(){
  if(alertContainer.children.length === 0)
    notificationCircle.style.fill="rgba(0,0,0,0)"
  else
    notificationCircle.style.fill="#82c890"
}


// event listener foer the save button
saveButton.addEventListener("click", function(event){
  event.preventDefault();
  alertGen('Settings have been saved', 'success');
});

// event listener foer the cancel button
cancelButton.addEventListener("click", function(event){
  event.preventDefault();
  alertGen('Settings have been reset', 'error');
});




$(userName).on('change', function() { 
  console.log("on change called isValidUser()")
  isValidUser()
});


$(userName).on( "autocompleteselect", function( event, ui ) {
  console.log("autocompleteselect called isValidUser()")
  isValidUser()
});


$(userMsg).on('change', function() { 
  console.log("on change called isValidMsg()")
  isValidMsg()
});

// event listener for the send message button
sendMessageButton.addEventListener("click", function(event){
  event.preventDefault();
  if(isValidUser() && isValidMsg()){
    alertGen('Mesage Sent Sucsesfully!', 'success');
  }
});






function dateConverter(date){ //converts "2014-12-11 14:35:49" into 11/12/14
  const splitDate = date.split("-")
  const year = splitDate[0].substring(2)
  const month = splitDate[1]
  const splitDay = splitDate[2].split(" ")
  const day = splitDay[0]
  return day + "/" + month + "/" + year
}

function capitalizeFirstLetter(string) { // converts anthony into Anthony 
    return string.charAt(0).toUpperCase() + string.slice(1);
}





function genRandUsers(){
  return $.ajax({
    url: 'https://randomuser.me/api/?results='+numberOfRandomusers,
    dataType: 'json',
    success: function(data) {
      // console.log(data);
      newMemberContainer.innerHTML = "";
      newActivityContainer.innerHTML = "";
      userCurent.innerHTML = "";
      randomCurrentUser()
      for (i = 1; i < numberOfRandomusers; i++){
        $randomUserData = $randomUsers.responseJSON.results[i];
        members.push(capitalizeFirstLetter($randomUserData.name.first) + " " + capitalizeFirstLetter($randomUserData.name.last))
        printNewMember()
        printNewMemberActivity()
      }
    }
  });
}


function printNewMember(){

  console.log("print newe memb")
  const li = document.createElement("LI");

  const a = document.createElement("A");
  a.classList.add("user");
  li.appendChild(a);

  const img = document.createElement("IMG");
  img.setAttribute('src', $randomUserData.picture.large);
  img.classList.add("user_image");
  a.appendChild(img);

  const userDetails = document.createElement("DIV");
  userDetails.classList.add("user-details");
  a.appendChild(userDetails);

  const userTitle = document.createElement("P");
  userTitle.classList.add("user-title");
  userTitle.appendChild(document.createTextNode(capitalizeFirstLetter($randomUserData.name.first) + " " + capitalizeFirstLetter($randomUserData.name.last)));
  userDetails.appendChild(userTitle);

  const userSubtitle = document.createElement("P");
  userSubtitle.classList.add("user-subtitle");
  userSubtitle.classList.add("email");
  userSubtitle.appendChild(document.createTextNode($randomUserData.email));
  userDetails.appendChild(userSubtitle);

  const userDataRight = document.createElement("DIV");
  userDataRight.classList.add("user-data-right");
  a.appendChild(userDataRight);

  const userDataRightTitle = document.createElement("P");
  userDataRightTitle.classList.add("user-data-right-title");
  userDataRight.appendChild(document.createTextNode(dateConverter($randomUserData.registered)));
  userDataRight.appendChild(userDataRightTitle);

  newMemberContainer.appendChild(li);
}


// li
//   a.user
//     img.user_image(src="https://randomuser.me/api/portraits/men/86.jpg")
//     div.user-details
//       p.user-title Dale Byrd
//       p.user-subtitle.email dalebyrd52@example.com
//     div.user-data-right
//       p 10/05/15

function printNewMemberActivity(){


  const li = document.createElement("LI");

  const a = document.createElement("A");
  a.classList.add("user");
  li.appendChild(a);

  const img = document.createElement("IMG");
  img.setAttribute('src', $randomUserData.picture.large);
  img.classList.add("user_image");
  a.appendChild(img);

  const userDetails = document.createElement("DIV");
  userDetails.classList.add("user-details");
  a.appendChild(userDetails);

  const userTitle = document.createElement("P");
  userTitle.classList.add("user-title");
  userTitle.appendChild(document.createTextNode(capitalizeFirstLetter($randomUserData.name.first) + " " + capitalizeFirstLetter($randomUserData.name.last)));
  userDetails.appendChild(userTitle);

  const userSubtitle = document.createElement("P");
  userSubtitle.classList.add("user-subtitle");
  userSubtitle.appendChild(document.createTextNode("1 Day Ago"));
  userDetails.appendChild(userSubtitle);

  const userDataRight = document.createElement("DIV");
  userDataRight.classList.add("user-data-right");
  a.appendChild(userDataRight);

  const userDataRightTitle = document.createElement("P");
  userDataRightTitle.classList.add("recent_activity-carrot");
  userDataRightTitle.appendChild(document.createTextNode(">"));
  userDataRight.appendChild(userDataRightTitle);

  newActivityContainer.appendChild(li);
}





// li
//   a.user
//     img.user_image(src="https://randomuser.me/api/portraits/men/86.jpg")
//     div.user-details
//       p.user-title Victoria Chambers likes somthing
//       p.user-subtitle 1 month ago
//     div.user-data-right
//       p.recent_activity-carrot &gt;


// Generates the curent random user

function randomCurrentUser(){

  $randomUserData = $randomUsers.responseJSON.results[0];

  const a = document.createElement("A");
  a.classList.add("user_curent");

  const img = document.createElement("IMG");
  img.setAttribute('src', $randomUserData.picture.large);
  img.classList.add("user_image");
  a.appendChild(img);

  const userName = document.createElement("P");
  userName.classList.add("user_name");
  userName.appendChild(document.createTextNode(capitalizeFirstLetter($randomUserData.name.first) + " " + capitalizeFirstLetter($randomUserData.name.last)));
  a.appendChild(userName);

  userCurent.appendChild(a);
}





// this prints out alerts
function alertGen(say="Alert", style){
  var alert = document.createElement("DIV");
  var alertText = document.createTextNode(say);
  alert.appendChild(alertText);
  alert.appendChild(closeButton.cloneNode(true));
  if(style)
    alert.classList.add("alert--" + style);
  else
    alert.classList.add("alert");
  alertContainer.appendChild(alert)
  checkAlerts()
}


// auto clompleat function for sending a message
$(userName).autocomplete({source: members});

function isValidUser(){
  console.log(userName.value)
  console.log(members.indexOf(userName.value))
  if(members.indexOf(userName.value) >= 0){
    console.log(userName.value + " is a user")
    userName.className = "form__input--valid"
    return true
  }
  else{
      userName.className = "form__input--invalid"
      return false
    if(userName.value.trim() !== "")
      console.log(userName.value + " is NOT a user")
    else
      console.log("Please enter a user name")
  }
}


function isValidMsg(){
  console.log(userMsg.value)
  if(userMsg.value.trim() !== ""){
    console.log("is a valid message")
    userMsg.className = "form__input--valid"
    return true
  }
  else{
    console.log("NOT a valid message")
    userMsg.className = "form__input--invalid"
    return false
  }
}


$( document ).ready(function() {

  // add the X button to the alerts that have benn added with jade
  var alerts = document.querySelectorAll("[class^='alert']");
  for (var i = 0; i < alerts.length; i++) {
    alerts[i].appendChild(closeButton.cloneNode(true));
  }

  alertGen('This is an alert');
  alertGen('This is a default alert', 'default');
  alertGen('This is a disabled alert', 'disabled');
  alertGen('This is a success alert', 'success');
  alertGen('This is an error alert', 'error');
  alertGen('This is a warning alert', 'warning');
  alertGen('This is an info alert', 'info');

    // set the default view of the chart
    document.getElementById("weekly-option").className = "visits__option--active";
    drawLineChartWeekly()


    checkAlerts()
});





