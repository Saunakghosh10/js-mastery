// clock
{
  /* <div class="center">
<div id="banner"><span>Your local time</span></div>
<div id="clock"></div>
</div> */
}
const clock = document.querySelector("#clock");
let date = new Date();

setInterval(function () {
  let date = new Date();
//   let time = date.toLocaleTimeString();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//
