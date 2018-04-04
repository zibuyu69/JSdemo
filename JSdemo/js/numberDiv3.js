function start() {
  document.getElementById("button").addEventListener("click", () => {
    document.getElementById("div").innerHTML += '<div id="number1" style="width:100px;height:100px;display:inline-block;background:#d3f261"></div>';
  }, false)
}
window.addEventListener("load", start, false);
