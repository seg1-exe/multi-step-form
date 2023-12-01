/*SELECTORS OF CONTAINERS*/
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');
const step4 = document.getElementById('step-4');
const step5 = document.getElementById('step-5');

/* SELECTORS OF SIDEBAR ITEMS */
const step1sidebar = document.querySelector('.sidebar-element-1');
const step2sidebar = document.querySelector('.sidebar-element-2');
const step3sidebar = document.querySelector('.sidebar-element-3');
const step4sidebar = document.querySelector('.sidebar-element-4');

/*SELECTORS OF BUTTONS*/
const step1next = document.getElementById('step-1-next');
const step2next = document.getElementById('step-2-next');
const step3next = document.getElementById('step-3-next');
const step4confirm = document.getElementById('step-4-confirm');

const step2back = document.getElementById('step-2-goback');
const step3back = document.getElementById('step-3-goback');
const step4back = document.getElementById('step-4-goback');

/* NEXT BUTTONS */
step2next.addEventListener('click', function() {
    step2.classList.remove('step-container-active');
    step2.classList.add('hidden');
    step2sidebar.classList.remove('sidebar-element-number-active');
    step3sidebar.classList.add('sidebar-element-number-active');
    step3.classList.remove('hidden');
    step3.classList.add('step-container-active');
});

step3next.addEventListener('click', function() {
    step3.classList.remove('step-container-active');
    step3.classList.add('hidden');
    step3sidebar.classList.remove('sidebar-element-number-active');
    step4sidebar.classList.add('sidebar-element-number-active');
    step4.classList.remove('hidden');
    step4.classList.add('step-container-active');
});

step4confirm.addEventListener('click', function() {
    step4.classList.remove('step-container-active');
    step4.classList.add('hidden');
    step5.classList.remove('hidden');
    step5.classList.add('step-container-active');
});

/* BACK BUTTONS */
step2back.addEventListener('click', function() {
    step2.classList.remove('step-container-active');
    step2.classList.add('hidden');
    step1.classList.remove('hidden');
    step1.classList.add('step-container-active');
});

step3back.addEventListener('click', function() {
    step3.classList.remove('step-container-active');
    step3.classList.add('hidden');
    step2.classList.remove('hidden');
    step2.classList.add('step-container-active');
}); 

step4back.addEventListener('click', function() {
    step4.classList.remove('step-container-active');
    step4.classList.add('hidden');
    step3.classList.remove('hidden');
    step3.classList.add('step-container-active');
});


/* STEP 1 */
document.getElementById('step-1-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting

    /* SELECTORS OF INPUTS */
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    /* SELECTORS OF CONTAINERS */
    const nameContainer = document.getElementById('step-1-name');
    const emailContainer = document.getElementById('step-1-email');
    const phoneContainer = document.getElementById('step-1-phone');

    /* SELECTORS OF ERRORS */
    const nameError = document.querySelector('.input-name-error');
    const emailError = document.querySelector('.input-email-error');
    const phoneError = document.querySelector('.input-phone-error');

    if (name.trim() === '' ){
        /* if the name is empty */
        nameContainer.classList.add('step-1-input-error');
        nameError.classList.remove('hidden');
    } else {
        /* if the name is not empty */
        nameContainer.classList.remove('step-1-input-error');
        nameError.classList.add('hidden');
        if (email.trim() === '' ){
            /* if the email is empty */
            emailContainer.classList.add('step-1-input-error');
            emailError.classList.remove('hidden');
        } else {
            /* if the email is not empty */
            emailContainer.classList.remove('step-1-input-error');
            emailError.classList.add('hidden');
            if (phone.trim() === '' ){
                /* if the phone is empty */
                phoneContainer.classList.add('step-1-input-error');
                phoneError.classList.remove('hidden');
            } else {
                /* if the phone is not empty */
                /* move to the next step */
                phoneContainer.classList.remove('step-1-input-error');
                phoneError.classList.add('hidden');
                step1.classList.remove('step-container-active');
                step1.classList.add('hidden');
                step1sidebar.classList.remove('sidebar-element-number-active');
                step2sidebar.classList.add('sidebar-element-number-active');
                step2.classList.remove('hidden');
                step2.classList.add('step-container-active');
            }
        }
    }
});

