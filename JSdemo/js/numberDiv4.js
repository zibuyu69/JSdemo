function  start(){
  let arr=[2,4,6,9,10]
  document.getElementById("button").addEventListener("click", () => {
  for(let i=0;i<arr.length;i++){
    document.getElementById("div").innerHTML+= '<div id="number" style="width:100px;height:100px;display:inline-block;background:#d3f261">'+ arr[i]+'</div>';
  }
    }, false)

}
window.addEventListener("load", start, false);
