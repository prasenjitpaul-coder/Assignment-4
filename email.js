
const customerdetails = {
    fullname: "",
    email: "",
    phoneNo: "",
    total: 0,
    cart:"",
};
function formatCart(cart) {
    if (cart.length === 0) return "No items selected";

    return cart
        .map((item, index) => `${index + 1}. ${item.name} - ₹${item.price}`)
        .join("\n");
}


function sendEmail() {
    const templateParams = {
        name: customerdetails.fullname,
        email: customerdetails.email,
        phoneNumber: customerdetails.phoneNo,
        cart: customerdetails.cart,
        totalNumber: `₹${customerdetails.total}.00`,
        subject: "Order Confirmation",
        message: "Thank you for booking the service. We will contact you soon!"
    };
emailjs.send('service_vs678d7', 'template_a4oj349', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);  
}










const btnBookNow1 = document.getElementById("btn-book-now");
const rightcheckoutemailfullnamelabel = document.querySelector(".right-checkout-email-fullname-label input")
const rightcheckoutemailemaillabel = document.querySelector(".right-checkout-email-email-label input")
const rightcheckoutemailphonelabel = document.querySelector(".right-checkout-email-phone-label input")

const rightcheckoutemailalert2 = document.querySelector(".right-checkout-email-alert2");

const btnbooknow = document.getElementById("btn-book-now");






btnbooknow.addEventListener("click", () => {
     customerdetails.fullname = rightcheckoutemailfullnamelabel.value.trim();
    customerdetails.email = rightcheckoutemailemaillabel.value.trim();
    customerdetails.phoneNo = rightcheckoutemailphonelabel.value.trim();

    
    customerdetails.total = totalnumber;
    customerdetails.cart = formatCart(cart);
      
    if ((addedCount > 0 && customerdetails.email !== "") && customerdetails.phoneNo !== "") {
           sendEmail();
        rightcheckoutemailalert2.style.display = "block"
        setTimeout(() => {
        
            rightcheckoutemailalert2.style.display = "none";
        }, 3000);


        console.log(customerdetails);
    } else {

        btnBookNow1.classList.remove("btn-book-now1");
        btnBookNow1.classList.add("btn-book-now2");
    }
})

