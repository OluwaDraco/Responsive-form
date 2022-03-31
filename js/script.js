/************************************ DOM OBJECTS & VARIABLES ************************************/

const nameField = document.getElementById("name");
const otherJobField = document.getElementById("other-job-role");
const jobField = document.getElementById("title");
nameField.focus();
otherJobField.style.display = "none";
const design = document.getElementById("design");
const color = document.getElementById("color");
color.disabled = true;
const activityList = document.getElementById("activities");
const activityCost = document.getElementById("activities-cost");
let totalCost = 0;
const payment = document.querySelector("#payment");
const creditCard = document.getElementById("credit-card");
const payPal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
const paymentMethod = document
    .querySelector("#payment option:nth-child(2)")
    .setAttribute("selected", "true");
payPal.style.display = "none";
bitcoin.style.display = "none";
const userForm = document.querySelector("form");
const emailField = document.getElementById("email");
const cvvField = document.getElementById("cvv");
const ccNumberField = document.getElementById("cc-num");
const zipField = document.getElementById("zip");

/************************************ FUNCTIONS ************************************/

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

/**
 * VALIDATORS
 */

/**
 *
 * @param {para} username checks if the username only contains alphabets
 * @returns boolean
 */
function usernameValidator(username) {
    return /^[a-zA-Z]+$/.test(username);
}
/**
 *
 * @param {para} email checks if the email is properly formatted, [alphabets/0-9]@[alphabets].com/net/org etc.
 * @returns boolean
 */
function emailValidator(mail) {
    return /^[a-zA-Z][a-zA-z0-9.]+@(gmail|yahoo|max).com$/.test(mail);
}
/**
 *
 * @param {para} cvv checks if cvv contains 3 digits only.
 * @returns boolean
 */
function cvvValidator(num) {
    return /[0-9]{3}/.test(num);
}
/**
 *
 * @param {para} zip checks if zip contains 5 digits only.
 * @returns boolean
 */
function zipValidator(num) {
    return /[0-9]{5}/.test(num);
}
/**
 *
 * @param {para} ccnumber checks if ccnumber contains 13-16 digits.
 * @returns boolean
 */
function ccNumberValidator(num) {
    return /[0-9]{13,16}/.test(num);
}

/**
 * VALUE EXTRACTOR
 * returns the 'value' of an html element
 */
function valueExtract(rawData) {
    return rawData.value;
}

/**
 *
 * @param {para} input Accept an element and updates it's class list and style if para ==='false'
 */
function ValidInput(input) {
    input.parentElement.classList.remove("not-valid", "error-border");
    input.parentElement.classList.add("valid");
    input.parentElement.lastElementChild.style.display = "none";
}

/**
 *
 * @param {para} input Accept an element and updates it's class list and style if para ==='True'
 */

function notValidInput(input) {
    input.parentElement.classList.remove("valid");
    input.parentElement.classList.add("not-valid", "error-border");
    input.parentElement.lastElementChild.style.display = "block";
}

/***************************************************************************** */
/**
 * displays the 'other' input field if 'other' is selected under JOB ROLE
 */
jobField.addEventListener("change", (e) => {
    const list = document.querySelectorAll("#title option");

    for (let i = 0; i < list.length; i++) {
        if (e.target.value === "other") {
            otherJobField.style.display = "";
        } else {
            otherJobField.style.display = "none";
        }
    }
});

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

/**
 * Activity selection cost.calculates the total cost .
 *
 */
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

payment.addEventListener("change", (e) => {
    if (e.target.value === "credit-card") showUI(creditCard, payPal, bitcoin);
    if (e.target.value === "paypal") showUI(payPal, bitcoin, creditCard);
    if (e.target.value === "bitcoin") showUI(bitcoin, payPal, creditCard);
});

/**
 * FORM VALIDATION
 */

userForm.addEventListener("submit", (event) => {
    const nameInput = valueExtract(nameField);
    const emailInput = valueExtract(emailField);
    const cvvInput = valueExtract(cvvField);
    const ccNumberInput = valueExtract(ccNumberField);
    const zipInput = valueExtract(zipField);

    if (totalCost === 0) {
        event.preventDefault();
    } else {
        if (usernameValidator(nameInput)) {
            ValidInput(nameField);
        } else {
            event.preventDefault();
            notValidInput(nameField);
        }

        if (!emailValidator(emailInput)) {
            event.preventDefault();
            notValidInput(emailField);
        } else {
            ValidInput(emailField);
        }

        if (payment.value === "credit-card") {
            if (!ccNumberValidator(ccNumberInput)) {
                event.preventDefault();
                notValidInput(ccNumberField);
            } else {
                ValidInput(ccNumberField);
            }

            if (!cvvValidator(cvvInput)) {
                event.preventDefault();
                notValidInput(cvvField);
            } else {
                ValidInput(cvvField);
            }

            if (!zipValidator(zipInput)) {
                event.preventDefault();
                notValidInput(zipField);
            } else {
                ValidInput(zipField);
            }
        }
    }
});

const checkBox = document.querySelectorAll(
    "#activities-box input[type=checkbox]"
);
/**
 * ADDs styling to "focused" and "blur" state of the  input fields
 */
for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].addEventListener("focus", (e) => {
        checkBox[i].parentElement.classList.add("focus");
    });

    checkBox[i].addEventListener("blur", (e) => {
        checkBox[i].parentElement.classList.remove("focus");
    });
}
