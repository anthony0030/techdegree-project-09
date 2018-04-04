const DEBUG = false

// enables or disables the console loggs
if(!DEBUG){
  if(!window.console) window.console = {};
  var methods = ["log", "debug", "warn", "info"];
  for(var i=0;i<methods.length;i++){
    console[methods[i]] = function(){};
  }
}



const alertContainer = document.getElementById("alerts");
const sendMessageButton = document.getElementById("sendMsg");
const saveButton = document.getElementById("saveBtn");
const cancelButton = document.getElementById("cancelBtn");
const notificationCircle = document.getElementsByClassName("notification-circle")[0];

const newMemberContainer = document.getElementById("new-members");
const newActivityContainer = document.getElementById("new-activity");
const userCurent = document.getElementById("user_curent");
const members = [];

const userName = document.getElementById("userName");
const userMsg = document.getElementById("userMsg");
const messageErrors = document.getElementById("messageErrors");
const messageErrors_msg = document.getElementById("messageErrors_msg");
const messageErrors_user = document.getElementById("messageErrors_user");

const numberOfRandomusers = 5;
const $randomUsers = genRandUsers();
var $randomUserData;



const emailNotifications = document.getElementById("email-notifications");
const publicProfile = document.getElementById("public-profile");
const timezoneSelector = document.getElementById("timezone-selector");


const searchGoogleButton = document.getElementById("search__google--button");
const searchGoogleQuestion = document.getElementById("search__google--question");


// Modal
const modalContainer = document.getElementById("modals");
const modalNotifications = document.getElementById("notifications");
const NotificationsContainer = document.getElementById("notifications__container");
//  onclick="displayModal(modalNotifications);"
function displayModal(modalToDisplay){ modalToDisplay.style.display = "block"; }


//Close Button
const closeButton = document.createElement("SPAN");
const closeButtonText = document.createTextNode(String.fromCharCode(215));
closeButton.classList.add("closebtn");
closeButton.appendChild(closeButtonText);


// event listener for the search box to search google
searchGoogleButton.addEventListener("click", function(event){
  event.preventDefault();

  if (searchGoogleQuestion.value.trim() !== ""){
    const question = searchGoogleQuestion.value.replace(" ", "%20");
    window.open("https://www.google.com/search?q="+question,'_blank');
    searchGoogleQuestion.value = "";
  }
  else
    alertGen("Warning", "Search Cant Be Blank", "error")
})

// Event listener to remove the alerts when the closebutton is pressed
alertContainer.addEventListener("click", function(event){
  if(event.target.className === "closebtn"){
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  }
});

// Event listener to hide the modal when the closebutton is pressed
modalContainer.addEventListener("click", function(event){
  if(event.target.className === "closebtn"){
    if(event.target.parentNode.className === "modal__header"){
      console.log("close modal")
      event.target.parentNode.parentNode.parentNode.style.display = "none";
    }
    else{
      event.target.parentNode.parentNode.removeChild(event.target.parentNode);
      checkNotifications();
    }
  }
});

// Hide modal when a user clicks out side of the modal
modalContainer.addEventListener("click", function(event){
  if (event.target.className.split("--")[0] === "modal") {
    event.target.style.display = "none";
  }
})


// if there are alerts make the green circle aprire on the bell
function checkNotifications(){
  if(NotificationsContainer.children.length === 0)
    notificationCircle.style.fill="rgba(0,0,0,0)";
  else
    notificationCircle.style.fill="#82c890";
}


// event listener foer the save button
saveButton.addEventListener("click", function(event){
  event.preventDefault();

  localStorage.setItem("SendEmailNotifications", emailNotifications.checked);
  localStorage.setItem("publicProfile", publicProfile.checked);
  localStorage.setItem("timezone", timezoneSelector.value);

  alertGen("", "Settings have been saved", "success");
});

// event listener foer the cancel button
cancelButton.addEventListener("click", function(event){
  event.preventDefault();
  setSettings();
  alertGen("", "Settings have been reset", "error");
});



