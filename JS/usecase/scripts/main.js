class Customer {

    constructor(name, email, contact, accountType) {
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.accountType = accountType;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getContact() {
        return this.contact;
    }

    getAccountType() {
        return this.accountType;
    }
}

// ----------------------------------------------------------
// ------------ Validations----------------------------------
// ----------------------------------------------------------

function validateName(value) {
    let pattern = "^[A-Za-z]+$";
    let errorSpan = document.getElementById("error-name");
    if (value.search(pattern) == -1) {
        errorSpan.innerText = "Enter Only Alphabets"
        return false;
    }
    else {
        errorSpan.innerText = "";
        return true;
    }

}
function validateContact(value) {
    let pattern = "^[7-9]{1}[0-9]{9}$";
    let errorSpan = document.getElementById("error-contact");
    if (value.search(pattern) == -1) {
        errorSpan.innerText = "Invalid Contact Number"
        return false;
    }
    else {
        errorSpan.innerText = "";
        return true;
    }

}
function validateAccountType(value) {

    let errorSpan = document.getElementById("error-account");
    if (value == "") {
        errorSpan.innerText = "Select an Account Type"
        return false;
    }
    else {
        errorSpan.innerText = "";
        return true;
    }

}

function addCustomer() {
    console.log("Called")
    //Creating the Customer Object from the values we get from form
    let name = document.getElementById("customer-name").value;
    let email = document.getElementById("customer-email").value;
    let contact = document.getElementById("customer-contact").value;
    let selectElement = document.getElementById("customer-account-type").value;
    // let accountType = selectElement.options[selectElement.selectedIndex].value;
    let accountType = "Savings"

    let customer = new Customer(name, email, contact, accountType);

    addCustomerToTable(customer)

}

function addCustomerToTable(customer) {
    //Adding the customer details to the table body

    let tableBody = document.querySelector("tbody");

    if ((validateName(customer.getName()))
        && (validateContact(customer.getContact()))
        && (validateAccountType(customer.getAccountType()))) {

        let tableRow = document.createElement("tr");

        let tableRowData = `
                <td>${customer.getName()}</td>
                <td>${customer.getEmail()}</td>
                <td>${customer.getContact()}</td>
                <td>${customer.getAccountType()}</td>
                
            `
        tableRow.innerHTML = tableRowData;

        tableBody.appendChild(tableRow);
    }
    else {
        alert("Please fill the form properly")
    }
}