function start() {
  document.getElementById("button1").addEventListener("click", () => {
    clear();
    document.getElementById("number1").innerHTML = 1;
  }, false);
  document.getElementById("button2").addEventListener("click", () => {
    clear();
    document.getElementById("number2").innerHTML = 2;
  }, false);
  document.getElementById("button3").addEventListener("click", () => {
    clear();
    document.getElementById("number3").innerHTML = 3;
  }, false);
  document.getElementById("button4").addEventListener("click", () => {
    clear();
    document.getElementById("number4").innerHTML = 4;
  }, false);
}
function clear() {
  document.getElementById("number1").innerHTML = "";
  document.getElementById("number2").innerHTML = "";
  document.getElementById("number3").innerHTML = "";
  document.getElementById("number4").innerHTML = "";
}
window.addEventListener("load", start, false);
