function init() {
  // 监听按钮 ，当按按钮时候，触发
  document.getElementById("onChange").addEventListener("click", () => {
    // 将div1 内的内容储存
    let div1 = document.getElementById("div1").innerHTML;
    document.getElementById("div1").innerHTML = document.getElementById("div2").innerHTML;
    document.getElementById("div2").innerHTML = div1;
  }, false);
}
// 当网页开始load时候运行init 函数
window.addEventListener("load", init, false);
