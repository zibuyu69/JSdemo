function start() {
  document.getElementById("button").addEventListener(
    "click",
    () => {
      let text = document.getElementsByName("type");
      for (let i = 0; i <= text.length; i++) {
        if (text[i].innerHTML == 0 ) {
          text[i].innerHTML="模式A"
        }else if(text[i].innerHTML == 1){
            text[i].innerHTML="模式B"
        }
      }
    },
    false
  );
}

window.addEventListener("load", start, false);
