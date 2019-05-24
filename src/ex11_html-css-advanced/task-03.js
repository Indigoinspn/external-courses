var inputLabel = document.getElementsByClassName("input-label")[0],
    inputField = document.getElementsByClassName("input-field")[0];

function toggleLabel() {
    if (inputField.value > "") {
        inputLabel.style.opacity = "1";
        inputField.placeholder = "";
    }
    else if (inputField.value === "") {
        inputLabel.style.opacity = "0";
        inputField.placeholder = "Email";
    }
};

function showLabelForInvalid() {
    inputLabel.style.opacity = "1";
    inputLabel.innerHTML = "Wrong value! Please enter correct email.";
    inputLabel.style.color = "#f20a0a";
    inputField.placeholder = "";
}

/************************ EVENT LISTENERS ****************************/
inputField.addEventListener("input", toggleLabel);
inputField.addEventListener("invalid", showLabelForInvalid);