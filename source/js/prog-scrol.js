// When the user scrolls the page, execute myFunction to set the progres on the scroll bars
window.onscroll = function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myHorizontalBar").style.width = scrolled + "%";
  document.getElementById("myVerticalBar").style.height = scrolled + "%";
};