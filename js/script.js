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
        console.log(totalCost);
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

    if (
        usernameValidator(nameInput && emailValidator(emailInput)) &&
        totalCost > 0 &&
        payment.value !== "credit-card"
    ) {
        console.log("first test past");
    }

    else if (
        payment.value == "credit-card" &&
        ccNumberValidator(ccNumberInput) &&
        cvvValidator(cvvInput) &&
        zipValidator(zipInput) &&
        usernameValidator(nameInput && emailValidator(emailInput)) &&
        totalCost > 0
    ) {
        console.log("second test past");
    }

    else{
        event.preventDefault();
    }
});
