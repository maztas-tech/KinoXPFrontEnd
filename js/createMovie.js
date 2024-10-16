console.log("create movie js file")

document.addEventListener("DOMContentLoaded", createFormEventListener)

let createMovie

function createFormEventListener() {
    createMovie = document.getElementById("movie")
    createMovie.addEventListener("submit", handleFormSubmit)
}

async function handleFormSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget;
    const url = form.action;
    try {
        const formData = new FormData(form);
        const responseData = await postFormdataAsJason(url,formData);
    } catch (error) {
        alert(error.message)
        console.error(error)
    }
}

async function postFormdataAsJason(url, formData) {
    const plainFormData = Object.fromEntries(formData.entries())
    const formDataJasonString = JSON.stringify(plainFormData)
    console.log(formDataJasonString)

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: formDataJasonString
    }
    const reponse = await fetch(url, fetchOptions)
    if (!reponse.ok) {
        const errorMessage = await reponse.text()
        console.error(errorMessage)
    } else {
        console.log(await reponse.json())
    }
}
