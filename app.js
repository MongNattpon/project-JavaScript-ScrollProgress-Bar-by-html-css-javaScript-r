const progressEl = document.querySelector(".progress");
const buttonTop = document.querySelector(".top")
const pageHeight = document.documentElement // --  refer to tag Html -- 
window.onscroll = () => scrollProcress();

//-- start ScrollProgress Bar --
function scrollProcress() {
  //*Find the Webpageheight value.
  const heightWebpage = pageHeight.scrollHeight - pageHeight.clientHeight;
  const scrollTop = document.documentElement.scrollTop;

  //* convert Webpageheight is Percentage * 100  = % 
  const scrollPercentage = (scrollTop / heightWebpage) * 100;
  progressEl.style.visuibilty = "visible";
  progressEl.style.width = scrollPercentage + "%";

  //-- End ScrollProgress Bar --


  
  //--start ScrollTotop -- 
  if (scrollPercentage > 30) { //-- 30%  --
    buttonTop.classList.add("show-btn")

  } else if (scrollPercentage === 0) {
    buttonTop.classList.remove("show-btn")

  }

  // -- Event ScrollToTop ---
  buttonTop.addEventListener("click",scrollToTop)
  function scrollToTop(){
    pageHeight.scrollTo({
      top:0,
      behavior:"smooth"
    })
  
  }
     //-- End  ---     
}
  
  






