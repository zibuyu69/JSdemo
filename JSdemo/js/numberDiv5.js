function  start(){
  document.getElementById("button").addEventListener("click", () => {

    let num=7;
  for(let i=0;i<num;i++){
    //增加div
    let otest=document.getElementById("div")
    let newdiv=document.createElement("li");
    newdiv.style="width:100px;height:100px;display:inline-block;background:#d3f261"
    otest.setAttribute("name",i)
    otest.appendChild(newdiv)
    //增加按钮

    let newbutt=document.createElement("input")
    newbutt.setAttribute("type","button")
    newbutt.setAttribute("value","显示数字")
    newbutt.setAttribute("onclick","number()")
    newbutt.setAttribute("id",i)
    otest.appendChild(newbutt)

  }
    }, false)

}
function number(){
    
}
window.addEventListener("load", start, false);
