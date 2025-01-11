// Menu toggle
const menuToggle = document.getElementById("menuToggle");
const navList = document.querySelector(".sitenav__list");

const hamIcon = "./images/home/mobile/Group.svg";
const closeIcon = "./images/home/desktop/close.png";

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("none");
  console.log("hello");
  
if (navList.classList.contains("none")) {
    menuToggle.src=closeIcon;
  }
  else {
   menuToggle.src=hamIcon 
  }
 

});
 
  