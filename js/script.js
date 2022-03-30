const nameField = document.getElementById("name");
const otherJobField = document.getElementById("other-job-role");
const jobField = document.getElementById("title");
/**
 *
 * @param {*} show  div to display
 * @param {*} hide  div to hide
 * @param {*} hide2 div to hide
 */
function showUI(show, hide, hide2) {
    show.style.display = "block";
    hide2.style.display = "none";
    hide.style.display = "none";
}

nameField.focus();
otherJobField.style.display = "none";

jobField.addEventListener("change", (e) => {
    const list = document.querySelectorAll("#title option");

    for (let job of list) {
        if (e.target.value === "other") {
            otherJobField.style.display = "";
        } else {
            otherJobField.style.display = "none";
        }
    }
});
/**
 *
 */
const design = document.getElementById("design");
const color = document.getElementById("color");
color.disabled = true;

/**
 * when a design is picked only color options of that option is displayed the rest are hidden.
 */
design.addEventListener("change", (e) => {
    const colorOptions = document.querySelectorAll("#color option");
    color.disabled = false;
    for (let colors of colorOptions) {
        colors.style.display = "none";
        if (e.target.value === colors.getAttribute("data-theme")) {
            colors.style.display = "";
        }
    }
});

const activityList = document.getElementById("activities");
const activityCost = document.getElementById("activities-cost");
let totalCost = 0;

activityList.addEventListener("change", (e) => {
    let cost = e.target.getAttribute("data-cost");
    cost = +cost;
    if (e.target.checked == true) {
        totalCost += cost;
    }
    if (e.target.checked !== true) {
        totalCost -= cost;
    }
    activityCost.innerHTML = `Total: $${totalCost}`;
});
const payment = document.querySelector("#payment");
const creditCard = document.getElementById("credit-card");
const payPal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
const paymentMethod = document
    .querySelector("#payment option:nth-child(2)")
    .setAttribute("selected", "true");
payPal.style.display = "none";
bitcoin.style.display = "none";

payment.addEventListener("change", (e) => {
    if (e.target.value === "credit-card") showUI(creditCard, payPal, bitcoin);
    if (e.target.value === "paypal") showUI(payPal, bitcoin, creditCard);
    if (e.target.value === "bitcoin") showUI(bitcoin, payPal, creditCard);
});

/**
 * VALIDATORS
 */

function usernameValidator(username) {
    return /^[a-zA-Z]+$/.test(username);
}

function emailValidator(mail) {
    return /^[a-zA-Z][a-zA-z0-9.]+@(gmail|yahoo|max).com$/.test(mail);
}

function cvvValidator(num) {
    return /[0-9]{3}/.test(num);
}

function zipValidator(num) {
    return /[0-9]{5}/.test(num);
}
function ccNumberValidator(num) {
    return /[0-9]{13,16}/.test(num);
}

/**
 * VALUE EXTRACTOR
 */
function valueExtract(rawData) {
    return rawData.value;
}

/**
 * FORM VALIDATION
 */

const userForm = document.querySelector("form");
const emailField = document.getElementById("email");
const cvvField = document.getElementById("cvv");
const ccNumberField = document.getElementById("cc-num");
const zipField = document.getElementById("zip");

userForm.addEventListener("submit", (event) => {
    const nameInput = valueExtract(nameField);
    const emailInput = valueExtract(emailField);
    const cvvInput = valueExtract(cvvField);
    const ccNumberInput = valueExtract(ccNumberField);
    const zipInput = valueExtract(zipField);

    if(!usernameValidator(nameInput)){
        event.preventDefault();
        nameField.classList.add('not-valid');
        nameField.classList.remove('valid');
        nameField.parentElement.lastElementChild.style.display ='block';
    }else{
        nameField.classList.remove('not-valid');
        nameField.classList.add('valid');
        nameField.parentElement.lastElementChild.style.display ='hide';
    }

    if(!emailValidator(emailInput)){
        event.preventDefault();
        emailField.classList.add('not-valid');
        emailField.classList.remove('valid');
        emailField.parentElement.lastElementChild.style.display ='block';
    }else{
        emailField.classList.remove('not-valid');
        emailField.classList.add('valid');
        emailField.parentElement.lastElementChild.style.display ='hide';
    }



   if( payment.value === "credit-card"){
    if(!ccNumberField(ccNumberInput)){
        event.preventDefault();
        ccNumberField.classList.add('not-valid');
        ccNumberField.classList.remove('valid');
        ccNumberField.parentElement.lastElementChild.style.display ='block';
    }else{
        ccNumberField.classList.remove('not-valid');
        ccNumberField.classList.add('valid');
        ccNumberField.parentElement.lastElementChild.style.display ='hide';
    }

       
   }
});

const checkBox = document.querySelectorAll('#activities-box input[type=checkbox]');
console.log(checkBox);

for(let i =0;i<checkBox.length;i++){
    checkBox[i].addEventListener('focus', e=>{
        checkBox[i].parentElement.classList.add("focus");
    });

    checkBox[i].addEventListener('blur',e=>{
        checkBox[i].parentElement.classList.remove("focus");
    });
}


/**
 * Accessibility INPUT VALIDATION
 */

// if(usernameValidator(usernameInput)){
//     x.classList.add('valid');
//     x.lastElementChild.style.display= 'none'

// }
// else{
//     document.getElementById.classList.remove('valid');
//     document.getElementById.classList.add('not-valid');
//     x.lastElementChild.style.display= 'show'
// }

// if(emailValidator(usernameInput)){
//     x.classList.add('valid');
//     x.lastElementChild.style.display= 'none'

// }
// else{
//     document.getElementById.classList.remove('valid');
//     document.getElementById.classList.add('not-valid');
//     x.lastElementChild.style.display= 'show'
// }