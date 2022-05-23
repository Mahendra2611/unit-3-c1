//store the products array in localstorage as "products"

  document.querySelector("#show_products").addEventListener("click",myFun);
  function myFun(){
    window.location.href = "inventory.html";
  }

  var objArr = JSON.parse(localStorage.getItem("products")) || [];


  document.querySelector("#products").addEventListener("submit",myFun1);
  function myFun1(){
    event.preventDefault();
    
    let type = document.getElementById("type").value;
    let desc = document.getElementById("desc").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;

    let obj = {
      type:type,
      desc:desc,
      price:price,
      image:image,
    }
    
    objArr.push(obj);

    localStorage.setItem("products",JSON.stringify(objArr));



  }

