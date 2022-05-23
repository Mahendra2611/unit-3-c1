document.querySelector("#add_more_product").addEventListener("click",myFun2);

function myFun2(){
  window.location.href = "index.html";
}
var data = JSON.parse(localStorage.getItem("products"))

data.map(function(el,i){
  console.log("inside main")
  var container = document.querySelector("#all_products");

  var div = document.createElement("div");
  var img = document.createElement("img");
  img.src = el.image;

  var type = document.createElement("p");
  type.innerText = el.type;

  var desc = document.createElement("p");
  desc.innerText = el.desc;

  var price = document.createElement("p");
  price.innerText = el.price;

  var btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.setAttribute("id","remove_product")
  btn.addEventListener("click",function(){
      removeData(el,i);
  })

  div.append(img,type,desc,price,btn);
  container.append(div);
})

function removeData(el,i){
    data.splice(i,1);
    localStorage.setItem("products",JSON.stringify(data));
    window.location.reload();
}