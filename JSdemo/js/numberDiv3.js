function start(){
  document.getElementById("button").addEventListener("click",()=>{
    let old=document.getElementById("div");
    let old1=document.getElementById("button")
    let new=document.createElement("p");
    document.getElementById("p").innerHTML="1";
    old.insertBefore(new,old.lastChild)
  }
    ,false)
}
window.addEventListener("load", start, false);
