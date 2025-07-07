const cardInput = document.getElementById('cardNumber');
const cardIcons = document.querySelectorAll('.card_icon');
const validationMessage = document.querySelector('.validation_message');
const cardType = document.querySelector('.card_type');
const displayCardNumber = document.getElementById('displayCardNumber');
const cardBrandImage = document.getElementById('cardBrandImage');

let currentBrand = '';

function creditCardValidator(creditCardValue) {
    const regexes = {
        jcb: /^(?:2131|1800|35)[0-9]{0,}$/,
        amex: /^3[47][0-9]{0,}$/,
        diners: /^3(?:0[0-59]{1}|[689])[0-9]{0,}$/,
        visa: /^4[0-9]{0,}$/,
        mastercard: /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$/,
        maestro: /^(5[06789]|6)[0-9]{0,}$/,
        discover: /^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$/,
    };

    creditCardValue = creditCardValue.replace(/\D/g, ''); // Remove non-digit characters

    return Object.keys(regexes).find(brand => creditCardValue.match(regexes[brand])) || "unknown";
}

cardInput.addEventListener('input', (e) => {
    // Get raw value without spaces for processing
    const rawValue = cardInput.value.replace(/\s/g, '');
    const brand = creditCardValidator(rawValue);

    let formattedValue = '';

    // Format with spaces based on card type
    if (brand === "amex") {
        // AMEX format: 4-6-5
        formattedValue = rawValue.replace(/^(\d{0,4})(\d{0,6})(\d{0,5}).*/, '$1 $2 $3').trim();
        maskedNumbers = `${rawValue.substr(0, 4).replace(/[0-9]/g, '*')} ${rawValue.substr(4, 6).replace(/[0-9]/g, '*')} ${rawValue.substr(10, 5)}`;
        cardInput.setAttribute("maxlength", "17"); // 15 digits + 2 spaces
    } else {
        // Standard format: 4-4-4-4
        formattedValue = rawValue.replace(/(\d{4})(?=\d)/g, '$1 ').substr(0, 19); // 16 digits + 3 spaces
        maskedNumbers = `${rawValue.substr(0, 4).replace(/[0-9]/g, '*')} ${rawValue.substr(4, 4).replace(/[0-9]/g, '*')} ${rawValue.substr(8, 4).replace(/[0-9]/g, '*')} ${rawValue.substr(12, 4)}`;
        cardInput.setAttribute("maxlength", "19"); // 16 digits + 3 spaces
    }

    // Update the input value with proper formatting
    cardInput.value = formattedValue;
    displayCardNumber.innerText = formattedValue;

    if (rawValue.length > 0) {
        const isValid = brand !== 'unknown';
        const isComplete = cardInput.value.length === Number(cardInput.getAttribute("maxlength"));

        if (isComplete) {
            validationMessage.textContent = isValid ? 'Valid card number' : 'Invalid card number';
            validationMessage.className = `validation_message ${isValid ? 'success' : 'error'}`;
            cardInput.classList.toggle('valid', isValid);
            cardInput.classList.toggle('invalid', !isValid);
        } else {
            validationMessage.textContent = 'Keep typing...';
            validationMessage.className = 'validation_message';
            cardInput.classList.remove('valid', 'invalid');
        }
    } else {
        validationMessage.textContent = '';
        validationMessage.className = 'validation_message';
        cardInput.classList.remove('valid', 'invalid');
        displayCardNumber.innerHTML = '**** **** **** ****';
    }

    if (currentBrand !== brand) {
        cardBrandImage.src = `assets/svgs/${brand}.svg`;
        currentBrand = brand;

        const activebrandIcon = document.querySelector('.card_icon.active');
        if (activebrandIcon) {
            activebrandIcon.classList.remove('active');
        }

        const brandIcon = document.querySelector(`.card_icon[data-brand="${brand}"]`);
        if (brandIcon) {
            brandIcon.classList.add('active')
        }
    }
});