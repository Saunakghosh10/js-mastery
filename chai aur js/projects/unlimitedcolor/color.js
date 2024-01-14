const randomcolor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
const startchangingcolor = function () {
  document.querySelector("body").style.backgroundColor = randomcolor();
};

const stopchaningcolor = function () {
  clearInterval(intervalid);
  intervalid = null;
};

document.querySelector("#start").addEventListener("click", function () {
  intervalid = setInterval(startchangingcolor, 1000);
});
document.querySelector("#stop").addEventListener("click", stopchaningcolor);

