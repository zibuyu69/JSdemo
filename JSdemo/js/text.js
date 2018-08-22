function init() {
  document.getElementById("tb1").addEventListener(
    "mouseenter",
    () => {
      if (document.getElementById("tb1").className === "button") {
        document.getElementById("tb1").className = "button active";
        document.getElementById("tb2").className = "button";
      }
      if (document.getElementById("tab1").className === "context hide") {
        document.getElementById("tab1").className = "context";
        document.getElementById("tab2").className = "context hide";
      }
    },
    false
  );
  document.getElementById("tb2").addEventListener(
    "mouseenter",
    () => {
      if (document.getElementById("tb2").className === "button") {
        document.getElementById("tb2").className = "button active";
        document.getElementById("tb1").className = "button";
      }

      if (document.getElementById("tab2").className === "context hide") {
        document.getElementById("tab2").className = "context";
        document.getElementById("tab1").className = "context hide";
      }
    },
    false
  );
}
// 当网页开始load时候运行init 函数
window.addEventListener("load", init, false);
