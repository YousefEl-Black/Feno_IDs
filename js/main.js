// Define Form 

let form = document.querySelector(".project form");
let submit = document.querySelector(".project form .submit");
let radioProduct = document.querySelector("#product");
let radioWorker = document.querySelector("#worker");
let radioCostoumer = document.querySelector("#costoumer");
let resultProduct = document.querySelector(".result-product");
let resultWorker = document.querySelector(".result-worker");
let resultCostoumer = document.querySelector(".result-costoumer");


// Define Input

let id = document.querySelector("#id");
let productId = document.getElementById("product-id");
let workerId = document.getElementById("worker-id");
let costoumerId = document.getElementById("costoumer-id");


radioProduct.onclick = function () {
  if (radioWorker.hasAttribute("checked")) {
    radioWorker.removeAttribute("checked");
  }
  
  if (radioCostoumer.hasAttribute("checked")) {
    radioCostoumer.removeAttribute("checked");
  }

  radioProduct.setAttribute("checked", "checked");
  
}

radioWorker.onclick = function () {
  if (radioProduct.hasAttribute("checked")) {
    radioProduct.removeAttribute("checked");
  }
  
  if (radioCostoumer.hasAttribute("checked")) {
    radioCostoumer.removeAttribute("checked");
  }

  radioWorker.setAttribute("checked", "checked");
  
}

radioCostoumer.onclick = function () {
  if (radioWorker.hasAttribute("checked")) {
    radioWorker.removeAttribute("checked");
  }
  
  if (radioProduct.hasAttribute("checked")) {
    radioProduct.removeAttribute("checked");
  }

  radioCostoumer.setAttribute("checked", "checked");
  
}

submit.onclick = function () {
  if (radioProduct.hasAttribute("checked")) {
    if (myProducts[`${id.value}`] == undefined) {
      window.alert("Error")
    } else if (id.value == "") {
      window.alert("Error")
    } else {
      resultProduct.classList.toggle("none");
      form.classList.toggle("none");
      document.getElementById("link").value = myProducts[`${id.value}`].link;
      document.getElementById("product-name").value = myProducts[`${id.value}`].name;
      document.getElementById("product-price").value = myProducts[`${id.value}`].price;
    }
  }
  
  if (radioWorker.hasAttribute("checked")) {
    if (myWorkers[`${id.value}`] == undefined) {
      window.alert("Error")
    } else if (id.value == "") {
      window.alert("Error")
    } else {
      resultWorker.classList.toggle("none");
      form.classList.toggle("none");
      document.getElementById("worker-name").value = myWorkers[`${id.value}`].name;
      document.getElementById("worker-phone-1").value = myWorkers[`${id.value}`].phoneOne;
      document.getElementById("worker-phone-2").value = myWorkers[`${id.value}`].phoneTwo;
      document.getElementById("worker-finished").value = myWorkers[`${id.value}`].ordersFinished;
      document.getElementById("worker-money").value = myWorkers[`${id.value}`].money;
      document.getElementById("worker-address-1").value = myWorkers[`${id.value}`].addressOne;
      document.getElementById("worker-address-2").value = myWorkers[`${id.value}`].addressTwo;
    }
  }

  if (radioCostoumer.hasAttribute("checked")) {
    if (myCostoumers[`${id.value}`] == undefined) {
      window.alert("Error")
    } else if (id.value == "") {
      window.alert("Error")
    } else {
      resultCostoumer.classList.toggle("none");
      form.classList.toggle("none");
      document.getElementById("costoumer-name").value = myCostoumers[`${id.value}`].name;
      document.getElementById("costoumer-phone-1").value = myCostoumers[`${id.value}`].phoneOne;
      document.getElementById("costoumer-phone-2").value = myCostoumers[`${id.value}`].phoneTwo;
      document.getElementById("costoumer-sell").value = myCostoumers[`${id.value}`].sell;
      document.getElementById("costoumer-cashback").value = myCostoumers[`${id.value}`].cashback;
      document.getElementById("costoumer-address-1").value = myCostoumers[`${id.value}`].addressOne;
      document.getElementById("costoumer-address-2").value = myCostoumers[`${id.value}`].addressTwo;
    }
  }

  productId.value = id.value;
  workerId.value = id.value;
  costoumerId.value = id.value;
}

// Back

document.querySelector(".result-product .back").onclick = function () {
  id.value = "";
  resultProduct.classList.toggle("none");
  form.classList.toggle("none");
}

document.querySelector(".result-worker .back").onclick = function () {
  id.value = "";
  resultWorker.classList.toggle("none");
  form.classList.toggle("none");
}

document.querySelector(".result-costoumer .back").onclick = function () {
  id.value = "";
  resultCostoumer.classList.toggle("none");
  form.classList.toggle("none");
}

document.querySelector(".go").onclick = function () {
  window.open(`${myProducts[`${id.value}`].link}`, "_blank")
}
