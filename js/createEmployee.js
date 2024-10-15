console.log("jeg er i create js")

document.addEventListener("DOMContentLoaded", createFormEventListener)

let createEmployee

function createFormEventListener() {
    createEmployee = document.getElementById("employee")
    createEmployee.addEventListener("submit", handleFormSubmit)
}

async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;

    try {
        // Manually constructing the employee object
        const employee = {
            employeeName: form.employeeName.value,
            employeeUsername: form.employeeUsername.value,
            employeePassword: form.employeePassword.value,
            // Parse the role object from the dropdown
            role: JSON.parse(form.role.value)
        };

        console.log("Constructed employee: ", employee)
        // Post the constructed object as JSON
        const responseData = await postFormdataAsJason(url, employee);

    } catch (error) {
        alert(error.message);
        console.error(error);
    }
}

async function postFormdataAsJason(url, employee) {
    const formDataJasonString = JSON.stringify(employee);
    console.log(formDataJasonString);

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: formDataJasonString
    };

    const response = await fetch(url, fetchOptions);

    console.log("Response status: ", response.status)

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error(errorMessage);
    } else {
        console.log(await response.json());
    }
}

