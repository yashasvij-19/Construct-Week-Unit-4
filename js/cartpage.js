let cartdata = JSON.parse(localStorage.getItem("cartdata"));

if (cartdata) {
  let tophead = document.querySelector(".tophead");
  tophead.innerHTML = `${cartdata.length} Items in your Bag`;

  let allcarted = document.querySelector(".allcarted");
  allcarted.innerHTML = "";
  let totalprice = 0;
  cartdata.forEach((element) => {
    let div = document.createElement("div");
    div.setAttribute("class", "cartcontainer");
    let img = document.createElement("img");
    img.src = `${element.img}`;

    let h5 = document.createElement("h5");
    h5.innerText = `${element.name}`;
    let mrp = document.createElement("h5");
    mrp.innerText = `MRP:${element.mrp}`;

    div.append(img, h5, mrp);
    allcarted.append(div)
    totalprice += element.mrp;
  });


  let total = document.querySelector(".total");
  total.innerHTML = `Grand Total : ${totalprice} &#8377`
}