/* STEP 2 */

/* SELECTORS OF INPUTS */
const planArcade = document.getElementById('step-2-arcade');
const planAdvanced = document.getElementById('step-2-advanced');
const planPro = document.getElementById('step-2-pro');

/* SELECTORS OF THE PLAN PRICES */
const planMonth = document.querySelectorAll('.plan-price-month');
const planYear = document.querySelectorAll('.plan-price-year');

/* SELECTORS OF THE TOGGLE BUTTONS */
const toggleMonth = document.getElementById('toggle-monthly');
const toggleYear = document.getElementById('toggle-yearly');

/* SELECTORS OF THE SWITCH BUTTON */
const switchPlan = document.getElementById('step-2-switch');

let planPeriod = 'monthly';
let planType = 'arcade';

switchPlan.addEventListener('change', function() {
    if (this.checked) {
        /* YEARLY */
        planMonth.forEach(plan => {
            plan.classList.add('hidden');
            toggleMonth.classList.remove('step-2-toggle-active');
        });
        planYear.forEach(plan => {
            plan.classList.remove('hidden');
            toggleYear.classList.add('step-2-toggle-active');
        });
        planPeriod = 'yearly';
    } else {
        /* MONTHLY */
        planMonth.forEach(plan => {
            plan.classList.remove('hidden');
            toggleMonth.classList.add('step-2-toggle-active');
        });
        planYear.forEach(plan => {
            plan.classList.add('hidden');
            toggleYear.classList.remove('step-2-toggle-active');
        });
        planPeriod = 'monthly';
    }
});


/* Plan arcade */
planArcade.addEventListener('click', function() {
    planArcade.classList.add('step-2-plan-active');
    planAdvanced.classList.remove('step-2-plan-active');
    planPro.classList.remove('step-2-plan-active');
    planType = 'arcade';
});

/* Plan advanced */
planAdvanced.addEventListener('click', function() {
    planArcade.classList.remove('step-2-plan-active');
    planAdvanced.classList.add('step-2-plan-active');
    planPro.classList.remove('step-2-plan-active');
    planType = 'advanced';
});

/* Plan pro */
planPro.addEventListener('click', function() {
    planArcade.classList.remove('step-2-plan-active');
    planAdvanced.classList.remove('step-2-plan-active');
    planPro.classList.add('step-2-plan-active');
    planType = 'pro';
});

step2next.addEventListener('click', function() {
    console.log(planPeriod);
    console.log(planType);
});



/* STEP 3 */

/* SELECTORS OF CONTAINERS */
const onlineServiceContainer = document.getElementById('online-service-container');
const largerStorageContainer = document.getElementById('larger-storage-container');
const customProfileContainer = document.getElementById('custom-profile-container');

/* SELECTORS OF INPUTS */
const onlineService = document.getElementById('online-service');
const largerStorage = document.getElementById('larger-storage');
const customProfile = document.getElementById('custom-profile');

let onlineServiceActive = false;
let largerStorageActive = false;
let customProfileActive = false;

if (planPeriod === 'monthly') {
    planMonth.forEach(plan => {
        plan.classList.remove('hidden');
    });
} else {
    planYear.forEach(plan => {
        plan.classList.remove('hidden');
    });
};

/* Online service */
onlineService.addEventListener('click', function() {
    if (!this.checked) {
        onlineServiceContainer.classList.remove('addon-active');
        onlineServiceActive = false;
    } else {
        onlineServiceContainer.classList.add('addon-active');
        onlineServiceActive = true;
    }
});

/* Larger storage */
largerStorage.addEventListener('click', function() {
    if (!this.checked) {
        largerStorageContainer.classList.remove('addon-active');
        largerStorageActive = false;
    } else {
        largerStorageContainer.classList.add('addon-active');
        largerStorageActive = true;
    }
});

/* Custom profile */
customProfile.addEventListener('click', function() {
    if (!this.checked) {
        customProfileContainer.classList.remove('addon-active');
        customProfileActive = false;
    } else {
        customProfileContainer.classList.add('addon-active');
        customProfileActive = true;
    }
});

step3next.addEventListener('click', function() {
    console.log(planPeriod);
    console.log(planType);
    console.log(onlineServiceActive);
    console.log(largerStorageActive);
    console.log(customProfileActive);
});

