// const { createElement } = require("react");

const services = ["Dry Cleaning", "Wash & Fold", "Ironing", "Stain Removal", "Leather & Suede Cleaning", "Wedding Dress Cleaning"];
const price = [200, 100, 30, 500, 999, 2800];
const cart = [];

const btndeladd = document.querySelectorAll(".btn-del-add");
const add = document.querySelectorAll(".add");
const minus = document.querySelectorAll(".minus");
const rightcheckoutemailalert = document.getElementsByClassName("right-checkout-email-alert")[0];
const rightcheckoutitemsadddel = document.querySelector(".right-checkout-items-add-del h1");
const rightcheckoutitemsaddde2 = document.querySelector(".text");
const NoItemsAdded = document.getElementById("NoItemsAdded");
const cartList = document.getElementById("cartList");
const total = document.querySelector(".total")
const btnBookNow = document.getElementById("btn-book-now")


function renderCart() {

    cartList.innerHTML = ""; // clear old list

    cart.forEach((item, index) => {

        const div1 = document.createElement("div");
        div1.className = "right-checkout-items-add-del-itemslist";
        const p1 = document.createElement("p");
        const span1 = document.createElement("span");
        const p2 = document.createElement("p");

        p1.innerText = index + 1;

        span1.innerText = `${item.name}`
        p1.appendChild(span1);

        p2.innerText = `₹${item.price}.00`

        div1.appendChild(p1);
        div1.appendChild(p2);
        cartList.appendChild(div1);

    });

};











let totalnumber = 0;

let addedCount = cart.length;








btndeladd.forEach((btn, index) => {



    btn.addEventListener("click", () => {
        const Itemindex = cart.findIndex(item => item.name === services[index]);

        if (Itemindex > -1) {
            totalnumber = totalnumber - price[index];
            cart.splice(Itemindex, 1)
        } else {
            totalnumber += price[index];
            cart.push({ name: services[index], price: price[index] })
        }

        if (btndeladd[index].innerText === "Remove Item") {
            btndeladd[index].innerText = "Add Item";
          
            btndeladd[index].style.color = "";
            add[index].style.display = "block";
            minus[index].style.display = "none";
            addedCount--;
            console.log(addedCount);


            total.innerText = totalnumber;



            if (addedCount === 0) {
                NoItemsAdded.style.display = "block";
                rightcheckoutitemsadddel.style.display = "block";
                rightcheckoutitemsaddde2.style.display = "block";
            }


        } else {
            btndeladd[index].innerText = "Remove Item"
        
            NoItemsAdded.style.display = "none";
            rightcheckoutitemsadddel.style.display = "none";
            rightcheckoutitemsaddde2.style.display = "none";
            btndeladd[index].style.color = "red"
            add[index].style.display = "none"
            minus[index].style.display = "block"
            minus[index].style.color = "red"
            rightcheckoutemailalert.style.display = "none"
            btnBookNow.classList.remove("btn-book-now2");
            btnBookNow.classList.add("btn-book-now1");
            addedCount++;
            console.log(addedCount);

            total.innerText = totalnumber;

        }
        renderCart();
    });
});


btnBookNow.addEventListener("click", () => {

    if (addedCount === 0) {
        rightcheckoutemailalert.style.display = "block"
        btnBookNow.classList.remove("btn-book-now1");
        btnBookNow.classList.add("btn-book-now2");



    } else {
        rightcheckoutemailalert.style.display = "none"
        btnBookNow.classList.remove("btn-book-now2");
        btnBookNow.classList.add("btn-book-now1");



    }
})  