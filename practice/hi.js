console.log("hello bro..");
// localStorage.setItem("useename" , "shanto");
// console.log(localStorage.getItem("username")); 
const buton = document.querySelector("body");
const allbttn = document.querySelectorAll("button");
allbttn.forEach((bttn)=>{
  bttn.addEventListener('click' , ()=>
  {
    //console.log(bttn);
    localStorage.setItem("colorTheme"  , bttn.textContent.toLowerCase());
    setcolo();
  })

})

function setcolo(){
  let color = localStorage.getItem("colorTheme");
  buton.style.background=color;
}
//setcolo();