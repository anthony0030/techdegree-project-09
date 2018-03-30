const newMemberContainer = document.getElementById("new-members")
const newActivityContainer = document.getElementById("new-activity")

const numberOfRandomusers = 4;
const $randomUsers = genRandUsers()
var $randomUserData;


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
      for (i = 0; i < numberOfRandomusers; i++){
        $randomUserData = $randomUsers.responseJSON.results[i];
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