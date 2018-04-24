function start() {
  document.getElementById("button").addEventListener(
    "click",
    () => {
      let text = document.getElementById("text").value;
      let otest = document.getElementById("div");
      for (let i = 1; i <= text; i++) {
        let newnode = document.createElement("div");
        newnode.innerHTML = i;
        newnode.setAttribute("id", i);
        newnode.setAttribute("onclick", change);
        newnode.setAttribute(
          "style",
          "width:100px;height: 100px;background:#d3f261"
        );
        otest.appendChild(newnode);
      }
    },
    false
  );
}
function change() {
  alert("000")
}
window.addEventListener("load", start, false);
