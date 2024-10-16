console.log("We are in create movie screening js file");

document.addEventListener("DOMContentLoaded", createFormListener);

let createMovieScreening;

function createFormListener() {
    createMovieScreening = document.getElementById("movieScreening");
    createMovieScreening.addEventListener("submit", handleCreateFormSubmit)
}

async function handleCreateFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;

    try {
        const movieScreening = {
            movieScreeningTitle: form.movieScreeningTitle.value,
            is3D: form.is3D.checked,
            movieDate: form.movieDate.value,
            movieTime: form.movieTime.value,
            moviePrice: form.moviePrice.value
        };
        console.log("Constructed a movie screening", movieScreening);

        const responseData = await postFormdataAsJason(url, movieScreening)
    } catch (error) {
        alert(error.message);
        console.error(error);
    }
}

async function postFormdataAsJason(url, movieScreening) {
    const formDataJasonString = JSON.stringify(movieScreening);
    console.log(formDataJasonString);

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: formDataJasonString
    };

    const response = await fetch(url, fetchOptions);

    console.log("Response status: ", response.status);
}