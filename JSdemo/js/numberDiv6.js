function start(){
let text=document.getElementById("text2").value
console.log(text);
if(text>=1 && text<=3){
 let number=text;
 for(let i=1;i<=3;i++){
    if(number==i){
      let divx=document.getElementById("div"+i);
      console.log(divx);
      let style =divx.getAttribute("style");
      console.log(style);
      divx.setAttribute("style","width:100px;height: 100px;background:#610b00")
    }
 }
}else{
  let otest=document.getElementById("div");
  let oldDiv=document.getElementById("text2");
  let newDiv=document.createElement("p");
  newDiv.innerHTML="非法字符";
  otest.insertBefore(newDiv,oldDiv);
}
}
function change(){
  let num=document.getElementById("text1").value;
  console.log(num);
  for(let i=1;i<=num;i++){
    let otest=document.getElementById("div");
    let newdiv=document.createElement("div");
    newdiv.innerHTML="001";
    otest.appendChild(newdiv);
    newdiv.setAttribute("id","div"+i);
    newdiv.setAttribute("style","width:100px;height: 100px;background:#d3f261")


  }
}
