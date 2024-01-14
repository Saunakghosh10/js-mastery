// document.getElementById("owl").onclick = function () {
//   alert("You clicked the owl!");
// };

// document.getElementById("owl").addEventListener("click", function (e) {
//   console.log(e);
// });

// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     console.log("clicked on ul");
//   },
//   false
// );
// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log("clicked on owl");
//   },
//   false
// );

document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.tagname);
  console.log(e.target.parentNode);
  if (e.target.tagname === "IMG") {
    console.log(e.target.id);
    let removeit = e.target.parentNode;
    removeit.remove();
  }
});
