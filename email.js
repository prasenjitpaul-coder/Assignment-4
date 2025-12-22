
const customerdetails = [{
    fullname: [],
    email: [],
    phoneNo: [],
}];


function sendEmail() {
  const templateParams = {
  name: customerdetails[0].fullname,
  subject: "Order Confirmation",
  email:  customerdetails[0].email,
  message: "Thank you For Booking the Service We will get back to you soon!",
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
    customerdetails[0].fullname = rightcheckoutemailfullnamelabel.value;
    customerdetails[0].email = rightcheckoutemailemaillabel.value;
    customerdetails[0].phoneNo = rightcheckoutemailphonelabel.value;
      
    if ((addedCount > 0 && customerdetails[0].email !== "") && customerdetails[0].phoneNo !== "") {
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