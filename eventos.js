
let button = document.getElementById("btn");
button.addEventListener("click",function(event)
{
  alert("Hola");
  event.stopPropagation();
});

let div = document.querySelector("div");
div.addEventListener("click", function()
{
  alert("Hola soy el DIV");
});