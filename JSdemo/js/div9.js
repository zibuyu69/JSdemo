function start() {
  document.getElementById("button").addEventListener(
    "click",
    () => {
      let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let otest = document.getElementById("div");
      let table = document.createElement("table");
      table.setAttribute("border", "2");
      otest.appendChild(table);
      let list = arr.length;
      let line = 2;
      for (let i = 1; i <= line; i++) {
        if (i == 1) {
          let tr = document.createElement("tr");
          tr.innerHTML = "type";
          for (var j = 0; j <= list; j++) {
            if (j == 0) {
              var td = document.createElement("td");
              tr.name = "type";
              td.innerHTML = "模式A";
              tr.setAttribute("name", "type");
              tr.appendChild(td);
            } else {
              var td = document.createElement("td");
              tr.name = "type";
              td.innerHTML = j;
              tr.setAttribute("name", "type");
              tr.appendChild(td);
            }
          }
          table.appendChild(tr);
        } else if (i == 2) {
          let tr = document.createElement("tr");
          tr.innerHTML = "name";
          for (var j = 0; j <= list; j++) {
            var td = document.createElement("td");
            let old = j.toString();
            for (let n = 0; n <= j; n++) {
              let old1 = old + n;
              console.log(old1);
              td.innerHTML = old1;

            }
            tr.appendChild(td);
          }
          table.appendChild(tr);
        }
      }
    },
    false
  );
}

window.addEventListener("load", start, false);
