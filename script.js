 document.querySelector("#navigation").addEventListener("mouseover", mouseOver);

 function mouseOver() {
     console.log("mouseOver");

     document.querySelector("#content").classList.remove("hidden");

     document.querySelector("#navigation").addEventListener("mouseout", mouseOut);
 }

 function mouseOut() {
     console.log(mouseOut);
     document.querySelector("#content").classList.add("hidden");

 }
