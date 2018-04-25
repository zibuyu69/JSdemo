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
        newnode.setAttribute(
          "style",
          "width:100px;height: 100px;background:#ffd591"
        );
        otest.appendChild(newnode);

        newnode.addEventListener('click', function (){
            if (document.getElementById(i).style.backgroundColor == "rgb(255, 213, 145)") {
                document.getElementById(i).style.backgroundColor = '#91d5ff';
			}else {
                document.getElementById(i).style.backgroundColor = '#ffd591';}
            }
          )

      }
    },
    false
  );
}

window.addEventListener("load", start, false);
