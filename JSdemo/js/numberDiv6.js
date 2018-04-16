function start(){
let text=document.getElementById("text2").value
console.log(text);
 let number=text;
     let divx=document.getElementById("div"+number);
      console.log(divx);
      let style =divx.getAttribute("style");
      console.log(style);
      divx.setAttribute("style","width:100px;height: 100px;background:#610b00")



}
function change(){
  let num=document.getElementById("text1").value;
  console.log(num);
  for(let i=1;i<=num;i++){
    let otest=document.getElementById("div");
    let newdiv=document.createElement("div");
    newdiv.innerHTML="00"+i;
    otest.appendChild(newdiv);
    newdiv.setAttribute("id","div"+i);
    newdiv.setAttribute("style","width:100px;height: 100px;background:#d3f261")
  }
}
