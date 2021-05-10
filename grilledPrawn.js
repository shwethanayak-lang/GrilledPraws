let addRow = () => {
  var para = document.createElement("p");
  
var node = document.createTextNode("This is new.");
para.appendChild(node);
  var element = document.getElementById("signup__form--one");
  element.appendChild(para);
  

// const toggleDiv = () => {
//   var element = document.getElementsByClassName("filterrecipe__sort");
//   element.classList.toggle("filterrecipe__type");
// };

  var coll = document.getElementsByClassName("filterrecipe__sort");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var filterrecipe__type = this.nextElementSibling;
      if (filterrecipe__type.style.display === "block") {
        filterrecipe__type.style.display = "none";
      } else {
        filterrecipe__type.style.display = "block";
      }
    });
  }