function setSettings(){
  if(localStorage.SendEmailNotifications === undefined) localStorage.setItem("SendEmailNotifications", "true");
  if(localStorage.publicProfile === undefined) localStorage.setItem("publicProfile", "true");
  if(localStorage.timezone === undefined) localStorage.setItem("timezone", "");

  emailNotifications.checked = toBoolean(localStorage.SendEmailNotifications);
  publicProfile.checked = toBoolean(localStorage.publicProfile);
  timezoneSelector.value = localStorage.timezone;
}

$(userName).on("change", function() { 
  console.log("on change called isValidUser()");
  isValidUser();
});


$(userName).on( "autocompleteselect", function( event, ui ) {
  console.log("autocompleteselect called isValidUser()");
  isValidUser();
});


$(userMsg).on("change", function() { 
  console.log("on change called isValidMsg()");
  isValidMsg();
});

// event listener for the send message button
sendMessageButton.addEventListener("click", function(event){
  event.preventDefault();
  if(isValidUser() && isValidMsg()){
    alertGen("", "Mesage Sent Sucsesfully!", "success");
    userName.value = "";
    userMsg.value = "";
  }
});



function toBoolean(string){
  if(string === "true") return true;
  if(string === "false") return false;
}



function dateConverter(date){ //converts "2014-12-11 14:35:49" into 11/12/14
  const splitDate = date.split("-");
  const year = splitDate[0].substring(2);
  const month = splitDate[1];
  const splitDay = splitDate[2].split(" ");
  const day = splitDay[0];
  return day + "/" + month + "/" + year;
}

