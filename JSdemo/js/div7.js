function start() {
  document.getElementById("button").addEventListener(
    "click",
    () => {
      let otest = document.getElementById("div");
      let number = document.getElementById("text").value;
      for (let i = 1; i <= number; i++) {
        let j = Math.floor(Math.random() * 100 + 1);
        let newDiv = document.createElement("div");
        newDiv.innerHTML = j;
        otest.appendChild(newDiv);
        newDiv.setAttribute("id", j);
        newDiv.setAttribute(
          "style",
          "width:100px;height: 100px;background:#d3f261"
        );
      }
    },
    false
  );
  document.getElementById("button1").addEventListener(
    "click",
    () => {
      let number = document.getElementById("text").value;
      let list = document.getElementsByTagName("div");
      let otest = document.getElementById("div");

      console.log(number);
      console.log(list);
      console.log(list.length);
      for (let i = 1; i <= list.length; i++) {

      }

    },
    false
  );
}
window.addEventListener("load", start, false);