/* STEP 4 */
const summaryPlan = document.getElementById('summary-plan');
const summaryPeriod = document.getElementById('summary-my');
const summaryPrice = document.getElementById('summary-price');

const summaryChange = document.getElementById('summary-change');

const summaryOnlineService = document.querySelector('.summary-online-service');
const summaryLargerStorage = document.querySelector('.summary-larger-storage');
const summaryCustomProfile = document.querySelector('.summary-custom-profile');

const onlineServicePriceMonth = document.querySelector('#online-service-price-month');
const onlineServicePriceYear = document.querySelector('#online-service-price-year');

const largerStoragePriceMonth = document.querySelector('#larger-storage-price-month');
const largerStoragePriceYear = document.querySelector('#larger-storage-price-year');

const customProfilePriceMonth = document.getElementById('custom-profile-price-month');
const customProfilePriceYear = document.getElementById('custom-profile-price-year');

const summaryTotalMy = document.getElementById('summary-total-my');
const summaryTotalPrice = document.getElementById('summary-total-price');

let summaryTotal = 0;

step3next.addEventListener('click', function() {
    if (planPeriod === 'monthly') {
        summaryPeriod.textContent = '(Monthly)';
        if (planType === 'arcade') {
            summaryPlan.textContent = 'Arcade';
            summaryPrice.textContent = '$9/mo';
            summaryTotal = 9;
        } else if (planType === 'advanced') {
            summaryPlan.textContent = 'Advanced';
            summaryPrice.textContent = '$12/mo';
            summaryTotal = 12;
        } else {
            summaryPlan.textContent = 'Pro';
            summaryPrice.textContent = '$15/mo';
            summaryTotal = 15;
        }
    } else {
        summaryPeriod.textContent = '(Yearly)';
        if (planType === 'arcade') {
            summaryPlan.textContent = 'Arcade';
            summaryPrice.textContent = '$90/year';
            summaryTotal = 90;
        } else if (planType === 'advanced') {
            summaryPlan.textContent = 'Advanced';
            summaryPrice.textContent = '$120/year';
            summaryTotal = 120;
        } else {
            summaryPlan.textContent = 'Pro';
            summaryPrice.textContent = '$150/year';
            summaryTotal = 150;
        }
    }
    
    if (onlineServiceActive == true) {
        summaryOnlineService.classList.remove('hidden');
        if (planPeriod === 'monthly') {
            onlineServicePriceMonth.classList.remove('hidden');
            onlineServicePriceYear.classList.add('hidden');
            summaryTotal += 1;
        } else {
            onlineServicePriceMonth.classList.add('hidden');
            onlineServicePriceYear.classList.remove('hidden');
            summaryTotal += 10;
        }
    } else if (onlineServiceActive == false) {
        summaryOnlineService.classList.add('hidden');
    }
    
    if (largerStorageActive == true) {
        summaryLargerStorage.classList.remove('hidden');
        if (planPeriod === 'monthly') {
            largerStoragePriceMonth.classList.remove('hidden');
            largerStoragePriceYear.classList.add('hidden');
            summaryTotal += 2;
        } else {
            largerStoragePriceMonth.classList.add('hidden');
            largerStoragePriceYear.classList.remove('hidden');
            summaryTotal += 20;
        }
    } else if (largerStorageActive == false) {
        summaryLargerStorage.classList.add('hidden');
    }
    
    if (customProfileActive == true) {
        summaryCustomProfile.classList.remove('hidden');
        if (planPeriod === 'monthly') {
            customProfilePriceMonth.classList.remove('hidden');
            customProfilePriceYear.classList.add('hidden');
            summaryTotal += 2;
        } else {
            customProfilePriceMonth.classList.add('hidden');
            customProfilePriceYear.classList.remove('hidden');
            summaryTotal += 20;
        }
    } else if (customProfileActive == false) {
        summaryCustomProfile.classList.add('hidden');
    }
    
    if (planPeriod === 'monthly') {
        summaryTotalMy.textContent = 'Total (per month)';
        summaryTotalPrice.textContent = '$' + summaryTotal + '/mo';
    } else {
        summaryTotalMy.textContent = 'Total (per year)';
        summaryTotalPrice.textContent = '$' + summaryTotal + '/year';
    }
});