function capitalizeFirstLetter(string) { // converts anthony into Anthony 
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function randomNumber(min=0, max=10){
  return Math.round(Math.random() * (max - min) + min);
}



function genRandUsers(){
  return $.ajax({
    url: "https://randomuser.me/api/?results="+numberOfRandomusers,
    dataType: "json",
    success: function(data) {
      // console.log(data);
      newMemberContainer.innerHTML = "";
      newActivityContainer.innerHTML = "";
      userCurent.innerHTML = "";
      randomCurrentUser()
      for (i = 1; i < numberOfRandomusers; i++){
        $randomUserData = $randomUsers.responseJSON.results[i];
        members.push(capitalizeFirstLetter($randomUserData.name.first) + " " + capitalizeFirstLetter($randomUserData.name.last));
        printNewMember();
        printNewMemberActivity();
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
  img.setAttribute("src", $randomUserData.picture.large);
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
  img.setAttribute("src", $randomUserData.picture.large);
  img.classList.add("user_image");
  a.appendChild(img);

  const userDetails = document.createElement("DIV");
  userDetails.classList.add("user-details");
  a.appendChild(userDetails);

  const userTitle = document.createElement("P");
  userTitle.classList.add("user-title");
  userTitle.appendChild(document.createTextNode(capitalizeFirstLetter($randomUserData.name.first) + " " + genRandomActivity() ));
  userDetails.appendChild(userTitle);

  const userSubtitle = document.createElement("P");
  userSubtitle.classList.add("user-subtitle");
  userSubtitle.appendChild(document.createTextNode(genRandomDay()));
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


function genRandomDay(){
  days = "Day";
  const number = randomNumber(1,7);
  if(number > 1) days += "s";

  return number + " " + days + " ago";

}


function genRandomActivity(){
  const activityes = ["liked" , "hated", "comented on"];
  const activity = activityes[randomNumber(0, activityes.length-1)];
  const things = ["Post", "Comment", "Photo", "Status"];
  const thing = things[randomNumber(0, things.length-1)];
  const thatPerson = members[randomNumber(0, members.length-1)];
  const thatPersonFirst = thatPerson.split(" ")[0];

  return activity + " " + thatPersonFirst + "'s " + thing;
}



// Generates the curent random user

function randomCurrentUser(){

  $randomUserData = $randomUsers.responseJSON.results[0];

  const a = document.createElement("A");
  a.classList.add("user_curent");

  const img = document.createElement("IMG");
  img.setAttribute("src", $randomUserData.picture.large);
  img.classList.add("user_image");
  a.appendChild(img);

  const userName = document.createElement("P");
  userName.classList.add("user_name");
  userName.appendChild(document.createTextNode(capitalizeFirstLetter($randomUserData.name.first) + " " + capitalizeFirstLetter($randomUserData.name.last)));
  a.appendChild(userName);

  userCurent.appendChild(a);
}

function alertFactory(title, say, style){
  var alertContainer = document.createElement("DIV");
  var titleContainer = document.createElement("H4")
  var textContainer = document.createElement("P")

  var titleText = document.createTextNode(title+" ");
  var alertText = document.createTextNode(say);

  titleContainer.appendChild(titleText);
  textContainer.appendChild(alertText);

  titleContainer.classList.add("title");
  textContainer.classList.add("text");

  alertContainer.appendChild(titleContainer);
  alertContainer.appendChild(textContainer);

  alertContainer.appendChild(closeButton.cloneNode(true));

  if(style) { alertContainer.classList.add("alert--" + style); }
  else { alertContainer.classList.add("alert"); }

  return alertContainer;
}

// this prints out alerts
function alertGen(title, say, style){
  var alert = alertFactory(title, say, style)
  alertContainer.appendChild(alert);
}


function notiGen(title, say, style){
  var notification = alertFactory(title, say, style)
  NotificationsContainer.appendChild(notification);
  checkNotifications();
}



// auto clompleat function for sending a message
$(userName).autocomplete({source: members});

function isValidUser(){
  messageErrors_user.innerHTML= "You need to enter a user name";
  console.log(userName.value);
  console.log(members.indexOf(userName.value));
  if(members.indexOf(userName.value) >= 0){
    console.log(userName.value + " is a user");
    userName.className = "form__input--valid";
    messageErrors_user.style.display = "none";
    return true;
  }
  else{
      messageErrors_user.style.display = "flex";
      userName.className = "form__input--invalid";
    if(userName.value.trim() !== ""){
      console.log(userName.value + " is NOT a user");
      messageErrors_user.innerHTML= userName.value + " is NOT a user";
      return false;
    }
    else{
      console.log("Please enter a user name")
      messageErrors_user.innerHTML= "You need to enter a user name";
      return false;
    }
  }
}


function isValidMsg(){
  messageErrors_msg.innerHTML = "The mesage can't be blank";
  console.log(userMsg.value)
  if(userMsg.value.trim() !== ""){
    console.log("is a valid message");
    userMsg.className = "form__input--valid";
    messageErrors_msg.style.display = "none";
    return true;
  }
  else{
    console.log("NOT a valid message");
    userMsg.className = "form__input--invalid";
    messageErrors_msg.style.display = "flex";
    return false;
  }
}


$( document ).ready(function() {

  // add the X button to the alerts that have benn added with jade
  var alerts = document.querySelectorAll("[class^='alert']");
  for (var i = 0; i < alerts.length; i++) {
    alerts[i].appendChild(closeButton.cloneNode(true));
  }

  // add the X button to the modals that have benn added with jade
  const models = document.querySelectorAll("[class='modal__header']");
  for (var i = 0; i < models.length; i++) {
    models[i].appendChild(closeButton.cloneNode(true));
  }


  alertGen("Alert", "Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id doloro id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.", "default");
  // alertGen("Alert", "This is an alert");
  // alertGen("Alert", "This is a default alert", "default");
  // alertGen("Alert", "This is a disabled alert", "disabled");
  // alertGen("Alert", "This is a success alert", "success");
  // alertGen("Alert", "This is an error alert", "error");
  // alertGen("Alert", "This is a warning alert", "warning");
  // alertGen("Alert", "This is an info alert", "info");

  notiGen("Error!", "Server Quota Reached", "error")
  notiGen("", "Your Subscription Has Been Renewed", "success")

  // set the default view of the chart
  switch (localStorage.dailyTraficView){
    case "hourly":
      document.getElementById("hourly-option").className = "visits__option--active";
      drawLineChartHourly();
    break;

    case "daily":
      document.getElementById("daily-option").className = "visits__option--active";
      drawLineChartDaily();
    break;

    case "weekly":
      document.getElementById("weekly-option").className = "visits__option--active";
      drawLineChartWeekly();
    break;

    case "monthly":
      document.getElementById("monthly-option").className = "visits__option--active";
      drawLineChartMonthly();
    break;
  }



  setSettings();
  checkNotifications();
});





