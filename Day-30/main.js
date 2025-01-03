const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const bioInput = document.getElementById("bio");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitButton = document.querySelector(".submitButton");

const namePattern = /^[a-zA-Z0-9]{3,16}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPattern = /^[a-zA-Z0-9@_-]{8,20}$/;
const mobilePattern = /^\d{11}$/;
const bioPattern = /^[a-z_-]{10,50}$/;

const errorMessages = {
    firstName: "First name must be alphanumeric and 3-16 characters long.",
    lastName: "Last name must be alphanumeric and 3-16 characters long.",
    email: "Please enter a valid email (e.g., example@example.com).",
    phone: "Mobile number must be exactly 11 digits.",
    bio: "Bio must contain 10-50 characters and only lowercase letters, underscores, and hyphens.",
    password: "Password must be 8-20 characters and alphanumeric (special characters @, _, - allowed).",
    confirmPassword: "Passwords must match."
};

const fieldValidity = {
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    bio: false,
    password: false,
    confirmPassword: false,
};

function updateButtonProgress() {
    const validCount = Object.values(fieldValidity).filter(Boolean).length;
    const progressPercentage = Math.round((validCount / 7) * 100);

    // Update button background and text based on progress
    submitButton.style.background = `linear-gradient(90deg, green ${progressPercentage}%, #ccc ${progressPercentage}%)`;

    if (progressPercentage === 100) {
        submitButton.disabled = false;
        submitButton.style.cursor = "pointer";
        submitButton.textContent = "Submit";
    } else {
        submitButton.disabled = true;
        submitButton.style.cursor = "not-allowed";
    }
}


function validateField(inputElement, pattern, alertElement, errorMessage, fieldKey) {
    const isValid = pattern.test(inputElement.value);
    fieldValidity[fieldKey] = isValid;
    if (isValid) {
        inputElement.style.border = "2px solid green";
        alertElement.style.display = "none";
    } else {
        inputElement.style.border = "2px solid red";
        alertElement.style.display = "block";
        alertElement.textContent = errorMessage;
    }
    updateButtonProgress();
}

function validatePasswordMatch() {
    const isValid =
        passwordInput.value === confirmPasswordInput.value &&
        passwordPattern.test(passwordInput.value);
    fieldValidity.confirmPassword = isValid;
    if (isValid) {
        confirmPasswordInput.style.border = "2px solid green";
        document.querySelector(".confirmPasswordDiv span").style.display = "none";
    } else {
        confirmPasswordInput.style.border = "2px solid red";
        document.querySelector(".confirmPasswordDiv span").style.display = "block";
    }
    updateButtonProgress();
}

firstNameInput.addEventListener("input", () =>
    validateField(firstNameInput, namePattern, document.querySelector(".firstNameDiv span"), errorMessages.firstName, "firstName")
);
lastNameInput.addEventListener("input", () =>
    validateField(lastNameInput, namePattern, document.querySelector(".lastNameDiv span"), errorMessages.lastName, "lastName")
);
emailInput.addEventListener("input", () =>
    validateField(emailInput, emailPattern, document.querySelector(".emailDiv span"), errorMessages.email, "email")
);
phoneInput.addEventListener("input", () =>
    validateField(phoneInput, mobilePattern, document.querySelector(".phoneDiv span"), errorMessages.phone, "phone")
);
bioInput.addEventListener("input", () =>
    validateField(bioInput, bioPattern, document.querySelector(".bioDiv span"), errorMessages.bio, "bio")
);
passwordInput.addEventListener("input", () => {
    validateField(passwordInput, passwordPattern, document.querySelector(".passwordDiv span"), errorMessages.password, "password");
    validatePasswordMatch();
});
confirmPasswordInput.addEventListener("input", validatePasswordMatch);
